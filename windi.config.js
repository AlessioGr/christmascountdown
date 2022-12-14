import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";
import flowbite from "flowbite-windicss-plugin";


export default defineConfig({
  darkMode: "class",
  attributify: true,
  plugins: [typography(), flowbite],
  extract: {
    include: [
      "index.html",
      "./src/**/*.{html,js,svelte,ts}",
      "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
    ]
  },
  theme: {
    extend: {
      colors: {
        "background-light-100": "#000000",
        "background-dark-100": "#1f1f1f",
        "primary-100": "#004ee0"
      }
    }
  },
  shortcuts: {
    "body-background": "bg-background-light-100 dark:bg-background-dark-100",
    "body-text": "text-white dark:text-white"
  }
});
