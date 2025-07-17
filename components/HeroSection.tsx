"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const fullText = "Hi, I'm BASYSYAAR AL YASSAAR NUUR QODAAR."
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, index + 1))
        setIndex(index + 1)

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayText(fullText.substring(0, index - 1))
        setIndex(index - 1)

        if (index - 1 === 0) {
          setIsDeleting(false)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [index, isDeleting])

  return (
    <section id="home" className="min-h-screen flex items-start justify-center pt-4 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        <div className="mb-8">
          <img
            src="https://res.cloudinary.com/dr5pehdsw/image/upload/q_auto,f_auto/v1752647425/Gambar_WhatsApp_2025-07-16_pukul_11.03.09_d1cb8983_klycll.jpg"
            alt="Profile"
            loading="lazy"
            className="w-48 aspect-square rounded-full mx-auto mb-8 border-4 border-primary/20 object-cover object-center shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-primary">{displayText}</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Web Developer</p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I love building web apps that not only look great, but also make people’s lives a little easier and more fun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/BASYSYAAR-CV.pdf"
            download="BASYSYAAR-CV.pdf"
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto flex items-center gap-2">
              <Download size={20} />
              Download CV
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
