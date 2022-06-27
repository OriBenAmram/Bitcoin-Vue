<template>
  <div class="signup-page">
    <section class="signup-info">
      <button @click="onQuickStart" class="small-link">Quick start</button>
      <h1>Sign up</h1>
      <span class="header-description">And get 100 coins for free</span>
      <form class="signup-form" @submit.prevent="onSignup">
        <label for="username-input">Username</label>
        <input
          autofocus
          id="username-input"
          type="text"
          v-model="username"
          placeholder="Enter your username"
          class="secondary-input"
        />
        <button class="primary-btn">Create an account</button>
      </form>
    </section>
    <img
      src="@/assets/imgs/login-background.jpg"
      class="signup-background-img"
      alt="Login img"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    onSignup() {
      if (this.username.length < 3) {
        // Add userMsg and return
      }
      this.$store.dispatch({ type: "signup", username: this.username });
      this.$router.push("/home");
    },
    onQuickStart() {
      this.$store.dispatch({ type: "signup", username: "Guest" });
      this.$router.push("/home");
    },
  },
};
</script>