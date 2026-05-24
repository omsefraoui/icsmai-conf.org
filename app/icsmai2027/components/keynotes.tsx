"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export default function Keynotes() {
  const speakers = [
    
    {
      name: "Pr. Omar ELMAZRIA", 
      organization: "Université de lorraine ",
      location: "Nancy, France.",
      image: "/images/keynotes/speaker_19.jpg?height=400&width=400",
      bio: "  ... ", 
      topic: ".........",
    },
    {
      name: "Pr. YASSAMINE BENTATA",
      organization: "FMPO, Med 1st University",
      location: "Oujda, Morocco.",
      image: "/images/keynotes/speaker_17.jpg?height=400&width=400",
      bio: " Professor Yassamine Bentata is a  Professor at the Faculty of Medicine and Pharmacy of Oujda, Mohammed First University. Since 2014, she has headed the Nephrology, Dialysis and Renal Transplantation Department at Mohammed VI University Hospital in Oujda. She holds a PhD in Epidemiology of Medical and Surgical Sciences from Souissi University, Rabat (2016), with research focused on diabetic nephropathy progression. She directs the Laboratory of Epidemiology, Clinical Research, and Public Health. A board member of the Moroccan Society of Nephrology since 2018, she became its Secretary General in 2024. She serves as an expert evaluator for the CNRST and ANEAQ. Former Vice Dean for Academic Affairs (2013–2021), she has supervised numerous doctoral theses and regularly chairs PhD defense juries. Professor Bentata's the corresponding author of many international publications and actively contributes to clinical research and medical education in Morocco. ", 
      topic: ".........",
    },
    {
      name: "Pr. MOULAY AKHLOUFI",
      organization: "Université de Moncton",
      location: "Moncton, Canada.",
     // image: "/placeholder.svg?height=400&width=400",
      image: "/images/keynotes/MoulayAKHLOUFI.jpg?height=400&width=400",
      bio: "Professor Moulay Akhloufi holds a Bachelor of Science in Physics from the University Abdelmalek Essaadi (Morocco) and a Bachelor of Engineering from Telecom Saint-Etienne (France). He has a Master's and Ph.D. in Electrical Engineering from Ecole Polytechnique of Montreal and Laval University (Canada), respectively. Additionally, he holds an MBA from Laval University. Currently, Professor Akhloufi is a Computer Science Professor at Université de Moncton. He leads the Perception, Robotics, and Intelligent Machines (PRIME) research lab and serves as the Director of the Center for Artificial Intelligence NB Power. Additionally, he holds the Chair of AI in Healthcare. Before joining Université de Moncton, he acquired significant experience in the industry and technology transfer, particularly in machine vision and robotics. Professor Akhloufi's research expertise spans across the domains of artificial intelligence, computer vision, and intelligent robotic systems, where he has contributed to over two hundred publications. Additionally, he holds the status of a Senior Member of the Institute of Electrical and Electronics Engineers (IEEE). He is also an active member of the Society of Photo-Optical Instrumentation Engineers (SPIE). ",
      topic: "----------",
    }, 
         /* {
      name: "Pr. INTISSAR HADDIYA",
      organization: "FMPO, Med 1st University",
      location: "Oujda, Morocco.",
      image: "/images/keynotes/speaker_11.jpg?height=400&width=400",
      bio: "Intissar HADDIYA, MD, PhD, is a Moroccan nephrologist, and Professor of Nephrology at Mohammed Premier University, Oujda. She graduated from the Faculty of Medicine in Rabat in 2006 and specialized in nephrology, dialysis, and kidney transplantation, with training in France. She holds a PhD in Social Responsibility in Health (2021), a specialization in AI in Healthcare (Stanford University, 2024) and has been President of the Kidney Failure Patients Support Association in Eastern Morocco since 2022. An author and reviewer for several medical journals, she has published over 50 scientific articles and a book on social responsibility in health in Africa (Peter Lang, 2023). She also holds multiple international certifications in nephrology, medical education, and ethics..", 
      topic: "Environmental determinants of hypertension",
    },
    {
      name: "Pr. Abdelkrim DAOUDI",
      organization: "FMPO, Med 1st University",
      location: "Oujda, Morocco.",
      image: "/images/keynotes/speaker_14.jpg?height=400&width=400",
      bio: "Leading researcher in deep learning and computer vision with over 100 publications.",
      topic: "Telemedicine: experience in the Eastern region",
    }  */
    
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
    <section id="keynotes" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Keynote Speakers </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">World-Class Experts </h2>
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
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 p-0 ">
                <CardContent className="p-0">
                  <div className="relative flex justify-center pt-6 pb-4 bg-gradient-to-b from-primary/10 to-background">
                    <Avatar className="w-36 h-36 border-4 border-background shadow-md">
                      <AvatarImage src={speaker.image} alt={speaker.name} 
                              className="object-cover " />
                      <AvatarFallback className="text-3xl">
                        {speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        Keynote
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground">{speaker.organization}</p>
                      <p className="text-sm text-muted-foreground">{speaker.location}</p>
                    </div>

                    <div className="pt-1">
                      <p className="text-sm font-medium">Speaking on:</p>
                      <p className="text-primary font-medium">{speaker.topic}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className= "mt-auto px-2 pb-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1 rounded-full">
                        <Info className="h-4 w-4" />
                        <span>Read Bio</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-90 max-h-80 overflow-y-auto">
                      <div className="space-y-2">
                        <h4 className="font-medium text-lg">{speaker.name}</h4>
                        <p className="text-sm text-muted-foreground">{speaker.bio}</p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  )
}

