"use client"

import { motion } from "motion/react"
import Image from "next/image"

const SPONSORS = [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 17, 20, 21, 25, 26]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-14 bg-background border-t border-b">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Our Supporters
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Sponsors & Partners
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {SPONSORS.map((sponsor) => (
            <motion.div
              key={sponsor}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center h-12 opacity-75 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200"
            >
              <Image
                src={`/images/sponsors/${sponsor}.png`}
                alt={`Sponsor ${sponsor}`}
                width={160}
                height={64}
                className="max-h-11 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}