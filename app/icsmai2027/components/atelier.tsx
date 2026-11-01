import Link from "next/link";
import {
  ArrowRight,
  Award,
  Box,
  Brain,
  CalendarDays,
  CircleCheck,
  Clock,
  GraduationCap,
  Landmark,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Send,
  Stethoscope,
  Users,
  Wallet,
  Activity,
  type LucideIcon,
} from "lucide-react";

/**
 * HandsOnWorkshop : appel à inscription aux ateliers pratiques (hands-on) d'ICSMAI 2027.
 * Affiché par la page /atelier (app/atelier/page.tsx) ; peut aussi être placé sur l'accueil.
 * L'application de la session 2 est sur /atelier/pratique.
 *
 * Tout le contenu modifiable (frais, dates, animateurs, contacts) est regroupé ci-dessous.
 */

const FRAIS = "2 500 DH";
const EMAIL = "icsmai.alsi@gmail.com";
const WHATSAPP = "+212615148509";
const WHATSAPP_AFFICHE = "+212 615 148 509";

const BANQUE = {
  titulaire: "Association Intelligence Artificielle et Développement Durable",
  banque: "Banque Populaire d'Oujda, Agence Boudir",
  rib: "157 570 21211 6840976 0001 18",
  swift: "BCPOMAMC",
};

type Session = {
  numero: number;
  jour: string;
  horaire: string;
  titre: string;
  sousTitre?: string;
  animateur: string;
  icone: LucideIcon;
  couleur: { bord: string; fond: string; texte: string; pastille: string };
  points: string[];
  lien?: { href: string; label: string };
};

const SESSIONS: Session[] = [
  {
    numero: 1,
    jour: "Vendredi 23 avril 2027",
    horaire: "15h00 – 19h00",
    titre: "Médecine Intelligente : Étapes et Simulations d'une Solution IA pour la Prédiction d'une Maladie",
    animateur: "Pr. .....",
    icone: Activity,
    couleur: {
      bord: "border-l-sky-600",
      fond: "bg-sky-50",
      texte: "text-sky-800",
      pastille: "bg-sky-600",
    },
    points: [
      "Les étapes d'une solution d'IA médicale, de la question clinique au modèle",
     /* "Préparer les données d'un cas réel de prédiction de maladie",
      "Simulation : entraîner, tester et comparer plusieurs modèles",
      "Lire les résultats et en discuter les limites",*/
    ],
  },
  {
    numero: 2,
    jour: "Samedi 24 avril 2027",
    horaire: "09h00 – 13h00",
    titre: "Medical AI in Practice : From Clinical Data to Trustworthy Predictions",
    sousTitre: "L'IA médicale en pratique : des données cliniques aux prédictions dignes de confiance",
    animateur: "Pr. -----------------",
    icone: Brain,
    couleur: {
      bord: "border-l-emerald-600",
      fond: "bg-emerald-50",
      texte: "text-emerald-800",
      pastille: "bg-emerald-600",
    },
    points: [
      "Des données cliniques à un jeu de données exploitable",
      /*"Entraîner puis tester des modèles, sans programmer (application en ligne et Orange)",
      "Seuil de décision, sensibilité, spécificité, VPP : décider comme un clinicien",
      "Calibration et changement de population : une IA fiable… ailleurs aussi ?",
      "Les questions à poser avant d'utiliser une IA à l'hôpital",*/
    ],
    lien: { href: "/atelier/pratique", label: "Aperçu de l'application de la session" },
  },
  {
    numero: 3,
    jour: "Samedi 24 avril 2027",
    horaire: "15h00 – 19h00",
    titre: "3D Slicer : Visualisation, segmentation et reconstruction 3D en imagerie médicale",
    animateur: "Pr. --------",
    icone: Box,
    couleur: {
      bord: "border-l-violet-600",
      fond: "bg-violet-50",
      texte: "text-violet-800",
      pastille: "bg-violet-600",
    },
    points: [
      "Prise en main de 3D Slicer, logiciel libre et gratuit d'imagerie médicale",
     /* "Charger et explorer des images DICOM (scanner, IRM)",
      "Segmentation manuelle et semi-automatique d'une structure anatomique",
      "Reconstruction 3D, mesures et export du modèle (impression 3D)",*/
    ],
  },
];

const PUBLIC: { icone: LucideIcon; titre: string; texte: string }[] = [
  {
    icone: GraduationCap,
    titre: "Doctorants et chercheurs",
    texte: "En santé, en intelligence artificielle ou en ingénierie biomédicale.",
  },
  {
    icone: Stethoscope,
    titre: "Médecins résidents et internes",
    texte: "Pour comprendre, évaluer et utiliser les outils d'IA dans leur spécialité.",
  },
  {
    icone: Microscope,
    titre: "Médecins praticiens et radiologues",
    texte: "Qui veulent un regard critique sur l'IA avant de l'utiliser avec leurs patients.",
  },
  {
    icone: Users,
    titre: "Enseignants-chercheurs, ingénieurs et étudiants de master",
    texte: "Qui encadrent, développent ou étudient des projets d'IA en santé.",
  },
];

const INCLUS = [
  "Participation aux trois sessions (12 heures)",
  "Supports : cahier du participant, données et applications",
  " Deux  déjeuners",
  "Attestation de participation",
];

function mailtoInscription() {
  const sujet = "Inscription aux ateliers pratiques ICSMAI 2027";
  const corps = [
    "Bonjour,",
    "",
    "Je souhaite m'inscrire aux ateliers pratiques d'ICSMAI 2027 (23-24 avril 2027, Saïdia).",
    "",
    "Nom et prénom :",
    "Statut (doctorant, résident, médecin, enseignant-chercheur, autre) :",
    "Établissement :",
    "Téléphone :",
    "",
    "Cordialement,",
  ].join("\n");
  return `mailto:${EMAIL}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
}

export default function HandsOnWorkshop() {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* ── Bandeau d'appel ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #0ea5e9 0, transparent 35%), radial-gradient(circle at 85% 30%, #10b981 0, transparent 35%), radial-gradient(circle at 60% 100%, #8b5cf6 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-20 md:px-6 md:pb-20 md:pt-28">
          <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            ICSMAI 2027 · Hands-on Workshops · Appel à inscription
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Ateliers pratiques : l&apos;intelligence artificielle au service de la santé
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-200 sm:text-lg">
            Trois sessions de 4 heures pour passer de la théorie à la pratique : prédire une maladie, construire
            des prédictions dignes de confiance, puis visualiser et reconstruire en 3D l&apos;imagerie médicale.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icone: CalendarDays, label: "Dates", valeur: "23 – 24 avril 2027" },
              { icone: MapPin, label: "Lieu", valeur: "Saïdia, Maroc" },
              { icone: Clock, label: "Volume", valeur: "3 sessions × 4 h" },
              { icone: Wallet, label: "Frais", valeur: FRAIS },
            ].map(({ icone: Icone, label, valeur }) => (
              <div key={label} className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
                <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-slate-300">
                  <Icone className="h-3.5 w-3.5" aria-hidden />
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold sm:text-base">{valeur}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#inscription"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              S&apos;inscrire <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#programme"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Voir le programme
            </a>
          </div>
        </div>
      </section>

      {/* ── Thématique ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">La thématique</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              De la donnée clinique à la décision, en le faisant soi-même
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
              <p>
                L&apos;intelligence artificielle entre à l&apos;hôpital : aide au diagnostic, prédiction du risque,
                analyse d&apos;images. Mais entre un algorithme et une décision clinique fiable, il y a des étapes
                que tout professionnel de santé doit comprendre : préparer les données, entraîner un modèle,
                l&apos;évaluer avec les bons indicateurs, vérifier qu&apos;il reste fiable sur d&apos;autres
                patients, et savoir exploiter l&apos;imagerie médicale.
              </p>
              <p>
                Ces ateliers vous font parcourir ces étapes <strong>sur votre propre ordinateur</strong>, à partir de
                cas cliniques réalistes, encadrés par des enseignants-chercheurs du domaine.
              </p>
            </div>
          </div>
          <aside className="space-y-3 md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="flex items-center gap-2 font-semibold">
                <Clock className="h-4 w-4 text-emerald-700" aria-hidden />
                Déroulé de chaque session
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  <strong>1 h à 1 h 30</strong> de présentation des notions clés
                </li>
                <li>
                  <strong>Environ 3 h</strong> de pratique guidée, seul ou en binôme
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="flex items-center gap-2 font-semibold">
                <Laptop className="h-4 w-4 text-emerald-700" aria-hidden />
                Prérequis
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Aucune connaissance en programmation</li>
                <li>Un ordinateur portable (Windows, macOS ou Linux)</li>
                <li>Des logiciels gratuits, avec une notice d&apos;installation envoyée après l&apos;inscription</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Public concerné ────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Public concerné</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">À qui s&apos;adressent ces ateliers ?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PUBLIC.map(({ icone: Icone, titre, texte }) => (
              <div key={titre} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <Icone className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold">{titre}</h3>
                  <p className="mt-1 text-sm text-slate-600">{texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programme ──────────────────────────────────────────────────── */}
      <section id="programme" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-14 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Programme</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Trois sessions, trois compétences</h2>
        <div className="mt-8 space-y-6">
          {SESSIONS.map((s) => {
            const Icone = s.icone;
            return (
              <article
                key={s.numero}
                className={`rounded-2xl border border-slate-200 border-l-4 ${s.couleur.bord} bg-white p-5 shadow-sm md:p-6`}
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full ${s.couleur.pastille} px-3 py-1 text-xs font-bold uppercase tracking-wide text-white`}
                  >
                    <Icone className="h-3.5 w-3.5" aria-hidden />
                    Session {s.numero}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {s.jour}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                    <Clock className="h-4 w-4" aria-hidden />
                    {s.horaire}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug sm:text-xl">{s.titre}</h3>
                {s.sousTitre && <p className={`mt-1 text-sm font-medium ${s.couleur.texte}`}>{s.sousTitre}</p>}
                <p className="mt-2 text-sm text-slate-600">
                  Animée par <strong className="text-slate-800">{s.animateur}</strong>
                </p>
                <ul className={`mt-4 grid gap-2 rounded-xl ${s.couleur.fond} p-4 text-sm text-slate-700 sm:grid-cols-2`}>
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CircleCheck className={`mt-0.5 h-4 w-4 shrink-0 ${s.couleur.texte}`} aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.lien && (
                  <Link
                    href={s.lien.href}
                    className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${s.couleur.texte} hover:underline`}
                  >
                    {s.lien.label} <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Frais et inscription ───────────────────────────────────────── */}
      <section id="inscription" className="scroll-mt-20 bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Inscription</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Frais et modalités d&apos;inscription</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-5">
            {/* Frais */}
            <div className="rounded-2xl bg-white p-6 text-slate-900 md:col-span-2">
              <p className="text-sm font-semibold text-slate-500">Pack ateliers · 3 sessions</p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight">{FRAIS}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {INCLUS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
                <Award className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                Places limitées pour garantir un encadrement de qualité : les inscriptions sont validées par ordre de
                réception des paiements.
              </p>
            </div>

            {/* Étapes */}
            <div className="md:col-span-3">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-900">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold">Envoyez votre demande d&apos;inscription</h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Par e-mail à <span className="font-medium text-white">{EMAIL}</span> avec vos nom et prénom,
                      statut, établissement et téléphone.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-900">
                    2
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">Réglez les frais par virement bancaire</h3>
                    <div className="mt-2 rounded-xl border border-white/15 bg-white/5 p-4 text-sm">
                      <p className="flex items-center gap-2 font-medium">
                        <Landmark className="h-4 w-4 text-emerald-300" aria-hidden />
                        {BANQUE.titulaire}
                      </p>
                      <p className="mt-1 text-slate-300">{BANQUE.banque}</p>
                      <p className="mt-2 break-all font-mono text-white">RIB : {BANQUE.rib}</p>
                      <p className="font-mono text-slate-300">SWIFT : {BANQUE.swift}</p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-900">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold">Envoyez le justificatif de paiement</h3>
                    <p className="mt-1 text-sm text-slate-300">Par e-mail ou par WhatsApp ({WHATSAPP_AFFICHE}).</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-900">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold">Recevez votre confirmation</h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Avec la notice d&apos;installation des logiciels, à préparer avant le jour de l&apos;atelier.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailtoInscription()}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  S&apos;inscrire par e-mail
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Une question ? WhatsApp
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <Mail className="h-3.5 w-3.5" aria-hidden />
                {EMAIL} · {WHATSAPP_AFFICHE}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
