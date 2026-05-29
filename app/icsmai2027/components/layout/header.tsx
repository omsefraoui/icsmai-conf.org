"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isHeroSection, setIsHeroSection] = useState(true)

  // Use useMemo to fix the exhaustive-deps warning
  const navItems = useMemo(
    () => [
      { name: "About", href: "#about" },
      { name: "Keynotes", href: "#keynotes" },
      { name: "Committees", href: "#committees" },
      { name: "Topics", href: "#topics" },
      { name: "Submission", href: "#submission" },
      { name: "Dates", href: "#dates" },
      { name: "Registration", href: "#registration" },
      { name: "Program", href: "#program" },
      { name: "Sponsors", href: "#sponsors" },
      { name: "Gallery", href: "#gallery" },
      { name: "Contact", href: "#contact" },
    ],
    [],
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Check if we're in the hero section
      const heroHeight = document.querySelector(".hero-section")?.getBoundingClientRect().height || 0
      //console.log(heroHeight, window.scrollY)
      setIsHeroSection(window.scrollY < heroHeight - 100)

      // Find the current active section
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <AnimatePresence>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : -20,
          pointerEvents: isScrolled ? "auto" : "none",
        }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-0 w-full z-50",
          isScrolled
            ? "bg-transparent backdrop-blur-md shadow-sm"
            : ""
        )}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IC</span>
              </div>
              <span className={cn("font-bold text-lg", isHeroSection ? "text-hero-foreground" : "text-foreground")}>
                ICSMAI 2027
              </span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isHeroSection
                      ? activeSection === item.href.substring(1)
                        ? "text-hero-primary"
                        : "text-hero-muted hover:text-hero-primary"
                      : activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-0.5",
                        isHeroSection ? "bg-hero-primary" : "bg-primary",
                      )}
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="sm"
                className={cn(
                  "hidden md:inline-flex",
                )}
              >
                <Link href="#registration">Register Now</Link>
              </Button>
            </motion.div>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("md:hidden", isHeroSection ? "text-hero-foreground" : "text-foreground")}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className={cn(
                  "w-[300px] sm:w-[400px] p-0 backdrop-blur-md",
                  isHeroSection ? "bg-hero-background/95 border-hero-primary/20" : "bg-background/95 border-border",
                )}
              >
                <div className="flex flex-col h-full">
                  <div
                    className={cn(
                      "flex items-center justify-between border-b p-4",
                      isHeroSection ? "border-hero-primary/20" : "border-border/20",
                    )}
                  >
                    <Link href="/" className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">IC</span>
                      </div>
                      <span
                        className={cn("font-bold text-lg", isHeroSection ? "text-hero-foreground" : "text-foreground")}
                      >
                        ICSMAI 2027
                      </span>
                    </Link>
                  </div>

                  <nav className="flex flex-col py-4">
                    {navItems.map((item) => (
                      <SheetClose key={item.name} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg font-medium transition-colors py-3 px-4 flex items-center justify-between",
                            isHeroSection
                              ? activeSection === item.href.substring(1)
                                ? "text-hero-primary bg-hero-primary/10"
                                : "text-hero-foreground hover:text-hero-primary"
                              : activeSection === item.href.substring(1)
                                ? "text-primary bg-primary/5"
                                : "text-foreground hover:text-primary",
                          )}
                        >
                          {item.name}
                          {activeSection === item.href.substring(1) && (
                            <ChevronRight
                              className={cn("h-4 w-4", isHeroSection ? "text-hero-primary" : "text-primary")}
                            />
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div
                    className={cn(
                      "mt-auto border-t p-4",
                      isHeroSection ? "border-hero-primary/20" : "border-border/20",
                    )}
                  >
                    <SheetClose asChild>
                      <Button
                        asChild
                        className={cn("w-full", isHeroSection && "bg-hero-primary hover:bg-hero-primary/90")}
                      >
                        <Link href="#registration">Register Now</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}

