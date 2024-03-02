export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        geekAccent: "#53ACFF",
        geekGreen: "#118F4B",
        geekRed: "#D94111",
        geekDark: "#181818",
        geekMiddle: "#202020",
        geekLight: "#313131",
      },
      transitionTimingFunction: {
        "cubic-bez": "cubic-bezier(.78,-0.01,.37,1.22)",
      },
    },
  },
  plugins: [],
};
