/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInBottom: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInTop: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOutLeft: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slide: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "50%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        grey: ["var(--font-grey_qo)"],
        exo: ["var(--font-exo)"],
        exo2: ["var(--font-exo2)"],
        nunito: ["var(--font-nunito)"],
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        fadeInRight: "fadeInRight 1500ms ease-out",
        fadeInLeft: "fadeInLeft 1500ms ease-out",
        fadeInBottom: "fadeInBottom 1500ms ease-out",
        fadeInTop: "fadeInTop 1500ms ease-out",
        fadeOutLeft: "fadeOutLeft 1000ms ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        "slide-arrow": "slide 1.5s ease-in-out infinite",
        "slide-and-fade-once": "slideLeft 0.7s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
