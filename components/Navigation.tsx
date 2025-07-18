"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sun, Moon } from "lucide-react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(prefersDark ? "dark" : "light")
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
  ]

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      scrollToSection(sectionId)
    }
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
    return () => window.removeEventListener("scroll", handleScroll)
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
          className={cn(
            "hover:text-primary transition-colors text-sm sm:text-lg px-1 py-0.5",
            activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
          )}
        >
          {item.label}
        </button>
      ))}
      <Button
        size="sm"
        onClick={() => handleNavClick("contact")}
        className="flex-shrink-0 text-sm sm:text-base"
      >
        Hire Me
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleTheme}
        className="ml-2"
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>
    </nav>
  )
}