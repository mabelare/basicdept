/** @type {import('tailwindcss').Config} */
// filepath: /c:/Users/Aliyah/Desktop/basicdept/tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        "9/10": "90%",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "video::-webkit-media-controls": {
          display: "none !important",
        },
      });
    },
  ],
};
