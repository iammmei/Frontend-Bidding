import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
import path from "path";
export default defineConfig({
  root: "./",
  plugins: [react()],

  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",

    loader: "jsx", // OR "jsx"
    include: [
      // Add this for business-as-usual behaviour for .jsx and .tsx files
      "src/**/*.jsx",
      "src/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",

      // // Add the specific files you want to allow JSX syntax in
      // "src/LocalJsxInJsComponent.js",
      // "node_modules/bad-jsx-in-js-component/index.js",
      // "node_modules/bad-jsx-in-js-component/js/BadJSXinJS.js",
      // "node_modules/bad-jsx-in-js-component/ts/index.ts",
      // "node_modules/bad-jsx-in-js-component/ts/BadTSXinTS.ts",

      // // --- OR ---

      // // Add these lines to allow all .js files to contain JSX
      // "src/**/*.js",
      // "node_modules/**/*.js",

      // // Add these lines to allow all .ts files to contain JSX
      // "src/**/*.ts",
      // "node_modules/**/*.ts",
    ],
  },

  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },

  base: "./",
});
