# -*- coding: utf-8 -*-
"""
Medical AI in Practice — version SIMPLIFIÉE (parcours pédagogique)
ICSMAI 2027 · Saïdia

Une idée par écran, un seul réglage par page, un mini-quiz à chaque étape.
Le parcours suit les 4 blocs de l'atelier :

    Bloc 1 · Comprendre   : 1. Les données de santé      2. Apprendre ≠ apprendre par cœur
    Bloc 2 · Construire   : 3. Entraîner puis tester      4. À vous de jouer dans Orange
    Bloc 3 · Interpréter  : 5. Le seuil de décision       6. La VPP dépend de la maladie
                            7. Le risque d'un patient
    Bloc 4 · Décider      : 8. Un risque juste, ailleurs aussi   9. Avant d'utiliser une IA
    Bilan                 : les idées à retenir + votre fiche

Les patients sont SYNTHÉTIQUES et identiques à ceux de la version complète (app.py) et du
kit Orange (graine 42) : les deux applications et Orange travaillent sur les mêmes données.

Lancement :  pip install -r requirements.txt   puis   streamlit run app_simple.py
"""

from __future__ import annotations

import io
import os
import zipfile

import numpy as np
import pandas as pd
import plotly.graph_objects as go
import streamlit as st
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeClassifier

st.set_page_config(page_title="IA médicale — parcours simplifié", page_icon="🩺", layout="wide")

# =====================================================================================
# 1. STYLE ET PETITS COMPOSANTS
# =====================================================================================

C = {"teal": "#0E7C86", "teal_dark": "#0B5563", "red": "#D64545", "orange": "#E89B2D", "green": "#2E9E5B",
     "blue": "#2B6CB0", "purple": "#7B5EA7", "grey": "#6B7C85", "light": "#E7F3F4", "ink": "#1B2A35"}
MODEL_COLORS = {"Régression logistique": C["blue"], "Arbre de décision": C["orange"], "Forêt aléatoire": C["green"]}

st.markdown(f"""
<style>
.block-container {{padding-top: 1.5rem; max-width: 1100px;}}
html, body, [class*="css"] {{font-size: 17px;}}
.step {{background: linear-gradient(135deg, {C['teal_dark']}, {C['teal']}); color: #fff; padding: 20px 26px;
       border-radius: 16px; margin-bottom: 14px;}}
.step .tag {{font-size: .85rem; opacity: .9; letter-spacing: .03em;}}
.step h1 {{color: #fff; font-size: 1.9rem; margin: 4px 0 6px;}}
.step p {{color: #E3F3F2; margin: 0; font-size: 1.08rem;}}
.card {{background: #fff; border: 1px solid #DCE8EA; border-left: 6px solid var(--a, {C['teal']});
       border-radius: 14px; padding: 14px 16px; height: 100%;}}
.card h4 {{margin: 0 0 6px; color: #12343B;}}
.card p {{margin: 0; color: {C['ink']};}}
.big {{font-size: 2.4rem; font-weight: 700; line-height: 1.1;}}
.small {{color: {C['grey']}; font-size: .9rem;}}
</style>""", unsafe_allow_html=True)


def show_fig(fig: go.Figure, key: str, height: int = 380) -> None:
    fig.update_layout(template="plotly_white", height=height, margin=dict(l=10, r=10, t=50, b=10),
                      font=dict(size=14, color=C["ink"]), separators=", ")
    try:
        st.plotly_chart(fig, width="stretch", key=key, config={"displaylogo": False})
    except Exception:
        st.plotly_chart(fig, use_container_width=True, key=key, config={"displaylogo": False})


def step_header(num: int | str, bloc: str, title: str, goal: str) -> None:
    tag = f"Étape {num} sur 9 · {bloc}" if isinstance(num, int) else bloc
    st.markdown(f'<div class="step"><div class="tag">{tag}</div><h1>{title}</h1><p>🎯 {goal}</p></div>',
                unsafe_allow_html=True)
    if isinstance(num, int):
        st.progress(num / 9)


def big_number(col, label: str, value: str, color: str = C["ink"], note: str = "") -> None:
    col.markdown(f'<div class="card" style="--a:{color}"><p class="small">{label}</p>'
                 f'<div class="big" style="color:{color}">{value}</div><p class="small">{note}</p></div>',
                 unsafe_allow_html=True)


def remember(text: str) -> None:
    st.success(f"💡 **À retenir** — {text}")


def words(items: dict[str, str]) -> None:
    """Petit glossaire de la page, replié par défaut."""
    with st.expander("📖 Les mots de cette étape"):
        for k, v in items.items():
            st.markdown(f"**{k}** : {v}")


def quiz(key: str, question: str, options: list[str], answer: int, why: str) -> None:
    """Question à choix unique avec correction immédiate."""
    st.markdown("#### ✋ À vous")
    with st.container(border=True):
        choice = st.radio(question, options, index=None, key=f"q_{key}")
        if choice is not None:
            ok = options.index(choice) == answer
            st.session_state.setdefault("quiz", {})[key] = ok
            (st.success if ok else st.error)(("✅ Bonne réponse. " if ok else f"❌ Pas tout à fait. La bonne réponse : "
                                              f"« {options[answer]} ». ") + why)


def pct(x: float, nd: int = 0) -> str:
    return "—" if x is None or np.isnan(x) else f"{100 * x:.{nd}f} %".replace(".", ",")


def go_to(page: str) -> None:
    st.session_state["_goto"] = page


def nav(prev: str | None, nxt: str | None, next_label: str = "Étape suivante") -> None:
    st.markdown("---")
    c1, _, c3 = st.columns([1, 2, 1])
    if prev:
        c1.button("← Étape précédente", on_click=go_to, args=(prev,), width="stretch")
    if nxt:
        c3.button(f"{next_label} →", on_click=go_to, args=(nxt,), type="primary", width="stretch")


# =====================================================================================
# 2. DONNÉES SYNTHÉTIQUES (identiques à la version complète, graine 42)
# =====================================================================================

FEATURES = ["age", "sexe", "imc", "pas", "fc", "cholesterol", "hdl", "glycemie", "creatinine", "tabac", "diabete"]
TARGET = "evenement_cv"
BINARY = ["sexe", "tabac", "diabete"]
LABELS = {"age": "Âge", "sexe": "Sexe masculin", "imc": "IMC", "pas": "Tension systolique", "fc": "Fréquence cardiaque",
          "cholesterol": "Cholestérol", "hdl": "HDL (« bon » cholestérol)", "glycemie": "Glycémie",
          "creatinine": "Créatinine", "tabac": "Tabac", "diabete": "Diabète"}
SEED, N, PREV, TEST = 42, 1500, 0.20, 0.25


def sigmoid(x):
    return 1.0 / (1.0 + np.exp(-x))


def true_logit(df: pd.DataFrame, pas_col: str = "pas") -> np.ndarray:
    age, pas = df["age"].to_numpy(float), df[pas_col].to_numpy(float)
    return (0.065 * (age - 55) + 0.0012 * (age - 55) ** 2 + 0.45 * df["sexe"].to_numpy(float)
            + 0.020 * (pas - 130) + 0.60 * (pas >= 160) + 0.85 * (df["cholesterol"].to_numpy(float) - 2.0)
            - 3.00 * (df["hdl"].to_numpy(float) - 0.50) + 0.85 * df["tabac"].to_numpy(float)
            + 0.70 * df["diabete"].to_numpy(float) + 0.40 * df["tabac"].to_numpy(float) * df["diabete"].to_numpy(float)
            + 0.030 * (df["imc"].to_numpy(float) - 27) + 0.015 * (df["fc"].to_numpy(float) - 72)
            + 0.060 * (df["creatinine"].to_numpy(float) - 9))


def solve_intercept(lp: np.ndarray, prevalence: float) -> float:
    lo, hi = -20.0, 20.0
    for _ in range(80):
        mid = (lo + hi) / 2
        lo, hi = (lo, mid) if sigmoid(lp + mid).mean() > prevalence else (mid, hi)
    return (lo + hi) / 2


@st.cache_data(show_spinner=False)
def generate_cohort(n, prevalence, seed, age_mean=55.0, pas_bias=0.0, intercept=None):
    """Même générateur que app.py (mêmes patients pour une même graine)."""
    rng = np.random.default_rng(seed)
    age = np.clip(rng.normal(age_mean, 12, n), 25, 90)
    sexe = rng.binomial(1, 0.5, n)
    imc = np.clip(rng.normal(27, 4.5, n), 16, 48)
    pas_true = np.clip(122 + 0.65 * (age - 50) + 1.0 * (imc - 27) + 5 * sexe + rng.normal(0, 17, n), 90, 220)
    tabac = rng.binomial(1, sigmoid(-1.3 + 0.6 * sexe - 0.02 * (age - 55)))
    dysgly = rng.random(n) < sigmoid(-2.4 + 0.12 * (imc - 27) + 0.04 * (age - 55))
    glyc = np.clip(0.92 + 0.010 * (imc - 27) + 0.002 * (age - 55) + rng.normal(0, 0.09, n)
                   + dysgly * rng.gamma(3.0, 0.15, n), 0.60, 3.00)
    chol = np.clip(rng.normal(2.0 + 0.004 * (age - 55), 0.38), 1.2, 3.6)
    hdl = np.clip(rng.normal(0.55 - 0.08 * sexe - 0.004 * (imc - 27), 0.12), 0.20, 1.10)
    fc = np.clip(rng.normal(72 + 4 * tabac, 10), 45, 130)
    creat = np.clip(rng.normal(8 + 2 * sexe + 0.05 * (age - 55), 1.8), 4, 30)
    df = pd.DataFrame({"age": np.round(age).astype(int), "sexe": sexe, "imc": np.round(imc, 1),
                       "pas": np.round(pas_true + pas_bias).astype(int), "fc": np.round(fc).astype(int),
                       "cholesterol": np.round(chol, 2), "hdl": np.round(hdl, 2), "glycemie": np.round(glyc, 2),
                       "creatinine": np.round(creat, 1), "tabac": tabac})
    df["diabete"] = (df["glycemie"] >= 1.26).astype(int)
    df["_pas_vraie"] = np.round(pas_true).astype(int)
    lp = true_logit(df, pas_col="_pas_vraie")
    if intercept is None:
        intercept = solve_intercept(lp, prevalence)
    p = sigmoid(lp + intercept)
    df[TARGET] = rng.binomial(1, p)
    df["_risque_vrai"] = p
    return df, float(intercept)


def make_models(depth: int = 4) -> dict:
    return {
        "Régression logistique": Pipeline([("s", StandardScaler()), ("m", LogisticRegression(max_iter=5000))]),
        "Arbre de décision": DecisionTreeClassifier(max_depth=depth, min_samples_leaf=10, random_state=0),
        "Forêt aléatoire": RandomForestClassifier(n_estimators=200, max_depth=8, min_samples_leaf=10,
                                                  random_state=0, n_jobs=-1),
    }


@st.cache_resource(show_spinner="⏳ Préparation des patients et des modèles…")
def lab() -> dict:
    df, intercept = generate_cohort(N, PREV, SEED)
    X, y = df[FEATURES], df[TARGET]
    X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=TEST, stratify=y, random_state=SEED)
    models, p_tr, p_te = make_models(), {}, {}
    for name, m in models.items():
        m.fit(X_tr, y_tr)
        p_tr[name], p_te[name] = m.predict_proba(X_tr)[:, 1], m.predict_proba(X_te)[:, 1]
    df_b, _ = generate_cohort(3000, None, SEED + 2027, 63.0, -10.0, intercept)   # « hôpital B »
    return dict(df=df, intercept=intercept, X_tr=X_tr, X_te=X_te, y_tr=y_tr.to_numpy(), y_te=y_te.to_numpy(),
                models=models, p_tr=p_tr, p_te=p_te, df_b=df_b)


def counts(y: np.ndarray, p: np.ndarray, thr: float) -> dict:
    pred = p >= thr
    tp, fn = int((pred & (y == 1)).sum()), int((~pred & (y == 1)).sum())
    fp, tn = int((pred & (y == 0)).sum()), int((~pred & (y == 0)).sum())
    return dict(tp=tp, fn=fn, fp=fp, tn=tn, se=tp / max(tp + fn, 1), sp=tn / max(tn + fp, 1),
                ppv=tp / (tp + fp) if tp + fp else float("nan"))


def hundred_patients(c: dict, title: str = "Sur 100 patients") -> go.Figure:
    """Grille de 100 patients : la façon la plus parlante de montrer les erreurs."""
    n = c["tp"] + c["fn"] + c["fp"] + c["tn"]
    raw = np.array([c["tp"], c["fn"], c["fp"], c["tn"]]) * 100 / n
    cnt = np.floor(raw).astype(int)
    for i in np.argsort(-(raw - cnt))[: 100 - cnt.sum()]:
        cnt[i] += 1
    cats = [("Malade détecté", C["green"], "circle"), ("Malade RATÉ", C["red"], "x"),
            ("Fausse alerte", C["orange"], "circle"), ("Sain rassuré", "#C9D9DD", "circle")]
    labels = sum([[i] * k for i, k in enumerate(cnt)], [])
    fig = go.Figure()
    for i, (lab_, col, sym) in enumerate(cats):
        pos = [k for k, l in enumerate(labels) if l == i]
        fig.add_trace(go.Scatter(x=[k % 10 for k in pos], y=[k // 10 for k in pos], mode="markers",
                                 name=f"{lab_} : {cnt[i]}", hoverinfo="name",
                                 marker=dict(size=24, color=col, symbol=sym, line=dict(width=1, color="white"))))
    fig.update_xaxes(visible=False, range=[-0.7, 9.7])
    fig.update_yaxes(visible=False, autorange="reversed", scaleanchor="x")
    fig.update_layout(title=title, legend=dict(orientation="h", y=-0.03), plot_bgcolor="white")
    return fig


# =====================================================================================
# 3. LES PAGES DU PARCOURS
# =====================================================================================

def page_home() -> None:
    st.markdown(f'<div class="step"><div class="tag">ICSMAI 2027 · Saïdia · atelier pratique</div>'
                f'<h1>🩺 L\'IA médicale, pas à pas</h1>'
                f'<p>Un parcours en 9 étapes courtes pour comprendre comment une IA prédit un risque, '
                f'et comment juger si on peut lui faire confiance.</p></div>', unsafe_allow_html=True)
    st.markdown("#### Comment ça marche ?")
    c = st.columns(3)
    for col, (icon, t, txt, a) in zip(c, [
        ("👀", "Une idée par étape", "Chaque écran explique une seule notion, avec un seul réglage à manipuler.", C["teal"]),
        ("✋", "Une question à la fin", "Un mini-quiz vérifie que l'idée est comprise, avec la correction.", C["orange"]),
        ("➡️", "On avance ensemble", "Le bouton « Étape suivante » en bas de page suit le rythme de l'atelier.", C["purple"])]):
        col.markdown(f'<div class="card" style="--a:{a}"><h4>{icon} {t}</h4><p>{txt}</p></div>', unsafe_allow_html=True)

    st.markdown("#### Le parcours")
    blocks = [("Bloc 1 · Comprendre", "1. Les données de santé · 2. Apprendre, pas apprendre par cœur", C["teal"]),
              ("Bloc 2 · Construire", "3. Entraîner puis tester · 4. À vous de jouer dans Orange", C["orange"]),
              ("Bloc 3 · Interpréter", "5. Le seuil · 6. La VPP · 7. Le risque d'un patient", C["purple"]),
              ("Bloc 4 · Décider", "8. Un risque juste, ailleurs aussi · 9. Avant d'utiliser une IA", C["red"])]
    c = st.columns(4)
    for col, (t, txt, a) in zip(c, blocks):
        col.markdown(f'<div class="card" style="--a:{a}"><h4>{t}</h4><p>{txt}</p></div>', unsafe_allow_html=True)

    st.markdown("#### Nos patients")
    st.info("Nous suivons **1 500 patients imaginaires**. Pour chacun, nous connaissons 11 informations simples "
            "(âge, tension, cholestérol, tabac…) et nous savons s'il a eu un **accident cardiovasculaire** "
            "(infarctus, AVC). Environ **1 patient sur 5** en a eu un. Question : une IA peut-elle repérer à "
            "l'avance les patients à risque ?")
    st.warning("Les patients sont **simulés** : aucun vrai patient, aucune donnée personnelle. L'outil sert à apprendre, "
               "pas à soigner.")
    nav(None, "s1", "Commencer le parcours")


# --- Étape 1 -----------------------------------------------------------------------------
def page_s1() -> None:
    step_header(1, "Bloc 1 · Comprendre", "Les données de santé",
                "Reconnaître les grands types de données qu'une IA peut utiliser.")
    c = st.columns(4)
    for col, (icon, t, ex, a) in zip(c, [
        ("📋", "Tableaux", "Âge, tension, bilan sanguin… une ligne par patient.", C["teal"]),
        ("🩻", "Images", "Radio, scanner, IRM, lames d'anatomopathologie.", C["blue"]),
        ("💓", "Signaux", "ECG, EEG : une courbe qui évolue dans le temps.", C["red"]),
        ("🧬", "Génomique", "Séquences d'ADN, variants génétiques.", C["green"])]):
        col.markdown(f'<div class="card" style="--a:{a}"><h4>{icon} {t}</h4><p>{ex}</p></div>', unsafe_allow_html=True)

    st.markdown("#### Regardez deux exemples")
    kind = st.radio("Choisissez un type de données", ["📋 Un tableau de patients", "💓 Un ECG"], horizontal=True,
                    label_visibility="collapsed")
    if kind.startswith("📋"):
        df = lab()["df"]
        show = df[FEATURES + [TARGET]].head(8).rename(columns={**LABELS, TARGET: "Accident CV (1 = oui)"})
        st.dataframe(show, hide_index=True)
        st.caption("Chaque ligne est un patient, chaque colonne une information. C'est le format le plus courant "
                   "dans les études cliniques.")
    else:
        fs, t = 250, np.arange(0, 6, 1 / 250)
        sig = np.zeros_like(t)
        g = lambda a, mu, sd: a * np.exp(-((t - mu) ** 2) / (2 * sd ** 2))
        for b in np.arange(0.4, 6, 0.83):
            sig += g(0.13, b - 0.16, 0.022) + g(-0.12, b - 0.035, 0.009) + g(1.1, b, 0.011) + g(-0.28, b + 0.035, 0.011) \
                + g(0.32, b + 0.25, 0.045)
        sig += np.random.default_rng(1).normal(0, 0.02, t.size)
        fig = go.Figure(go.Scatter(x=t, y=sig, line=dict(color="#111", width=1.4), hoverinfo="skip"))
        fig.update_layout(plot_bgcolor="#FFF6F6", xaxis_title="Temps (secondes)", yaxis_title="mV",
                          title="ECG : 250 mesures par seconde")
        show_fig(fig, "ecg", 280)
        st.caption("Pour l'ordinateur, cet ECG est simplement une longue liste de nombres (250 par seconde).")
    words({"Donnée tabulaire": "un tableau, une ligne par patient, une colonne par information.",
           "Modèle": "une formule ou un ensemble de règles qui transforme les données d'un patient en prédiction."})
    remember("le type de données guide le choix de l'IA. Aujourd'hui nous travaillons sur des **tableaux**, le "
             "format le plus fréquent en recherche clinique.")
    quiz("s1", "Un enregistrement d'ECG est une donnée de type…",
         ["Tableau", "Image", "Signal", "Génomique"], 2,
         "L'ECG est un signal : une mesure qui varie dans le temps.")
    nav("home", "s2")


# --- Étape 2 -----------------------------------------------------------------------------
@st.cache_data(show_spinner=False)
def two_var_tree(depth: int) -> dict:
    L = lab()
    Xtr, Xte = L["X_tr"][["age", "pas"]].to_numpy(float), L["X_te"][["age", "pas"]].to_numpy(float)
    m = DecisionTreeClassifier(max_depth=depth, min_samples_leaf=1, random_state=0).fit(Xtr, L["y_tr"])
    xs, ys = np.linspace(25, 90, 90), np.linspace(90, 200, 90)
    gx, gy = np.meshgrid(xs, ys)
    z = m.predict_proba(np.c_[gx.ravel(), gy.ravel()])[:, 1].reshape(gx.shape)
    return dict(xs=xs, ys=ys, z=z, auc_tr=roc_auc_score(L["y_tr"], m.predict_proba(Xtr)[:, 1]),
                auc_te=roc_auc_score(L["y_te"], m.predict_proba(Xte)[:, 1]))


def page_s2() -> None:
    step_header(2, "Bloc 1 · Comprendre", "Apprendre, pas apprendre par cœur",
                "Voir qu'une IA trop compliquée « récite » ses exemples au lieu de comprendre.")
    st.markdown("L'IA regarde **l'âge** et la **tension** de patients connus, et trace des zones de risque. "
                "Faites varier sa **complexité** (le nombre de questions qu'elle a le droit de se poser).")
    depth = st.slider("Complexité de l'IA (nombre de questions successives)", 1, 15, 2)
    r = two_var_tree(depth)
    L = lab()
    fig = go.Figure(go.Contour(x=r["xs"], y=r["ys"], z=r["z"], zmin=0, zmax=1, showscale=False, opacity=0.85,
                               colorscale=[[0, "#E7F3F4"], [0.5, "#FCE7C8"], [1, "#E57373"]], line_width=0,
                               hoverinfo="skip"))
    Xte = L["X_te"]
    for cls, sym, col, name in [(0, "circle-open", "#2F4F5A", "Sans accident"), (1, "circle", C["red"], "Avec accident")]:
        m = L["y_te"] == cls
        fig.add_trace(go.Scatter(x=Xte["age"][m], y=Xte["pas"][m], mode="markers", name=name,
                                 marker=dict(symbol=sym, size=6, color=col, opacity=0.8)))
    fig.update_layout(title="Zones de risque (rouge = risque élevé) et nouveaux patients", xaxis_title="Âge (ans)",
                      yaxis_title="Tension systolique (mmHg)", legend=dict(orientation="h", y=-0.2))
    c1, c2 = st.columns([1.6, 1])
    with c1:
        show_fig(fig, "zones", 420)
    with c2:
        big_number(st, "Sur les patients CONNUS", f"{r['auc_tr']:.2f}".replace(".", ","), C["grey"],
                   "ceux qui ont servi à apprendre")
        st.write("")
        big_number(st, "Sur de NOUVEAUX patients", f"{r['auc_te']:.2f}".replace(".", ","), C["teal"],
                   "ce qui compte vraiment")
        st.caption("Note de 0,5 (hasard) à 1 (parfait).")
    if r["auc_tr"] - r["auc_te"] > 0.12:
        st.error("🎓 L'IA **récite** : excellente sur les patients qu'elle connaît, médiocre sur les nouveaux. "
                 "Ses zones sont morcelées : elle a appris le bruit. C'est le **sur-apprentissage**.")
    elif depth <= 1:
        st.warning("L'IA est trop simple : une seule question ne suffit pas à bien séparer les patients.")
    else:
        st.info("Bon équilibre : l'IA fait presque aussi bien sur les nouveaux patients que sur les anciens.")
    words({"Sur-apprentissage": "l'IA mémorise les exemples (et leurs hasards) au lieu d'en tirer une règle générale.",
           "AUC (note de 0,5 à 1)": "capacité à donner un score plus élevé aux malades qu'aux non-malades."})
    remember("une IA se juge **toujours** sur des patients qu'elle n'a jamais vus.")
    quiz("s2", "Une IA obtient 0,98 sur ses patients d'apprentissage et 0,62 sur de nouveaux patients. Elle…",
         ["Est excellente", "A appris par cœur", "Manque de données d'entrée"], 1,
         "Un grand écart entre patients connus et nouveaux est la signature du sur-apprentissage.")
    nav("s1", "s3")


# --- Étape 3 -----------------------------------------------------------------------------
def page_s3() -> None:
    step_header(3, "Bloc 2 · Construire", "Entraîner, puis tester",
                "Comprendre pourquoi on met des patients de côté, et comparer trois IA.")
    L = lab()
    c1, c2 = st.columns([1, 1.3])
    with c1:
        fig = go.Figure(go.Pie(labels=["Apprentissage (l'IA apprend)", "Test (mis de côté)"],
                               values=[len(L["y_tr"]), len(L["y_te"])], hole=0.55,
                               marker=dict(colors=[C["teal"], C["orange"]]), sort=False,
                               texttemplate="%{value} patients"))
        fig.update_layout(title="On coupe les 1 500 patients en deux", legend=dict(orientation="h", y=-0.1))
        show_fig(fig, "pie", 340)
        st.markdown("Les patients **test** sont cachés pendant l'apprentissage. Ils jouent le rôle des **futurs "
                    "patients**.")
    with c2:
        choice = st.radio("Quelle IA voulez-vous examiner ?", list(MODEL_COLORS), horizontal=True)
        desc = {"Régression logistique": "Additionne les facteurs de risque, chacun avec un poids. Simple et lisible : "
                                         "c'est la méthode des scores cliniques classiques.",
                "Arbre de décision": "Pose une série de questions (« tension ≥ 160 ? », « fumeur ? »). Lisible comme "
                                     "un arbre décisionnel de recommandation.",
                "Forêt aléatoire": "Fait voter 200 arbres différents. Souvent performante, mais plus difficile à "
                                   "expliquer."}
        st.info(desc[choice])
        names = list(MODEL_COLORS)
        tr = [roc_auc_score(L["y_tr"], L["p_tr"][n]) for n in names]
        te = [roc_auc_score(L["y_te"], L["p_te"][n]) for n in names]
        fig = go.Figure()
        fig.add_trace(go.Bar(x=names, y=tr, name="Patients d'apprentissage", marker_color="#C9D9DD",
                             text=[f"{v:.2f}" for v in tr], textposition="outside"))
        fig.add_trace(go.Bar(x=names, y=te, name="Patients test", text=[f"{v:.2f}" for v in te],
                             textposition="outside",
                             marker_color=[MODEL_COLORS[n] if n == choice else "#9FB3B8" for n in names]))
        fig.update_layout(barmode="group", yaxis=dict(range=[0.5, 1.0], title="Note (AUC)"),
                          title="Note de chaque IA", legend=dict(orientation="h", y=-0.2))
        show_fig(fig, "auc3", 360)
    best = names[int(np.argmax(te))]
    st.markdown(f"Sur les patients test, la meilleure note revient à la **{best.lower()}**. Remarquez que la forêt est "
                "excellente sur l'apprentissage… mais pas forcément sur le test.")
    remember("le chiffre à retenir et à publier est la note sur les patients **test**, jamais celle de l'apprentissage. "
             "Et une IA simple fait souvent aussi bien qu'une IA compliquée.")
    quiz("s3", "Pourquoi garde-t-on des patients « test » de côté ?",
         ["Pour aller plus vite", "Pour imiter de futurs patients que l'IA n'a jamais vus",
          "Pour avoir plus de données d'apprentissage"], 1,
         "Le jeu de test simule la vraie vie : des patients nouveaux pour l'IA.")
    nav("s2", "s4")


# --- Étape 4 -----------------------------------------------------------------------------
def kit_bytes() -> bytes:
    """Kit Orange : celui de la version complète s'il est à côté, sinon les données seules."""
    here = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(here, "kit_orange_icsmai2027.zip")
    if os.path.exists(path):
        return open(path, "rb").read()
    L = lab()
    df = L["df"].rename(columns={"_risque_vrai": "risque_vrai"})
    def tab(d, meta=()):
        cols = FEATURES + [TARGET] + list(meta)
        types = ["discrete" if c in BINARY + [TARGET] else "continuous" for c in FEATURES + [TARGET]] + ["continuous"] * len(meta)
        flags = [""] * len(FEATURES) + ["class"] + ["meta"] * len(meta)
        out = io.StringIO()
        out.write("\t".join(cols) + "\n" + "\t".join(types) + "\n" + "\t".join(flags) + "\n")
        d[cols].to_csv(out, sep="\t", header=False, index=False, float_format="%.4g", lineterminator="\n")
        return out.getvalue()
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("kit_orange_icsmai2027/1_apprentissage.tab", tab(df.loc[L["X_tr"].index]))
        z.writestr("kit_orange_icsmai2027/2_test.tab", tab(df.loc[L["X_te"].index], ("risque_vrai",)))
    return buf.getvalue()


ORANGE_SIMPLE_DOT = """digraph { rankdir=LR; nodesep=0.3; ranksep=0.6;
  node [shape=box, style="rounded,filled", fontname="Helvetica", fontsize=13, width=1.9];
  a [label="① File\\n1_apprentissage.tab", color="#E89B2D", fillcolor="#FFF3DC"];
  t [label="② File\\n2_test.tab", color="#E89B2D", fillcolor="#FFF3DC"];
  m [label="③ 3 modèles\\nLogistic Regression\\nTree · Random Forest", color="#2B6CB0", fillcolor="#EEF2FB"];
  s [label="④ Test and Score", color="#0E7C86", fillcolor="#E7F3F4", penwidth=2.5];
  c [label="⑤ Confusion Matrix\\nROC Analysis", color="#7B5EA7", fillcolor="#F1ECF8"];
  a -> m; a -> s [label=" Data"]; t -> s [label=" Test Data"]; m -> s; s -> c;
}"""


def page_s4() -> None:
    step_header(4, "Bloc 2 · Construire", "À vous de jouer dans Orange",
                "Construire vous-même les trois IA, sans programmer, sur les mêmes patients.")
    c1, c2 = st.columns([1, 1.4])
    with c1:
        st.markdown("**Orange** est un logiciel gratuit où l'on relie des briques avec la souris.")
        st.download_button("⬇️ Télécharger les données pour Orange", kit_bytes(), "kit_orange_icsmai2027.zip",
                           "application/zip", type="primary", width="stretch")
        st.caption("Installer Orange : [orangedatamining.com/download](https://orangedatamining.com/download/)")
    with c2:
        st.graphviz_chart(ORANGE_SIMPLE_DOT)
    st.markdown("#### Cinq gestes")
    steps = [("Charger les données", "Glissez un widget **File** et ouvrez `1_apprentissage.tab`. Faites de même "
              "avec `2_test.tab` dans un second **File**."),
             ("Ajouter trois IA", "Glissez **Logistic Regression**, **Tree** et **Random Forest**, et reliez-les au "
              "premier File."),
             ("Évaluer", "Ajoutez **Test and Score**. Reliez-y le premier File (*Data*), le second (*Test Data*) et "
              "les trois IA. Choisissez « Test on test data »."),
             ("Lire la note", "Notez l'**AUC** de chaque IA dans le tableau ci-dessous."),
             ("Regarder les erreurs", "Reliez **Confusion Matrix** à Test and Score : combien de malades ratés ?")]
    for i, (t, txt) in enumerate(steps, 1):
        st.checkbox(f"**{i}. {t}** — {txt}", key=f"orange_{i}")
    st.markdown("#### Comparez avec l'application")
    L = lab()
    show = pd.DataFrame({"IA": list(MODEL_COLORS),
                         "Widget Orange": ["Logistic Regression", "Tree", "Random Forest"],
                         "Note dans l'application": [f"{roc_auc_score(L['y_te'], L['p_te'][n]):.2f}".replace(".", ",")
                                                     for n in MODEL_COLORS],
                         "Votre note dans Orange": ["", "", ""]})
    st.data_editor(show, hide_index=True, disabled=["IA", "Widget Orange", "Note dans l'application"], key="editor_orange")
    remember("deux logiciels donnent des notes proches mais pas identiques, car leurs réglages par défaut diffèrent. "
             "Une étude sérieuse précise toujours le logiciel et ses réglages.")
    quiz("s4", "Orange donne 0,72 à la forêt aléatoire, l'application 0,74. Que faut-il en penser ?",
         ["L'un des deux logiciels se trompe", "C'est normal : réglages par défaut différents (nombre d'arbres…)",
          "Les patients ne sont pas les mêmes"], 1,
         "Mêmes patients, mais Orange utilise par défaut 10 arbres contre 200 ici : de petits écarts sont attendus.")
    nav("s3", "s5")


# --- Étape 5 -----------------------------------------------------------------------------
def page_s5() -> None:
    step_header(5, "Bloc 3 · Interpréter", "Le seuil : de la probabilité à la décision",
                "Comprendre que l'IA donne un risque, et que c'est nous qui fixons le seuil d'alerte.")
    L = lab()
    p, y = L["p_te"]["Régression logistique"], L["y_te"]
    st.markdown("L'IA (régression logistique) donne à chaque patient un **risque entre 0 et 100 %**. Nous décidons "
                "à partir de quel risque on **déclenche une alerte**.")
    thr = st.slider("Seuil d'alerte : on alerte si le risque dépasse…", 5, 80, 50, 5, format="%d %%") / 100
    c = counts(y, p, thr)
    c1, c2 = st.columns([1.2, 1])
    with c1:
        show_fig(hundred_patients(c, "Sur 100 patients test"), "grid5", 460)
    with c2:
        big_number(st, "Malades détectés (sensibilité)", pct(c["se"]), C["green"], "parmi les malades")
        st.write("")
        big_number(st, "Sains rassurés (spécificité)", pct(c["sp"]), C["teal"], "parmi les non-malades")
        st.write("")
        if thr <= 0.25:
            st.warning("Seuil **bas** : on rate peu de malades, mais on multiplie les fausses alertes.")
        elif thr >= 0.5:
            st.warning("Seuil **haut** : peu de fausses alertes, mais beaucoup de malades ratés (croix rouges).")
        else:
            st.info("Seuil intermédiaire : un compromis entre malades ratés et fausses alertes.")
    words({"Sensibilité": "parmi les malades, la part que l'IA détecte.",
           "Spécificité": "parmi les non-malades, la part que l'IA rassure.",
           "Faux négatif": "un malade raté (croix rouge).", "Faux positif": "une fausse alerte (rond orange)."})
    remember("baisser le seuil fait monter la sensibilité et baisser la spécificité. Le bon seuil dépend de l'usage : "
             "c'est une **décision médicale**, pas technique.")
    quiz("s5", "Pour un dépistage où l'on ne veut rater presque aucun malade, on choisit un seuil…",
         ["Bas", "Haut", "Toujours 50 %"], 0,
         "Un seuil bas déclenche plus d'alertes : on rate moins de malades, au prix de fausses alertes.")
    nav("s4", "s6")


# --- Étape 6 -----------------------------------------------------------------------------
def page_s6() -> None:
    step_header(6, "Bloc 3 · Interpréter", "Quand l'alarme sonne, est-ce vraiment un malade ?",
                "Voir que la valeur d'une alerte (VPP) dépend de la fréquence de la maladie.")
    st.markdown("Prenons un test qui détecte **80 %** des malades et rassure **80 %** des non-malades. Faites varier "
                "la **fréquence de la maladie** dans la population testée.")
    prev = st.slider("Fréquence de la maladie dans la population", 1, 50, 20, 1, format="%d %%") / 100
    n = 1000
    sick = round(n * prev)
    tp, fp = round(0.8 * sick), round(0.2 * (n - sick))
    ppv = tp / (tp + fp)
    c1, c2 = st.columns([1.3, 1])
    with c1:
        fig = go.Figure()
        fig.add_trace(go.Bar(y=["Alertes"], x=[tp], name=f"Vrais malades : {tp}", orientation="h",
                             marker_color=C["green"], text=[tp], textposition="inside"))
        fig.add_trace(go.Bar(y=["Alertes"], x=[fp], name=f"Fausses alertes : {fp}", orientation="h",
                             marker_color=C["orange"], text=[fp], textposition="inside"))
        fig.update_layout(barmode="stack", title=f"Sur 1 000 personnes testées : {tp + fp} alertes",
                          xaxis_title="Nombre d'alertes", legend=dict(orientation="h", y=-0.4))
        show_fig(fig, "ppv", 250)
        st.markdown(f"- **{sick}** personnes sont malades, **{n - sick}** ne le sont pas.\n"
                    f"- Le test en détecte **{tp}** (80 %) et donne **{fp}** fausses alertes (20 % des non-malades).")
    with c2:
        big_number(st, "Quand l'alarme sonne, la personne est malade", f"{round(100 * ppv)} fois sur 100",
                   C["purple"], "valeur prédictive positive (VPP)")
    if prev <= 0.05:
        st.error("Maladie **rare** : la grande majorité des alertes sont fausses, alors que le test n'a pas changé !")
    words({"VPP": "quand l'IA alerte, la probabilité que la personne soit vraiment malade.",
           "Prévalence": "la fréquence de la maladie dans la population testée."})
    remember("le **même** test n'a pas la même valeur en dépistage (maladie rare) et en consultation spécialisée "
             "(maladie fréquente). Une VPP publiée ne se transpose pas.")
    quiz("s6", "Le même test est utilisé dans une population où la maladie est 10 fois plus rare. La VPP…",
         ["Reste la même", "Augmente", "Baisse"], 2,
         "Moins de malades donc moins de vraies alertes, alors que les fausses alertes restent nombreuses.")
    nav("s5", "s7")


# --- Étape 7 -----------------------------------------------------------------------------
def page_s7() -> None:
    step_header(7, "Bloc 3 · Interpréter", "Le risque d'un patient",
                "Lire une prédiction individuelle et ce qui la fait monter ou descendre.")
    st.warning("Patient imaginaire, modèle d'apprentissage : ce chiffre n'est **pas** un avis médical.")
    L = lab()
    df = L["df"]
    c1, c2 = st.columns([1, 1.3])
    with c1:
        age = st.slider("Âge", 30, 85, 55)
        sexe = st.radio("Sexe", ["Femme", "Homme"], horizontal=True, index=1)
        pas = st.slider("Tension systolique (mmHg)", 100, 190, 130, 5)
        chol = st.slider("Cholestérol total (g/L)", 1.4, 3.2, 2.0, 0.1)
        tabac = st.toggle("Fumeur")
        diab = st.toggle("Diabétique")
    base = df[FEATURES].median()
    for b in BINARY:
        base[b] = 0
    pt = pd.DataFrame([base])[FEATURES].astype(float)
    pt.loc[0, ["age", "sexe", "pas", "cholesterol", "tabac", "diabete"]] = [float(age), float(sexe == "Homme"),
                                                                          float(pas), float(chol), float(tabac),
                                                                          float(diab)]
    pt.loc[0, "glycemie"] = 1.45 if diab else float(base["glycemie"])
    model = L["models"]["Régression logistique"]
    risk = float(model.predict_proba(pt)[0, 1])
    cat, col = (("FAIBLE", C["green"]) if risk < 0.10 else ("MODÉRÉ", C["orange"]) if risk < 0.20 else ("ÉLEVÉ", C["red"]))
    with c2:
        g = go.Figure(go.Indicator(mode="gauge+number", value=100 * risk,
                                   number=dict(suffix=" %", valueformat=".0f", font=dict(size=48)),
                                   gauge=dict(axis=dict(range=[0, 100]), bar=dict(color=C["ink"], thickness=0.25),
                                              steps=[dict(range=[0, 10], color="#CDEBD9"),
                                                     dict(range=[10, 20], color="#FBE3C8"),
                                                     dict(range=[20, 100], color="#F6C9C9")])))
        g.update_layout(title="Risque estimé d'accident cardiovasculaire")
        show_fig(g, "gauge", 280)
        st.markdown(f"<div style='text-align:center'><span style='background:{col};color:#fff;padding:6px 16px;"
                    f"border-radius:999px;font-weight:700'>Risque {cat}</span></div>", unsafe_allow_html=True)
        contrib = []
        ref = pt.copy()
        ref.loc[0, ["age", "sexe", "pas", "cholesterol", "tabac", "diabete", "glycemie"]] = \
            [base["age"], 0, base["pas"], base["cholesterol"], 0, 0, base["glycemie"]]
        for f, lab_ in [("age", "Âge"), ("sexe", "Sexe masculin"), ("pas", "Tension"), ("cholesterol", "Cholestérol"),
                        ("tabac", "Tabac"), ("diabete", "Diabète")]:
            alt = pt.copy()
            alt.loc[0, f] = ref.loc[0, f]
            if f == "diabete":
                alt.loc[0, "glycemie"] = base["glycemie"]
            contrib.append((lab_, 100 * (risk - float(model.predict_proba(alt)[0, 1]))))
        top = sorted(contrib, key=lambda t: -abs(t[1]))[:3]
        st.markdown("**Ce qui pèse le plus pour ce patient :** " + " · ".join(
            f"{'⬆️' if v > 0 else '⬇️'} {n} ({v:+.0f} points)".replace(".", ",") for n, v in top if abs(v) >= 0.5)
                    or "rien de marquant : profil proche de la moyenne.")
    remember("un risque de 30 % signifie : sur 100 patients comme celui-ci, environ 30 feront un accident. C'est une "
             "probabilité, pas une certitude.")
    quiz("s7", "L'IA annonce 30 % de risque pour M. B. Cela veut dire…",
         ["Il aura un accident", "Environ 30 patients sur 100 comme lui auront un accident",
          "Le modèle se trompe dans 30 % des cas"], 1,
         "Une probabilité décrit un groupe de patients semblables ; elle ne prédit pas le destin d'une personne.")
    nav("s6", "s8")


# --- Étape 8 -----------------------------------------------------------------------------
def page_s8() -> None:
    step_header(8, "Bloc 4 · Décider", "Un risque juste… ailleurs aussi ?",
                "Vérifier que « 30 % » veut bien dire 30 %, y compris dans un autre hôpital.")
    L = lab()
    model = L["models"]["Régression logistique"]
    where = st.radio("Où utilise-t-on l'IA ?", ["🏥 Hôpital A (celui où elle a appris)",
                                                "🏨 Hôpital B (patients plus âgés, tensiomètre qui sous-estime)"],
                     horizontal=True)
    if where.startswith("🏥"):
        y, p = L["y_te"], L["p_te"]["Régression logistique"]
    else:
        y, p = L["df_b"][TARGET].to_numpy(), model.predict_proba(L["df_b"][FEATURES])[:, 1]
    grp = pd.qcut(p, 5, labels=["Très faible", "Faible", "Moyen", "Élevé", "Très élevé"])
    tab = pd.DataFrame({"g": grp, "p": p, "y": y}).groupby("g", observed=True).mean()
    fig = go.Figure()
    fig.add_trace(go.Bar(x=tab.index.astype(str), y=tab["p"], name="Risque annoncé par l'IA", marker_color=C["blue"],
                         text=[pct(v) for v in tab["p"]], textposition="outside"))
    fig.add_trace(go.Bar(x=tab.index.astype(str), y=tab["y"], name="Accidents réellement observés",
                         marker_color=C["orange"], text=[pct(v) for v in tab["y"]], textposition="outside"))
    fig.update_layout(barmode="group", yaxis=dict(tickformat=".0%", range=[0, max(tab.max()) * 1.25]),
                      title="Par groupe de patients : risque annoncé et réalité", xaxis_title="Groupe de risque",
                      legend=dict(orientation="h", y=-0.25))
    show_fig(fig, "calib", 400)
    c1, c2, c3 = st.columns(3)
    big_number(c1, "Risque moyen annoncé", pct(p.mean()), C["blue"])
    big_number(c2, "Accidents observés", pct(y.mean()), C["orange"])
    big_number(c3, "Note (AUC)", f"{roc_auc_score(y, p):.2f}".replace(".", ","), C["teal"], "classement des patients")
    if abs(p.mean() - y.mean()) > 0.03:
        st.error("À l'hôpital B, l'IA classe toujours bien les patients (bonne note), mais **les chiffres annoncés sont "
                 "trop bas**. On ne pourrait pas les annoncer aux patients tels quels.")
    else:
        st.success("Barres bleues et orange proches : quand l'IA annonce un risque, il correspond à la réalité. "
                   "On dit qu'elle est **bien calibrée**.")
    words({"Calibration": "accord entre le risque annoncé et la fréquence réellement observée.",
           "Validation externe": "tester l'IA dans un autre hôpital ou à une autre période."})
    remember("une IA peut bien classer les patients et pourtant annoncer de mauvais chiffres ailleurs. Avant de "
             "l'utiliser dans un nouvel hôpital, on la **vérifie et on la réajuste** avec quelques centaines de "
             "patients locaux.")
    quiz("s8", "À l'hôpital B, l'IA classe bien les patients mais sous-estime leur risque. Que faire ?",
         ["L'utiliser telle quelle", "La réajuster (recalibrer) avec des patients de l'hôpital B",
          "La jeter définitivement"], 1,
         "La recalibration locale corrige les chiffres annoncés sans tout reconstruire.")
    nav("s7", "s9")


# --- Étape 9 -----------------------------------------------------------------------------
CHECKS = [
    "Elle a été testée sur des patients qu'elle n'avait jamais vus",
    "Elle a été vérifiée chez des patients comme les miens (même type d'hôpital, même population)",
    "Ses risques annoncés correspondent à la réalité (calibration vérifiée)",
    "Le seuil d'alerte a été choisi avec les cliniciens, selon l'usage",
    "On sait quels patients elle rate, et un circuit est prévu pour eux",
    "Les données des patients sont protégées (autorisations, anonymisation)",
    "Un médecin garde la décision finale, et l'outil est surveillé dans le temps",
]


def page_s9() -> None:
    step_header(9, "Bloc 4 · Décider", "Avant d'utiliser une IA à l'hôpital",
                "Savoir quelles questions poser avant de faire confiance à un outil d'IA.")
    st.markdown("Un fournisseur vous propose une IA qui prédit le risque cardiovasculaire. **Cochez ce qui est "
                "garanti** d'après le dossier qu'il vous a remis.")
    ok = sum(st.checkbox(c, key=f"check_{i}") for i, c in enumerate(CHECKS))
    st.progress(ok / len(CHECKS), text=f"{ok} critère(s) sur {len(CHECKS)}")
    if ok == len(CHECKS):
        st.success("🟢 Tous les feux sont au vert : l'outil peut entrer dans une **étude pilote encadrée**.")
    elif ok >= 4:
        st.warning("🟠 Prometteur, mais des garanties manquent : à compléter avant tout usage auprès des patients.")
    else:
        st.error("🔴 Trop d'inconnues : l'outil n'est **pas prêt** pour les patients.")
    st.text_area("Ma décision en deux phrases", key="decision",
                 placeholder="J'utiliserais / je n'utiliserais pas cet outil parce que…")
    remember("une bonne note ne suffit pas. Il faut aussi une validation chez des patients comme les vôtres, des "
             "risques justes, un seuil choisi avec les soignants, des données protégées et un médecin qui décide.")
    quiz("s9", "Une IA a une excellente note (AUC 0,90) dans l'article qui la présente. Peut-on l'utiliser demain ?",
         ["Oui, la note est excellente", "Non, il faut d'abord vérifier qu'elle marche chez nos patients",
          "Oui, si elle est gratuite"], 1,
         "Une note publiée ailleurs ne garantit rien chez vos patients : validation locale d'abord.")
    nav("s8", "bilan", "Voir mon bilan")


# --- Bilan -------------------------------------------------------------------------------
IDEAS = [
    "Une IA se juge sur des patients qu'elle n'a jamais vus.",
    "Trop de complexité : l'IA récite au lieu de comprendre (sur-apprentissage).",
    "Une IA simple fait souvent aussi bien qu'une IA compliquée.",
    "Le seuil d'alerte est une décision médicale : sensibilité contre fausses alertes.",
    "La valeur d'une alerte (VPP) dépend de la fréquence de la maladie.",
    "Un risque annoncé doit correspondre à la réalité, dans chaque hôpital (calibration).",
    "Avant d'utiliser une IA : validation locale, données protégées, médecin décideur.",
]


def page_bilan() -> None:
    step_header("bilan", "Bilan du parcours", "Ce que vous retenez",
                "Les sept idées clés de l'atelier, et votre fiche à emporter.")
    q = st.session_state.get("quiz", {})
    good = sum(q.values())
    c1, c2 = st.columns([1, 2])
    big_number(c1, "Bonnes réponses aux quiz", f"{good} / 9", C["teal"], f"{len(q)} question(s) répondue(s)")
    with c2:
        if len(q) < 9:
            st.info("Quelques quiz n'ont pas encore de réponse : revenez aux étapes concernées si vous le souhaitez.")
        elif good >= 8:
            st.success("Bravo ! Les notions clés sont acquises.")
        else:
            st.warning("Relisez les encadrés « À retenir » des étapes où la réponse était inexacte.")
    st.markdown("#### Les 7 idées à retenir")
    for i, idea in enumerate(IDEAS, 1):
        st.markdown(f"**{i}.** {idea}")
    md = "\n".join(["# Ma fiche — L'IA médicale, pas à pas (ICSMAI 2027)", "",
                    f"Bonnes réponses aux quiz : {good} / 9", "", "## Les 7 idées à retenir"]
                   + [f"{i}. {t}" for i, t in enumerate(IDEAS, 1)]
                   + ["", "## Ma décision (étape 9)", st.session_state.get("decision") or "—", "",
                      "*Données entièrement simulées — usage pédagogique.*"])
    st.download_button("⬇️ Télécharger ma fiche", md.encode("utf-8"), "ma_fiche_ia_medicale.md", "text/markdown",
                       type="primary")
    st.caption("Pour aller plus loin : la version complète de l'application (app.py) propose expériences, challenges "
               "notés et audit détaillé.")
    nav("s9", None)


# =====================================================================================
# 4. NAVIGATION
# =====================================================================================

def main() -> None:
    # Les réponses aux quiz et cases cochées sont conservées d'une page à l'autre
    for k in list(st.session_state.keys()):
        if isinstance(k, str) and k.startswith(("q_", "check_", "orange_", "decision")):
            st.session_state[k] = st.session_state[k]
    pages = {
        "home": st.Page(page_home, title="Accueil", icon="🏠", url_path="accueil", default=True),
        "s1": st.Page(page_s1, title="1. Les données de santé", icon="📋", url_path="donnees"),
        "s2": st.Page(page_s2, title="2. Apprendre, pas par cœur", icon="🧠", url_path="apprendre"),
        "s3": st.Page(page_s3, title="3. Entraîner puis tester", icon="⚖️", url_path="tester"),
        "s4": st.Page(page_s4, title="4. À vous dans Orange", icon="🍊", url_path="orange"),
        "s5": st.Page(page_s5, title="5. Le seuil d'alerte", icon="🎚️", url_path="seuil"),
        "s6": st.Page(page_s6, title="6. La valeur d'une alerte", icon="🔔", url_path="vpp"),
        "s7": st.Page(page_s7, title="7. Le risque d'un patient", icon="🩺", url_path="patient"),
        "s8": st.Page(page_s8, title="8. Un risque juste, ailleurs aussi", icon="🏨", url_path="calibration"),
        "s9": st.Page(page_s9, title="9. Avant d'utiliser une IA", icon="✅", url_path="decider"),
        "bilan": st.Page(page_bilan, title="Mon bilan", icon="🎓", url_path="bilan"),
    }
    nav_ = st.navigation({
        "Accueil": [pages["home"]],
        "Bloc 1 · Comprendre": [pages["s1"], pages["s2"]],
        "Bloc 2 · Construire": [pages["s3"], pages["s4"]],
        "Bloc 3 · Interpréter": [pages["s5"], pages["s6"], pages["s7"]],
        "Bloc 4 · Décider": [pages["s8"], pages["s9"]],
        "Fin": [pages["bilan"]],
    }, expanded=True)
    goto = st.session_state.pop("_goto", None)
    if goto in pages:
        st.switch_page(pages[goto])
    with st.sidebar:
        q = st.session_state.get("quiz", {})
        st.caption(f"✋ Quiz réussis : {sum(q.values())} / 9")
        st.caption("Patients simulés · usage pédagogique · ICSMAI 2027")
    nav_.run()


main()
