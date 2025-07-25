"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-3">
        <p className="text-muted-foreground text-sm">
          © 2025 Made By BASYSYAAR. All rights reserved.
        </p>
        <Button
          onClick={scrollToTop}
          className="h-8 w-8 rounded-full p-1"
          size="icon"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  )
}
