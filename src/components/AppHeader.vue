<template>
  <header class="app-header" :class="{ isSignupPage: isSignupPage }">
    <div
      class="screen-overlay"
      :class="{ open: isMenuOpen }"
      @click="toggleMenu"
    ></div>
    <div class="header-content">
      <router-link class="logo" :class="{ disable: isSignupPage }" to="/home"
        >Mr.bitcoin</router-link
      >
      <!-- <nav class="nav-container" > -->
      <nav class="nav-container">
        <ul class="nav-links clean-list" :class="{ open: isMenuOpen }">
          <router-link to="/home">
            <li>Home</li>
          </router-link>
          <router-link to="/contact">
            <li>Contact</li>
          </router-link>
          <router-link to="/statistic">
            <li>Statistic</li>
          </router-link>
          <!-- <router-link class="primary-btn" to="/contact">
                        <li>Transfer</li>
                    </router-link> -->
          <router-link to="/" @click="onLogout">
            <li>{{ isLoggedInUser ? "Logout" : "Sign up" }}</li>
          </router-link>
        </ul>
      </nav>
      <button class="hamburger-btn" @click="toggleMenu">
        <v-icon name="co-hamburger-menu" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isSignupPage: false,
    };
  },
  mounted() {
    if (this.$route.path === "/") this.isSignupPage = true;
    else this.isSignupPage = false;
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    onLogout() {
      console.log("should log out");
    },
  },
  watch: {
    "$route.path"() {
      if (this.$route.path === "/") this.isSignupPage = true;
      else this.isSignupPage = false;
    },
  },
  computed: {
    isLoggedInUser() {
      return !!this.$store.state.user.user;
    },
  },
  async created() {},
  components: {},
};
</script>
