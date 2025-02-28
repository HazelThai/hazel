"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden ml-auto h-10 w-10 p-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <div className="flex flex-col space-y-4 mt-8">
          <MobileNavLink href="/" onNavigate={() => setOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" onNavigate={() => setOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink href="/projects" onNavigate={() => setOpen(false)}>
            Projects
          </MobileNavLink>
          <MobileNavLink href="/skills" onNavigate={() => setOpen(false)}>
            Skills
          </MobileNavLink>
          <MobileNavLink href="/experience" onNavigate={() => setOpen(false)}>
            Experience
          </MobileNavLink>
          <MobileNavLink href="/about#contact" onNavigate={() => setOpen(false)}>
            Contact
          </MobileNavLink>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function MobileNavLink({
  href,
  children,
  onNavigate,
}: {
  href: string
  children: React.ReactNode
  onNavigate: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex items-center py-2 text-lg font-medium transition-colors hover:text-primary"
    >
      {children}
    </Link>
  )
}

