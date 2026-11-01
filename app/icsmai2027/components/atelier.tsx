import React from 'react';

export default function AtelierPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8">
        
        {/* En-tête de l'atelier */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
            ICSMAI 2027 • Ateliers Pratiques
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Ateliers Spécialisés : Intelligence Artificielle et Systèmes Intelligents en Santé
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            📅 Dates : 23 et 24 avril 2027 (Saïdia, Maroc)
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Présentation générale</h2>
          <p className="text-gray-700 leading-relaxed">
            Ces sessions pratiques de la conférence ICSMAI 2027 offrent une immersion approfondie dans le traitement, la modélisation et l'exploitation éthique des données de santé, encadrées par des experts reconnus.
          </p>
        </div>

        {/* Programme détaillé par session */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Programme des Sessions</h2>
          
          <div className="space-y-6">
            
            {/* Session Vendredi Après-midi */}
            <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-blue-600 shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase">Session 1</span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1">Vendredi 23 Avril 2027 (15h00 - 19h00)</h3>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-md border border-blue-200">
                  Pr. ---
                </span>
              </div>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Approches avancées et intégration des flux de données intelligentes pour l'ingénierie biomédicale.
              </p>
            </div>

            {/* Session Samedi Matin (Votre intervention) */}
            <div className="bg-blue-50/60 rounded-xl p-5 border-l-4 border-indigo-600 shadow-sm border border-indigo-100">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase">Session 2 • Atelier Principal</span>
                  <h3 className="text-lg font-bold text-indigo-950 mt-1">Samedi 24 Avril 2027 (09h00 - 13h00)</h3>
                </div>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                  Pr. ---------
                </span>
              </div>
              <div className="mt-3">
                <p className="text-base font-semibold text-indigo-900">
                  « From Clinical Data to Trustworthy Predictions »
                </p>
                <p className="text-sm font-medium text-indigo-800 mt-0.5">
                  L'IA médicale en pratique : des données cliniques aux prédictions dignes de confiance
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  <li>De la structuration des données cliniques aux seuils de décision validés (OMS/ADA).</li>
                  <li>Pipelines d'apprentissage automatique et validation rigoureuse sous PyCharm.</li>
                  <li>Fiabilité, robustesse et explicabilité des modèles prédictifs en milieu médical.</li>
                </ul>
              </div>
            </div>

            {/* Session Samedi Après-midi */}
            <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-purple-600 shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-purple-600 uppercase">Session 3</span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1">Samedi 24 Avril 2027 (15h00 - 19h00)</h3>
                </div>
                <span className="bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-1 rounded-md border border-purple-200">
                  -------------
                </span>
              </div>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Perspectives avancées, architectures intelligentes et clôture des ateliers pratiques de la conférence.
              </p>
            </div>

          </div>
        </div>

        {/* Section Inscription / Contact */}
        <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Informations pratiques</h3>
          <p className="text-sm text-gray-600 mb-4">
            L'accès aux ateliers est inclus pour les participants inscrits à la conférence ICSMAI 2027.
          </p>
          <a
            href="/"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow"
          >
            Retour à l'accueil
          </a>
        </div>

      </div>
    </main>
  );
}
