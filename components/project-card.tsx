import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  duration: string
  role: string
  achievements: string[]
  technologies: string[]
  imageUrl: string
  projectUrl?: string
}

export default function ProjectCard({
  title,
  duration,
  role,
  achievements,
  technologies,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {duration}
        </CardDescription>
        <CardDescription className="flex items-center gap-2">
          <User className="h-4 w-4" />
          {role}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium flex items-center gap-2 mb-2">
              <Award className="h-4 w-4" />
              Achievements
            </h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      {projectUrl && (
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

