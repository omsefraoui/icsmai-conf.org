import React from 'react';

export default function AtelierPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8">
        
        {/* En-tête de l'atelier */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
            ICSMAI 2027 • Événement Spécial
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Atelier Pratique : Intelligence Artificielle et Systèmes Intelligents en Santé
          </h1>
          <p className="text-lg text-gray-600">
            Animé par <strong className="text-gray-800">Pr. Omar Sefraoui</strong>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            📅 Dates : 23 et 24 avril 2027 (Vendredi après-midi, Samedi matin et Samedi après-midi)
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">À propos de l'atelier</h2>
          <p className="text-gray-700 leading-relaxed">
            Cet atelier pratique propose une immersion complète dans l'application des modèles d'apprentissage automatique et des architectures avancées pour le traitement des données de santé. Destiné aux chercheurs, doctorants et professionnels, il combinera des fondements théoriques rigoureux et des cas d'usage interactifs.
          </p>
        </div>

        {/* Programme Provisoire */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Programme Provisoire</h2>
          
          <div className="space-y-6">
            {/* Session 1 */}
            <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-blue-600 shadow-sm">
              <span className="text-xs font-bold text-blue-600 uppercase">Session 1</span>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">Vendredi Après-midi (23 Avril 2027)</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">Fondements et Prétraitement des Données Médicales</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>Introduction aux flux de données de santé et conformité éthique.</li>
                <li>Nettoyage, gestion des valeurs manquantes et alignement strict des caractéristiques.</li>
                <li>Mise en place de l'environnement de travail et pipeline de validation croisée.</li>
              </ul>
            </div>

            {/* Session 2 */}
            <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-indigo-600 shadow-sm">
              <span className="text-xs font-bold text-indigo-600 uppercase">Session 2</span>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">Samedi Matin (24 Avril 2027)</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">Modélisation Prédictive et Apprentissage Automatique</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>Application des algorithmes de classification au diagnostic (ex. : seuils cliniques, diabète).</li>
                <li>Optimisation des hyperparamètres et évaluation des performances (Sensibilité, Spécificité, AUC-ROC).</li>
                <li>Études de cas pratiques sur des datasets réels.</li>
              </ul>
            </div>

            {/* Session 3 */}
            <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-purple-600 shadow-sm">
              <span className="text-xs font-bold text-purple-600 uppercase">Session 3</span>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">Samedi Après-midi (24 Avril 2027)</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">Déploiement et Restitution des Projets</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>Intégration de scripts prédictifs dans des interfaces interactives (Dashboards).</li>
                <li>Bonnes pratiques de reproductibilité et de robustesse des modèles.</li>
                <li>Synthèse, discussions ouvertes et remise des attestations de participation.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Inscription / Contact */}
        <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Rejoignez-nous</h3>
          <p className="text-sm text-blue-700 mb-4">
            Les places pour l'atelier pratique étant limitées, l'inscription se fait via le formulaire d'enregistrement de la conférence.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow"
          >
            Retour à l'accueil de la conférence
          </a>
        </div>

      </div>
    </main>
  );
}
