"use client"

export default function TechStackSection() {
  const topRowTechs = [
    { name: "HTML", icon: "🌐", color: "bg-orange-100 text-orange-600" },
    { name: "CSS", icon: "⚫", color: "bg-gray-100 text-gray-800" },
    { name: "Javascript", icon: "⚛️", color: "bg-blue-100 text-blue-600" },
    { name: "React.Js", icon: "🟨", color: "bg-yellow-100 text-yellow-600" },
    { name: "Next.js", icon: "⚫", color: "bg-gray-100 text-gray-800" },
  ]

  const bottomRowTechs = [
    { name: "TypeScript", icon: "🔷", color: "bg-blue-100 text-blue-600" },
    { name: "Tailwind CSS", icon: "🌊", color: "bg-cyan-100 text-cyan-600" },
    { name: "MySQL", icon: "🐬", color: "bg-blue-100 text-blue-600" },
    { name: "Laragon", icon: "🔷", color: "bg-blue-100 text-blue-600" },
    { name: "Tailwind CSS", icon: "🌊", color: "bg-cyan-100 text-cyan-600" },
  ]

  return (
    <section id="tech-stack" className="py-20 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        </div>

        <div className="space-y-8">
          {/* Top Row - Sliding Left */}
          <div className="relative">
            <div className="flex animate-slide-left">
              {[...topRowTechs, ...topRowTechs].map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-6 py-4 mx-2 rounded-xl border bg-background shadow-sm hover:shadow-md transition-shadow whitespace-nowrap min-w-fit ${tech.color}`}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-semibold text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Sliding Right */}
          <div className="relative">
            <div className="flex animate-slide-right">
              {[...bottomRowTechs, ...bottomRowTechs].map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-6 py-4 mx-2 rounded-xl border bg-background shadow-sm hover:shadow-md transition-shadow whitespace-nowrap min-w-fit ${tech.color}`}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-semibold text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
