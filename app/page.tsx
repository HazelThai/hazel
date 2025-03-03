import { Mail, Github, Linkedin, Code, Briefcase, User, PhoneIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="h-[100%] bg-background">
      {/* Hero Section */}
      <section className="h-fit flex items-center justify-center  text-[#004bad] overflow-hidden py-10 bg-white">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 container px-4 md:px-6 items-center">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up animation-delay-200">
              Thai Kim Huong (Hazel)
            </h1>
            <p className="max-w-[700px] text-xl md:text-2xl animate-fade-in-up animation-delay-400">
              Frontend Developer
            </p>
            <div className="flex items-center space-x-10 mt-8 animate-fade-in-up animation-delay-800">
              <a href="tel:+84339759574" className="text-center transition-colors">
                <PhoneIcon />
              </a>
              <a href="mailto:hazelthai.fw@gmail.com" className="text-[#004bad] hover:text-primary transition-colors">
                <Mail className="h-8 w-8" />
              </a>
              <a
                href="https://github.com/HazelThai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004bad] hover:text-primary transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/hazel-thai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004bad] hover:text-primary transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl md:leading-10 mb-12 animate-fade-in-up animation-delay-400 leading-7 text-center lg:text-left">
              I'm a passionate frontend developer, eager to create innovative and
              user-friendly web experiences. Explore my journey and projects below!
            </p>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-10 md:py-16">
        <div className="container px-4 md:px-6 text-center">
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

