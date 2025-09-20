import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - GoldsBet Gaming App',
  description: 'Read GoldsBet\'s privacy policy for our gaming app. Learn how we protect your personal information, gaming data, and financial transactions in Pakistan, India & Bangladesh.',
  keywords: ['privacy policy', 'gaming app privacy', 'data protection', 'goldsbet privacy', 'user data security', 'gaming data protection'],
  openGraph: {
    title: 'Privacy Policy - GoldsBet Gaming App',
    description: 'Read GoldsBet\'s privacy policy for our gaming app. Learn how we protect your personal information, gaming data, and financial transactions.',
    url: 'https://goldsbet.com/privacy',
    siteName: 'GoldsBet',
  },
  alternates: {
    canonical: 'https://goldsbet.com/privacy',
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Privacy{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we protect your gaming data, personal information, and financial transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us when you use our gaming app, such as when you create an account, 
                  play games, make deposits, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Gaming account credentials and preferences</li>
                  <li>Payment information and transaction history (EasyPaisa, JazzCash, cryptocurrency)</li>
                  <li>Gaming activity and performance data</li>
                  <li>Device information, IP address, and app usage data</li>
                  <li>Communication records and support interactions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our gaming services</li>
                  <li>Process gaming transactions and manage your account</li>
                  <li>Track gaming activity and provide personalized gaming experiences</li>
                  <li>Communicate with you about your account, bonuses, and promotions</li>
                  <li>Provide customer support and respond to your gaming inquiries</li>
                  <li>Ensure fair play and prevent fraud in gaming activities</li>
                  <li>Comply with legal obligations and gaming regulations</li>
                  <li>Send you gaming promotions and bonus offers (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement comprehensive security measures to protect your gaming data and personal information 
                  against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>Secure gaming servers and encrypted databases</li>
                  <li>Regular security audits and system updates</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Secure payment processing with local payment methods</li>
                  <li>Fair gaming algorithms and anti-fraud systems</li>
                  <li>Employee training on gaming data protection</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Gaming App Analytics and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use analytics and tracking technologies to enhance your gaming experience and improve our app. 
                  This helps us:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Remember your gaming preferences and settings</li>
                  <li>Analyze gaming patterns and app usage</li>
                  <li>Provide personalized gaming recommendations</li>
                  <li>Track gaming performance and achievements</li>
                  <li>Improve game performance and user experience</li>
                  <li>Prevent cheating and ensure fair play</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You can control tracking settings through your device preferences, though disabling certain features 
                  may affect the functionality of our gaming app.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-600 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the information provided in the 
                  &quot;Contact Us&quot; section below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-600">
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this privacy policy, unless a longer retention period is required or 
                  permitted by law. When we no longer need your information, we will securely delete 
                  or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-600">
                  Your personal information may be transferred to and processed in countries other than 
                  your country of residence. We ensure that such transfers comply with applicable data 
                  protection laws and implement appropriate safeguards to protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-gray-600">
                  Our services are not intended for individuals under the age of 18. We do not knowingly 
                  collect personal information from children under 18. If we become aware that we have 
                  collected personal information from a child under 18, we will take steps to delete 
                  such information promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the &quot;Last updated&quot; date. We encourage you to review 
                  this privacy policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us through our support channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
