"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarClock } from "lucide-react"

export default function Dates() {
  const timelineItems = [
    {
      date: "April 10, 2025",
      title: "Paper Submission Opens",
      description: "Start submitting your research papers.",
    },
    {
      oldDate: "September 05, 2025",
      date: "September 15, 2025",
      title: "Paper Submission Deadline",
      description: "Last day to submit your papers for review.",
    },
    {
      oldDate: "September 05, 2025",
      date: "September 15, 2025",
      title: "Poster Submission Deadline",
      description: "Last day to submit posters.",
    },
    {
      date: "September 25, 2025",
      title: "Notification of Acceptance",
      description: "Authors will be notified of acceptance decisions.",
    },
    {
      date: "October 05, 2025",
      title: "Camera-Ready Submission",
      description: "Deadline for final camera-ready papers.",
    },
    {
      date: "October 10, 2025",
      title: "Early Registration Deadline",
      description: "Last day for early bird registration rates.",
    },
    {
      date: "October 23-25, 2025",
      title: "Conference Dates",
      description: "ICSMAI 2025 takes place in Saidia, Morocco.",
    },
  ]

  return (
    <section id="dates" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Important Dates</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conference Timeline</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Mark your calendar with these important dates for ICSMAI 2025.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 p-4 flex justify-center md:justify-end">
                    <Card className={`w-full max-w-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2">
                            <CalendarClock className="h-5 w-5 text-primary" />
                            {item.oldDate && (
                              <span className="text-red-500 line-through">{item.oldDate}</span>
                            )}
                            <span
                              className={`${
                                item.oldDate ? "text-blue-500" : "text-primary"
                              } font-medium`}
                            >
                              {item.date}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:flex md:items-center md:justify-center hidden">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>

                  <div className="md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
