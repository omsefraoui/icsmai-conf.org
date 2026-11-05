// components/AtelierPricing.tsx
"use client";

import { useState } from "react";

export default function AtelierPricing() {
  const [selectedPlan, setSelectedPlan] = useState<"etudiant" | "pro">("pro");
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête des Tarifs */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-emerald-950 dark:text-emerald-100">
            Tarifs & Modalités d'Inscription
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Choisissez votre formule pour accéder aux 3 sessions pratiques de l'atelier ICSMAI 2027.
          </p>
        </div>

        {/* Grille des Tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Option 1 : Étudiant */}
          <div 
            onClick={() => setSelectedPlan("etudiant")}
            className={`cursor-pointer rounded-2xl p-6 transition-all border-2 ${
              selectedPlan === "etudiant"
                ? "border-emerald-600 bg-white dark:bg-slate-800 shadow-xl scale-[1.02]"
                : "border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-emerald-400"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full">
                  Tarif Réduit
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                  Étudiant / Doctorant
                </h3>
              </div>
              <input 
                type="radio" 
                name="pricing" 
                checked={selectedPlan === "etudiant"} 
                onChange={() => setSelectedPlan("etudiant")}
                className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 mt-1" 
              />
            </div>
            
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-emerald-900 dark:text-emerald-200">2 400</span>
              <span className="text-lg font-medium text-slate-600 dark:text-slate-400"> DH</span>
            </div>
            
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Réservé aux étudiants en médecine, pharmacie, sciences ou ingénierie inscrits en formation initiale pour l'année universitaire en cours.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="5 13l4 4L19 7"></path></svg>
                Accès complet aux 3 sessions pratiques (12h)
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="5 13l4 4L19 7"></path></svg>
                Supports de cours & scripts Python / Orange
              </li>
              <li className="flex items-center font-medium text-emerald-700 dark:text-emerald-400">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Justificatif de carte d'étudiant requis
              </li>
            </ul>
          </div>

          {/* Option 2 : Professionnel / Standard */}
          <div 
            onClick={() => setSelectedPlan("pro")}
            className={`cursor-pointer rounded-2xl p-6 transition-all border-2 ${
              selectedPlan === "pro"
                ? "border-emerald-600 bg-white dark:bg-slate-800 shadow-xl scale-[1.02]"
                : "border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-emerald-400"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-200 dark:bg-slate-700 dark:text-slate-300 rounded-full">
                  Tarif Standard
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                  Professionnel & Chercheur
                </h3>
              </div>
              <input 
                type="radio" 
                name="pricing" 
                checked={selectedPlan === "pro"} 
                onChange={() => setSelectedPlan("pro")}
                className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 mt-1" 
              />
            </div>
            
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-emerald-900 dark:text-emerald-200">3 000</span>
              <span className="text-lg font-medium text-slate-600 dark:text-slate-400"> DH</span>
            </div>
            
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Destiné aux médecins, radiologues, biologistes, universitaires, salariés, ingénieurs et professionnels de santé.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="5 13l4 4L19 7"></path></svg>
                Accès complet aux 3 sessions pratiques (12h)
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="5 13l4 4L19 7"></path></svg>
                Supports de cours, données d'atelier & scripts
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="5 13l4 4L19 7"></path></svg>
                Attestation de formation continue délivrée à l'issue de l'atelier
              </li>
            </ul>
          </div>

        </div>

        {/* Formulaire d'inscription rapide */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Formulaire d'Inscription — {selectedPlan === "etudiant" ? "Tarif Étudiant (2 400 DH)" : "Tarif Professionnel (3 000 DH)"}
          </h3>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Nom & Prénom *
              </label>
              <input 
                type="text" 
                required 
                placeholder="Dr. / Pr. / M."
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Adresse Email Professionnelle ou Académique *
              </label>
              <input 
                type="email" 
                required 
                placeholder="exemple@univ.ma ou doctor@hospital.ma"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Établissement / Hôpital / Spécialité *
              </label>
              <input 
                type="text" 
                required 
                placeholder="ex: CHU, FMP, ENSAO, Radiologue..."
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Téléphone *
              </label>
              <input 
                type="tel" 
                required 
                placeholder="+212 6..."
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Champ Justificatif conditionnel pour les étudiants */}
            {selectedPlan === "etudiant" && (
              <div className="md:col-span-2 bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <label className="block text-sm font-semibold text-emerald-900 dark:text-emerald-200 mb-2">
                  Justificatif d'étudiant (Carte d’étudiant ou attestation de scolarité) *
                </label>
                <input 
                  type="file" 
                  accept=".pdf,.png,.jpg,.jpeg"
                  required={selectedPlan === "etudiant"}
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="block w-full text-sm text-slate-600 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer"
                />
                <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-400">
                  Formats acceptés : PDF, PNG, JPG (Max 5 Mo).
                </p>
              </div>
            )}

            <div className="md:col-span-2 mt-4">
              <button 
                type="submit" 
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-md text-base"
              >
                Valider mon pré-inscription ({selectedPlan === "etudiant" ? "2 400 DH" : "3 000 DH"})
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}