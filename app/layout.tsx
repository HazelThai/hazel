import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hazel Thai | Frontend Developer Portfolio",
  description:
    "Personal portfolio website showcasing my projects, skills, and experience as a fresher frontend developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Link href="/" className="font-bold text-xl mr-6">
              HT
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/skills">Skills</NavLink>
              <NavLink href="/experience">Experience</NavLink>
            </nav>
            <MobileNav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Hazel Thai. All rights reserved.
              </p>
              <nav className="flex items-center space-x-4 mt-4 sm:mt-0">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/skills">Skills</NavLink>
                <NavLink href="/experience">Experience</NavLink>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="transition-colors hover:text-primary">
      {children}
    </Link>
  )
}



import './globals.css'