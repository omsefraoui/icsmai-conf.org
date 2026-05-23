"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Globe, MapPin, ChevronDown, FileText, Boxes } from "lucide-react"
import Link from "next/link"
import { AnimatedNumber } from "./motion-primitives/animated-number"
import Image from "next/image"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [values, setValues] = useState([0, 0])
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 250])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    // Simulating API/Hydration delay beautifully matching the entry animation
    const timer = setTimeout(() => {
      setValues([300, 20])
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { icon: <Users className="h-5 w-5" />, value: values[0], label: "Attendees" },
    { icon: <Globe className="h-5 w-5" />, value: values[1], label: "Countries" },
  ]

  const letters = ['I', 'C', 'S', 'M', 'A', 'I']

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-white"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png" // Path to your generated background image
          alt="Conference Hall with Digital Network"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Modern Blur and Overlay for Text Legibility */}
        <div className="absolute inset-0 backdrop-blur-sm bg-slate-950/70" />
      </div>

      <motion.div 
        className="container px-4 md:px-6 relative z-10 w-full max-w-5xl mx-auto" 
        style={{ y, opacity }}
      >
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Animated Conference Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="relative bg-slate-900/60 backdrop-blur-xl border shadow-2xl shadow-blue-500/5 rounded-full px-5 py-2 text-blue-200 text-sm md:text-base font-medium flex items-center gap-2.5 border-blue-500/20"
            >
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="tracking-wide">April 22-24, 2027</span>
            </motion.div>
          </motion.div>

          {/* Main Title / Acronym Area */}
          <div className="space-y-4">
            <div className="flex items-center justify-center tracking-tight select-none">
              <div className="flex items-center justify-center flex-wrap gap-1 md:gap-2">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.04 * index, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.1, color: '#38bdf8' }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white cursor-default transition-colors duration-200"
                    style={{
                      textShadow: "0 4px 20px rgba(14, 165, 233, 0.2)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 ml-2 md:ml-4"
                >
                  2027
                </motion.span>
              </div>
            </div>

            {/* Sub-headline */}
            <motion.h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed font-normal tracking-wide text-balance px-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              The 3rd International Conference on <span className="text-white font-semibold">Smart Medical</span>, <span className="text-blue-400 font-semibold">IoT</span> & <span className="text-indigo-400 font-semibold">Artificial Intelligence</span>
            </motion.h1>
          </div>

          {/* Sleek Gradient Separator Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "96px" }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
            className="h-[3px] bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.3)]"
          />

          {/* Stats & Location Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 items-center justify-center max-w-2xl w-full pt-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 text-blue-400 group-hover:text-blue-300 group-hover:border-blue-500/30 group-hover:bg-slate-900/80 transition-all duration-300 shadow-xl">
                  {stat.icon}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <AnimatedNumber
                      value={stat.value}
                      springOptions={{ bounce: 0, duration: 1500 }}
                    />
                    <span className="text-blue-400 font-bold ml-0.5">+</span>
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium tracking-wider uppercase mt-0.5">{stat.label}</span>
                </div>
              </div>
            ))}

            {/* Map Pin Location Block */}
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-500/30 group-hover:bg-slate-900/80 transition-all duration-300 shadow-xl">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">Saidia</span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium tracking-wider uppercase mt-0.5">Morocco</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Group Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto pt-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[170px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl px-7 py-6 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-0 group"
              asChild
            >
              <Link href="#registration">
                <Boxes className="mr-2 h-4 w-4 opacity-80 group-hover:scale-110 transition-transform duration-200" />
                Register Now
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[170px] bg-slate-900/40 backdrop-blur-md border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white hover:bg-slate-900/80 font-medium rounded-xl px-7 py-6 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              asChild
            >
              <Link href="#submission">
                <FileText className="mr-2 h-4 w-4 opacity-80 group-hover:scale-110 transition-transform duration-200" />
                Submit Paper
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Elegant Infinite Scroll-Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-slate-500 hover:text-blue-400 transition-colors duration-200 group"
        >
          <motion.div
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 group-hover:border-blue-500/30 shadow-xl"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}