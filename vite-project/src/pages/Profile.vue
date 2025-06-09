<template>
  <div class="profile-root d-flex flex-column vh-100">
    <Navbar />

    <div class="scroll-container flex-grow-1">
      <!-- Section 1 -->
      <section
        class="snap-section d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div
          class="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 w-100 px-4"
        >
          <!-- Text -->
          <div class="text-start" style="max-width: 500px">
            <h2>Hi! I am</h2>
            <h1 class="display-1 fw-bold">AJ Serrano</h1>
            <p>
              Computer Engineering Student specializing in Networks <br />
              and the Cloud, and a wannabe poet.
            </p>
            <div>
              <a href="https://github.com" target="_blank" :style="linkStyle">
                GitHub
              </a>
              |
              <a href="https://linkedin.com" target="_blank" :style="linkStyle">
                LinkedIn
              </a>
              |
              <a :href="resumePdf" download :style="linkStyle"> Resume </a>
            </div>
          </div>

          <!-- Profile Image -->
          <img
            :src="profileImg"
            alt="Profile"
            class="rounded-circle"
            style="width: 250px; height: 250px; object-fit: cover"
          />
        </div>
      </section>

      <!-- Section 2 -->
      <section
        class="snap-section d-flex flex-column justify-content-center align-items-center text-center"
        :class="theme.darkMode ? 'bg-dark text-light' : 'bg-light text-dark'"
      >
        <div class="container">
          <h2 class="mb-3">More About Me</h2>
          <p>
            I enjoy building web apps, writing poetry, and exploring how
            technology can bridge creativity and engineering.
          </p>
          <p>
            Learn more <router-link to="/portfolio/showcase">here</router-link>.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import profileImg from "../assets/profile.jpg";
import resumePdf from "../assets/resume.pdf";
import { useThemeStore } from "../store/theme";
import { computed } from "vue";

const theme = useThemeStore();

const linkStyle = computed(() => {
  return {
    color: theme.darkMode ? "#fbe9e7" : "#4e342e",
    fontWeight: "600",
    textDecoration: "none",
    cursor: "pointer",
  };
});
</script>

<style>
.profile-root {
  height: 100vh; /* full viewport height */
  overflow: hidden; /* hide outside scroll */
  display: flex;
  flex-direction: column;
}

.scroll-container {
  flex-grow: 1;
  height: 100%; /* fill remaining height */
  overflow-y: auto; /* scroll only here */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.snap-section {
  height: 100vh; /* full viewport height per section */
  scroll-snap-align: start;
}

a:hover {
  text-decoration: underline;
}
</style>
