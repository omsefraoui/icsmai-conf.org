"use client"

import { motion } from "motion/react"
import Link from "next/link"

export default function Acknowledgment() {
  const contentLines = [
    `The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.`,
    `By submitting to ICSMAI 2027, authors confirm that their work is original, has not been published previously, and is not under consideration elsewhere. Authors agree to abide by the ethical standards and review process of the conference.`,
  ]

  return (
    <section id="acknowledgment" className="w-full py-18 md:py-20 md:pb-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Acknowledgment</h2>

            {contentLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                {line}{" "}
                {index === 1 && (
                  <Link
                    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICSMAI2025"
                    className="text-blue-800 underline hover:text-blue-900"
                  >
                    Go to CMT Platform
                  </Link>
                )}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
