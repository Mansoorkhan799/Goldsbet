import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Create Account and Login in GoldsBet Game Pakistan | Complete Guide',
  description: 'Step-by-step guide to create GoldsBet account and login securely in Pakistan. Learn account setup, verification, security tips, and troubleshooting for Pakistani players.',
  keywords: ['goldsbet pakistan', 'goldsbet account', 'goldsbet login', 'goldsbet registration', 'goldsbet signup', 'pakistan gaming account', 'mobile gaming pakistan'],
};

export default function CreateAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-yellow-400 hover:text-yellow-300 font-medium mb-6 inline-flex items-center transition-colors">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              How to Create Account and Login in GoldsBet Game Pakistan
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Complete step-by-step guide to create your{' '}
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
              GoldsBet
            </Link>{' '}
            account and login securely for Pakistani players.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="mb-8">

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Creating Your GoldsBet Account</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Step 1: Download the App</h3>
              <p className="text-blue-800 mb-4">
                First, download the <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">GoldsBet</Link> app from our official website. The app is available for both Android and iOS devices.
              </p>
              <a 
                href="https://rummyreturn.com/?dl=dc9uxm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
              >
                Download GoldsBet App
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Step 2: Account Registration</h3>
              <ol className="list-decimal list-inside text-green-800 space-y-2">
                <li>Open the <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">GoldsBet</Link> app on your device</li>
                <li>Tap on &quot;Register&quot; or &quot;Sign Up&quot; button</li>
                <li>Enter your mobile number (Pakistani number preferred)</li>
                <li>Create a unique username</li>
                <li>Set a strong password (minimum 8 characters)</li>
                <li>Confirm your password</li>
                <li>Read and accept the terms and conditions</li>
                <li>Click &quot;Register&quot; to create your account</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Step 3: Account Verification</h3>
              <p className="text-purple-800 mb-4">
                After registration, you&apos;ll need to verify your account for security purposes:
              </p>
              <ul className="list-disc list-inside text-purple-800 space-y-2">
                <li>Check your SMS for verification code</li>
                <li>Enter the verification code in the app</li>
                <li>Complete your profile information</li>
                <li>Add your email address (optional but recommended)</li>
                <li>Set up security questions</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Logging Into Your Account</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Login Process</h3>
              <ol className="list-decimal list-inside text-yellow-800 space-y-2">
                <li>Open the <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">GoldsBet</Link> app</li>
                <li>Tap on &quot;Login&quot; button</li>
                <li>Enter your username or mobile number</li>
                <li>Enter your password</li>
                <li>Click &quot;Login&quot; to access your account</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Security Tips for Pakistani Players</h2>
            
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Important Security Measures</h3>
              <ul className="list-disc list-inside text-red-800 space-y-2">
                <li>Never share your login credentials with anyone</li>
                <li>Use a strong, unique password</li>
                <li>Enable two-factor authentication if available</li>
                <li>Log out from shared devices</li>
                <li>Keep your app updated to the latest version</li>
                <li>Report any suspicious activity immediately</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Troubleshooting Common Issues</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Problems and Solutions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Can&apos;t receive verification SMS?</h4>
                  <p className="text-gray-700">Check your mobile network, ensure you have sufficient balance, and try again after a few minutes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Forgot your password?</h4>
                  <p className="text-gray-700">Use the &quot;Forgot Password&quot; option and follow the SMS verification process to reset your password.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Account locked or suspended?</h4>
                  <p className="text-gray-700">Contact customer support immediately through the app or email for assistance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Ready to Start Gaming?</h3>
              <p className="text-yellow-800 mb-4">
                Now that you have your <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-semibold">GoldsBet</Link> account ready, you can start enjoying our amazing games and features!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://rummyreturn.com/?dl=dc9uxm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
                >
                  Download GoldsBet App
                </a>
                <Link 
                  href="/blog/proven-strategies-win-big-goldsbet-pakistan"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition-colors font-semibold"
                >
                  Learn Winning Strategies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
