import HobbyCard from "@/components/hobby-card"
import Image from "next/image"

export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hobbies Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Hobbies & Interests
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <HobbyCard title="Hiking" description="Exploring mountain trails and enjoying nature." icon="Mountain" />
            <HobbyCard title="Reading" description="Science fiction and personal development books." icon="BookOpen" />
            <HobbyCard title="Cooking" description="Experimenting with new recipes and cuisines." icon="Utensils" />
            <HobbyCard title="Photography" description="Capturing landscapes and urban scenes." icon="Camera" />
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Photography Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Photo+${item}`}
                    alt={`Gallery image ${item}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

