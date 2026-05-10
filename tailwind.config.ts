import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Maddisons palette extracted from theme-color #0a1220 + on-page contrast
        ink: {
          950: "#0a1220",   // primary background / theme-color
          900: "#0d1626",
          800: "#101b30",
          700: "#1a263e",
        },
        steel: {
          400: "#9aa6b8",
          500: "#6b7689",
          600: "#525c70",
        },
        accent: {
          // Workshop-orange highlight; matches the urgency of "CALL THE WORKSHOP"
          500: "#ff5b1f",
          600: "#e84e16",
          700: "#c63f10",
        },
        cream: {
          50: "#f8f5ef",
          100: "#efe9dc",
        },
      },
      fontFamily: {
        display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
      },
      maxWidth: {
        prose2: "68ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
