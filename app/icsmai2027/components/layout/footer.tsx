"use client"

import { motion } from "motion/react"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Conference",
      links: [
        { name: "About", href: "#about" },
        { name: "Keynotes", href: "#keynotes" },
        { name: "Topics", href: "#topics" },
        { name: "Submission", href: "#submission" },
        { name: "Registration", href: "#registration" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Important Dates", href: "#dates" },
        { name: "Committees", href: "#committees" },
        { name: "Program", href: "#programme" },
        { name: "Sponsors", href: "#sponsors" },
        { name: "Contact", href: "#contact" },
      ],
    },
    
  ]

  return (
    <footer className="w-full bg-hero-background text-hero-foreground border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IC</span>
              </div>
              <span className="font-bold text-lg">ICSMAI 2027</span>
            </div>
            <p className="text-hero-muted">
            The 2nd International Conference on Smart Medical, IoT & Artificial Intelligence
            </p>
            <p className="text-hero-muted">
              April 22-24, 2027
              
              <br />
              Saidia, Morocco
            </p>
            <div className="flex space-x-4 text-hero-muted">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </motion.div>

          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (sectionIndex + 1) }}
              className="space-y-4"
            >
              <h3 className="font-medium text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-hero-muted hover:text-hero-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className=" py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-hero-muted">&copy; {currentYear} ICSMAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

