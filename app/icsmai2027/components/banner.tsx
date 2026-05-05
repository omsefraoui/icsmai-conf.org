import { Brain, Network, Zap } from "lucide-react";
import { motion } from "motion/react";
export default function Banner() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i:number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1 * i,
            duration: 0.5,
          },
        }),
      }
    return (
       <>
       {/* Right Column - Dark Glass Visual */}
       
       <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={2}
          className="relative h-full min-h-[400px] rounded-2xl overflow-hidden flex items-center justify-center"
        >
          {/* Dark background with glass effect */}
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-lg rounded-2xl border border-gray-800/50" />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-violet-800/20 rounded-2xl" />
          {/* Glass effect highlights */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl" />

          <div className="relative z-10 p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-indigo-600/30 backdrop-blur-md flex items-center justify-center border border-indigo-500/20">
                  <Brain className="h-12 w-12 text-indigo-400" />
                </div>
                <div className="absolute -right-4 -bottom-2 w-12 h-12 rounded-full bg-cyan-500/30 backdrop-blur-md flex items-center justify-center border border-cyan-400/20">
                  <Network className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="absolute -left-4 -bottom-2 w-12 h-12 rounded-full bg-fuchsia-500/30 backdrop-blur-md flex items-center justify-center border border-fuchsia-400/20">
                  <Zap className="h-6 w-6 text-fuchsia-400" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-white">ICSMAI&apos;25</h3>
            <p className="text-gray-400 mb-6">International Conference</p>

            <div className="space-y-3 text-left">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="text-gray-300">Smart Medical Technologies</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-gray-300">Internet of Things</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
                <span className="text-gray-300">Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </motion.div>
       </>
    )
}