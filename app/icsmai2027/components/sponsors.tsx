"use client"

import { motion } from "motion/react"
import Image from "next/image"

const SPONSORS = [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 17, 20, 21, 25, 26]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-14"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Our Supporters
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Sponsors
          </h2>
          <p className="max-w-[750px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are grateful for the support of our sponsors who make this conference possible
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {SPONSORS.map((sponsor, index) => {
            const isTallLogo = sponsor === 17 || sponsor === 8

            return (
              <motion.div
                key={sponsor}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.04, 0.4),
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="flex items-center justify-center w-full h-32 p-4 rounded-xl border bg-card/50 hover:bg-card hover:shadow-sm transition-colors"
              >
                <Image
                  src={`/images/sponsors/${sponsor}.png`}
                  alt={`Sponsor ${sponsor}`}
                  width={200}
                  height={100}
                  className={`w-auto object-contain ${
                    isTallLogo ? "max-h-24" : "max-h-16"
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