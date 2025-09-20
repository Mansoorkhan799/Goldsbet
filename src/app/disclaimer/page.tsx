import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer & Terms - GoldsBet Gaming App',
  description: 'Read GoldsBet\'s disclaimer and terms of service for our gaming app. Important information about responsible gaming, risks, and limitations in Pakistan, India & Bangladesh.',
  keywords: ['disclaimer', 'terms of service', 'gaming terms', 'responsible gaming', 'gaming risks', 'goldsbet disclaimer', 'gaming app terms'],
  openGraph: {
    title: 'Disclaimer & Terms - GoldsBet Gaming App',
    description: 'Read GoldsBet\'s disclaimer and terms of service for our gaming app. Important information about responsible gaming, risks, and limitations.',
    url: 'https://goldsbet.com/disclaimer',
    siteName: 'GoldsBet',
  },
  alternates: {
    canonical: 'https://goldsbet.com/disclaimer',
  },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Disclaimer &{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Terms
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Important information about our gaming app, risks, and your responsibilities as a player.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Gaming App Disclaimer</h2>
                <p className="text-gray-600 mb-4">
                  The <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">GoldsBet</Link> gaming app is provided for entertainment purposes. While we strive to ensure 
                  fair play and accurate gaming results, we make no representations or warranties about the 
                  completeness, accuracy, reliability, or availability of our gaming services.
                </p>
                <p className="text-gray-600">
                  Any reliance you place on our gaming services is therefore strictly at your own risk. 
                  We are not responsible for any losses incurred through gaming activities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Gaming and Financial Risks</h2>
                <p className="text-gray-600 mb-4">
                  <strong>IMPORTANT:</strong> Gaming activities involve significant financial risk. You should 
                  only play with money you can afford to lose. Past gaming performance does not guarantee future results.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>All gaming activities involve risk of financial loss</li>
                  <li>No gaming strategy can guarantee profits</li>
                  <li>You may lose more than your initial deposit</li>
                  <li>Game odds and payouts are subject to change</li>
                  <li>Technical issues may affect gaming outcomes</li>
                  <li>Network connectivity issues may impact gameplay</li>
                  <li>App updates may temporarily affect game availability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Age Restrictions</h2>
                <p className="text-gray-600">
                  You must be at least 18 years old (or the legal age of majority in your jurisdiction) 
                  to use our gaming app. We reserve the right to verify your age and identity at any time. 
                  Accounts belonging to minors will be immediately closed and any winnings forfeited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Compliance</h2>
                <p className="text-gray-600 mb-4">
                  It is your responsibility to ensure that your use of our gaming app complies with all 
                  applicable laws in your jurisdiction (Pakistan, India, Bangladesh). We do not provide 
                  legal advice and recommend consulting with a legal professional if you have questions 
                  about the legality of gaming activities in your area.
                </p>
                <p className="text-gray-600">
                  We reserve the right to refuse service to anyone and to close accounts that violate 
                  our terms of service or applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. App Technical Limitations</h2>
                <p className="text-gray-600 mb-4">
                  While we strive to maintain uninterrupted service, we cannot guarantee that our gaming app 
                  will be free from technical issues, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Server downtime or maintenance periods</li>
                  <li>Internet connectivity issues</li>
                  <li>Device compatibility problems</li>
                  <li>App crashes or freezing</li>
                  <li>Third-party service interruptions</li>
                  <li>Data synchronization delays</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We are not liable for any losses resulting from technical issues beyond our reasonable control.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Content</h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites or content. We do not endorse 
                  or assume responsibility for the content, privacy policies, or practices of these third-party 
                  sites. Your use of third-party sites is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">GoldsBet</Link> shall not be liable for any direct, 
                  indirect, incidental, special, consequential, or punitive damages, including but not 
                  limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Loss of profits or revenue</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption</li>
                  <li>Personal injury or property damage</li>
                  <li>Emotional distress</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Account Security</h2>
                <p className="text-gray-600 mb-4">
                  You are responsible for maintaining the security of your account credentials. We recommend:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Using strong, unique passwords</li>
                  <li>Enabling two-factor authentication when available</li>
                  <li>Not sharing your account information</li>
                  <li>Logging out after each session</li>
                  <li>Reporting suspicious activity immediately</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We are not responsible for unauthorized access to your account due to your failure 
                  to maintain adequate security measures.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify this disclaimer at any time. Changes will be effective 
                  immediately upon posting on our website. Your continued use of our services after changes 
                  are posted constitutes acceptance of the modified terms. We encourage you to review this 
                  disclaimer periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about this disclaimer or need to report any issues, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-2">
                    <strong>Email:</strong> legal@goldsbet.com
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Phone:</strong> +1 (234) 567-890
                  </p>
                  <p className="text-gray-600">
                    <strong>Address:</strong> 123 Business Street, Suite 100, New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-8">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Important Notice</h3>
                <p className="text-red-700">
                  By using our services, you acknowledge that you have read, understood, and agree to be 
                  bound by this disclaimer. If you do not agree with any part of this disclaimer, 
                  you must not use our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
