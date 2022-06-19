<template>
    <header class="app-header">
        <div class="screen-overlay" :class="{open: isMenuOpen}" @click="toggleMenu">
        </div>
        <div class="header-content main-layout">
            <router-link to="/">Logo</router-link>
            <nav class="nav-container">
                <ul class="nav-links clean-list" :class="{ open: isMenuOpen }">
                    <router-link to="/">
                        <li>Home</li>
                    </router-link>
                    <router-link  to="/contact">
                        <li>Contact</li>
                    </router-link>
                    <router-link to="/statistic">
                        <li>Statistic</li>
                    </router-link>
                    <router-link to="/login">
                        <li>Sign up</li>
                    </router-link>
                </ul>
            </nav>
            <button class="hamburger-btn" @click="toggleMenu">
                Ham
            </button>
        </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() { 
            this.isMenuOpen = !this.isMenuOpen
        }
    },
    computed: {

    },
    async created() {

    },
    components: {

    }
}
</script>
