"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Coffee, MapPin, Presentation, Users } from "lucide-react"

export default function Program() {
  const [activeDay, setActiveDay] = useState("day1")

  const days = [
    { id: "day1", label: "Day 1", date: "October 23" },
    { id: "day2", label: "Day 2", date: "October 24" },
    { id: "day3", label: "Day 3", date: "October 25" },
  ]

  const schedules = {
    day1: [
      {
        time: "14:00 - 15:30",
        title: "Welcome Participants and Registration",
        location: "Main Conference Registration",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "15:30 - 16:30",
        title: "Opening Ceremony",
        speaker: "Conference Chairs",
        location: "Conference Hall",
        type: "ceremony",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "10:00 - 11:30",
        title: "Keynote: The Future of Generative AI",
        speaker: "Dr. Sarah Johnson",
        location: "Auditorium A",
        type: "keynote",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "11:30 - 13:00",
        title: "Lunch Break",
        location: "Dining Hall",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "13:00 - 15:00",
        title: "Technical Session: Deep Learning Advances",
        location: "Room 101",
        type: "session",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "15:00 - 15:30",
        title: "Coffee Break",
        location: "Lobby",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "15:30 - 17:30",
        title: "Technical Session: Computer Vision",
        location: "Room 102",
        type: "session",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "18:00 - 20:00",
        title: "Welcome Reception",
        location: "Garden Terrace",
        type: "social",
        icon: <Users className="h-5 w-5" />,
      },
    ],
    day2: [
      {
        time: "08:30 - 09:00",
        title: "Breakfast",
        location: "Main Hall",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "09:00 - 10:30",
        title: "Keynote: Reinforcement Learning for Autonomous Systems",
        speaker: "Prof. Michael Chen",
        location: "Auditorium A",
        type: "keynote",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "10:30 - 11:00",
        title: "Coffee Break",
        location: "Lobby",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "11:00 - 13:00",
        title: "Technical Session: Natural Language Processing",
        location: "Room 101",
        type: "session",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "13:00 - 14:30",
        title: "Lunch Break",
        location: "Dining Hall",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "14:30 - 16:30",
        title: "Technical Session: Robotics and Autonomous Systems",
        location: "Room 102",
        type: "session",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "16:30 - 17:00",
        title: "Coffee Break",
        location: "Lobby",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "17:00 - 18:30",
        title: "Panel Discussion: AI Ethics and Governance",
        location: "Auditorium B",
        type: "panel",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "19:00 - 22:00",
        title: "Conference Banquet",
        location: "Grand Ballroom",
        type: "social",
        icon: <Users className="h-5 w-5" />,
      },
    ],
    day3: [
      {
        time: "08:30 - 09:00",
        title: "Breakfast",
        location: "Main Hall",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "09:00 - 10:30",
        title: "Keynote: Multimodal Learning: Bridging Vision and Language",
        speaker: "Dr. Emily Rodriguez",
        location: "Auditorium A",
        type: "keynote",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "10:30 - 11:00",
        title: "Coffee Break",
        location: "Lobby",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "11:00 - 13:00",
        title: "Technical Session: AI in Healthcare",
        location: "Room 101",
        type: "session",
        icon: <Users className="h-5 w-5" />,
      },
      {
        time: "13:00 - 14:30",
        title: "Lunch Break",
        location: "Dining Hall",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "14:30 - 16:00",
        title: "Keynote: Aligning AI Systems with Human Values",
        speaker: "Dr. James Wilson",
        location: "Auditorium A",
        type: "keynote",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        time: "16:00 - 16:30",
        title: "Coffee Break",
        location: "Lobby",
        type: "break",
        icon: <Coffee className="h-5 w-5" />,
      },
      {
        time: "16:30 - 17:30",
        title: "Closing Ceremony & Best Paper Awards",
        location: "Auditorium A",
        type: "ceremony",
        icon: <Presentation className="h-5 w-5" />,
      },
    ],
  }

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "keynote":
        return "default"
      case "session":
        return "secondary"
      case "break":
        return "outline"
      case "social":
        return "secondary"
      case "panel":
        return "secondary"
      case "ceremony":
        return "default"
      default:
        return "outline"
    }
  }

  return (
    <section id="program" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Conference Program
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Schedule of Events</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our comprehensive program of keynotes, technical sessions, and networking events.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-14">
              {days.map((day) => (
                <TabsTrigger key={day.id} value={day.id} className="text-center">
                  <div className="flex flex-col">
                    <span className="font-medium">{day.label}</span>
                    <span className="text-xs text-muted-foreground">{day.date}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {days.map((day) => (
              <TabsContent key={day.id} value={day.id} className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Program for {day.label} ({day.date})
                    </CardTitle>
                    <CardDescription>All times are in Morocco Standard Time (GMT+1)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {schedules[day.id as keyof typeof schedules].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="sm:w-36 flex-shrink-0">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{item.time}</span>
                            </div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <h3 className="font-bold">{item.title}</h3>
                              <Badge variant={getBadgeVariant(item.type)} className="w-fit">
                                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                              </Badge>
                            </div>
                            {item.speaker && <p className="text-sm text-muted-foreground">Speaker: {item.speaker}</p>}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          <div className="sm:w-10 flex items-center justify-center">
                            <div className="p-2 rounded-full bg-primary/10">{item.icon}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

