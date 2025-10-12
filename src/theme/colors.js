// Color Theme for Portfolio
// This file centralizes all colors used across the application
// Do not use colors outside of this palette to maintain design consistency

export const colors = {
  // Primary Colors
  primary: {
    dark: '#343F56',      // Main text, headings
    purple: '#A259F7',    // Primary accent (buttons, highlights)
    purpleDark: '#4F345A', // Dark purple for text/emphasis
  },

  // Accent Colors
  accent: {
    teal: '#42EADD',      // Teal accent
    lightBlue: '#BEE7FB', // Light blue
    mint: '#C6F7E2',      // Mint green (lighter accent)
    lavender: '#D1C2F6',  // Lavender (light purple)
  },

  // Neutral/Background Colors
  neutral: {
    white: '#FAF9F8',     // Off-white for borders
    black: '#000000',     // Pure black (use sparingly)
  },

  // Pastel/Soft Colors (for badges, pills, highlights)
  pastel: {
    coral: '#FF6F61',     // Coral/salmon
    pink: '#FFC6E0',      // Light pink
    peach: '#FFD6BA',     // Peach
    paleYellow: '#FFFACD', // Pale yellow
  },

  // Gradients (use these for buttons and accents)
  gradients: {
    lavenderToBlue: 'from-purple-300 to-blue-300', // Main button gradient (D1C2F6 → BEE7FB)
    lavenderToBlueDark: 'from-purple-400 to-blue-400', // Hover state
    timeline: 'from-blue-300 via-purple-300 to-purple-400', // Timeline gradient
  }
}

// Tailwind-compatible color mappings
export const tailwindColors = {
  // For backgrounds
  cardBg: 'bg-white/70',
  hoverBorder: 'border-purple-300',

  // For text
  heading: 'text-[#343F56]',
  accentText: 'text-purple-600',

  // For buttons (lavender to light blue gradient - light and aesthetic)
  buttonPrimary: 'bg-gradient-to-r from-purple-300 to-blue-300',
  buttonPrimaryHover: 'hover:from-purple-400 hover:to-blue-400',
  buttonOutline: 'border-2 border-purple-300 text-purple-600',
}
