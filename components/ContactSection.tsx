"use client"

import { Linkedin, Instagram, Github, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      description: "Let's connect professionally",
      buttonText: "Connect on LinkedIn",
      bgColor: "bg-gray-800",
      iconColor: "text-blue-500",
      href: "https://www.linkedin.com/in/basysyaar-alyassaar-nuur-qodaar/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      description: "Follow my creative journey",
      buttonText: "Connect on Instagram",
      bgColor: "bg-gray-800",
      iconColor: "text-pink-500",
      href: "https://www.instagram.com/basyar_anq/",
    },
    {
      name: "GitHub",
      icon: Github,
      description: "Check out my code repositories",
      buttonText: "Connect on GitHub",
      bgColor: "bg-gray-800",
      iconColor: "text-white",
      href: "https://github.com/AlBasyaar",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const waNumber = "6281388772645"
    const waMessage = `Hello! My name is ${name}%0AEmail: ${email}%0A${message}`
    const waURL = `https://wa.me/${waNumber}?text=${waMessage}`
    window.open(waURL, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Reach me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Media Cards */}
          <div className="space-y-6">
            {socialPlatforms.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <div
                  key={index}
                  className={`${platform.bgColor} rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform duration-200`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <IconComponent className={`w-8 h-8 ${platform.iconColor}`} />
                    <h3 className="text-2xl font-bold">{platform.name}</h3>
                  </div>

                  <p className="text-gray-300 mb-6 text-lg">{platform.description}</p>

                  <button
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 px-6 rounded-xl flex items-center justify-between transition-colors duration-200 group"
                    onClick={() => window.open(platform.href, "_blank")}
                  >
                    <span className="font-semibold text-lg">{platform.buttonText}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              )
            })}
          </div>

          <Card>
            <CardHeader className="relative">
              <CardTitle>Contact Form</CardTitle>
              <span className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                Idle
              </span>
              <CardDescription>
                You can reach out to me using the form below. I will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Your message"
                    className="min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
