"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Registration() {
  const earlyBirdPlans = [
    {
      name: "Student",
      price: { morocco: "1600 dhs", foreign: "250 euros" },
      description: "For full-time students:  Registration ",
      buttonText: "Register as Student",
    },
    {
      name: "Student++",
      price: { morocco: "2300 dhs", foreign: "300 euros" },
      description: "For full-time students:  Registration + 1 night all inclusive",
      buttonText: "Register as Student",
    },
    {
      name: "Academia",
      price: { morocco: "3000 dhs", foreign: "350 euros" },
      description: "For academic researchers:  Registration + 1 night all inclusive",
      buttonText: "Register as Academic",
      popular: true,
    },
    {
      name: "Industry",
      price: { morocco: "3500 dhs", foreign: "400 euros" },
      description: "For industry professionals:  Registration + 1 night all inclusive",
      buttonText: "Register as Professional",
    },
    {
      name: "Online",
      price: { morocco: "1500 dhs", foreign: "200 euros" },
      description: "Virtual attendance",
      buttonText: "Register Online",
    },
  ]

  const regularPlans = [
    {
      name: "Student",
      price: { morocco: "2100 dhs", foreign: "300 euros" },
      description: "For full-time students:  Registration ",
      buttonText: "Register as Student",
    },
    {
      name: "Student++",
      price: { morocco: "2800 dhs", foreign: "350 euros" },
      description: "For full-time students:  Registration + 1 night all inclusive",
    },
    {
      name: "Academia",
      price: { morocco: "3500 dhs", foreign: "400 euros" },
      description: "For academic researchers:  Registration + 1 night all inclusive",
    },
    {
      name: "Industry",
      price: { morocco: "4000 dhs", foreign: "450 euros" },
      description: "For industry professionals:  Registration + 1 night all inclusive",
    },
    {
      name: "Online",
      price: { morocco: "2000 dhs", foreign: "250 euros" },
      description: "Virtual attendance",
    },
  ]

  const registrationIncludes = [
    "Certificate of Presentation and Participation",
    "Conference Package (Programme, Electronic Conference Proceedings, Bloc note...)",
    "Access to all Sessions",
    "Coffee breaks (all days of the conference) : All inclusive",
    "++Lunches (All days of the conference) : All inclusive",
    "++One Night in Hotel Saidia all inclusive (5***** Hotel) for students, double room",
    "For individual bookings, kindly consult the accommodation information available",
  ]

  return (
    <section id="registration" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Registration</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Registration Fees</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Select the registration option that best suits your needs
          </p>
        </motion.div>

        <Tabs defaultValue="early" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="early">
                Before October 7th
              </TabsTrigger>
              <TabsTrigger value="regular">
                After October 7th
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="early">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {earlyBirdPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">Morocco:</span>
                          <span className="text-2xl font-bold">{plan.price.morocco}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">Foreign:</span>
                          <span className="text-2xl font-bold">{plan.price.foreign}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="regular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card className="h-full flex flex-col ">
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 ">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">Morocco:</span>
                          <span className="text-2xl font-bold">{plan.price.morocco}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">Foreign:</span>
                          <span className="text-2xl font-bold">{plan.price.foreign}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Registration Includes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {registrationIncludes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Listener Registration</AccordionTrigger>
                    <AccordionContent>Listener (attendance without participation): 800 dhs</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Publication Charges</AccordionTrigger>
                    <AccordionContent>
                      Publication charges cover maximum 8 pages. Authors will pay additional fees for each extra page
                      (20 euros for each one)
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Accommodation</AccordionTrigger>
                    <AccordionContent>For reservations of two or more nights, whether in a single, double, or other accommodation, please contact the organizing committee or the conference chair using the contact information provided.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="font-medium">Association Intelligence Artificielle et Developpement durable</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Bank Information</p>
                    <p className="text-sm">Banque Populaire d&apos;Oujda, Agence Boudir</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-semibold mb-1">RIB</p>
                    <p className="text-sm font-mono">157 570 21211 6840976 0001 18</p>
                  </div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-semibold mb-1">Swift Code</p>
                  <p className="text-sm font-mono">BCPOMAMC</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

