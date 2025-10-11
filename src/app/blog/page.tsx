import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GoldsBet Gaming Blog | Tips, Strategies & Latest Updates',
  description: 'Read the latest gaming tips, strategies, and updates from GoldsBet. Learn how to maximize your gaming experience and stay updated with new features.',
  keywords: ['gaming tips', 'betting strategies', 'casino guides', 'gaming blog', 'mobile gaming tips', 'online gaming advice'],
};

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Gaming Strategies for Beginners',
    excerpt: 'Learn essential strategies to get started with mobile gaming and maximize your entertainment experience.',
    date: '2025-01-10',
    slug: 'top-5-gaming-strategies-beginners',
  },
  {
    id: 2,
    title: 'Understanding Mobile Gaming Security',
    excerpt: 'Discover how GoldsBet ensures your data and transactions are secure while gaming on mobile devices.',
    date: '2025-01-08',
    slug: 'mobile-gaming-security-guide',
  },
  {
    id: 3,
    title: 'Best Practices for Responsible Gaming',
    excerpt: 'Learn about responsible gaming practices and how to enjoy entertainment while maintaining healthy habits.',
    date: '2025-01-05',
    slug: 'responsible-gaming-practices',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            GoldsBet Gaming Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest gaming tips, strategies, and insights to enhance your mobile gaming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-yellow-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Stay tuned for more gaming insights and tips!</p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
