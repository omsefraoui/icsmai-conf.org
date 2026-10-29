"use client";

import { useEffect, useState } from "react";

/**
 * Intègre l'application Streamlit (hébergée sur Streamlit Community Cloud) dans le site.
 * - `?embed=true` masque l'habillage Streamlit pour une intégration propre ;
 * - un écran d'attente s'affiche tant que l'application démarre (jusqu'à ~1 min si elle dormait).
 */
export default function AtelierEmbed({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const base = src.replace(/\/+$/, "");
  const url = `${base}/?embed=true&embed_options=light_theme`;

  useEffect(() => {
    const t = setTimeout(() => setSlow(true), 12000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
      {!loaded && (
        <div
          role="status"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            background: "#F4F8F9",
            color: "#1B2A35",
            textAlign: "center",
            padding: 24,
            zIndex: 1,
          }}
        >
          <div className="atelier-spinner" aria-hidden />
          <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>Chargement de l&apos;atelier…</p>
          {slow && (
            <p style={{ maxWidth: 520, margin: 0, color: "#4A5A63" }}>
              L&apos;application se réveille, cela peut prendre jusqu&apos;à une minute. Si rien ne s&apos;affiche,{" "}
              <a href={base} target="_blank" rel="noopener noreferrer" style={{ color: "#0E7C86", fontWeight: 600 }}>
                ouvrez-la dans un nouvel onglet
              </a>
              .
            </p>
          )}
        </div>
      )}
      <iframe
        src={url}
        title="Atelier Medical AI in Practice — ICSMAI 2027"
        onLoad={() => setLoaded(true)}
        allow="clipboard-write; fullscreen"
        style={{ border: 0, width: "100%", height: "100%", display: "block" }}
      />
      <style>{`
        .atelier-spinner { width: 44px; height: 44px; border-radius: 50%;
          border: 4px solid #CFE3E6; border-top-color: #0E7C86; animation: atelier-spin 0.9s linear infinite; }
        @keyframes atelier-spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
