import {
  Mail,
  Github,
  MapPin,
  Phone,
  Gamepad,
  Music,
  Coffee,
  Camera,
  Sun,
  BookOpen,
  Server,
  Code,
  PenToolIcon as Tool,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* About Me Section */}
      <section className="py-10 md:py-26">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-[#004bad]">
            About Me
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6">
              I am a senior Computer Science student at Ton Duc Thang
              University, skilled in HTML5, CSS, JavaScript, and Tailwind CSS.
              I've worked with React, TypeScript and Next.js on projects. I'm
              eager to apply my skills and creativity to frontend development
              projects.
            </p>
            <p className="text-muted-foreground mb-6">
              Currently, I'm working as a Fresher Frontend Developer at Inflow,
              where I'm gaining valuable experience in programming and
              developing websites and web portals.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating user-friendly and visually appealing
              web interfaces. My goal is to contribute to innovative projects
              and continue growing as a frontend developer.
            </p>
          </div>
        </div>
      </section>
      {/* Skills  */}
      <section className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-[#004bad]">
            Skills
          </h1>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS / SCSS",
                    "JavaScript (ES6)",
                    "React",
                    "Tailwind CSS",
                    "TypeScript",
                    "Next.js",
                    "Redux Toolkit",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-[#004bad] px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "RESTful APIs", "MongoDB"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="bg-primary/10 text-[#004bad] px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tool className="mr-2 h-5 w-5" />
                  Tools & Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git",
                    "Ant Design",
                    "Material UI",
                    "shadcn / ui",
                    "Figma",
                    "Photoshop",
                    "Responsive Design",
                    "SEO Optimization",
                    "Teamwork",
                    "Leadership",
                    "Communication",
                    "Problem Solving",
                    "Time Management",
                    "Adaptability",
                    "Proactivity",
                    "Quick Learner",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-[#004bad] px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center text-[#004bad]">
            Education
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 ">
              <CardHeader>
                <CardTitle>Computer Science</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="font-medium">Ton Duc Thang University</p>
                  <p className="text-muted-foreground">2021 - Present</p>
                </div>
                <p className="font-medium mt-2">GPA: 7.33</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Frontend Master Course</CardTitle>
              </CardHeader>
              <CardContent
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p className="font-medium">CFD Circle</p>
                <p className="text-muted-foreground">6/2023 - 11/2023</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Hobbies Section */}
      <section className="py-10 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center text-[#004bad]">
            Hobbies & Interests
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gamepad className="mr-2 h-5 w-5" />
                  Playing Games
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoying various video games in my free time
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Music className="mr-2 h-5 w-5" />
                  Listening to Music
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exploring different genres and artists
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coffee className="mr-2 h-5 w-5" />
                  Coffee Shop Visits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exploring local cafes and enjoying different brews
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Photography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Capturing beautiful moments, especially sky, sunsets, and
                  sunrises
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sun className="mr-2 h-5 w-5" />
                  Outdoor Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoying various sports and outdoor adventures
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Online Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoying studying new topics through online courses on Udemy,
                  YouTube, and other platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-10 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center text-[#004bad]">
            Contact Information
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <Mail className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a
                    href="mailto:hazelthai.fw@gmail.com"
                    className="text-center hover:text-primary transition-colors"
                  >
                    hazelthai.fw@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <Phone className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a
                    href="tel:+84339759574"
                    className="text-center hover:text-primary transition-colors"
                  >
                    0339 759 574
                  </a>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <Github className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">GitHub</h3>
                  <a
                    href="https://github.com/HazelThai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center hover:text-primary transition-colors"
                  >
                    github.com/HazelThai
                  </a>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-center">District 7, HCMC</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
