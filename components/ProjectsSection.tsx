"use client"

import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Fruit Sando Akasra",
      description: "Sebuah situs web e-commerce untuk menjual produk Fruit Sando dengan integrasi pembayaran online.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-07-16_081117_mw1bbt.png",
      tech: ["Css", "Html", "Javascipt"],
      github: "https://github.com/AlBasyaar/Fruit_Sando",
      demo: "https://fruit-sando.vercel.app/",
    },
    {
      title: "Perjalanan-jepang-menjajah-indonesia",
      description: "Sebuah situs web interaktif dan edukatif yang menjelajahi sejarah pendudukan Jepang di Indonesia.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-05-22_082302_igge8h.png",
      tech: ["TypeScript", "Javascript", "Css", "Html"],
      github: "https://github.com/AlBasyaar/Perjalanan-jepang-menjajah-indonesia",
      demo: "https://perjalanan-jepang-menjajah-indonesia.vercel.app/",
    },
    {
      title: "web3-voting-dapp",
      description: "Aplikasi pemungutan suara terdesentralisasi yang dibangun dengan Web3, Solidity, dan JavaScript untuk pemungutan suara berbasis blockchain yang aman.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-07-09_214522_gw8zdy.png",
      tech: ["Javascript", "Solidity"],
      github: "https://github.com/AlBasyaar/web3-voting-dapp",
    },
    {
      title: "AC-ZenCool",
      description: "Sebuah situs web layanan AC yang menampilkan tampilan modern, menyediakan informasi lengkap tentang servis perawatan, perbaikan, serta daftar harga yang transparan.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642176/Cuplikan_layar_2025-07-09_214833_odduic.png",
      tech: ["Html", "Css", "javascript"],
      github: "https://github.com/AlBasyaar/AC-ZenCool",
      demo: "https://ac-zencool.vercel.app/",
    },
    {
      title: "Mr-Electric-Store",
      description: "Sebuah situs web toko elektronik sederhana untuk menampilkan dan menjual produk-produk listrik.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752642175/Cuplikan_layar_2025-07-09_211427_hwe2qy.png",
      tech: ["React", "TailwindCSS", "Javascript"],
      github: "https://github.com/AlBasyaar/MrElectric-Store",
      demo: "https://mr-electric-store.vercel.app/",
    },
    {
      title: "Inventaris Sekolah Management",
      description: "Sistem manajemen untuk mencatat dan mengorganisir data inventaris sekolah.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752644807/Cuplikan_layar_2025-07-10_132743_xh05sd.png",
      tech: ["Php", "Css"],
      github: "https://github.com/AlBasyaar/inventaris-sekolah-management",
      demo: "#",
    },
    {
      title: "Keuanganku",
      description: "Pengelola keuangan ringan yang membantu mencatat pemasukan, mengatur pengeluaran, dan menjaga kendali atas kondisi keuangan Anda.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752805685/Cuplikan_layar_2025-07-18_092738_z1dif9.png",
      tech: ["Javascript", "Html", "Css"],
      github: "https://github.com/AlBasyaar/KeuanganKu",
    },
    {
      title: "my-noteebook",
      description: "Aplikasi catatan yang sederhana dan minimalis untuk menulis, menyimpan, dan mengatur pikiran Anda dengan mudah.",
      image: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752935879/Cuplikan_layar_2025-07-19_213751_rjdloh.png",
      tech: ["Javascript", "Css"],
      github: "https://github.com/AlBasyaar/Notes-app",
      demo: "https://my-notebook-lilac.vercel.app/",
    },

  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa proyek terbaru saya yang menunjukkan keterampilan dan pengalaman saya.
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

                  {!["web3-voting-dapp", "Keuanganku"].includes(project.title) && (
                    <Button
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => {
                        if (project.demo && project.demo !== "#") {
                          window.open(project.demo, "_blank")
                        } else {
                          alert("Demo belum tersedia.")
                        }
                      }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}