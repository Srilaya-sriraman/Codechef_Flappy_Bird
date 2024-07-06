/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "flappybird-desk": "url('./assets/bg_flappybird_codechef_desktop.png')",
        "flappybird-mob": "url('./assets/bg_flappybird_codechef_mobile.png')",
      },
    },
  },
  plugins: [],
};
