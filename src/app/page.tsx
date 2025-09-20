import { Metadata } from 'next';
import InternalLink from '@/components/ui/InternalLink';
import AppInfoAccordion from '@/components/ui/AppInfoAccordion';
import FAQAccordion from '@/components/ui/FAQAccordion';
import MoveToTop from '@/components/ui/MoveToTop';

export const metadata: Metadata = {
  title: 'Golds Bet Game Pakistan | Free Download for Android and iOS',
  description: 'Download Golds Bet app for the ultimate gaming experience! Play slots, cards, poker, fish shooting games, and sports betting. Available in Pakistan, India, and Bangladesh with secure payments.',
  keywords: ['golds bet app', 'gaming app', 'casino games', 'sports betting', 'pakistan gaming', 'india gaming', 'bangladesh gaming', 'slot machines', 'poker games', 'fish shooting', 'live betting'],
  openGraph: {
    title: 'Golds Bet Game Pakistan | Free Download for Android and iOS',
    description: 'Download Golds Bet app for the ultimate gaming experience! Play slots, cards, poker, fish shooting games, and sports betting.',
    url: 'https://goldsbetpk.tech',
    siteName: 'Golds Bet',
    images: [
      {
        url: 'https://goldsbetpk.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Golds Bet Gaming App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golds Bet Game Pakistan | Free Download for Android and iOS',
    description: 'Download Golds Bet app for the ultimate gaming experience! Play slots, cards, poker, fish shooting games, and sports betting.',
    images: ['https://goldsbetpk.tech/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://goldsbetpk.tech',
  },
};

export default function Home() {
  const faqData = [
    {
      question: "Is the Golds Bet game safe?",
      answer: "Yes, it is end-to-end encrypted and 100% safe to use. We use advanced security measures to protect your data and transactions."
    },
    {
      question: "What games can I play on Golds Bet online?",
      answer: "Check the categories and you will find games like Fortune Gems, Rummy, Andar Bahr, Teen Patti, Fishing Rush, and many other options."
    },
    {
      question: "Can I earn real money on the Golds Bet app?",
      answer: "Yes, absolutely, you can earn real cash and income on this app through various games, bonuses, and referral programs."
    },
    {
      question: "What payment methods are available?",
      answer: "We support EasyPaisa, JazzCash, and cryptocurrency for Pakistan, India & Bangladesh. All transactions are secure and encrypted."
    },
    {
      question: "How do I download the Golds Bet app?",
      answer: "You can download the app directly from our website. The download process takes only 2 minutes and is completely free."
    },
    {
      question: "Is there customer support available?",
      answer: "Yes, we provide 24/7 customer support to help you with any questions or issues you may have."
    },
    {
      question: "Can I play on multiple devices?",
      answer: "Yes, you can access your account from multiple devices. Your progress and balance are synced across all devices."
    },
    {
      question: "Are there any bonuses for new users?",
      answer: "Yes, new users get welcome bonuses, download bonuses, and free spins to get started with their gaming experience."
    }
  ];

  return (
    <div className="min-h-screen">
          {/* GitHub-style Hero Section */}
          <section className="relative min-h-[100vh] sm:min-h-[80vh] lg:min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] sm:min-h-[80vh] lg:min-h-[70vh] px-4 sm:px-6 lg:px-8 pt-8 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
              <div className="text-center max-w-4xl mx-auto">
                {/* Main heading */}
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Golds Bet Game Pakistan
                  </span>
                  <br />
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mt-2 block">
                    Free Download for Android and iOS
                  </span>
            </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                  The ultimate Golds Bet gaming app for Pakistan, India & Bangladesh. Play slots, cards, poker, fish shooting games, and sports betting with secure payments and real cash rewards.
                </p>
                
                {/* Download Button */}
                <div className="flex justify-center items-center px-4">
                  <a 
                    href="https://rummyreturn.com/?dl=dc9uxm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 bg-blue-900 border-2 border-cyan-400 text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-blue-800 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25 flex items-center gap-2 sm:gap-3 md:gap-4 w-full max-w-sm sm:max-w-md md:max-w-lg"
                  >
                    <span className="relative z-10 text-center flex-1">DOWNLOAD GOLDSBET</span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* App Information Section */}
          <section className="py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* App Info Table */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl mb-8 border border-gray-700">
                <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-4 border-b border-gray-600">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    App Information
                  </h3>
                </div>
                <div className="divide-y divide-gray-700">
                  <div className="flex justify-between items-center px-6 py-4 bg-gray-800 hover:bg-gray-750 transition-colors">
                    <span className="text-gray-300 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      App Name
                    </span>
                    <span className="text-white font-bold text-lg">Golds Bet</span>
                  </div>
                  <div className="flex justify-between items-center px-6 py-4 bg-gray-900 hover:bg-gray-850 transition-colors">
                    <span className="text-gray-300 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Publisher
                    </span>
                    <span className="text-white font-bold text-lg">Golds Bet</span>
                  </div>
                  <div className="flex justify-between items-center px-6 py-4 bg-gray-800 hover:bg-gray-750 transition-colors">
                    <span className="text-gray-300 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Category
                    </span>
                    <span className="text-white font-bold text-lg">Casino</span>
                  </div>
                  <div className="flex justify-between items-center px-6 py-4 bg-gray-900 hover:bg-gray-850 transition-colors">
                    <span className="text-gray-300 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Latest Version
                    </span>
                    <span className="text-white font-bold text-lg">1.1.32</span>
                  </div>
                  <div className="flex justify-between items-center px-6 py-4 bg-gray-800 hover:bg-gray-750 transition-colors">
                    <span className="text-gray-300 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Size
                    </span>
                    <span className="text-white font-bold text-lg">36.08 MB</span>
                  </div>
                  <div className="flex justify-between items-center px-6 py-4 bg-gray-900 hover:bg-gray-850 transition-colors">
                    <span className="text-gray-300 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Platform
                    </span>
                    <span className="text-white font-bold text-lg">Android & iOS</span>
                  </div>
                  <div className="flex justify-between items-center px-6 py-4 bg-gray-800 hover:bg-gray-750 transition-colors">
                    <span className="text-gray-300 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Price
                    </span>
                    <span className="text-green-400 font-bold text-lg bg-green-900/20 px-3 py-1 rounded-full">Free</span>
                  </div>
                </div>
              </div>

              {/* Application Requirements Accordion */}
              <AppInfoAccordion />
            </div>
          </section>

          {/* Introduction Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Section - Text Content */}
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Introduction
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    If you want to enjoy an international gaming experience, then download the <InternalLink href="/" className="text-yellow-600 hover:text-yellow-700">Golds Bet</InternalLink> app. It is an international gaming app available in Pakistan, India, and Bangladesh. It has top games like slot machines, card and poker games, fish shooting games, as well as life and sports. Depending on your location, you can get access to the local events and tournaments. On this simple app, you can play hundreds of games and get your hands on free cash. When it comes to security, users do not need to worry because all their data is safe and secure on the app. Let&apos;s check the apps working in detail.
                  </p>
                </div>
                
                {/* Right Section - Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-sm lg:max-w-md">
                    <img
                      src="/goldsbet pakistan.webp"
                      alt="GoldsBet Pakistan App"
                      className="w-full h-auto rounded-lg shadow-lg object-contain max-w-xs lg:max-w-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is GoldsBet App Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  What is GoldsBet App?
                </h2>
                <div className="max-w-4xl mx-auto text-left space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    Pakistan, India, and Bangladesh share some common features. For example, people of these countries love casino gaming apps such as Indian poker and sports. These types of games are very popular because these games not only offer fun and entertainment but also help to generate passive income. You can play the games by using coins that you will get from the bonuses, as well as from the purchases.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    If you feel lucky, you can also join different tournaments and challenges where you can get a jackpot. According to your location, it will offer you different types of payment methods. For instance, in Pakistan, you can use Easypaisa and Jazzcash for deposit and withdrawal. The download and sign up on the app takes only 2 minutes, and once you get the app on your device, you can check different types of games. There is a download bonus, a welcome bonus, free spins, VIP benefits, as well as many other programs that you can check.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Unique Features Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Unique Features of GoldsBet App
                </h2>
                <div className="max-w-4xl mx-auto text-left space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Play a Variety of Games</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      On this platform, you will find an extensive list of games that are divided into different types. The most popular categories are cards, sports as well and slot machines. You will also find some live games, bingo games, and fish shooting games.
                    </p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• International Standard</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      This is a professional app which was developed keeping in view the international standard and regulations. To make your data safe, it has end-to-end encryption and fair games.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Game Providers</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      Players can filter the games on the basis of gaming companies. Popular providers are Jili, Aviator, WG, SG, and PG. You can try games from the top game providers and enjoy the best performance of the app.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Welcome Bonuses & Daily Rewards</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      The app is suitable for new players because it offers welcome bonuses and deposit rewards for newly joined users. Welcome bonus offers free coins and cash, which you can use to play different types of games.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Live Betting in Real-Time</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      Apart from slot machines and fish shooting games, there are some live games where you can play with other players. These games can be card games, table games, or a mix of both. Real-time games offer better rewards.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Fully Mobile-Friendly</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      The app is fully optimised for mobile use. Android users, especially, can download this app on their device and start playing the games. Furthermore, it is compatible with iOS as well as PC.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Safe & Local Payment</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      You can withdraw your money in PKR, INR or taka Depending on the country of your origin. You can easily withdraw your winnings into your Jazzcash or Easypaisa if you are in Pakistan.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• VIP Loyalty Program</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      Those players who log in on the app daily and are loyal should join the VIP club. This program offers special perks to the loyal players. These include exclusive and promotional bonuses as well as weekly and monthly rewards.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Event-Based Bonuses</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      In the &quot;offer&quot; section, you can also find event-based bonuses. You need to join different events and then complete the challenges or play games to get pooled prizes or jackpots.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Expert Tips & Game Insights</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      You can also get access to the tutorial on how to use the app. For example, it will tell you how to deposit or withdraw money. Moreover, you can contact players through live chat and learn different tips.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Offline Gaming & Smart Alerts</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      There are some games that you can play in an offline setting. This mode can be used to practice the games; however, you cannot earn real money if you are offline.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Referral Rewards</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      The app has a referral program, which is quite extensive. Players can join the program to get money by sharing the app with their loved ones. There is an instant cash offer as well as gaming commissions.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Security Centre</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      The app has a security centre where you can check your account&apos;s security level. To make the app more secure, add your phone number, link your email, and turn on Google Authenticator. You also need to set your withdrawal password.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">• Latest Updates</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      Players can enjoy new features such as new offers, new games, as well as newly added events in the latest updates. Suggestions and feedbacks are also welcome and are incorporated in the updates.
                    </p>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Why Choose Golds Bet App?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Experience the best Golds Bet gaming platform with international standards, secure payments, and exciting rewards.
            </p>
            
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
                  <p className="text-xl font-semibold text-gray-900 mb-2">Hundreds of Games</p>
              <p className="text-gray-600">
                    Play slots, cards, poker, fish shooting, live games, and sports betting with HD graphics.
              </p>
            </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
                  <p className="text-xl font-semibold text-gray-900 mb-2">100% Secure</p>
                  <p className="text-gray-600">
                    End-to-end encryption, fair games, and secure transactions with local payment methods.
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-gray-900 mb-2">Real Cash Rewards</p>
                  <p className="text-gray-600">
                    Earn real money through games, bonuses, referral programs, and VIP loyalty rewards.
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-gray-900 mb-2">Local Payments</p>
                  <p className="text-gray-600">
                    EasyPaisa, JazzCash, and cryptocurrency support for Pakistan, India & Bangladesh.
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</p>
              <p className="text-gray-600">
                    Instant deposits, withdrawals, and real-time gaming with smooth performance.
              </p>
            </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</p>
              <p className="text-gray-600">
                    Round-the-clock customer support with live chat and expert gaming tips.
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* App Screenshots Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Golds Bet App Screenshots
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                  See the Golds Bet app in action with these real screenshots showcasing our features.
                </p>
              </div>
              
              <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">Premium Gaming Experience</h3>
                  <img 
                    src="/Golds%20bet.webp" 
                    alt="Golds Bet Premium Gaming Experience" 
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto rounded-xl shadow-xl"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">Localized Payment Methods</h3>
                  <img 
                    src="/Goldsbet%20Game%20Pakistan.webp" 
                    alt="Golds Bet Pakistan Payment Methods" 
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto rounded-xl shadow-xl"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">Secure Gaming Platform</h3>
                  <img 
                    src="/Goldsbet%20pk.webp" 
                    alt="Golds Bet PK Secure Platform" 
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Games Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Popular Game Categories
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                  Discover exciting games across multiple categories with the best odds and rewards.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Slots</p>
                  <p className="text-xs sm:text-sm text-gray-600">Money Coming, Crazy 777, Super Ace</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Cards</p>
                  <p className="text-xs sm:text-sm text-gray-600">Teen Patti, Dragon Tiger, Rummy</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Live Games</p>
                  <p className="text-xs sm:text-sm text-gray-600">Baccarat, Roulette, Real-time</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Sports</p>
                  <p className="text-xs sm:text-sm text-gray-600">Cricket, Football, Tennis</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Fish Shooting</p>
                  <p className="text-xs sm:text-sm text-gray-600">Fishing Rush, Ocean King</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Lottery</p>
                  <p className="text-xs sm:text-sm text-gray-600">BBIN Lottery, Saba Lottery</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">E-Sports</p>
                  <p className="text-xs sm:text-sm text-gray-600">Competitive Gaming</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Bingo</p>
                  <p className="text-xs sm:text-sm text-gray-600">Classic Bingo Games</p>
                </div>
              </div>
            </div>
          </section>

          {/* Available Games Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Available Games in the APP
                </h2>
                <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-8 sm:mb-12">
                  Detailed information about each game category and popular titles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Slots</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    If you want to try your luck, slot machines are the best option for you. In these simple games, you just need to select your pay line and then spin the reels. There are some slot machines that have at least 96% RTP. Popular options are Money Coming, Crazy 777, Super Ace, and many others.
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-600 font-medium">Popular: Money Coming, Crazy 777, Super Ace</p>
                </div>

                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Cards</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Card games are the most favourite of desi people, including Indians and Bangladeshis. In Pakistan, people like to play strategic games like Teen Patti, Dragon Tiger, 7 Up Down, Ludo, and Rummy. However, these are not similar to slots, and every game has its own gameplay.
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-600 font-medium">Popular: Teen Patti, Dragon Tiger, Rummy</p>
                </div>

                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Live Games</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Live games are more rewarding because you will be playing in real time with real gamers. You can play baccarat and roulette as well as their different variants.
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-600 font-medium">Popular: Baccarat, Roulette, Real-time</p>
                </div>

                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Sports</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    The Sports category has further different types of sports such as soccer, cricket, tennis, basketball, and many other. Also, depending on your location, it will show you local sports events.
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-600 font-medium">Popular: Cricket, Football, Tennis</p>
                </div>

                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">E-Sports</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    E-sports are also very engaging to play. There are various channels, such as BBIN Lottery and Saba Lottery.
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-600 font-medium">Popular: Competitive Gaming</p>
                </div>

                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                  <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Lottery</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Lottery games are very fun to play. These are played between tons of players who compete against each other. You can check the leaderboard, and those who win the game will get their lottery.
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-600 font-medium">Popular: BBIN Lottery, Saba Lottery</p>
                </div>
              </div>

            </div>
          </section>

          {/* Download Instructions Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  How to Download & Install Golds Bet Game?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                  Follow these simple steps to get started with Golds Bet on your device.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-4">For Android Users</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Android users can just click on the given link and download the Golds Bet Game APK.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>You must also enable unknown sources in your settings.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>In order to install the app, you need to look at the APK file first. Then click on the file to confirm installation.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-4">For iOS/iPhone Users</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>First of all, you can search for this app on the App Store. If it is available, then click on download and install.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Otherwise, you can download the APK file using the link.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Finally, to install the app, you first need to download a jailbreak device from the App Store and take advantage of it.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-4">On PC</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Many players want to enjoy these games on a computer since it has a bigger screen. Click on the link and download the app.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Next, go to the Play Store and download any trustworthy APK emulator.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Open the emulator and locate the game app on PC. Finally, click on the app and follow the given instructions to install it.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Account Setup Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  How to Create an Account and Register on the Golds Bet Game App?
                </h2>
                <div className="max-w-4xl mx-auto text-left space-y-4 sm:space-y-6">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Click on the register option once you open the app.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Enter your phone number or simply put a unique username.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Create a smart and unique password.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Check the terms and conditions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Click on register, and your account is ready.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>For Golds Bet login, use your username or phone number as well as your password to login.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  How to Set Up Your Account?
                </h2>
                <div className="max-w-4xl mx-auto text-left space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    Simply registering on the app is not enough; you also need to set up your account in different ways. This will allow you to keep track of different games and keep transactions safe.
                  </p>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Click on the profile once you login to the app.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>You can change your nickname or continue with the previous one.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Link your phone number if you have not already done so.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Enter your email to link it.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Enter your social media IDs such as WhatsApp, Telegram, and Facebook. This is, however, optional.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Enter your date of birth so that the app can confirm you are above 18 years.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Click on save, and you are ready to play different games.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deposit & Withdraw Money Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  How to Deposit & Withdraw Money?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-4">How to Deposit Money?</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Once you have chosen your game to play, you will need coins that you can purchase.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>For that, click on deposit in your profile.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>There are 2 modes of payment, such as wallets and cryptocurrency. E-wallets have further options like Easypaisa and Jazzcash. Choose your preferred method.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Choose your deposit amount that starts with Rs 100 up to Rs 500,000.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Tap on &quot;deposit now&quot;.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>On the next page, add your wallet or cryptocurrency account details. Click on send OTP.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>You will get the OTP through SMS or on your wallet app.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Enter the OTP and click on deposit to get the coins.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-4">How to Withdraw Money?</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>On your profile, click on withdraw.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>First of all, set the transaction password and confirm.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Now choose the amount to withdraw.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Enter the account number for the wallet and click on withdraw.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Bonuses and Rewards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Bonuses and Rewards
            </h2>
            <p className="text-xl text-gray-600">
                  Claim amazing bonuses and rewards to boost your gaming experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-3">Welcome Bonus</p>
                  <p className="text-gray-600 mb-4">
                    Welcome bonus consists of different offers. For instance, if you register on the app, you will get Rs 11, for SMS verification, you will get Rs 17, and first time download, you will get RS 50.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-3">Birthday Bonus</p>
                  <p className="text-gray-600 mb-4">
                    If you set your date of birth, you will get a special gift on your birthday. You will be rewarded with Rs. 8 on that day.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-3">Refer and Earn</p>
                  <p className="text-gray-600 mb-4">
                    If you successfully invite a user to this app, you will get PKR 200 instantly. Furthermore, there are many other bonuses if you become an agent, for example, there is 4% cashback for agents.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-3">Monthly Lucky Wheel</p>
                  <p className="text-gray-600 mb-4">
                    There is a monthly free wheel in silver, Gold, and diamond. If you spin the wheel, you will get a chance to win lots of mystery cash.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-3">Rescue Bonus</p>
                  <p className="text-gray-600 mb-4">
                    Those players who do not get lucky in the games and lose will get their cash back as a rescue bonus. There is 3% cashback for every game that you lose.
            </p>
          </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow-md">
                  <p className="text-xl font-semibold text-gray-900 mb-3">Daily Check In Bonus</p>
                  <p className="text-gray-600 mb-4">
                    If you are enjoying the app everyday you must check in on the app. You will be getting a Daily check-in bonus every day, with surprise bonuses every 7th day.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* User Reviews Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  User Reviews
                </h2>
                <p className="text-xl text-gray-600">
                  See what our players are saying about GoldsBet.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &quot;I have been using other gaming apps, but recently my friend recommended the Golds Bet game app. In my opinion, it has been the best thing that has happened to me. From the games and rewards to the user interface and transactions, everything is seamless. I am earning daily cash playing games like Ludo and Dragon, and Tiger.&quot;
                  </p>
                  <div className="text-sm text-gray-500">- Satisfied Player</div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &quot;Golds bet app is my go-to option when I am free to play the games. Instead of wasting my time on other apps, I play games on it and earn real money. Although I like all the games on it, sometimes it gets overwhelming to find your favourite game due to so many options. Overall, I really like this app and recommend it to you.&quot;
                  </p>
                  <div className="text-sm text-gray-500">- Happy Gamer</div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Get answers to common questions about GoldsBet.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <FAQAccordion faqs={faqData} />
              </div>
        </div>
      </section>

          {/* Pros and Cons Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Pros and Cons
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg shadow-md border border-green-200">
                  <p className="text-xl font-semibold text-green-800 mb-4">Pros</p>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Available in 3 countries, Pakistan, India, and Bangladesh.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Smooth performance and working.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>100% safe and secure.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>There are no ads on the app.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-8 rounded-lg shadow-md border border-red-200">
                  <p className="text-xl font-semibold text-red-800 mb-4">Cons</p>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Some games feel repetitive.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Might have regional restrictions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tips and Tricks Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Tips and Tricks to Win Big
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">💡</span>
                      <span>New players must set up their account carefully, adding their mobile number and linking their email to keep the account safe.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">💡</span>
                      <span>Before playing the games, make sure to learn about different types and categories. You can also learn the gameplay on YouTube.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">💡</span>
                      <span>When buying coins, make sure to start with a small investment, such as Rs 100.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">💡</span>
                      <span>Stick to your per-day budget instead of wagering all the coins in the games.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">💡</span>
                      <span>Check the latest updates and latest offers, and promos to get free cash.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">💡</span>
                      <span>This platform is not responsible for your monetary loss; therefore, you must play rationally.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Conclusion
                </h2>
                <div className="max-w-4xl mx-auto text-left space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    In conclusion, Golds Bet game is a trending gaming app that is popular for all the right reasons. First of all, it is an international app that is available in multiple countries. It has hundreds of engaging and immersive games that you can play in HD graphics. On this free app, you will find ways to earn real cash, such as games, rewards, and bonuses, as well as a referral program. It is safe and secure, and there are fair games to play. Anyone can easily download it and set up their account to play the games. Furthermore, there are different transaction options such as cryptocurrency and e-wallets. Players are loving this free app, and you should also download it and enjoy starting.
                  </p>
                </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Gaming?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of players from Pakistan, India & Bangladesh. Download now and get instant bonuses!
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://rummyreturn.com/?dl=dc9uxm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-200 inline-block"
                >
                  Download App Now
                </a>
                <a
            href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors duration-200 inline-block"
          >
                  Get Support
                </a>
              </div>
        </div>
      </section>
      <MoveToTop />
    </div>
  );
}
