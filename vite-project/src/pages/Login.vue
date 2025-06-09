<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100"
    style="background-color: #3e2723"
  >
    <div
      class="card shadow p-4"
      style="
        min-width: 350px;
        max-width: 400px;
        width: 100%;
        background-color: #5d4037;
        color: #fbe9e7;
      "
    >
      <div class="card-body">
        <h3 class="card-title text-center mb-3">Welcome Back</h3>
        <p class="text-center mb-4" style="color: #d7ccc8">
          Please login to your account
        </p>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input v-model="username" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              required
            />
          </div>
          <button class="btn btn-light w-100 text-dark fw-bold">Login</button>
          <div v-if="error" class="text-warning mt-3 text-center">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const auth = useAuthStore();
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const error = ref("");

    function handleLogin() {
      if (auth.login(username.value, password.value)) {
        router.push("/portfolio/profile");
      } else {
        error.value = "Invalid credentials";
      }
    }

    return { username, password, error, handleLogin };
  },
};
</script>
