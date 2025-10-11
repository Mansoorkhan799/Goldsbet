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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              GoldsBet Pakistan Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Complete guides and strategies for Pakistani players to maximize their{' '}
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
              GoldsBet
            </Link>{' '}
            gaming experience.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {/* Card Header with Gradient */}
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4">
                <div className="text-sm text-yellow-100 font-medium">{post.date}</div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`} className="hover:text-yellow-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                
                {/* Read More Button */}
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
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

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your GoldsBet Journey in Pakistan?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of Pakistani players who are already winning big with GoldsBet. Download the app now and get instant bonuses!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download GoldsBet App
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-600 rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300 font-bold text-lg"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
