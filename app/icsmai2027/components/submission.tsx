"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Download, BookOpen, FileCheck, Mail, Info, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Submission() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const guidelines = [
    "All submissions must follow the LNCS template and be written in English.",
    "Full papers are allowed a maximum of 8 pages.",
    "Authors will pay additional fees for each extra page (20 euros per page, up to 7 extra pages) in the LNCS format, excluding bibliographic references.",
    "Papers exceeding these limits may be rejected without review. A clearly marked appendix can be included for supplementary materials, but the appendix will be read at the discretion of the reviewers; therefore, the main body of the paper should contain sufficient details to assess its contributions.",
    "All papers must be submitted on the Microsoft CMT platform.",
  ]

  return (
    <section id="submission" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Paper Submission</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Submit Your Research</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Share your latest research findings with the international community of AI, IoT, and Smart Medical.
          </p>
        </motion.div>

        <Tabs defaultValue="paper" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="paper" className="flex items-center gap-2" aria-label="Paper Submission">
              <FileCheck className="h-4 w-4" />
              Paper Submission
            </TabsTrigger>
            <TabsTrigger value="policy" className="flex items-center gap-2" aria-label="Registration & Publication Policy">
              <FileCheck className="h-4 w-4" />
              Registration & Publication Policy
            </TabsTrigger>
            <TabsTrigger value="publications" className="flex items-center gap-2" aria-label="Publications and Proceedings">
              <BookOpen className="h-4 w-4" />
              Publications & Proceedings
            </TabsTrigger>
          </TabsList>

          {/* PAPER TAB */}
          <TabsContent value="paper">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  PAPER SUBMISSION
                </CardTitle>
                <CardDescription>
                  Please follow these guidelines carefully to ensure your submission is considered for review.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <motion.div className="space-y-4" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {guidelines.map((guideline, index) => (
                    <motion.div variants={item} key={index}>
                      <p className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{guideline}</span>
                      </p>
                    </motion.div>
                  ))}

                  <motion.div variants={item} className="pt-2">
                    <div className="bg-muted text-muted-foreground p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p>For more information about submissions, please contact us:</p>
                          <p className="flex items-center gap-2 mt-1">
                            <Mail className="h-4 w-4" />
                            <a href="mailto:icsmai.alsi@gmail.com" className="hover:underline">icsmai.alsi@gmail.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button className="flex items-center gap-2" asChild>
                      <Link href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/19338734/data/v1" target="_blank" rel="noreferrer noopener">
                        <Download className="h-4 w-4" />
                        Download LNCS Word Template
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <Link href="#acknowledgment">
                        Go to CMT Platform acknowledgment
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* POLICY TAB */}
          <TabsContent value="policy">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5" />
                  REGISTRATION & PUBLICATION POLICY
                </CardTitle>
                <CardDescription>
                  Fees coverage and rules for multiple papers by the same first author.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <motion.div className="space-y-4" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.p variants={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>The registration fee covers <strong>only one paper</strong> (with the registrant as <strong>first author</strong>).</span>
                  </motion.p>
                  <motion.div variants={item} className="space-y-2">
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>For multiple papers by the same first author, additional publication fees are required, according to the number of papers submitted:</span>
                    </p>
                    <ul className="space-y-2 ml-7 list-disc">
                      <li><strong>First paper:</strong> full registration fee.</li>
                      <li><strong>Second paper:</strong> <strong>-50%</strong> of the full registration fee.</li>
                      <li><strong>Third paper:</strong> <strong>-70%</strong> of the full registration fee.</li>
                    </ul>
                  </motion.div>
                  <motion.p variants={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Please make sure that all registration payments are completed within the deadline; otherwise, the papers will not be included in the <strong>Scopus-indexed proceedings</strong>.</span>
                  </motion.p>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PUBLICATIONS TAB */}
          <TabsContent value="publications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  PUBLICATIONS & PROCEEDINGS
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <motion.div className="space-y-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.p variants={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>All reviewed and accepted papers will be published in a Springer-indexed book of proceedings.</span>
                  </motion.p>

                  <motion.div variants={item}>
                    <p className="flex items-start gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Extended versions of selected papers will be considered for publication in indexed journals:</span>
                    </p>
                    <ul className="space-y-2 ml-7">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>International Journal of Sensors, Wireless Communications and Control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Others under consideration</span>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Acknowledgment anchor / section for smooth linking */}
        <div id="acknowledgment" className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                Acknowledgment
              </CardTitle>
              <CardDescription>
                Information about Microsoft CMT and author responsibilities.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2 space-y-4">
              <p>
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
              <p>
                By submitting to ICSMAI 2025, authors confirm that their work is original, has not been published previously, and is not under consideration elsewhere. Authors agree to abide by the ethical standards and review process of the conference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICSMAI2025" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2">
                    Go to CMT Platform
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:icsmai.alsi@gmail.com" className="flex items-center gap-2">
                    Contact the Organizing Committee
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}