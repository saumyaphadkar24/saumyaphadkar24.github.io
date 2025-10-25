// Design System Constants
// Use these constants throughout the application for consistency

export const COLORS = {
  // Primary text and headings
  PRIMARY_TEXT: '#343F56',

  // Accent colors
  PURPLE_ACCENT: '#A259F7',
  TEAL: '#42EADD',
  LIGHT_BLUE: '#BEE7FB',
  MINT_GREEN: '#C6F7E2',

  // Overlay header colors
  PALE_YELLOW: '#FFFACD',
  LIGHT_PINK: '#FFC6E0',
  PEACH: '#FFDAB3',
  LAVENDER: '#D6C5F5',
  SKY_BLUE: '#A9DDF5',

  // Borders
  BORDER_LIGHT: '#FAF9F8',
}

export const SPACING = {
  // Container max widths
  MAX_WIDTH_CONTENT: 'max-w-[1440px]',
  MAX_WIDTH_NARROW: 'max-w-[1200px]',

  // Common heights
  CARD_MIN_HEIGHT: '120px',
  HEADER_HEIGHT: 'auto', // Responsive height

  // Common widths
  PROJECT_CARD_MAX: '320px',
  BUTTON_WIDTH: 'w-32',
}

export const STYLES = {
  // Glass morphism card
  GLASS_CARD: 'bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-md',
  GLASS_CARD_HOVER: 'hover:shadow-xl hover:border-purple-300',

  // Focus states
  FOCUS_RING: 'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
  FOCUS_RING_SIMPLE: 'focus:outline-none focus:ring-2 focus:ring-purple-500',

  // Buttons
  BUTTON_PRIMARY: 'bg-gradient-to-r from-purple-300 to-blue-300 hover:from-purple-400 hover:to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all',
  BUTTON_OUTLINE: 'bg-white hover:bg-purple-50 text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-300 shadow-md hover:shadow-lg transition-all',
  BUTTON_SMALL: 'px-4 py-2 border-2 border-[#343F56] rounded-full font-bold text-[16px] transition-transform duration-200 ease-out hover:scale-105',

  // Transitions
  TRANSITION_ALL: 'transition-all duration-300 ease-out',
  TRANSITION_FAST: 'transition-all duration-200 ease-out',
}

export const GRADIENTS = {
  BACKGROUND: 'bg-gradient-to-br from-green-50 via-blue-50 to-purple-100',
  BUTTON_PRIMARY: 'from-purple-300 to-blue-300',
  BUTTON_PRIMARY_HOVER: 'from-purple-400 to-blue-400',
  TIMELINE: 'from-blue-300 via-purple-300 to-purple-400',
}

export const TYPOGRAPHY = {
  HEADING_XL: 'text-[40px] font-extrabold',
  HEADING_LG: 'text-[24px] font-bold',
  HEADING_MD: 'text-[22px] font-bold',
  BODY_LG: 'text-[18px] font-medium',
  BODY_MD: 'text-[16px]',
  BODY_SM: 'text-[14px]',
}
