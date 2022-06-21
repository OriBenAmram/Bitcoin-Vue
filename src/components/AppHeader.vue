<template>
    <header class="app-header">
        <div class="screen-overlay" :class="{ open: isMenuOpen }" @click="toggleMenu"></div>
        <div class="header-content main-layout">
            <router-link class="logo" to="/">BITcorn</router-link>
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
                    <router-link to="/" @click="onLogout">
                        <li>Logout</li>
                    </router-link>
                </ul>
            </nav>
            <button class="hamburger-btn" @click="toggleMenu">Ham</button>
        </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
            isMenuOpen: false,
            user: null
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        onLogout() {
            console.log('should log out')
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
