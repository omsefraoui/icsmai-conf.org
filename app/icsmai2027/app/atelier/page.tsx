import type { Metadata } from "next";
import AtelierEmbed from "./AtelierEmbed";

/**
 * Page /atelier : affiche l'application Streamlit de l'atelier (identique à la version locale),
 * hébergée sur Streamlit Community Cloud à partir du dossier ./atelier_ia_medicale_simple de ce dépôt.
 * L'adresse se règle dans Vercel : variable d'environnement NEXT_PUBLIC_ATELIER_URL.
 * (L'ancienne page de présentation est conservée dans page_02.tsx.)
 */
const ATELIER_URL = process.env.NEXT_PUBLIC_ATELIER_URL ?? "https://icsmai-atelier.streamlit.app";

export const metadata: Metadata = {
  title: "Atelier — Medical AI in Practice | ICSMAI 2027",
  description:
    "Hands-on workshop (4 h) : des données cliniques aux prédictions dignes de confiance. ICSMAI 2027, Saïdia.",
};

export default function AtelierPage() {
  return (
    // L'en-tête du site n'apparaît qu'au défilement : la page occupe tout l'écran.
    <main className="flex h-dvh flex-col bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-emerald-800 px-4 py-2 text-white md:px-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-base font-bold md:text-lg">Medical AI in Practice</span>
          <span className="text-sm text-emerald-100">
            Hands-on workshop · 4 h · Pr. Omar Sefraoui · ICSMAI 2027, Saïdia
          </span>
        </div>
        <a
          href={ATELIER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
        >
          Ouvrir en plein écran ↗
        </a>
      </div>
      <AtelierEmbed src={ATELIER_URL} />
    </main>
  );
}
