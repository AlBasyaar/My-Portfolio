"use client"

import { Globe, GraduationCap, Code, Server, Database, Sparkles } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
        
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">About Me</h2>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full">
                <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                <span className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                  SMKN 69 JAKARTA - SIJA
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Currently, I am pursuing my education at SMK Negeri 69 Jakarta as a 12th-grade student majoring in Network and Application Information Systems (SIJA), which focuses on building, managing, and developing software applications.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                I am proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating responsive user interfaces, and backend technologies like PHP and Laravel for building servers and APIs, with MySQL and Laragon for database management.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium">
                I have a passion for creating user-friendly and efficient web applications, and I am always eager to learn and grow in my field.
              </p>
            </div>


          {/* Right Content - My Skills */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">My Skills</h3>
            </div>

            <div className="space-y-4">
              {/* Frontend Dev */}
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg border hover:shadow-sm transition-shadow">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </div>
                <span className="text-base sm:text-lg font-medium">Frontend Dev</span>
              </div>

              {/* Backend Dev */}
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg border hover:shadow-sm transition-shadow">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Server className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </div>
                <span className="text-base sm:text-lg font-medium">Backend Dev</span>
              </div>

              {/* Database Management */}
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg border hover:shadow-sm transition-shadow">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Database className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </div>
                <span className="text-base sm:text-lg font-medium">Database Management</span>
              </div>
            </div>

            {/* Always Learning */}
            <div className="flex items-center gap-3 mt-6 sm:mt-8 p-3 sm:p-4 bg-background rounded-lg border">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">
                Always learning new technologies!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  )
}