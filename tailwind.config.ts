const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx, js, jsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      padding: {
        'section': '4rem 0',
      },
      colors: {
        'primary': {
          DEFAULT: "#692BFC",
          light: "#BAAFFF",
          "extra-light": "#D8D3FF",
          dark: "#40139F",
          "extra-dark": "#25096C"
        },
        'dark': "#111111",
        'darkLight': "#333333",
        'light': "#FEFFFF",
        'gray': "#687387",
        'info': "#069AF1",
        'error': "#F04438",
        'warning': "#FC9D1D",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
