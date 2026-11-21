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

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {SPONSORS.map((sponsor) => {
            const isTallLogo = sponsor === 17 || sponsor === 8

            return (
              <motion.div
                key={sponsor}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-20 opacity-95 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={`/images/sponsors/${sponsor}.png`}
                  alt={`Sponsor ${sponsor}`}
                  width={200}
                  height={80}
                  className={`w-auto object-contain ${
                    isTallLogo ? "max-h-20" : "max-h-14"
                  }`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}