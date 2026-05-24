"use client"

import { useEffect, useState } from "react"
import { Brain, Network, Zap } from "lucide-react"
import { motion } from "motion/react"

export default function Banner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 })

  useEffect(() => {
    // Target conference start date: April 22, 2027
    const targetDate = new Date("2027-04-22T00:00:00").getTime()

    const calculateTime = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        })
      }
    }

    calculateTime()
    const interval = setInterval(calculateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      
      className="relative h-full min-h-[460px] rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 border shadow-2xl shadow-blue-900/30 group"
      style={{
        backgroundColor: "oklch(0.49 0.2 264)",
        borderColor: "oklch(0.65 0.14 264 / 0.4)"
      }}
    >
      {/* Light Inner Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -z-10 pointer-events-none group-hover:bg-white/30 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      {/* High-fidelity Technical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_80%,transparent_100%)] opacity-10 pointer-events-none" />

      {/* Top Area: High-Contrast Tech Orb Cluster */}
      <div className="relative flex justify-center pt-4">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-40" style={{ animationDuration: '3s' }} />
          
          <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-md transform group-hover:rotate-6 transition-transform duration-300">
            <Brain className="h-10 w-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </div>
          
          <div className="absolute -right-2 top-0 w-10 h-10 rounded-xl flex items-center justify-center border shadow-md transform group-hover:-translate-y-1 transition-transform duration-300"
               style={{ backgroundColor: "oklch(0.52 0.16 264)", borderColor: "oklch(0.62 0.14 264 / 0.5)" }}>
            <Network className="h-5 w-5 text-cyan-200" />
          </div>
          
          <div className="absolute -left-2 bottom-2 w-10 h-10 rounded-xl flex items-center justify-center border shadow-md transform group-hover:translate-y-1 transition-transform duration-300"
               style={{ backgroundColor: "oklch(0.52 0.16 264)", borderColor: "oklch(0.62 0.14 264 / 0.5)" }}>
            <Zap className="h-5 w-5 text-amber-300" />
          </div>
        </div>
      </div>

      {/* Middle Area: Conference Identity */}
      <div className="text-center my-4">
        <span className="text-[10px] font-bold tracking-widest text-white uppercase bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
          International Event
        </span>
        <h3 className="text-3xl font-black text-white mt-3 tracking-tight">
          ICSMAI <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">2027</span>
        </h3>
        <p className="text-xs text-white/90 mt-1.5 max-w-[220px] mx-auto font-medium leading-relaxed opacity-90">
          Smart Medical, IoT & Artificial Intelligence Roadmap
        </p>
      </div>

      {/* Frosted Digital Countdown Module */}
      <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-lg">
        <p className="text-[10px] uppercase tracking-wider font-bold text-white/90 text-center mb-2.5">
          Countdown to Conference
        </p>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <span className="block text-lg font-bold tabular-nums font-mono" style={{ color: "oklch(0.58 0.17 264)" }}>{timeLeft.days}</span>
            <span className="text-[10px] font-medium text-slate-400">Days</span>
          </div>
          <div className="bg-white rounded-lg p-2 shadow-sm">
            
            <span className="block text-lg font-bold tabular-nums font-mono" style={{ color: "oklch(0.58 0.17 264)" }}>{timeLeft.hours}</span>
            <span className="text-[10px] font-medium text-slate-400">Hours</span>
          </div>
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <span className="block text-lg font-bold tabular-nums font-mono" style={{ color: "oklch(0.58 0.17 264)" }}>{timeLeft.mins}</span>
            <span className="text-[10px] font-medium text-slate-400">Mins</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}