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
  HeartPulse,
  Stethoscope,
  Scale,
  Lightbulb,
} from "lucide-react"

export default function Topics() {
  const topicCategories = [
    {
      title: "Artificial Intelligence Foundations",
      icon: <Brain className="h-6 w-6" />,
      topics: [
        "Advanced Machine Learning & Deep Learning",
        "Foundation Models & Neural Architectures",
        "Reinforcement & Meta-Learning",
        "Transfer Learning & Domain Adaptation",
        "Federated & Decentralized AI",
        "Agentic AI & Autonomous Planning",
        "Neuro-Symbolic AI & Knowledge Representation",
        "Generative AI & Multimodal Systems",
      ],
    },
    {
      title: "AI in Healthcare & Medical Imaging",
      icon: <HeartPulse className="h-6 w-6" />,
      topics: [
        "Medical Imaging & Modality Translation",
        "AI-Driven Drug Discovery & Proteomics",
        "Clinical Decision Support & Prognostics",
        "Precision & Personalized Medicine",
        "Genomics, Epigenomics & Bioinformatics",
        "Medical LLMs & RAG Systems",
        "Autonomous Clinical Agents",
        "Automated Hospital Workflows",
      ],
    },
    {
      title: "Smart Systems, IoMT & Connected Health",
      icon: <Network className="h-6 w-6" />,
      topics: [
        "IoMT, Wearables & Biosensors",
        "Edge Computing, TinyML & Low-Power Devices",
        "MCP for Device Interoperability & Data Fusion",
        "Cyber-Physical Medical Systems",
        "Smart Hospital Architectures",
        "Healthcare Digital Twins",
        "Remote Patient Monitoring & Telehealth",
        "5G/6G for Telemedicine",
      ],
    },
    {
      title: "NLP, Conversational AI & Medical Knowledge",
      icon: <MessageSquare className="h-6 w-6" />,
      topics: [
        "Large Language Models & Cross-Lingual NLP",
        "Medical Virtual Assistants & Dialogue Systems",
        "Clinical NLP & Automated De-identification",
        "EHR Analysis & Report Generation",
        "Knowledge Graph Integration",
        "Abstractive Medical Summarization",
        "Multi-Agent Coordination Frameworks",
        "MCP for Secure Tool Integration",
      ],
    },
    {
      title: "Robotics, Computer Vision & Autonomous Systems",
      icon: <Bot className="h-6 w-6" />,
      topics: [
        "Medical Robotics & Surgical Assistance",
        "Object Detection & Image Segmentation",
        "Visual SLAM & 3D Vision",
        "Human-Robot Interaction",
        "Swarm Robotics & Autonomous Vehicles",
        "Generative Vision Models",
        "Industrial Automation & Industry 5.0",
        "Aerial Robotics & Drones",
      ],
    },
    {
      title: "AI Security, Privacy & Cyber-Physical Protection",
      icon: <Lock className="h-6 w-6" />,
      topics: [
        "Threat Detection in Connected Hospitals",
        "Adversarial Attacks & Defenses",
        "Agentic System Vulnerabilities",
        "Privacy-Preserving AI & Differential Privacy",
        "Medical Data Encryption",
        "AI Safety & Human-in-the-Loop",
        "Explainable AI (XAI) for Clinicians",
        "Red-Teaming & AI Risk Management",
      ],
    },
    {
      title: "Responsible AI, Ethics & Healthcare Governance",
      icon: <Scale className="h-6 w-6" />,
      topics: [
        "AI Regulation (EU AI Act, FDA, CE Mark)",
        "Algorithmic Fairness & Bias Mitigation",
        "AI Ethics in Medicine & Consent",
        "Environmental Impact & Green AI",
        "Data Governance & Intellectual Property",
        "Global AI Equity & Health Disparities",
        "Auditing Frameworks & Medical AI Certification",
        "Responsible AI & Accountability",
      ],
    },
    {
      title: "Emerging Frontiers & Cross-Disciplinary Applications",
      icon: <Lightbulb className="h-6 w-6" />,
      topics: [
        "AI for Mental Health & Neurological Disorders",
        "Ambient Intelligence & Assistive Technologies",
        "AI in Rehabilitation & Elderly Care",
        "Quantum Computing for Healthcare",
        "Blockchain & Decentralized Health Records",
        "AI in Pharmaceutical Supply Chains",
        "AI in Medical Education & Training Simulation",
        "Smart Environments & Disability Support",
      ],
    },
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
            ICSMAI 2027 welcomes submissions in the following areas, but is not limited to:
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
