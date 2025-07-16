"use client"

import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import TechStackSection from "@/components/TechStackSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import { useActiveSection } from "@/hooks/useActiveSection"
import { scrollToSection } from "@/utils/scrollToSection"

export default function Portfolio() {
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation component is now universally floating */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      {/* Add padding to the top of the page for the floating navbar */}
      <div className="pt-24 md:pt-32" /> {/* Padding disesuaikan untuk navbar di atas */}
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
