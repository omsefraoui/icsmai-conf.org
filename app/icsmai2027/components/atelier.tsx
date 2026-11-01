import type { Metadata } from "next";
import AtelierEmbed from "./AtelierEmbed";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle2, UserCheck, CreditCard, Sparkles } from "lucide-react";

const ATELIER_URL = process.env.NEXT_PUBLIC_ATELIER_URL ?? "https://icsmai-atelier.streamlit.app";

export const metadata: Metadata = {
  title: "Workshops Pratiques — IA Médicale | ICSMAI 2027",
  description:
    "Programme complet des 3 sessions de formation pratique (4h par session) en IA Médicale et Imagerie à ICSMAI 2027, Saïdia.",
};

export default function AtelierPage() {
  const sessions = [
    {
      id: 1,
      title: "1. Médecine Intelligente : Étapes et Simulations d'une Solution IA pour la Prédiction d'une Maladie",
      schedule: "Vendredi Après-midi (14h00 - 18h00)",
      duration: "4h",
      badge: "Session 1",
      description: "Conception de bout en bout d'une solution d'IA prédictive en santé : de la collecte et prétraitement des données jusqu'au déploiement du modèle de simulation."
    },
    {
      id: 2,
      title: "2. Medical AI in Practice : Des données cliniques aux prédictions de confiance (Python & Orange)",
      schedule: "Samedi Matin (08h30 - 12h30)",
      duration: "4h",
      badge: "Session 2 — Notre Atelier",
      description: "Manipulation pratique et comparative (Python & Orange) sur données tabulaires, imagerie, signaux (EEG/ECG) et génomique. Entraînement, validation externe (Hôpital B) et explicabilité des modèles (Nomogrammes)."
    },
    {
      id: 3,
      title: "3. 3D Slicer : Visualisation, segmentation et reconstruction 3D en imagerie médicale",
      schedule: "Samedi Soir (14h00 - 18h00)",
      duration: "4h",
      badge: "Session 3",
      description: "Prise en main avancée du logiciel 3D Slicer pour le traitement d'images scanner/IRM, la segmentation automatique et la reconstruction volumétrique 3D pour la planification médicale."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* En-tête / Bannière d'appel à inscription */}
      <section className="bg-slate-900 text-white py-12 px-4 md:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Titre & Thématique */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <Sparkles className="w-4 h-4" /> Programme de Formation Pratique · ICSMAI 2027
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Workshops Pratiques en Intelligence Artificielle Médicale
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              Une immersion pratique intensive de 3 sessions de 4 heures conçue pour maîtriser les outils modernes de l'IA, de la prédiction clinique et de l'imagerie médicale 3D.
            </p>
          </div>

          {/* Public concerné & Modalités */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
            <div className="flex gap-3">
              <UserCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-white">Public Concerné</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Médecins, résidents, chercheurs, doctorants, ingénieurs et professionnels de santé souhaitant intégrer l'IA dans leur pratique ou leurs travaux.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-white">Format & Horaires</h2>
                <p className="text-sm text-slate-400 mt-1">
                  3 sessions de 4h (12h au total) réparties sur le Vendredi après-midi, Samedi matin et Samedi soir à Saïdia.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CreditCard className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-white">Frais d'Inscription</h2>
                <p className="text-sm text-slate-400 mt-1">
                  <span className="text-xl font-bold text-emerald-400">2 500 DH</span> (Couvre l'accès aux 3 sessions pratiques, les jeux de données et supports d'atelier).
                </p>
              </div>
            </div>
          </div>

          {/* Planning des 3 Sessions */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-400" /> Programme des 3 Sessions de Formation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sessions.map((session) => (
                <div 
                  key={session.id} 
                  className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                    session.id === 2 
                      ? "bg-slate-800/90 border-emerald-500/50 shadow-lg ring-1 ring-emerald-500/30" 
                      : "bg-slate-800/40 border-slate-700/60"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge className={session.id === 2 ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-700 text-slate-200"}>
                        {session.badge}
                      </Badge>
                      <span className="text-xs text-slate-400 font-mono">{session.duration}</span>
                    </div>
                    <h3 className="font-bold text-white text-base leading-snug">
                      {session.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium">
                      {session.schedule}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {session.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons d'Action & Inscription */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Places limitées pour garantir un accompagnement pratique individuel.</span>
            </div>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8">
              <Link href="/#registration">S'inscrire à l'Atelier (2 500 DH)</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Section de l'application interactive Streamlit intégrée */}
      <section className="flex-1 flex flex-col bg-white">
        <div className="bg-emerald-900 px-4 py-3 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm md:text-base">Démonstration / Application Interactive d'Atelier</span>
            <span className="hidden md:inline-block text-xs bg-emerald-800 text-emerald-200 px-2.5 py-0.5 rounded-full">
              Session 2 : Medical AI in Practice
            </span>
          </div>
        </div>
        <div className="h-[800px] w-full">
          <AtelierEmbed src={ATELIER_URL} />
        </div>
      </section>
    </main>
  );
}