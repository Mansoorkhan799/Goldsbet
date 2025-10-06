// Recreated Tailwind CSS v4 config to ensure content scanning works and
// critical utilities like bg-clip-text/text-transparent are generated.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Text/gradient utilities used in hero heading
    'bg-clip-text',
    'text-transparent',
    'from-yellow-400',
    'to-yellow-600',
    'bg-gradient-to-r',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


