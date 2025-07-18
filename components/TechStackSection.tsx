"use client"

export default function TechStackSection() {
  const topRowTechs = [
    { name: "HTML", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752804463/html_ppgpoy.png" },
    { name: "CSS", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752804886/css_vn52ga.webp" },
    { name: "Javascript", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752744052/js_x7cq7t.png" },
    { name: "React.js", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752740735/react_jlr7me.png" },
    { name: "Next.js", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752740734/nextjs_p7vwmy.webp" },
  ]

  const bottomRowTechs = [
    { name: "TypeScript", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752740735/Typescript_bbi3km.png" },
    { name: "PHP", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752811123/php_yx6fuo.png" },
    { name: "MySQL", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752740735/MySQL_bgj0lk.webp" },
    { name: "Laragon", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752740734/laragon_kawtgp.jpg" },
    { name: "TailwindCSS", icon: "https://res.cloudinary.com/dr5pehdsw/image/upload/v1752740734/tailwind_ilzkwa.png" },
  ]

  return (
    <section id="tech-stack" className="py-20 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        </div>

        <div className="space-y-10">
          <div className="overflow-hidden group">
            <div className="flex w-max animate-slide-left">
              {[...topRowTechs, ...topRowTechs].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 mx-2 rounded-lg border bg-white shadow-sm hover:shadow-md hover:bg-gray-100 transition-all whitespace-nowrap min-w-[200px]"
                >
                  <img src={tech.icon} alt={tech.name} className="w-25 h-8 object-contain" />
                  <span className="font-medium text-base">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden group">
            <div className="flex w-max animate-slide-right">
              {[...bottomRowTechs, ...bottomRowTechs].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 mx-2 rounded-lg border bg-white shadow-sm hover:shadow-md hover:bg-gray-100 transition-all whitespace-nowrap min-w-[200px]"
                >
                  <img src={tech.icon} alt={tech.name} className="w-25 h-8 object-contain" />
                  <span className="font-medium text-base">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0%);
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
            transform: translateX(0%);
          }
        }

        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }

        /* This rule now correctly pauses the animation of the .animate-slide-left/.animate-slide-right div
           when its parent with the 'group' class is hovered. */
        .group:hover .animate-slide-left,
        .group:hover .animate-slide-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
