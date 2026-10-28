/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          bg: '#EAE3D9',      // Krem hangat kertas vintage
          card: '#DFD5C6',    // Kartu aksen krem
          maroon: '#6B1D2F',  // Warna judul burgundi/marun khas majalah
          dark: '#2A1810',    // Teks gelap
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}