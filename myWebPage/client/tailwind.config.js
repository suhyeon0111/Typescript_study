// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Vite 기본
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 안의 모든 파일
  ],
  theme: {
    extend: {
      colors: {
        skyblue: "#6DAEDB",
        white: "#F9F5E6",
      },
    },
  },
  plugins: [],
};
