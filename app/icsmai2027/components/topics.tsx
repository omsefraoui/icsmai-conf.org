"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Bot,
  Network,
  Eye,
  Lock,
  MessageSquare,
  Handshake,
  //Shield,
 // Building2,
  //Microscope,
  //Cpu,
  HeartPulse,
  //Landmark,
  //GraduationCap,
} from "lucide-react"

export default function Topics() {
  const topicCategories = [
    {
      title: "Artificial Intelligence",
      icon: <Brain className="h-6 w-6" />,
      topics: [
        "Machine Learning Algorithms",
        "Deep Learning",
        "Neural Networks",
        "Reinforcement Learning",
        "Transfer Learning",
        "Federated Learning",
      ],
    },
    {
      title: "AI in Healthcare",
      icon: <HeartPulse className="h-6 w-6" />,
      topics: [
        "Medical Imaging",
        "Drug Discovery",
        "Clinical Decision Support",
        "Personalized Medicine",
        "Genomics",
        "Remote Patient Monitoring",
      ],
    },
    {
      title: "Smart Systems & IoT",
      icon: <Network className="h-6 w-6" />,
      topics: [
        "Internet of Things",
        "Edge Computing",
        "Cyber-Physical Systems",
        "Smart Cities",
        "Smart Grids",
        "Industrial IoT",
      ],
    },
    {
      title: "Robotics & Autonomous Systems",
      icon: <Bot className="h-6 w-6" />,
      topics: [
        "Robot Learning",
        "Human-Robot Interaction",
        "Autonomous Vehicles",
        "Swarm Robotics",
        "Soft Robotics",
        "Aerial Robotics",
      ],
    },
    {
      title: "Computer Vision",
      icon: <Eye className="h-6 w-6" />,
      topics: [
        "Object Detection",
        "Image Segmentation",
        "Visual SLAM",
        "3D Vision",
        "Video Analysis",
        "Generative Vision Models",
      ],
    },
    {
      title: "AI & Cybersecurity",
      icon: <Lock className="h-6 w-6" />,
      topics: [        
       "Threat Detection and Response",
        "Anomaly Detection in Cybersecurity",
        "Adversarial Attacks and Defenses",
        "AI for Identity and Access Management",
        "Phishing Detection with Machine Learning",
        "Privacy-Preserving AI in Cybersecurity",
      ],
    },
    {
      title: "Natural Language Processing",
      icon: <MessageSquare className="h-6 w-6" />,
      topics: [
        "Large Language Models",
        "Sentiment Analysis",
        "Machine Translation",
        "Question Answering",
        "Text Generation",
        "Conversational AI",
      ],
    },
    {
      title: "AI Ethics & Governance",
      icon: <Handshake  className="h-6 w-6" />,
      topics: [
        "Responsible AI",
        "Fairness in AI",
        "Explainable AI",
        "AI Safety",
        "Privacy-Preserving AI",
        "AI Regulation",
      ],
    },
    /*{
      title: "Industry Applications",
      icon: <Building2 className="h-6 w-6" />,
      topics: ["Manufacturing", "Retail", "Transportation", "Energy", "Agriculture", "Entertainment"],
    },*/
    /*{
      title: "Emerging Technologies",
      icon: <Microscope className="h-6 w-6" />,
      topics: [
        "Quantum Computing for AI",
        "Neuromorphic Computing",
        "Brain-Computer Interfaces",
        "Digital Twins",
        "Metaverse",
        "6G Networks",
      ],
    },*/
    /*{
      title: "Edge AI & Hardware",
      icon: <Cpu className="h-6 w-6" />,
      topics: [
        "AI Accelerators",
        "TinyML",
        "Energy-Efficient AI",
        "FPGA for AI",
        "Neural Processing Units",
        "AI Chips",
      ],
    },*/
    /*{
      title: "AI in Finance",
      icon: <Landmark className="h-6 w-6" />,
      topics: [
        "Algorithmic Trading",
        "Fraud Detection",
        "Risk Assessment",
        "Robo-Advisors",
        "Credit Scoring",
        "Market Prediction",
      ],
    },*/
    /*{
      title: "AI in Education",
      icon: <GraduationCap className="h-6 w-6" />,
      topics: [
        "Intelligent Tutoring Systems",
        "Personalized Learning",
        "Educational Data Mining",
        "Student Assessment",
        "Learning Analytics",
        "Virtual Learning Environments",
      ],
    },*/
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="topics" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Conference Topics</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Topics of Interest</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ICSMAI 2025 welcomes submissions in the following areas, but is not limited to:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {topicCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                      <h3 className="text-lg font-bold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="bg-background">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

