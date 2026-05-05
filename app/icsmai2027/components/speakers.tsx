"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      role: "AI Research Lead",
      organization: "Stanford University",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Leading researcher in deep learning and computer vision with over 100 publications.",
      topic: "The Future of Generative AI",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Prof. Michael Chen",
      role: "Director",
      organization: "MIT AI Lab",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Pioneer in reinforcement learning and robotics with 20+ years of experience.",
      topic: "Reinforcement Learning for Autonomous Systems",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief AI Scientist",
      organization: "Google DeepMind",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Expert in natural language processing and multimodal learning.",
      topic: "Multimodal Learning: Bridging Vision and Language",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Dr. James Wilson",
      role: "Research Director",
      organization: "OpenAI",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="speakers" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Keynote Speakers</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">World-Class Experts</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn from leading researchers and practitioners in AI, IoT and Smart Medical.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {speakers.map((speaker, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <Avatar className="w-full h-full rounded-none">
                        <AvatarImage
                          src={speaker.image}
                          alt={speaker.name}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <AvatarFallback className="w-full h-full rounded-none text-4xl">
                          {speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        Keynote
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {speaker.role}, {speaker.organization}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{speaker.bio}</p>
                    <div className="pt-2">
                      <p className="text-sm font-medium">Speaking on:</p>
                      <p className="text-primary font-medium">{speaker.topic}</p>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Link
                        href={speaker.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href={speaker.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link href="#" className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
            View all speakers
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

