<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
    <router-link class="navbar-brand">AJ Serrano</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio/profile"
            >Profile</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio/showcase"
            >Showcase</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio/contact"
            >Contact</router-link
          >
        </li>
      </ul>

      <!-- Dark Mode Toggle -->
      <button class="btn btn-outline-secondary me-2" @click="theme.toggleTheme">
        {{ theme.darkMode ? "🔆" : "☾" }}
      </button>

      <!-- Logout -->
      <button
        v-if="auth.isAuthenticated"
        class="btn btn-outline-danger"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "../store/auth";
import { useThemeStore } from "../store/theme";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const theme = useThemeStore();
const router = useRouter();

function handleLogout() {
  auth.logout();
  router.push("/login");
}
</script>
