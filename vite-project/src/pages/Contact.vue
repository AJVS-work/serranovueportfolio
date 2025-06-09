<template>
  <div>
    <Navbar />
    <div class="container mt-4">
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label>Name</label>
          <input v-model="name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Message</label>
          <textarea v-model="message" class="form-control" required></textarea>
        </div>
        <button class="btn btn-success">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    function submitForm() {
      alert("Message sent!");
      name.value = "";
      email.value = "";
      message.value = "";
    }
    return { name, email, message, submitForm };
  },
};
</script>
