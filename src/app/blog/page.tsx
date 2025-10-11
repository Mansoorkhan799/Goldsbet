import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GoldsBet Pakistan Blog | Account Setup, Strategies & Money Management',
  description: 'Learn how to create account, login, deposit, withdraw money and use proven strategies to win big in GoldsBet game Pakistan. Complete guide for Pakistani players.',
  keywords: ['goldsbet pakistan', 'goldsbet account', 'goldsbet login', 'goldsbet deposit', 'goldsbet withdraw', 'goldsbet strategies', 'pakistan gaming', 'mobile gaming pakistan'],
};

const blogPosts = [
  {
    id: 1,
    title: 'How to Create Account and Login in GoldsBet Game Pakistan',
    excerpt: 'Complete step-by-step guide to create your GoldsBet account and login securely. Learn account setup, verification process, and security tips for Pakistani players.',
    date: '2025-01-15',
    slug: 'how-to-create-account-login-goldsbet-pakistan',
  },
  {
    id: 2,
    title: 'Proven Strategies to Win Big in GoldsBet Game Pakistan',
    excerpt: 'Discover expert strategies and tips to maximize your winnings in GoldsBet Pakistan. Learn bankroll management, game selection, and winning techniques.',
    date: '2025-01-12',
    slug: 'proven-strategies-win-big-goldsbet-pakistan',
  },
  {
    id: 3,
    title: 'How to Deposit and Withdraw Money from GoldsBet Game Pakistan',
    excerpt: 'Complete guide to deposit and withdraw money safely in GoldsBet Pakistan. Learn about EasyPaisa, JazzCash, and other payment methods available.',
    date: '2025-01-10',
    slug: 'deposit-withdraw-money-goldsbet-pakistan',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            GoldsBet Pakistan Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete guides and strategies for Pakistani players to maximize their <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">GoldsBet</Link> gaming experience.
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
          <p className="text-gray-600 mb-4">Ready to start your GoldsBet journey in Pakistan?</p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Download GoldsBet App
          </Link>
        </div>
      </div>
    </div>
  );
}
