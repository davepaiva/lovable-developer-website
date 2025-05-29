
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Rocket, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker",
    "AWS", "GraphQL", "Next.js", "Tailwind CSS"
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Next.js", "Socket.io", "MongoDB"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-8">
                <Code size={48} className="text-gray-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full-stack developer passionate about creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/portfolio">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  View My Work
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  Read My Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building digital experiences that matter
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 5 years of experience in full-stack development, I specialize in 
                creating scalable web applications that solve real-world problems. I'm passionate 
                about clean code, user experience, and continuous learning.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge through my blog.
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Rocket size={16} className="mr-2" />
                  5+ Years Experience
                </div>
                <div className="flex items-center">
                  <Heart size={16} className="mr-2" />
                  50+ Projects Completed
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Technologies I Love</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Current Focus</h3>
                  <p className="text-gray-600">
                    Building scalable web applications with modern React patterns, 
                    exploring serverless architectures, and contributing to open source.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A selection of my recent work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100"></div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
