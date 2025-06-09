import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    username: localStorage.getItem("username") || "",
  }),
  actions: {
    login(username, password) {
      if (username === "admin" && password === "password") {
        this.isAuthenticated = true;
        this.username = username;
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
      this.username = "";
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("username");
    },
  },
});
