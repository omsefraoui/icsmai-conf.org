"use client";

import React, { useState } from "react";
import { 
  Activity, 
  Brain, 
  ChevronRight, 
  ChevronLeft, 
  Sliders, 
  HelpCircle,
  FileSpreadsheet,
  CheckCircle2,
  Award
} from "lucide-react";

export default function AtelierMedicalAIPage() {
  const [currentSection, setCurrentSection] = useState<string>("accueil");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [threshold, setThreshold] = useState<number>(50);
  const [treeDepth, setTreeDepth] = useState<number>(2);
  const [patientData, setPatientData] = useState({
    age: 55,
    sexe: 1,
    pas: 140,
    cholesterol: 2.2,
    tabac: 1,
    diabete: 0,
    imc: 27,
  });

  // Calcul logistique du risque
  const logit =
    0.065 * (patientData.age - 55) +
    0.0012 * Math.pow(patientData.age - 55, 2) +
    0.45 * patientData.sexe +
    0.02 * (patientData.pas - 130) +
    (patientData.pas >= 160 ? 0.6 : 0) +
    0.85 * (patientData.cholesterol - 2.0) -
    3.0 * (0.5 - 0.5) +
    0.85 * patientData.tabac +
    0.7 * patientData.diabete -
    1.2;
  const estimatedRisk = 1 / (1 + Math.exp(-logit));

  const handleQuiz = (key: string, idx: number, correctIdx: number) => {
    setQuizAnswers((prev) => ({ ...prev, [key]: idx === correctIdx ? 1 : 0 }));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex text-slate-900">
      {/* Menu Latéral (Sidebar) */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col justify-between p-6">
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 text-emerald-700 font-bold text-sm">
              <Activity className="w-5 h-5" />
              <span>ICSMAI 2027 · Saïdia</span>
            </div>
            <h2 className="text-lg font-extrabold mt-1 text-slate-800">Medical AI in Practice</h2>
            <p className="text-xs text-slate-500">From Clinical Data to Trustworthy Predictions</p>
          </div>

          <nav className="space-y-1 text-sm font-medium">
            <button
              onClick={() => setCurrentSection("accueil")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "accueil" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🏠 Accueil & déroulé
            </button>

            <div className="pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Bloc 1 · Comprendre</div>
            <button
              onClick={() => setCurrentSection("donnees")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "donnees" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              📋 1. Les données de santé
            </button>
            <button
              onClick={() => setCurrentSection("apprendre")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "apprendre" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🧠 2. Apprendre, pas par cœur
            </button>

            <div className="pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Bloc 2 · Construire</div>
            <button
              onClick={() => setCurrentSection("tester")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "tester" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              ⚖️ 3. Entraîner puis tester
            </button>
            <button
              onClick={() => setCurrentSection("orange")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "orange" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🍊 4. À vous dans Orange
            </button>

            <div className="pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Bloc 3 · Interpréter</div>
            <button
              onClick={() => setCurrentSection("seuil")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "seuil" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🎚️ 5. Le seuil d'alerte
            </button>
            <button
              onClick={() => setCurrentSection("vpp")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "vpp" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🔔 6. La valeur d'une alerte
            </button>
            <button
              onClick={() => setCurrentSection("patient")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "patient" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🩺 7. Le risque d'un patient
            </button>

            <div className="pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Bloc 4 · Décider</div>
            <button
              onClick={() => setCurrentSection("calibration")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "calibration" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🏨 8. Un risque juste, ailleurs
            </button>
            <button
              onClick={() => setCurrentSection("decider")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "decider" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              ✅ 9. Avant d'utiliser une IA
            </button>
          </nav>
        </div>

        <div className="border-t pt-4 text-xs text-slate-400">
          Pr. Omar Sefraoui · ICSMAI 2027
        </div>
      </aside>

      {/* Contenu Principal */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* VUE ACCUEIL */}
          {currentSection === "accueil" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-teal-800 to-emerald-800 text-white rounded-2xl p-8 shadow-lg">
                <span className="bg-emerald-700 text-emerald-100 text-xs px-3 py-1 rounded-full font-semibold">
                  Hands-on workshop · 4h · Pr. Omar Sefraoui
                </span>
                <h1 className="text-3xl font-extrabold mt-3">Medical AI in Practice</h1>
                <p className="text-emerald-100 text-lg font-medium mt-1">From Clinical Data to Trustworthy Predictions</p>
                <p className="text-emerald-200 text-sm mt-4 leading-relaxed">
                  L'IA médicale en pratique : des données cliniques aux prédictions dignes de confiance. Une formule hybride : 
                  l'application pour comprendre, Orange pour expérimenter, un cas clinique pour discuter.
                </p>
              </div>

              {/* Grille des 4 blocs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div onClick={() => setCurrentSection("donnees")} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition">
                  <span className="text-xs font-bold text-emerald-600">Bloc 1 · 45 min</span>
                  <h3 className="text-lg font-bold mt-1">Comprendre l'IA médicale</h3>
                  <p className="text-sm text-slate-600 mt-2">Formats de données, cohorte synthétique, facteurs de risque et familles d'algorithmes.</p>
                </div>
                <div onClick={() => setCurrentSection("tester")} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition">
                  <span className="text-xs font-bold text-amber-600">Bloc 2 · 60 min</span>
                  <h3 className="text-lg font-bold mt-1">Construire et comparer des modèles</h3>
                  <p className="text-sm text-slate-600 mt-2">Orange, en binômes : préparer les données, comparer les classificateurs, interpréter les résultats.</p>
                </div>
                <div onClick={() => setCurrentSection("seuil")} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition">
                  <span className="text-xs font-bold text-purple-600">Bloc 3 · 60 min</span>
                  <h3 className="text-lg font-bold mt-1">Interpréter une prédiction clinique</h3>
                  <p className="text-sm text-slate-600 mt-2">Seuil, faux négatifs et faux positifs, sensibilité et spécificité, calibration, patient virtuel.</p>
                </div>
                <div onClick={() => setCurrentSection("decider")} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition">
                  <span className="text-xs font-bold text-red-600">Bloc 4 · 40 min</span>
                  <h3 className="text-lg font-bold mt-1">Défi clinique et IA responsable</h3>
                  <p className="text-sm text-slate-600 mt-2">Chaque groupe justifie son modèle, identifie ses limites et propose les vérifications préalables.</p>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={() => setCurrentSection("donnees")}
                  className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow hover:bg-emerald-700 transition"
                >
                  Commencer le parcours →
                </button>
              </div>
            </div>
          )}

          {/* ÉTAPE 1 : DONNÉES DE SANTÉ */}
          {currentSection === "donnees" && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">Bloc 1 · Comprendre</span>
                <h2 className="text-2xl font-bold mt-1">1. Les Données de Santé</h2>
                <p className="text-slate-600">Reconnaître les grands types de données manipulés par une IA médicale.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border border-emerald-200 bg-emerald-50/40 p-4 rounded-xl">
                  <FileSpreadsheet className="w-8 h-8 text-emerald-600 mb-2" />
                  <h3 className="font-bold">Tableaux</h3>
                  <p className="text-xs text-slate-600 mt-1">Âge, tension, bilans. 1 ligne = 1 patient.</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl">
                  <span className="text-2xl">🩻</span>
                  <h3 className="font-bold mt-2">Images</h3>
                  <p className="text-xs text-slate-600 mt-1">Radiographies, IRM, scanners.</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl">
                  <span className="text-2xl">💓</span>
                  <h3 className="font-bold mt-2">Signaux</h3>
                  <p className="text-xs text-slate-600 mt-1">ECG, EEG : séries temporelles.</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl">
                  <span className="text-2xl">🧬</span>
                  <h3 className="font-bold mt-2">Génomique</h3>
                  <p className="text-xs text-slate-600 mt-1">Séquences ADN, variants.</p>
                </div>
              </div>

              {/* Quiz 1 */}
              <div className="bg-slate-50 border p-5 rounded-xl space-y-3">
                <h4 className="font-bold flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600" /> Quiz : Un enregistrement d'ECG est une donnée de type…
                </h4>
                <div className="space-y-2">
                  {["Tableau", "Image", "Signal", "Génomique"].map((opt, idx) => (
                    <button
                      key={opt}
                      onClick={() => handleQuiz("q1", idx, 2)}
                      className={`w-full text-left p-3 rounded-lg border text-sm font-medium transition ${
                        quizAnswers["q1"] !== undefined
                          ? idx === 2 ? "bg-emerald-100 border-emerald-500 text-emerald-900" : "border-slate-200 bg-white"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {quizAnswers["q1"] !== undefined && (
                  <p className="text-sm font-semibold text-emerald-700 mt-2">
                    ✅ Bonne réponse : L'ECG est un signal temporel.
                  </p>
                )}
              </div>

              <div className="flex justify-between pt-4 border-t">
                <button onClick={() => setCurrentSection("accueil")} className="px-4 py-2 border rounded-lg text-sm">← Accueil</button>
                <button onClick={() => setCurrentSection("apprendre")} className="px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">Étape suivante →</button>
              </div>
            </div>
          )}

          {/* ÉTAPE 2 : APPRENDRE PAS PAR CŒUR */}
          {currentSection === "apprendre" && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">Bloc 1 · Comprendre</span>
                <h2 className="text-2xl font-bold mt-1">2. Apprendre ≠ Apprendre par Cœur</h2>
                <p className="text-slate-600">Voir qu'une IA trop complexe « récite » ses exemples au lieu de généraliser (sur-apprentissage).</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border space-y-4">
                <label className="block font-bold">Complexité de l'IA (nombre de divisions de l'arbre) : {treeDepth}</label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={treeDepth}
                  onChange={(e) => setTreeDepth(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border">
                    <span className="text-xs text-slate-500 font-bold uppercase">Note sur patients connus</span>
                    <div className="text-3xl font-extrabold text-slate-700">{(0.70 + treeDepth * 0.02).toFixed(2)}</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border">
                    <span className="text-xs text-slate-500 font-bold uppercase">Note sur nouveaux patients</span>
                    <div className="text-3xl font-extrabold text-emerald-700">{(0.74 - Math.abs(treeDepth - 4) * 0.03).toFixed(2)}</div>
                  </div>
                </div>
                {treeDepth > 8 && (
                  <p className="text-sm font-semibold text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                    🎓 Attention : sur-apprentissage détecté ! L'IA mémorise les bruits au lieu d'apprendre la règle générale.
                  </p>
                )}
              </div>

              <div className="flex justify-between pt-4 border-t">
                <button onClick={() => setCurrentSection("donnees")} className="px-4 py-2 border rounded-lg text-sm">← Précédent</button>
                <button onClick={() => setCurrentSection("tester")} className="px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">Étape suivante →</button>
              </div>
            </div>
          )}

          {/* ÉTAPE 5 : SEUIL D'ALERTE */}
          {currentSection === "seuil" && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase">Bloc 3 · Interpréter</span>
                <h2 className="text-2xl font-bold mt-1">5. Le Seuil d'Alerte</h2>
                <p className="text-slate-600">Ajustez le seuil de risque pour équilibrer la sensibilité et les fausses alertes.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border space-y-4">
                <label className="block font-bold">Seuil de déclenchement : <span className="text-emerald-700 text-xl">{threshold} %</span></label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border bg-emerald-50/40 rounded-xl">
                  <span className="text-xs text-slate-500 font-bold uppercase">Sensibilité</span>
                  <div className="text-3xl font-extrabold text-emerald-700">{Math.max(20, Math.min(98, Math.round(110 - threshold * 0.9)))} %</div>
                  <span className="text-xs text-slate-500">Malades détectés</span>
                </div>
                <div className="p-4 border bg-blue-50/40 rounded-xl">
                  <span className="text-xs text-slate-500 font-bold uppercase">Spécificité</span>
                  <div className="text-3xl font-extrabold text-blue-700">{Math.max(20, Math.min(99, Math.round(threshold * 0.95)))} %</div>
                  <span className="text-xs text-slate-500">Sains rassurés</span>
                </div>
                <div className="p-4 border bg-amber-50/40 rounded-xl">
                  <span className="text-xs text-slate-500 font-bold uppercase">Fausses Alertes</span>
                  <div className="text-3xl font-extrabold text-amber-600">{Math.max(2, Math.round((100 - threshold) * 0.4))} / 100</div>
                  <span className="text-xs text-slate-500">Examens inutiles</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t">
                <button onClick={() => setCurrentSection("apprendre")} className="px-4 py-2 border rounded-lg text-sm">← Précédent</button>
                <button onClick={() => setCurrentSection("vpp")} className="px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">Étape suivante →</button>
              </div>
            </div>
          )}

          {/* ÉTAPE 7 : SIMULATEUR PATIENT */}
          {currentSection === "patient" && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase">Bloc 3 · Interpréter</span>
                <h2 className="text-2xl font-bold mt-1">7. Le Risque d'un Patient</h2>
                <p className="text-slate-600">Simulez un profil clinique pour observer le score de risque cardiovasculaire prédit.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 bg-slate-50 p-6 rounded-xl border">
                  <div>
                    <label className="text-sm font-semibold">Âge : {patientData.age} ans</label>
                    <input type="range" min="30" max="85" value={patientData.age} onChange={(e) => setPatientData({ ...patientData, age: Number(e.target.value) })} className="w-full accent-emerald-600" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Tension Systolique (PAS) : {patientData.pas} mmHg</label>
                    <input type="range" min="100" max="190" step="5" value={patientData.pas} onChange={(e) => setPatientData({ ...patientData, pas: Number(e.target.value) })} className="w-full accent-emerald-600" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Cholestérol : {patientData.cholesterol} g/L</label>
                    <input type="range" min="1.4" max="3.2" step="0.1" value={patientData.cholesterol} onChange={(e) => setPatientData({ ...patientData, cholesterol: Number(e.target.value) })} className="w-full accent-emerald-600" />
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-6 border rounded-xl bg-white shadow-sm text-center">
                  <span className="text-xs font-bold text-slate-400 uppercase">Risque estimé à 10 ans</span>
                  <div className="text-5xl font-extrabold text-emerald-700 my-4">{(estimatedRisk * 100).toFixed(1)} %</div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${estimatedRisk < 0.15 ? "bg-emerald-100 text-emerald-800" : estimatedRisk < 0.3 ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"}`}>
                    Risque {estimatedRisk < 0.15 ? "Faible" : estimatedRisk < 0.3 ? "Modéré" : "Élevé"}
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t">
                <button onClick={() => setCurrentSection("seuil")} className="px-4 py-2 border rounded-lg text-sm">← Précédent</button>
                <button onClick={() => setCurrentSection("calibration")} className="px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">Étape suivante →</button>
              </div>
            </div>
          )}

          {/* SECTIONS INTERMÉDIAIRES / AUTRES ÉTAPES */}
          {!["accueil", "donnees", "apprendre", "seuil", "patient"].includes(currentSection) && (
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
              <Brain className="w-12 h-12 text-emerald-600 mx-auto" />
              <h2 className="text-xl font-bold">Module « {currentSection} » actif</h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Espace interactif de l'atelier de l'ICSMAI 2027. Utilisez le menu latéral pour naviguer entre les blocs.
              </p>
              <button onClick={() => setCurrentSection("accueil")} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">
                Retour à l'accueil
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
