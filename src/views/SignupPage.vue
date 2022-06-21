<template>
    <div class="signup-page">
        <h1>Sign up and get free 100 coins!</h1>
        <form class="signup-form" @submit.prevent="onSignup">
            <input
                autofocus
                type="text"
                v-model="username"
                placeholder="Enter your username"
                class="primary-input"
            />
            <button class="primary-btn">Create an account</button>
        </form>
    </div>
</template>

<script>
import { userService } from '@/services/user.service.js'
export default {
    data() {
        return {
            username: '',
        }
    },
    methods: {
        onSignup() {
            if (this.username.length < 3) {
                console.log('Too short')
                // Add userMsg and return
            }
            this.$store.dispatch({ type: 'signup', username: this.username})
            // userService.signup(this.username)
            this.$router.push('/')
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