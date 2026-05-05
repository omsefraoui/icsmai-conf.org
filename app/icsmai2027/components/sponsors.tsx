"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { InfiniteSlider } from "./motion-primitives/infinite-slider"

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-background">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Supporters
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sponsors</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are grateful for the support of our sponsors who make this conference possible
              </p>
            
            <div className="mt-8 max-w-[1200px]">
            <InfiniteSlider gap={24} reverse>
              {[1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 19].map((sponsor, index) => (
                  <motion.div
                  key={sponsor}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        className="flex items-center justify-center h-full"
                      >
                        <Image
                          src={`/images/sponsors/${sponsor}.png`}
                          alt={`Sponsor ${sponsor}`}
                          width={200}
                          height={100}
                          className="h-[100px] w-auto mx-6 mt-8 "
                        />
                      </motion.div>
                </motion.div>
              ))}
            </InfiniteSlider>
            </div>
          </motion.div>
        </section>
   )
}

