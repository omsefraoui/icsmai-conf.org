import type { Metadata } from "next";
import Link from "next/link";
import AtelierEmbed from "../AtelierEmbed";

/**
 * Page /atelier/pratique : l'application Streamlit de la session 2 (identique à la version locale),
 * hébergée sur Streamlit Community Cloud à partir du dossier ../atelier_ia_medicale_simple de ce dépôt.
 * L'adresse se règle dans Vercel : variable d'environnement NEXT_PUBLIC_ATELIER_URL.
 */
const ATELIER_URL = process.env.NEXT_PUBLIC_ATELIER_URL ?? "https://icsmai-atelier.streamlit.app";

export const metadata: Metadata = {
  title: "Application de l'atelier — Medical AI in Practice | ICSMAI 2027",
  description:
    "Application pratique de la session 2 : des données cliniques aux prédictions dignes de confiance. ICSMAI 2027, Saïdia.",
};

export default function AtelierPratiquePage() {
  return (
    // L'en-tête du site n'apparaît qu'au défilement : la page occupe tout l'écran.
    <main className="flex h-dvh flex-col bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-emerald-800 px-4 py-2 text-white md:px-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <Link href="/atelier" className="text-sm text-emerald-100 hover:text-white">
            ← Ateliers
          </Link>
          <span className="text-base font-bold md:text-lg">Medical AI in Practice</span>
          <span className="text-sm text-emerald-100">
            Session 2 · 4 h · Pr. Omar Sefraoui · ICSMAI 2027, Saïdia
          </span>
        </div>
      </div>
      <AtelierEmbed src={ATELIER_URL} />
    </main>
  );
}
