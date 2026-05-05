"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function CallForPapers() {
  const topics = [
    "Artificial Intelligence and Machine Learning",
    "Deep Learning and Neural Networks",
    "Computer Vision and Image Processing",
    "Natural Language Processing",
    "Robotics and Autonomous Systems",
    "Smart Cities and IoT Applications",
    "AI Ethics and Responsible AI",
    "Human-Computer Interaction",
    "Edge Computing and Distributed AI",
    "AI in Healthcare, Finance, and Education",
    "Reinforcement Learning",
    "Knowledge Representation and Reasoning",
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
    <section id="call-for-papers" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Call for Papers</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Submit Your Research</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We invite researchers and practitioners to submit original research papers on topics related to artificial
            intelligence, IoT and Smart Medical. All submissions will undergo a rigorous peer-review process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Topics of Interest</CardTitle>
                <CardDescription>Topics include but are not limited to the following areas:</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ul
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {topics.map((topic, index) => (
                    <motion.li key={index} variants={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{topic}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
                <CardDescription>Important information for authors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Paper Format</h4>
                  <p className="text-sm text-muted-foreground">
                    All submissions must follow the IEEE conference template and be submitted as PDF files.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Paper Length</h4>
                  <p className="text-sm text-muted-foreground">
                    Full papers: 8-10 pages
                    <br />
                    Short papers: 4-6 pages
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Double-Blind Review</h4>
                  <p className="text-sm text-muted-foreground">
                    All submissions will undergo a double-blind review process. Please ensure that your submission does
                    not contain any author information.
                  </p>
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    Submit Your Paper
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

