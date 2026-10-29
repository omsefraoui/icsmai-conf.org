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
  Layers,
  Award,
  CheckCircle,
  BookOpen,
  BarChart3
} from "lucide-react";

export default function AtelierMedicalAIPage() {
  const [currentSection, setCurrentSection] = useState<string>("accueil");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [threshold, setThreshold] = useState<number>(50);
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

  const handleQuiz = (key: string, idx: number) => {
    setQuizAnswers((prev) => ({ ...prev, [key]: idx }));
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
              📋 1. Formats de données
            </button>
            <button
              onClick={() => setCurrentSection("algorithmes")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "algorithmes" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🧠 2. Algorithmes & sur-apprentissage
            </button>

            <div className="pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Bloc 2 · Construire</div>
            <button
              onClick={() => setCurrentSection("orange")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "orange" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🍊 Atelier Orange
            </button>
            <button
              onClick={() => setCurrentSection("challenge1")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "challenge1" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🏆 Challenge 1 : Meilleur modèle
            </button>

            <div className="pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Bloc 3 · Interpréter</div>
            <button
              onClick={() => setCurrentSection("metriques")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "metriques" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              📊 3. Métriques & calibration
            </button>
            <button
              onClick={() => setCurrentSection("simulateur")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "simulateur" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🩺 4. Simulateur patient
            </button>

            <div className="pt-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Bloc 4 · Décider</div>
            <button
              onClick={() => setCurrentSection("deci")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                currentSection === "deci" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              ✅ 5. Défi clinique & IA responsable
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
                <div onClick={() => setCurrentSection("orange")} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition">
                  <span className="text-xs font-bold text-amber-600">Bloc 2 · 60 min</span>
                  <h3 className="text-lg font-bold mt-1">Construire et comparer des modèles</h3>
                  <p className="text-sm text-slate-600 mt-2">Orange, en binômes : préparer les données, comparer 5 classificateurs, interpréter les résultats.</p>
                </div>
                <div onClick={() => setCurrentSection("metriques")} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition">
                  <span className="text-xs font-bold text-purple-600">Bloc 3 · 60 min</span>
                  <h3 className="text-lg font-bold mt-1">Interpréter une prédiction clinique</h3>
                  <p className="text-sm text-slate-600 mt-2">Seuil, faux négatifs et faux positifs, sensibilité et spécificité, calibration, patient virtuel.</p>
                </div>
                <div onClick={() => setCurrentSection("deci")} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition">
                  <span className="text-xs font-bold text-red-600">Bloc 4 · 40 min</span>
                  <h3 className="text-lg font-bold mt-1">Défi clinique et IA responsable</h3>
                  <p className="text-sm text-slate-600 mt-2">Chaque groupe justifie son modèle, identifie ses limites et propose les vérifications préalables.</p>
                </div>
              </div>
            </div>
          )}

          {/* VUE FORMATS DE DONNEES (Bloc 1) */}
          {currentSection === "donnees" && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">Bloc 1 · Comprendre</span>
                <h2 className="text-2xl font-bold mt-1">1. Formats de Données de Santé</h2>
                <p className="text-slate-600">Reconnaître les grands types de données manipulés en IA médicale.</p>
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

              {/* Quiz interactif */}
              <div className="bg-slate-50 border p-5 rounded-xl space-y-3">
                <h4 className="font-bold flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600" /> Quiz : Un ECG est une donnée de type...
                </h4>
                <div className="space-y-2">
                  {["Tableau", "Image", "Signal", "Génomique"].map((opt, idx) => (
                    <button
                      key={opt}
                      onClick={() => handleQuiz("q_ecg", idx)}
                      className={`w-full text-left p-3 rounded-lg border text-sm font-medium transition ${
                        quizAnswers["q_ecg"] === idx
                          ? idx === 2 ? "bg-emerald-100 border-emerald-500 text-emerald-900" : "bg-red-100 border-red-500 text-red-900"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {quizAnswers["q_ecg"] !== undefined && (
                  <p className="text-sm font-semibold text-emerald-700 mt-2">
                    {quizAnswers["q_ecg"] === 2 ? "✅ Correct ! L'ECG est un signal temporel." : "❌ Incorrect. C'est un signal."}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* VUE SIMULATEUR PATIENT (Bloc 3) */}
          {currentSection === "simulateur" && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase">Bloc 3 · Interpréter</span>
                <h2 className="text-2xl font-bold mt-1">4. Simulateur de Risque Patient</h2>
                <p className="text-slate-600">Ajustez les paramètres cliniques d'un patient virtuel pour évaluer sa probabilité d'événement CV.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 bg-slate-50 p-6 rounded-xl border">
                  <div>
                    <label className="text-sm font-semibold">Âge : {patientData.age} ans</label>
                    <input
                      type="range"
                      min="30"
                      max="85"
                      value={patientData.age}
                      onChange={(e) => setPatientData({ ...patientData, age: Number(e.target.value) })}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Tension Systolique (PAS) : {patientData.pas} mmHg</label>
                    <input
                      type="range"
                      min="100"
                      max="190"
                      step="5"
                      value={patientData.pas}
                      onChange={(e) => setPatientData({ ...patientData, pas: Number(e.target.value) })}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Cholestérol : {patientData.cholesterol} g/L</label>
                    <input
                      type="range"
                      min="1.4"
                      max="3.2"
                      step="0.1"
                      value={patientData.cholesterol}
                      onChange={(e) => setPatientData({ ...patientData, cholesterol: Number(e.target.value) })}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-semibold">Tabagisme</span>
                    <button
                      onClick={() => setPatientData({ ...patientData, tabac: patientData.tabac === 1 ? 0 : 1 })}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                        patientData.tabac === 1 ? "bg-red-600 text-white" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {patientData.tabac === 1 ? "Fumeur" : "Non-fumeur"}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-6 border rounded-xl bg-white shadow-sm text-center">
                  <span className="text-xs font-bold text-slate-400 uppercase">Risque cardiovasculaire estimé</span>
                  <div className="text-5xl font-extrabold text-emerald-700 my-4">
                    {(estimatedRisk * 100).toFixed(1)} %
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                    estimatedRisk < 0.15 ? "bg-emerald-100 text-emerald-800" : estimatedRisk < 0.3 ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"
                  }`}>
                    Risque {estimatedRisk < 0.15 ? "Faible" : estimatedRisk < 0.3 ? "Modéré" : "Élevé"}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Autres sections par défaut */}
          {!["accueil", "donnees", "simulateur"].includes(currentSection) && (
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
              <Brain className="w-12 h-12 text-emerald-600 mx-auto" />
              <h2 className="text-xl font-bold">Module « {currentSection} » actif</h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Ce module interactif intègre les ateliers pratiques de l'ICSMAI 2027 sous la direction du Pr. Omar Sefraoui.
              </p>
              <button
                onClick={() => setCurrentSection("accueil")}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700"
              >
                Retour à l'accueil
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
