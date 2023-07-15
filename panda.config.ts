import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          idulFitri: { value: "var(--font-idul-fitri), Idul Fitri" },
          arabic: { value: "var(--font-arabic), Arabic" },
          scopeOne: { value: "var(--font-scope-one), Scope One" },
        },
      },
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
