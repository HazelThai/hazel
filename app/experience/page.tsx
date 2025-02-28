import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Work Experience
          </h1>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Fresher Frontend Developer</CardTitle>
                <CardDescription>Inflow | 6/2024 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Programming and developing the website for the homepage of Inflow.</li>
                  <li>Programming and developing the web portal for Admin, Buyer, and Seller.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

