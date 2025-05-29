
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, ArrowLeft, Share2, Heart } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data (in a real app, this would be fetched based on the ID)
  const post = {
    id: 1,
    title: "Building Scalable React Applications: Best Practices and Patterns",
    content: `
# Introduction

Building scalable React applications requires careful planning, thoughtful architecture, and adherence to best practices. In this comprehensive guide, we'll explore the key principles and patterns that will help you create maintainable, performant React applications that can grow with your needs.

## Component Architecture

### 1. Component Composition

One of the most powerful patterns in React is component composition. Instead of building monolithic components, break them down into smaller, reusable pieces:

\`\`\`jsx
// Instead of this monolithic component
function UserProfile({ user, onEdit, onDelete }) {
  return (
    <div className="user-profile">
      <div className="avatar">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="details">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

// Use composition for better reusability
function UserProfile({ user, onEdit, onDelete }) {
  return (
    <ProfileCard>
      <Avatar src={user.avatar} alt={user.name} />
      <UserDetails user={user} />
      <ActionButtons onEdit={onEdit} onDelete={onDelete} />
    </ProfileCard>
  );
}
\`\`\`

### 2. Container and Presentational Components

Separate your components into containers (smart components) that handle logic and data, and presentational components (dumb components) that focus purely on rendering:

\`\`\`jsx
// Container Component
function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(setUsers).finally(() => setLoading(false));
  }, []);

  return <UserList users={users} loading={loading} />;
}

// Presentational Component
function UserList({ users, loading }) {
  if (loading) return <LoadingSpinner />;
  
  return (
    <ul>
      {users.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
\`\`\`

## State Management

### Local State vs Global State

Not everything needs to be in global state. Use local state for component-specific data and global state for data that needs to be shared across multiple components:

\`\`\`jsx
// Local state for form inputs
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form submission...
}

// Global state for user authentication
function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Your app routes */}
      </Router>
    </AuthProvider>
  );
}
\`\`\`

### State Normalization

When dealing with complex nested data, normalize your state structure:

\`\`\`jsx
// Instead of nested structure
const state = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      author: { id: 1, name: 'John' },
      comments: [
        { id: 1, text: 'Great post!', author: { id: 2, name: 'Jane' } }
      ]
    }
  ]
};

// Use normalized structure
const state = {
  posts: {
    byId: {
      1: { id: 1, title: 'Post 1', authorId: 1, commentIds: [1] }
    },
    allIds: [1]
  },
  users: {
    byId: {
      1: { id: 1, name: 'John' },
      2: { id: 2, name: 'Jane' }
    },
    allIds: [1, 2]
  },
  comments: {
    byId: {
      1: { id: 1, text: 'Great post!', authorId: 2, postId: 1 }
    },
    allIds: [1]
  }
};
\`\`\`

## Performance Optimization

### 1. React.memo and useMemo

Use React.memo to prevent unnecessary re-renders of functional components:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveCalculation(item));
  }, [data]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onUpdate={onUpdate} />
      ))}
    </div>
  );
});
\`\`\`

### 2. Code Splitting and Lazy Loading

Split your code at the route level to reduce initial bundle size:

\`\`\`jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
\`\`\`

## Testing Strategy

### Component Testing

Write tests that focus on behavior rather than implementation:

\`\`\`jsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('submits form with correct data', async () => {
  const onSubmit = jest.fn();
  render(<ContactForm onSubmit={onSubmit} />);

  await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
  await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(onSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com'
  });
});
\`\`\`

## Conclusion

Building scalable React applications is about making thoughtful decisions at every level of your application. By following these patterns and best practices, you'll create applications that are easier to maintain, test, and extend as your project grows.

Remember that scalability isn't just about handling more users or data – it's also about making your codebase scalable for your development team. Clean, well-organized code that follows consistent patterns will make it easier for new team members to contribute and for existing team members to maintain and extend the application.

The key is to start with these principles from the beginning of your project, rather than trying to retrofit them later. Happy coding!
    `,
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Architecture"],
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg"
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="p-0">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <CalendarDays size={16} className="mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {post.readTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">AJ</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-600">Full-stack Developer</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Heart size={16} className="mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>
        </header>

        <Separator className="mb-12" />

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            style={{ whiteSpace: 'pre-line' }}
          >
            {post.content}
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart size={16} className="mr-2" />
                Like this article
              </Button>
              <Button variant="outline" size="sm">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-medium text-gray-600">AJ</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                <p className="text-gray-600 mb-2">
                  Full-stack developer passionate about creating beautiful, functional, 
                  and user-centered digital experiences.
                </p>
                <Link to="/blog">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600">
                    More articles by {post.author.name}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
