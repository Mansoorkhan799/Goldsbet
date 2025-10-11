import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'GoldsBet Games | Complete Game Collection & Categories',
  description: 'Explore our complete collection of games including slots, cards, poker, fish shooting, live games, and sports betting. Find your favorite games and discover new ones.',
  keywords: ['goldsbet games', 'slot games', 'card games', 'poker games', 'fish shooting', 'live games', 'sports betting', 'casino games', 'mobile games'],
};

const gameCategories = [
  {
    name: 'Slot Games',
    description: 'Experience the thrill of slot machines with various themes and jackpots.',
    games: ['Money Coming', 'Crazy 777', 'Super Ace', 'Fortune Gems', 'Lucky Wheel'],
    image: '/Golds bet.webp',
  },
  {
    name: 'Card Games',
    description: 'Strategic card games popular in South Asian gaming culture.',
    games: ['Teen Patti', 'Dragon Tiger', 'Rummy', 'Andar Bahar', '7 Up Down'],
    image: '/Goldsbet Game Pakistan.webp',
  },
  {
    name: 'Live Games',
    description: 'Real-time gaming with live dealers and other players.',
    games: ['Baccarat', 'Roulette', 'Live Poker', 'Live Blackjack', 'Live Bingo'],
    image: '/Goldsbet pk.webp',
  },
  {
    name: 'Fish Shooting',
    description: 'Exciting arcade-style fish shooting games with big rewards.',
    games: ['Fishing Rush', 'Ocean King', 'Fish Hunter', 'Treasure Quest', 'Deep Sea'],
    image: '/goldsbet.webp',
  },
  {
    name: 'Sports Betting',
    description: 'Bet on your favorite sports including cricket, football, and tennis.',
    games: ['Cricket Betting', 'Football Betting', 'Tennis Betting', 'Basketball', 'E-Sports'],
    image: '/goldsbet pakistan.webp',
  },
  {
    name: 'Lottery Games',
    description: 'Try your luck with various lottery and draw games.',
    games: ['BBIN Lottery', 'Saba Lottery', 'Daily Draw', 'Weekly Jackpot', 'Mega Draw'],
    image: '/GoldsBet Logo.webp',
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            GoldsBet Games Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our extensive collection of games designed for maximum entertainment and excitement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={`${category.name} games`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">{category.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Games:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.games.map((game, gameIndex) => (
                      <span key={gameIndex} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href="https://rummyreturn.com/?dl=dc9uxm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Gaming?</h2>
          <p className="text-gray-600 mb-6">
            Download the GoldsBet app now and access all these amazing games instantly!
          </p>
          <a 
            href="https://rummyreturn.com/?dl=dc9uxm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-lg font-semibold"
          >
            Download App
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
