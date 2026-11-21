"use client"

import { useState } from "react"
import Image from "next/image"

const CATEGORIES = {
  All: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 17, 20, 21, 25, 26],
  Academic: [1, 2, 3, 4, 5, 6, 8, 10],
  Partners: [11, 12, 13, 14, 17, 20, 21, 25, 26],
} as const

type CategoryKey = keyof typeof CATEGORIES

export default function Sponsors() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("All")

  return (
    <section id="sponsors" className="py-14 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our Supporters
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Sponsors
            </h2>
          </div>

          <div className="inline-flex rounded-lg border bg-muted/50 p-1 self-start">
            {(Object.keys(CATEGORIES) as CategoryKey[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 py-4">
          {CATEGORIES[activeTab].map((sponsor) => (
            <div
              key={sponsor}
              className="flex items-center justify-center h-12 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all"
            >
              <Image
                src={`/images/sponsors/${sponsor}.png`}
                alt={`Sponsor ${sponsor}`}
                width={160}
                height={60}
                className="max-h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}