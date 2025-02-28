import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">My Projects</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Luxestate Landing Page"
              duration="Personal Project"
              role="Frontend Developer"
              achievements={[
                "Developed a fully responsive landing page based on design specifications.",
                "Ensured cross-browser compatibility and optimized load times.",
                "Successfully deployed on GitHub.",
              ]}
              technologies={["HTML5 (BEM)", "CSS", "Grunt"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              projectUrl="https://hazelthai.github.io/Luxestate/"
            />
            <ProjectCard
              title="Wooder"
              duration="Personal Project"
              role="Frontend Developer"
              achievements={[
                "Built a responsive, interactive website using modern web development practices.",
                "Implemented interactive features with JavaScript, enhancing user experience.",
                "Successfully deployed on GitHub.",
              ]}
              technologies={["HTML5 (BEM)", "SCSS", "JavaScript", "Grunt"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              projectUrl="https://hazelthai.github.io/Wooder/"
            />
            <ProjectCard
              title="Finance"
              duration="Personal Project"
              role="Frontend Developer"
              achievements={[
                "Developed a finance website that is fully responsive and optimized for mobile devices.",
                "Integrated interactive elements for better user engagement.",
                "Successfully deployed on GitHub.",
              ]}
              technologies={["HTML5 (BEM)", "SCSS", "JavaScript", "Grunt"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              projectUrl="https://hazelthai.github.io/Finance/"
            />
            <ProjectCard
              title="Rock Paper Scissors"
              duration="Personal Project"
              role="Web Developer"
              achievements={[
                "Instant communication for gameplay.",
                "Supports multiple players and traffic growth.",
                "Accurate winner determination and resets.",
                "Successfully deployed on GitHub.",
              ]}
              technologies={["WebSocket", "Node.js", "Express.js", "EJS"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              projectUrl="https://game-websocket.onrender.com/"
            />
            <ProjectCard
              title="Order Management System"
              duration="Team Project"
              role="Team Leader, Main Frontend and Backend Developer"
              achievements={[
                "Successfully built a system with distinct roles for customers, waiters, managers, and chefs.",
                "Developed comprehensive functionalities for each role.",
                "Created an API with functions covering order management, ingredient management, invoice management, user authentication, menu management, cart management, and reservation management.",
                "Led the development team, coordinated tasks, and ensured the timely delivery of features.",
              ]}
              technologies={["HTML5", "CSS", "ReactJS", "Ant Design", "Node.js", "Express.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              projectUrl="https://github.com/HazelThai/FE-SOA"
            />
            <ProjectCard
              title="Manage Training Point System"
              duration="Team Project"
              role="Team Leader, Main Frontend and Backend Developer"
              achievements={[
                "Created a comprehensive training point management system.",
                "Developed comprehensive functionalities for each role.",
                "Created an API with functions covering various management aspects.",
                "Led the development team, coordinated tasks, and ensured the timely delivery of features.",
              ]}
              technologies={["HTML5", "CSS", "ReactJS", "Ant Design", "Node.js", "Express.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=300"
              projectUrl="https://github.com/HazelThai/FE-MTPS"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

