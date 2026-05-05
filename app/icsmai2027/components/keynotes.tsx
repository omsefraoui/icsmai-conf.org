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
      name: "Pr. SHERMIN VOSHMGIR",
      organization: "Vienna University, Austria - Founder of BlockchainHub and  Token Kitchen.",
      location: "Author of the book 'Token Economy'. ",
     // image: "/placeholder.svg?height=400&width=400",
      image: "/images/keynotes/speaker_16.jpg?height=400&width=400",
      bio: "Shermin is the author of the best selling book Token Economy and the founder of Token Kitchen. In the past she founded BlockchainHub Berlin and was the director of the Research Institute for Cryptoeconomics at the Vienna University of Economics which she also co-founded. Shermin was also a curator of the infamous project TheDAO back in 2016. Shermin studied information systems in Vienna and filmmaking in Madrid. Under her pseudonym KAMIKAT.SE  she has also published her creative works. An Austrian with Iranian roots, she now lives on an olive farm in Portugal, where she works at the intersection of technology, agriculture, art, and social science. Her biggest strength is to make complex issues easily understandable to a wide audience without losing the depth or scope of the issues she writes or talks about. Shermin has a long track record of public speaking about blockchain, cryptocurrencies, Web3 and the future of technologies in general – from prestigious community conferences such as TedX, The Next Web or Re:publica, to private events for companies and institutions such as Vodafone, Audi, IMF and the Worldbank. She has a multidisciplinary perspective of how Web3 will impact different areas of society. She believes that Web3 and its tokenized applications can shift the dynamics of our socio-economic systems. Her focus is to make technology accessible to a non-tech audience so that all those who use technology can also take part in the decision-making process of the technology they use. ",
      topic: "Web3 on the Intersection of Blockchain, AI & IoT",
    }, 
    {
      name: "Pr. YASSAMINE BENTATA",
      organization: "FMPO, Med 1st University",
      location: "Oujda, Morocco.",
      image: "/images/keynotes/speaker_17.jpg?height=400&width=400",
      bio: " Professor Yassamine Bentata is a  Professor at the Faculty of Medicine and Pharmacy of Oujda, Mohammed First University. Since 2014, she has headed the Nephrology, Dialysis and Renal Transplantation Department at Mohammed VI University Hospital in Oujda. She holds a PhD in Epidemiology of Medical and Surgical Sciences from Souissi University, Rabat (2016), with research focused on diabetic nephropathy progression. She directs the Laboratory of Epidemiology, Clinical Research, and Public Health. A board member of the Moroccan Society of Nephrology since 2018, she became its Secretary General in 2024. She serves as an expert evaluator for the CNRST and ANEAQ. Former Vice Dean for Academic Affairs (2013–2021), she has supervised numerous doctoral theses and regularly chairs PhD defense juries. Professor Bentata's the corresponding author of many international publications and actively contributes to clinical research and medical education in Morocco. ", 
      topic: "The Future of Medicine: Horizons and Limits!",
    },
    {
      name: "Pr. MOULAY AKHLOUFI",
      organization: "Université de Moncton",
      location: "Moncton, Canada.",
     // image: "/placeholder.svg?height=400&width=400",
      image: "/images/keynotes/MoulayAKHLOUFI.jpg?height=400&width=400",
      bio: "Professor Moulay Akhloufi holds a Bachelor of Science in Physics from the University Abdelmalek Essaadi (Morocco) and a Bachelor of Engineering from Telecom Saint-Etienne (France). He has a Master's and Ph.D. in Electrical Engineering from Ecole Polytechnique of Montreal and Laval University (Canada), respectively. Additionally, he holds an MBA from Laval University. Currently, Professor Akhloufi is a Computer Science Professor at Université de Moncton. He leads the Perception, Robotics, and Intelligent Machines (PRIME) research lab and serves as the Director of the Center for Artificial Intelligence NB Power. Additionally, he holds the Chair of AI in Healthcare. Before joining Université de Moncton, he acquired significant experience in the industry and technology transfer, particularly in machine vision and robotics. Professor Akhloufi's research expertise spans across the domains of artificial intelligence, computer vision, and intelligent robotic systems, where he has contributed to over two hundred publications. Additionally, he holds the status of a Senior Member of the Institute of Electrical and Electronics Engineers (IEEE). He is also an active member of the Society of Photo-Optical Instrumentation Engineers (SPIE). ",
      topic: "Advances and Challenges in AI for Healthcare",
    }, 
     {
      name: "Pr. MOHAMMED MESTARI",
      organization: " ENSET,  Hassan II University, Casablanca",
      location: "Mohammedia, Morocco.",
      image: "/images/keynotes/speaker_18.jpg?height=400&width=400",
      bio: " Professor Mohammed Mestari is a researcher and academic in the field of artificial intelligence and computational intelligence. He is a Co-founder of the International Neural Network Society (INNS) Morocco Chapter and the IEEE Computational Intelligence Society Morocco Chapter. He also serves as a contributing member of the prestigious editorial board of the IEEE Transactions on Neural Networks and Learning Systems (TNNLS). Professor Mestari’s research spans several high-impact domains within AI, with a strong emphasis on neural networks and their real-world applications. His work focuses on neural network architectures for image classification, data-driven modeling, and the hardware implementation of neural algorithms. He has contributed significantly to the development of high-speed and low-power systems for neural computing, bridging the gap between algorithmic design and efficient embedded deployment. A major area of his theoretical and applied research lies in the hardware-oriented implementation of decomposition-coordination principles for advanced control systems. This includes the optimal control and real-time trajectory planning for autonomous systems such as unmanned aerial vehicles (UAVs) and intelligent robotic platforms. Professor Mestari’s interdisciplinary approach integrates theoretical rigor with practical innovation, contributing to the advancement of intelligent systems in both academia and industry.", 
      topic: "From Complexity and Network Science to Graph Representation Learning: A Graph Neural Network Approach to Polypharmacy Side Effects",
    },
     {
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
    },
    /*{
      name: "Pr. MOHAMMED CHOUKRI",
      organization: "FMPO, Med 1st University",
      location: "Oujda, Morocco.",
      image: "/images/keynotes/speaker_15.jpg?height=400&width=400",
      bio: "Pioneer in reinforcement learning and robotics with 20+ years of experience.",
      topic: "Reinforcement Learning for Autonomous Systems",
    },*/
   
    /*{
      name: "Pr. Abdelhadi Zahouani",
      organization: "Evolina Health Group",
      location: "France.",
      image: "/images/keynotes/speaker_6.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Pr. Maria Simona Raboaca",
      organization: "NRD Institute, Valcea",
      location: "Romania",
      image: "/images/keynotes/speaker_9.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Pr. Mostafa AZIZI",
      organization: " UMP, Oujda",
      location: "Morocco.",
      image: "/images/keynotes/speaker_7.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Pr. Cyril DROCOURT",
      organization: "Picardie Jules Verne University",
      location: "Amiens, France.",
      image: "/images/keynotes/speaker_8.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Pr. Madhusanka Liyanage",
      organization: "University College",
      location: " Dublin, Ireland.",
      image: "/images/keynotes/speaker_4.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Pr. Hassine Mohammed",
      organization: "TisaLabs, Cork",
      location: "Ireland.",
      image: "/images/keynotes/speaker_10.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Pr.  Ahmed MOSTEFAOUI",
      organization: "University of Franche Comte",
      location: "France.",
      image: "/images/keynotes/speaker_12.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Pr. Sultan Aljahdali",
      organization: "Taif University,",
      location: "Taif Saudi Arabia.",
      image: "/images/keynotes/speaker_13.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Pr. Azzedine Boukerche",
      organization: "University of Ottawa, Ontario",
      location: "Canada.",
      image: "/images/keynotes/speaker_1.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },
    {
      name: "Dr. Salah Hanim",
      organization: "Ford Motor Company",
      location: "USA.",
      image: "/images/keynotes/speaker_2.jpg?height=400&width=400",
      bio: "Leading work on large language models and AI alignment.",
      topic: "Aligning AI Systems with Human Values",
    },*/
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

