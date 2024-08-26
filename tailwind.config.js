// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 1.5s ease-out',
        slideInBottom: 'slideInBottom 1s ease-out',
        bounceIn: 'bounceIn 1s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInBottom: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1.000)' },
          '0%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
          '20%': { opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)' },
          '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
          '60%': { transform: 'scale3d(1.03, 1.03, 1.03)' },
          '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
          '100%': { opacity: 1, transform: 'scale3d(1, 1, 1)' },
        },
      },
    },
  },
  plugins: [],
};
