
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, Search, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices and Patterns",
      excerpt: "Learn how to structure large React applications for maintainability and performance. We'll explore component architecture, state management, and optimization techniques.",
      content: "Full content would go here...",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "The Future of Web Development: Exploring Modern Technologies",
      excerpt: "A deep dive into emerging web technologies including WebAssembly, Edge Computing, and the Jamstack architecture that are shaping the future of web development.",
      content: "Full content would go here...",
      date: "2024-03-10",
      readTime: "12 min read",
      tags: ["Web Development", "Technology", "Future"]
    },
    {
      id: 3,
      title: "TypeScript Tips and Tricks for Better Developer Experience",
      excerpt: "Discover advanced TypeScript patterns and utilities that can improve your development workflow and help you write more robust applications.",
      content: "Full content would go here...",
      date: "2024-03-05",
      readTime: "6 min read",
      tags: ["TypeScript", "Development", "Tips"]
    },
    {
      id: 4,
      title: "Database Design Principles for Modern Applications",
      excerpt: "Understanding database design patterns, normalization, and performance optimization techniques for building efficient data-driven applications.",
      content: "Full content would go here...",
      date: "2024-02-28",
      readTime: "10 min read",
      tags: ["Database", "PostgreSQL", "Performance"]
    },
    {
      id: 5,
      title: "API Design Best Practices: Creating Developer-Friendly Interfaces",
      excerpt: "Learn how to design RESTful APIs that are intuitive, well-documented, and easy to integrate. Covering authentication, versioning, and error handling.",
      content: "Full content would go here...",
      date: "2024-02-20",
      readTime: "9 min read",
      tags: ["API", "REST", "Backend"]
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox: When to Use Each Layout Method",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox, with practical examples and use cases to help you choose the right layout method for your projects.",
      content: "Full content would go here...",
      date: "2024-02-15",
      readTime: "7 min read",
      tags: ["CSS", "Layout", "Frontend"]
    }
  ];

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 5);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, 
            and the ever-evolving world of software engineering.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 aspect-video md:aspect-auto bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <CardContent className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <CalendarDays size={16} className="mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button>
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {searchTerm ? `Search Results (${filteredPosts.length})` : "Recent Articles"}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchTerm ? filteredPosts : recentPosts).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300"></div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <CalendarDays size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                onClick={() => setSearchTerm(tag)}
                className="mb-2"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
