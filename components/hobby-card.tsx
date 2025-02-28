import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mountain, BookOpen, Utensils, Camera } from "lucide-react"

interface HobbyCardProps {
  title: string
  description: string
  icon: string
}

export default function HobbyCard({ title, description, icon }: HobbyCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Mountain":
        return <Mountain className="h-10 w-10 text-primary" />
      case "BookOpen":
        return <BookOpen className="h-10 w-10 text-primary" />
      case "Utensils":
        return <Utensils className="h-10 w-10 text-primary" />
      case "Camera":
        return <Camera className="h-10 w-10 text-primary" />
      default:
        return <Mountain className="h-10 w-10 text-primary" />
    }
  }

  return (
    <Card className="text-center">
      <CardHeader className="pb-2">
        <div className="flex justify-center mb-4">{getIcon(icon)}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

