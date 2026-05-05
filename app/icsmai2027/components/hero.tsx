"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Globe, MapPin, ChevronDown, FileText, Boxes } from "lucide-react"
import Link from "next/link"
import { AnimatedNumber } from "./motion-primitives/animated-number"
import Image from "next/image"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const [values, setValues] = useState([0, 0])
  const controls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setValues([300, 20, 25])
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const stats = [
    { icon: <Users className="h-5 w-5" />, value: values[0], label: "Attendees" },
    { icon: <Globe className="h-5 w-5" />, value: values[1], label: "Countries" },
  ]

  const letters = ['I', 'C', 'S', 'M', 'A', 'I']

  return (
    <section
      ref={ref}
      className="w-full min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden bg-slate-900 text-blue-100 hero-section"
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Conference background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/40" />
      </div>

      <motion.div className="container px-4 md:px-6 relative z-10" style={{ y, opacity }}>
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Animated conference badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full transform scale-110 breathing-shadow" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/5 backdrop-blur-lg border shadow-xl rounded-full px-6 py-3 text-blue-50 font-medium text-lg flex items-center gap-2 border-blue-400/30"
            >
              <Calendar className="h-4 w-4 text-blue-300" />
              <span className="relative overflow-hidden">
                <span className="relative">April 22-24, 2027</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Main title */}
          <div className="space-y-4 mt-6">
            <div className="flex items-baseline justify-center">
              <div className="flex items-baseline cursor-default">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * index, ease: "easeOut" }}
                    whileHover={{ y: -5 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-white glow-text"
                    style={{
                      textShadow:
                        "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-200 ml-4"
                >
                  2027
                </motion.span>
              </div>
            </div>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-blue-50/90 max-w-3xl mx-auto mt-6 leading-relaxed font-light text-balance tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              The 2nd International Conference on Smart Medical, IoT & Artificial Intelligence
            </motion.h2>
          </div>

          {/* Highlight bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-0.5 w-24 bg-gradient-to-r from-blue-300 to-blue-600 rounded-full overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-white/50"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 py-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl text-blue-300 group-hover:text-blue-100 transition-all duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">{stat.icon}</div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white flex items-center gap-1">
                    <AnimatedNumber
                      value={stat.value}
                      springOptions={{ bounce: 0, duration: 2000 }}
                      className="tracking-tight"
                    />
                    <span className="text-blue-400">+</span>
                  </span>
                  <span className="text-sm text-blue-200 font-medium tracking-wide">{stat.label}</span>
                </div>
              </motion.div>
            ))}

            {/* Map Pin */}
            <motion.div
              className="flex flex-col items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl text-blue-300 group-hover:text-blue-100 transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <MapPin className="h-5 w-5 relative" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white flex items-center gap-1">Saidia</span>
                <span className="text-sm text-blue-200 font-medium tracking-wide">Morocco</span>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-600/40 border-0"
              asChild
            >
              <Link href="#registration" className="btn-hover-effect">
                <span className="relative z-10 flex items-center gap-2">
                  <Boxes className="h-5 w-5 transition-transform group-hover:scale-110 duration-300" />
                  Register Now
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border border-blue-400/30 text-blue-300 hover:text-blue-100 px-8 py-6 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 shadow-lg shadow-blue-900/10"
              asChild
            >
              <Link href="#submission" className="btn-hover-effect">
                <span className="relative z-10 flex items-center gap-2">
                  <FileText className="h-5 w-5 transition-transform group-hover:scale-110 duration-300" />
                  Submit Paper
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-blue-300 hover:text-blue-100 transition-colors"
        >
          <motion.div
            className="p-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
            whileHover={{ y: 5, scale: 1.1 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
