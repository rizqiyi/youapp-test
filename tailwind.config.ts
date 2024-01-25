import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(124.23% 171.99% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)",
        "btn-primary":
          "linear-gradient(108deg, #62CDCB 24.88%, #4599DB 78.49%)",
        "btn-primary-blur":
          "linear-gradient(108deg, rgba(98, 205, 203, 0.50) 24.88%, rgba(69, 153, 219, 0.50) 78.49%)",
        "golden-gradient":
          "linear-gradient(74deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%)",
      },
    },
  },
  plugins: [],
};
export default config;
