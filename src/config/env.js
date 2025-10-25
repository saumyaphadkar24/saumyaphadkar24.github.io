// Environment Configuration
// Access environment variables through this config file

export const config = {
  site: {
    title: import.meta.env.VITE_SITE_TITLE || 'Saumya Parag Phadkar - ML Engineer Portfolio',
    url: import.meta.env.VITE_SITE_URL || 'https://saumyaphadkar24.github.io/',
  },

  contact: {
    email: import.meta.env.VITE_EMAIL || 'saumya.phadkar@gmail.com',
    linkedin: import.meta.env.VITE_LINKEDIN || 'https://linkedin.com/in/saumya-phadkar',
    github: import.meta.env.VITE_GITHUB || 'https://github.com/saumyaphadkar24',
  },

  // Feature flags (can be added later)
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },
}

// Helper to check if we're in development mode
export const isDev = import.meta.env.DEV

// Helper to check if we're in production mode
export const isProd = import.meta.env.PROD
