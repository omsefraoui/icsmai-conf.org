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
      variants={fadeIn as any}
      className="relative h-full min-h-[460px] rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 bg-white/70 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-slate-200/50 group"
    >
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none group-hover:bg-blue-100/60 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Top Area: Light Mode Tech Orb Cluster */}
      <div className="relative flex justify-center pt-4">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-ping opacity-40" style={{ animationDuration: '3s' }} />
          
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center shadow-md transform group-hover:rotate-6 transition-transform duration-300">
            <Brain className="h-10 w-10 text-blue-600" />
          </div>
          
          <div className="absolute -right-2 top-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-md transform group-hover:-translate-y-1 transition-transform duration-300">
            <Network className="h-5 w-5 text-cyan-600" />
          </div>
          
          <div className="absolute -left-2 bottom-2 w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-md transform group-hover:translate-y-1 transition-transform duration-300">
            <Zap className="h-5 w-5 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Middle Area: Conference Identity */}
      <div className="text-center my-4">
        <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
          International Event
        </span>
        <h3 className="text-3xl font-black text-slate-900 mt-3 tracking-tight">
          ICSMAI <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">2027</span>
        </h3>
        <p className="text-xs text-slate-500 mt-1.5 max-w-[220px] mx-auto font-medium leading-relaxed">
          Smart Medical, IoT & Artificial Intelligence Roadmap
        </p>
      </div>

      {/* Light Digital Countdown Module */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 shadow-sm">
        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 text-center mb-2.5">
          Countdown to Conference
        </p>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white rounded-lg p-2 border border-slate-150 shadow-sm">
            <span className="block text-lg font-bold text-slate-800 tabular-nums font-mono">{timeLeft.days}</span>
            <span className="text-[10px] font-medium text-slate-400">Days</span>
          </div>
          <div className="bg-white rounded-lg p-2 border border-slate-150 shadow-sm">
            <span className="block text-lg font-bold text-blue-600 tabular-nums font-mono">{timeLeft.hours}</span>
            <span className="text-[10px] font-medium text-slate-400">Hours</span>
          </div>
          <div className="bg-white rounded-lg p-2 border border-slate-150 shadow-sm">
            <span className="block text-lg font-bold text-indigo-600 tabular-nums font-mono">{timeLeft.mins}</span>
            <span className="text-[10px] font-medium text-slate-400">Mins</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

