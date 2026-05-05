import { motion } from "motion/react"
import { Brain, Cpu, Sparkles } from "lucide-react"


export default // Floating elements animation
function FloatingElements() {
  const elements = [
    { icon: <Brain className="h-full w-full" />, size: "w-16 h-16", color: "text-blue-400/20" },
    { icon: <Cpu className="h-full w-full" />, size: "w-12 h-12", color: "text-blue-500/20" },
    { icon: <Sparkles className="h-full w-full" />, size: "w-10 h-10", color: "text-blue-300/20" },
    { icon: <Brain className="h-full w-full" />, size: "w-14 h-14", color: "text-blue-400/20" },
    { icon: <Cpu className="h-full w-full" />, size: "w-8 h-8", color: "text-blue-500/20" },
    { icon: <Sparkles className="h-full w-full" />, size: "w-12 h-12", color: "text-blue-300/20" },
  ]

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} opacity-50`}
          initial={{
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
          }}
          animate={{
            x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
            y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </>
  )
}