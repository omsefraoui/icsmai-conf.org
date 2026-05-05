"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Brain, Calendar, FileText, Lightbulb, MapPin, Network, Users, Zap } from "lucide-react"
import Banner from "./banner"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI Research",
      description:
        "Cutting-edge research in artificial intelligence, machine learning, and deep learning for medical applications.",
    },
    {
      icon: <Network className="h-10 w-10 text-primary" />,
      title: "Smart Systems",
      description: "Innovative approaches to smart medical systems, IoT, and cyber-physical systems for healthcare.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Knowledge Exchange",
      description:
        "Platform for researchers and practitioners to exchange ideas and foster collaborations in medical AI.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Industry Insights",
      description:
        "Insights from industry leaders on the practical applications of AI and IoT in medical technologies.",
    },
  ]

  const organizers = [
    "Mohammed Premier University Morocco",
    "Marie and louis Pasteur University France",
    "Université de lorraine Nancy France",
    "University of Moncton Canada",
    "National School of Applied Sciences Oujda",
    "Faculty of Medicine and Pharmacy Oujda",
    "Faculty of Sciences Oujda",
    "CHU Mohammed VI Oujda",
  ]

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="space-y-4 max-w-[800px]"
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              About The Conference
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Advancing Smart Medical Technologies with IoT & AI
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>ICSMAI&apos;25</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Saidia, Morocco</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>Researchers, Academics & Industry Professionals</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-6xl">
            {/* Left Column - Conference Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="lg:col-span-2 text-left space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  The{" "}
                  <strong>
                    Second International Conference on Smart Medical, IoT & Artificial Intelligence (ICSMAI&apos;25)
                  </strong>{" "}
                  is organized by a collaboration of prestigious institutions, in partnership with LSI Laboratory and the IA2D Association.
                </p>

                <p>
                  This inaugural edition aims to bring together students, researchers, and experts in the fields of
                  Medical Technology, IoT, and Artificial Intelligence to share their latest research findings, exchange
                  ideas, and discuss challenges and opportunities in these rapidly evolving domains.
                </p>

                <h3 className="text-xl font-semibold mt-6">Call for Papers</h3>
                <p>
                  Authors are invited to contribute to the conference by submitting articles with new research results,
                  projects, surveying works, and industrial experiences. All submissions must be original work not
                  previously published or currently under review with another conference or journal.
                </p>

                <div className="flex items-center gap-2 mt-6">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="font-medium">
                    Submit your papers by the deadline to participate in this groundbreaking event.
                  </span>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-semibold mb-3">Organized by:</h3>
                <div className="flex flex-wrap gap-2">
                  {organizers.map((org, index) => (
                    <Badge key={index} variant="outline" className="font-normal">
                      {org}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">In collaboration with LSI Laboratory and IA2D Association</p>
              </div>
            </motion.div>

            {/* Right Column - Conference Image */}
            <Banner />
          </div>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={3}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8"
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 relative">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
