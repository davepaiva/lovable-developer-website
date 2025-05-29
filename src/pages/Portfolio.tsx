
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      category: "Full Stack",
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      category: "Full Stack",
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that provides detailed weather information with interactive charts and location-based forecasts.",
      tech: ["React", "Chart.js", "Weather API", "CSS3"],
      category: "Frontend",
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "REST API Service",
      description: "A robust REST API service with authentication, rate limiting, caching, and comprehensive documentation built with Node.js and Express.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
      category: "Backend",
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Personal Finance Tracker",
      description: "A comprehensive personal finance tracking application with budget planning, expense categorization, and financial insights.",
      tech: ["Vue.js", "Python", "Django", "Chart.js"],
      category: "Full Stack",
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Component Library",
      description: "A reusable React component library with TypeScript support, comprehensive documentation, and Storybook integration.",
      tech: ["React", "TypeScript", "Storybook", "Rollup"],
      category: "Frontend",
      image: "/placeholder.svg",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            from concept to deployment.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              <Filter size={16} className="mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                      aria-label="View Code"
                    >
                      <Github size={20} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-xl text-gray-900">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
