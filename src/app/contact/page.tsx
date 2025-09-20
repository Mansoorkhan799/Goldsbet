// import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import { CONTACT_INFO, FAQ_DATA } from '@/constants';

export const metadata = {
  title: 'Contact GoldsBet - Gaming App Support',
  description: 'Get help with GoldsBet gaming app. Contact our support team for technical issues, account problems, payment queries, and gaming assistance in Pakistan, India & Bangladesh.',
  keywords: ['goldsbet support', 'gaming app help', 'customer support', 'technical support', 'gaming assistance', 'app support'],
};

export default function Contact() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Contact{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get help with <Link href="/" className="text-yellow-400 hover:text-yellow-300 font-semibold">GoldsBet</Link> gaming app. Contact our support team for technical issues, account problems, payment queries, and gaming assistance.
              </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Gaming Support</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Channels</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-1">Gaming app inquiries</p>
                    <a href={`mailto:${CONTACT_INFO.email.general}`} className="text-yellow-600 hover:text-yellow-700">
                      {CONTACT_INFO.email.general}
                    </a>
                    <p className="text-gray-600 mb-1 mt-2">Technical support</p>
                    <a href={`mailto:${CONTACT_INFO.email.support}`} className="text-yellow-600 hover:text-yellow-700">
                      {CONTACT_INFO.email.support}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                    <p className="text-yellow-600 font-medium mt-2">24/7 Gaming Support Available</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional Office</h3>
                    <p className="text-gray-600">
                      Serving Pakistan, India & Bangladesh<br />
                      International Gaming Platform<br />
                      Secure & Licensed Operations<br />
                      Local Payment Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Gaming Support FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
