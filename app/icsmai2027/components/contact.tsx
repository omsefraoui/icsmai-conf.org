"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AtSign, Mail, MapPin, Hotel, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions about ICSMAI 2025? We&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col p-0">
              <CardContent className="p-0 flex-1">
                <div className="aspect-video lg:aspect-auto rounded-xl overflow-hidden shadow-lg h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.8919509555403!2d-2.307707338131778!3d35.10940882266368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd782df8b355c477%3A0x91672c02502950bb!2sRadisson%20Blu%20Resort%2C%20Saidia%20Beach!5e0!3m2!1sfr!2sma!4v1747086702861!5m2!1sfr!2sma"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Conference Venue Map"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us directly using the information below.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Email</p>
                      <Link href="mailto:icsmai.alsi@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        icsmai.alsi@gmail.com
                      </Link>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Phone</p>
                      <Link href="tel:+2120536505470" className="text-muted-foreground hover:text-primary transition-colors">
                        +212 5 36 50 54 70/71
                      </Link>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-green-100">
                      <FaWhatsapp className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Contact US on WhatsApp</p>
                      <Link
                        href="https://wa.me/+212615148509"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-green-600 transition-colors"
                      >
                        +212 6 15 14 85 09 
                      </Link>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        Bd Mohammed VI
                        <br />
                        Oujda 60000
                        <br />
                        Morocco
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <AtSign className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Social Media</p>
                      <div className="flex space-x-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotel */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Hotel className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">
                      
                      The conference will be held in Hotel 5 star (All Inclusive) in Saïdia, Morocco
                    </p>
                    <Link
                      href=""
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hotel Website
                    </Link>
                  </div>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
