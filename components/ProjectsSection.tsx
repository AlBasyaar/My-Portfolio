"use client"

import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Fruit Sando Akasra",
      description: "Produk e-commerce application with payment integration and admin dashboard.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-07-16_081117_mw1bbt.png",
      tech: ["Css", "Html", "Javascipt"],
      github: "https://github.com/AlBasyaar/Fruit_Sando",
      demo: "https://fruit-sando.vercel.app/",
    },
    {
      title: "Perjalanan-jepang-menjajah-indonesia",
      description: "Collaborative task management tool with real-time updates and team features.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-05-22_082302_igge8h.png",
      tech: ["TypeScript", "Javascript", "Css", "Html"],
      github: "https://github.com/AlBasyaar/Perjalanan-jepang-menjajah-indonesia",
      demo: "https://perjalanan-jepang-menjajah-indonesia.vercel.app/",
    },
    {
      title: "web3-voting-dapp",
      description: "Beautiful weather dashboard with location-based forecasts and interactive maps.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-07-09_214522_gw8zdy.png",
      tech: ["Javascript", "Solidity"],
      github: "https://github.com/AlBasyaar/web3-voting-dapp",
      demo: "#",
    },
    {
      title: "AC-ZenCool",
      description: "A social media application with user authentication, posts, and comments.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-07-09_214833_odduic.png",
      tech: ["Html", "Css", "javascript"],
      github: "https://github.com/AlBasyaar/AC-ZenCool",
      demo: "https://ac-zencool.vercel.app/",
    },
    {
      title: "Mr-Electric-Store",
      description: "My first personal portfolio website showcasing various projects and skills.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642175/Cuplikan_layar_2025-07-09_211427_hwe2qy.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AlBasyaar/MrElectric-Store",
      demo: "https://mr-electric-store.vercel.app/",
    },
    {
      title: "Kedatangan Bangsa Eropa di Indonesia",
      description: "An application to find recipes based on ingredients using a public API.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-07-16_120046_pohri9.png",
      tech: ["Css", "Html", "Javascipt"],
      github: "https://github.com/AlBasyaar/web-sejarah-indonesia",
      demo: "https://web-sejarah-indonesia-basyar.vercel.app/",
    },
    {
      title: "Inventaris Sekolah Management",
      description: "An application to find recipes based on ingredients using a public API.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752644807/Cuplikan_layar_2025-07-10_132743_xh05sd.png",
      tech: ["Php", "Css"],
      github: "https://github.com/AlBasyaar/inventaris-sekolah-management",
      demo: "#",
    },
    {
      title: "Keuanganku",
      description: "An application to find recipes based on ingredients using a public API.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752801382/Cuplikan_layar_2025-07-17_215500_hpr07q.png",
      tech: ["Php", "Css"],
      github: "https://github.com/AlBasyaar/inventaris-sekolah-management",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 bg-transparent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => project.demo !== "#" && window.open(project.demo, "_blank")}
                    disabled={project.demo === "#"}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}