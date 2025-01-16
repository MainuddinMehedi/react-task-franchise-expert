import { assets } from './src/constants/importImages';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/hero-image.png')",
        'send_msg_bg': "url('./src/assets/sent-msg-bg.png')",
        'subscribe_bg': "url('./src/assets/subscribe')",
      },
    },
  },
  plugins: [],
}

