import { Mail, Github, Linkedin, Code, Briefcase, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center gradient-bg text-white overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up animation-delay-200">
              Thai Kim Huong (Hazel)
            </h1>
            <p className="max-w-[700px] text-xl md:text-2xl animate-fade-in-up animation-delay-400">
              Fresher Frontend Developer | Computer Science Student
            </p>
            <div className="flex space-x-4 mt-6 animate-fade-in-up animation-delay-600">
              <Link href="/about#contact">
                <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Code className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 mt-8 animate-fade-in-up animation-delay-800">
              <a
                href="https://github.com/HazelThai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/hazel-thai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="mailto:hazelthai.fw@gmail.com" className="text-white hover:text-primary transition-colors">
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x"></div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Welcome to My Portfolio</h2>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl mb-12">
            I'm a passionate frontend developer and Computer Science student, eager to create innovative and
            user-friendly web experiences. Explore my journey and projects below!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/about" className="card-hover">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300">
                <User className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">About Me</h3>
                <p className="text-muted-foreground text-sm">Learn more about my background and interests</p>
              </div>
            </Link>
            <Link href="/projects" className="card-hover">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300">
                <Code className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">My Projects</h3>
                <p className="text-muted-foreground text-sm">Explore the projects I've worked on</p>
              </div>
            </Link>
            <Link href="/experience" className="card-hover">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">Check out my professional experience</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

