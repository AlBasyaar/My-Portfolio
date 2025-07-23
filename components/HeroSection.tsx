"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

const typingTexts = [
  "From Idea to Website",
  "Building the Web from Plan to Reality.",
  "Designing and Developing Digital Solutions",
]

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = typingTexts[textIndex]
    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % typingTexts.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

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
          <span className="text-primary">Hi, I'm BASYSYAAR.</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 h-10">
          <span className="font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {displayText}
            <span className="blinking-cursor">|</span>
          </span>
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Saya suka membuat aplikasi web yang tidak hanya terlihat bagus, tetapi juga membuat hidup orang sedikit lebih mudah dan lebih menyenangkan.
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
