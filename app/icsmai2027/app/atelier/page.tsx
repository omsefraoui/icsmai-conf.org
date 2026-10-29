"use client";

import React, { useState } from "react";
import { 
  Activity, 
  Brain, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  AlertTriangle, 
  Users, 
  Sliders, 
  HelpCircle,
  FileSpreadsheet
} from "lucide-react";
import { calculateLogisticRisk } from "@/lib/medical-ai-engine";

export default function AtelierMedicalAIPage() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  // États pour l'Étape 5 (Seuil d'alerte)
  const [threshold, setThreshold] = useState<number>(50);

  // États pour l'Étape 7 (Calculateur Patient)
  const [patientData, setPatientData] = useState({
    age: 55,
    sexe: 1,
    pas: 140,
    cholesterol: 2.2,
    tabac: 1,
    diabete: 0,
    imc: 27,
  });

  const estimatedRisk = calculateLogisticRisk(patientData);

  const handleQuiz = (step: number, optionIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [step]: optionIndex }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* En-tête Général */}
        <header className="bg-emerald-800 text-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center space-x-2 text-emerald-200 text-sm font-semibold tracking-wider uppercase">
            <Activity className="w-4 h-4" />
            <span>ICSMAI 2027 · Saïdia · Atelier Pratique</span>
          </div>
          <h1 className="text-3xl font-bold mt-2">🩺 L'IA Médicale en Pratique</h1>
          <p className="text-emerald-100 mt-1">
            Parcours interactif pour comprendre la prédiction du risque cardiovasculaire et l'évaluation clinique d'un algorithme.
          </p>
        </header>

        {/* Barre de Progression par Étapes */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[600px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
                  activeStep === step
                    ? "bg-emerald-600 text-white shadow-md scale-105"
                    : activeStep > step
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu dynamique selon l'étape */}
        <main className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          
          {/* ÉTAPE 1: DONNÉES DE SANTÉ */}
          {activeStep === 1 && (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <span className="text-xs font-bold text-emerald-600 uppercase">Bloc 1 · Comprendre</span>
                <h2 className="text-2xl font-bold mt-1">Étape 1 : Les Données de Santé</h2>
                <p className="text-slate-600">Reconnaître les grands types de données manipulés par une IA médicale.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border border-emerald-200 bg-emerald-50/50 p-4 rounded-xl">
                  <FileSpreadsheet className="w-8 h-8 text-emerald-600 mb-2" />
                  <h3 className="font-bold">📋 Tableaux</h3>
                  <p className="text-sm text-slate-600">Âge, tension, bilans sanguins. 1 ligne = 1 patient.</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl">
                  <span className="text-2xl">🩻</span>
                  <h3 className="font-bold mt-2">Images</h3>
                  <p className="text-sm text-slate-600">Radiographies, scanners, IRM, lames d'histologie.</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl">
                  <span className="text-2xl">💓</span>
                  <h3 className="font-bold mt-2">Signaux</h3>
                  <p className="text-sm text-slate-600">ECG, EEG : séries temporelles et fréquences.</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl">
                  <span className="text-2xl">🧬</span>
                  <h3 className="font-bold mt-2">Génomique</h3>
                  <p className="text-sm text-slate-600">Séquences ADN, variants génétiques.</p>
                </div>
              </div>

              {/* Mini Quiz */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-6">
                <h4 className="font-bold flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600" /> Quiz : Quel est le type d'un enregistrement ECG ?
                </h4>
                <div className="mt-3 space-y-2">
                  {["Tableau", "Image", "Signal", "Génomique"].map((opt, idx) => (
                    <button
                      key={opt}
                      onClick={() => handleQuiz(1, idx)}
                      className={`w-full text-left p-3 rounded-lg border text-sm font-medium transition ${
                        quizAnswers[1] === idx
                          ? idx === 2
                            ? "bg-emerald-100 border-emerald-500 text-emerald-900"
                            : "bg-red-100 border-red-500 text-red-900"
                          : "border-slate-200 bg-white hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {quizAnswers[1] !== undefined && (
                  <p className="mt-3 text-sm font-semibold text-emerald-700">
                    {quizAnswers[1] === 2 ? "✅ Correct ! Un ECG est une suite de mesures électriques dans le temps (un signal)." : "❌ Réponse incorrecte. L'ECG est un signal temporel."}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ÉTAPE 5: LE SEUIL D'ALERTE */}
          {activeStep === 5 && (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <span className="text-xs font-bold text-emerald-600 uppercase">Bloc 3 · Interpréter</span>
                <h2 className="text-2xl font-bold mt-1">Étape 5 : Le Seuil d'Alerte</h2>
                <p className="text-slate-600">Ajustez le seuil de risque pour équilibrer la Sensibilité et les Fausses Alertes.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <label className="block font-bold mb-2">
                  Seuil de déclenchement d'alerte : <span className="text-emerald-700 text-xl">{threshold} %</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10% (Très sensible)</span>
                  <span>50% (Standard)</span>
                  <span>90% (Très spécifique)</span>
                </div>
              </div>

              {/* Indicateurs clés */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-emerald-200 bg-emerald-50/30 rounded-xl">
                  <span className="text-xs text-slate-500 font-bold uppercase">Sensibilité</span>
                  <div className="text-3xl font-extrabold text-emerald-700">
                    {Math.max(20, Math.min(98, Math.round(110 - threshold * 0.9)))} %
                  </div>
                  <span className="text-xs text-slate-500">Malades correctement identifiés</span>
                </div>
                <div className="p-4 border border-blue-200 bg-blue-50/30 rounded-xl">
                  <span className="text-xs text-slate-500 font-bold uppercase">Spécificité</span>
                  <div className="text-3xl font-extrabold text-blue-700">
                    {Math.max(20, Math.min(99, Math.round(threshold * 0.95)))} %
                  </div>
                  <span className="text-xs text-slate-500">Non-malades rassurés</span>
                </div>
                <div className="p-4 border border-amber-200 bg-amber-50/30 rounded-xl">
                  <span className="text-xs text-slate-500 font-bold uppercase">Fausses Alertes</span>
                  <div className="text-3xl font-extrabold text-amber-600">
                    {Math.max(2, Math.round((100 - threshold) * 0.4))} / 100
                  </div>
                  <span className="text-xs text-slate-500">Examens inutiles engendrés</span>
                </div>
              </div>
            </div>
          )}

          {/* ÉTAPE 7: LE RISQUE D'UN PATIENT */}
          {activeStep === 7 && (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <span className="text-xs font-bold text-emerald-600 uppercase">Bloc 3 · Interpréter</span>
                <h2 className="text-2xl font-bold mt-1">Étape 7 : Calculateur de Risque Individuel</h2>
                <p className="text-slate-600">Ajustez le profil d'un patient pour voir l'impact en temps réel sur la probabilité de risque.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Formulaire Patient */}
                <div className="space-y-4 border border-slate-200 p-5 rounded-xl bg-slate-50/50">
                  <h3 className="font-bold flex items-center gap-2 text-slate-800">
                    <Sliders className="w-5 h-5 text-emerald-600" /> Profil Clinique
                  </h3>

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
                    <label className="text-sm font-semibold">Pression Artérielle Systolique (PAS) : {patientData.pas} mmHg</label>
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
                    <label className="text-sm font-semibold">Cholestérol Total : {patientData.cholesterol} g/L</label>
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
                    <span className="text-sm font-semibold">Statut Fumeur</span>
                    <button
                      onClick={() => setPatientData({ ...patientData, tabac: patientData.tabac === 1 ? 0 : 1 })}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                        patientData.tabac === 1 ? "bg-red-600 text-white" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {patientData.tabac === 1 ? "Oui (Fumeur)" : "Non"}
                    </button>
                  </div>
                </div>

                {/* Résultat & Risque */}
                <div className="flex flex-col justify-center items-center p-6 border border-slate-200 rounded-xl bg-white shadow-sm text-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Risque estimé à 10 ans</span>
                  <div
                    className={`text-5xl font-extrabold my-4 ${
                      estimatedRisk < 0.15
                        ? "text-emerald-600"
                        : estimatedRisk < 0.3
                        ? "text-amber-500"
                        : "text-red-600"
                    }`}
                  >
                    {(estimatedRisk * 100).toFixed(1)} %
                  </div>

                  <div
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                      estimatedRisk < 0.15
                        ? "bg-emerald-100 text-emerald-800"
                        : estimatedRisk < 0.3
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    Risque {estimatedRisk < 0.15 ? "Faible" : estimatedRisk < 0.3 ? "Modéré" : "Élevé"}
                  </div>

                  <p className="text-xs text-slate-500 mt-4 max-w-xs">
                    Signification : Sur 100 patients présentant ce profil exact, environ{" "}
                    <strong>{Math.round(estimatedRisk * 100)}</strong> développeront un événement cardiovasculaire.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Autres étapes simplifiées pour démonstration */}
          {![1, 5, 7].includes(activeStep) && (
            <div className="py-12 text-center space-y-4">
              <Brain className="w-12 h-12 text-emerald-600 mx-auto" />
              <h2 className="text-xl font-bold">Étape {activeStep} en cours d'intégration</h2>
              <p className="text-slate-500 max-w-md mx-auto text-sm">
                Ce module interactif React reproduit fidèlement la logique pédagogique du script Python originel.
              </p>
            </div>
          )}

          {/* Navigation bas de page */}
          <div className="flex items-center justify-between border-t pt-6 mt-8">
            <button
              disabled={activeStep === 1}
              onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
              className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm font-medium disabled:opacity-40 hover:bg-slate-50"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Précédent</span>
            </button>

            <button
              disabled={activeStep === 9}
              onClick={() => setActiveStep((prev) => Math.min(9, prev + 1))}
              className="flex items-center space-x-2 px-5 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 shadow-sm"
            >
              <span>Suivant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
