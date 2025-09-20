import { Metadata } from 'next';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/constants';

export const metadata: Metadata = {
  title: 'About GoldsBet - Premium Gaming App',
  description: 'Learn about GoldsBet gaming app - the ultimate platform for Pakistan, India & Bangladesh. Discover our commitment to secure gaming, fair play, and real cash rewards.',
  keywords: ['about goldsbet', 'gaming app', 'casino app', 'pakistan gaming', 'india gaming', 'bangladesh gaming', 'mobile gaming', 'real money gaming'],
  openGraph: {
    title: 'About GoldsBet - Premium Gaming App',
    description: 'Learn about GoldsBet gaming app - the ultimate platform for Pakistan, India & Bangladesh. Discover our commitment to secure gaming, fair play, and real cash rewards.',
    url: 'https://goldsbet.com/about',
    siteName: 'GoldsBet',
  },
  alternates: {
    canonical: 'https://goldsbet.com/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
          <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  About{' '}
                  <Link href="/" className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent hover:text-yellow-300 transition-colors">
                    GoldsBet
                  </Link>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  The ultimate gaming app for Pakistan, India & Bangladesh. Experience secure gaming with real cash rewards and international standards.
                </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Gaming Platform</h2>
              <p className="text-lg text-gray-600 mb-4">
                <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">GoldsBet</Link> is an international gaming app designed specifically for players in Pakistan, India, and Bangladesh. 
                We understand the gaming preferences of these regions and have created a platform that offers the perfect 
                blend of traditional and modern gaming experiences.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our app features hundreds of games including popular slot machines, card games like Teen Patti and Dragon Tiger, 
                fish shooting games, live casino games, and comprehensive sports betting options. All games are developed 
                with international standards and feature HD graphics for the ultimate gaming experience.
              </p>
              <p className="text-lg text-gray-600">
                We pride ourselves on offering secure transactions through local payment methods like EasyPaisa and JazzCash, 
                ensuring that our players can deposit and withdraw their winnings easily and safely.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Security First</h4>
                    <p className="text-gray-600 text-sm">End-to-end encryption and 100% secure transactions with fair gaming practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real Cash Rewards</h4>
                    <p className="text-gray-600 text-sm">Earn real money through games, bonuses, referral programs, and VIP rewards.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Support</h4>
                    <p className="text-gray-600 text-sm">Dedicated support for Pakistan, India & Bangladesh with local payment methods.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600 text-sm">Cutting-edge technology with smooth performance and HD graphics.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-yellow-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-gray-50 py-16 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
                <div className="text-gray-700">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
                <div className="text-gray-700">Games Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">100K+</div>
                <div className="text-gray-700">Active Players</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
                <div className="text-gray-700">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
