"use client"

import Image from "next/image"

const SPONSORS = [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 17, 20, 21, 25, 26]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl mb-6 text-center">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Sponsors & Institutional Partners
        </h2>
      </div>

      {/* Ajoutez @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } dans votre CSS global si non défini */}
      <div className="group relative flex overflow-hidden py-2">
        <div className="flex shrink-0 items-center gap-10 pr-10 animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
            <div
              key={`${sponsor}-${idx}`}
              className="flex items-center justify-center h-12 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <Image
                src={`/images/sponsors/${sponsor}.png`}
                alt={`Sponsor ${sponsor}`}
                width={150}
                height={56}
                className="max-h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}