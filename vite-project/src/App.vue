<script setup>
import { useThemeStore } from "./store/theme";
import { watch } from "vue";

const theme = useThemeStore();

watch(
  () => theme.darkMode,
  (isDark) => {
    document.body.className = isDark
      ? "bg-dark text-light"
      : "bg-light text-dark";
  },
  { immediate: true }
);
</script>

<template>
  <router-view />
</template>
