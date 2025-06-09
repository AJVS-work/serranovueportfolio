import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    darkMode: localStorage.getItem("darkMode") === "true",
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkMode", this.darkMode);
    },
  },
});
