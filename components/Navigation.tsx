"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" // Import cn utility

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false) // Default: hidden
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
  ]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        if (currentScrollY === 0) {
          
          setIsVisible(false)
        } else if (currentScrollY > lastScrollY) {

          setIsVisible(false)
        } else {

          setIsVisible(true)
        }
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={cn(
        "fixed top-8 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md border rounded-full shadow-lg z-50 px-4 py-2 transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0",
        "flex items-center justify-center space-x-2 sm:space-x-4", 
        "overflow-x-auto whitespace-nowrap", 
        "max-w-[calc(100vw-2rem)]",
      )}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className={`hover:text-primary transition-colors text-sm sm:text-lg px-1 py-0.5 ${
            activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
          }`}
        >
          {item.label}
        </button>
      ))}
      <Button size="sm" onClick={() => handleNavClick("contact")} className="flex-shrink-0 text-sm sm:text-base">
        Hire Me
      </Button>
    </nav>
  )
}
