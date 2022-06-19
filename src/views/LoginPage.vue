<template>
    <div class="login-page">
        <h1>Sign up and get free 100 coins!</h1>
        <form class="login-form" @submit.prevent="onSignup">
            <input
                type="text"
                v-model="user.username"
                placeholder="Enter your username"
                class="primary-input"
            />
            <input
                type="text"
                v-model="user.password"
                placeholder="Enter your password"
                class="primary-input"
            />
            <input
                type="text"
                v-model="user.fullname"
                placeholder="Enter your fullname"
                class="primary-input"
            />
            <button class="primary-btn">Sign up</button>
        </form>
    </div>
</template>

<script>
import { userService } from '@/services/user.service.js'
export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
                fullname: ''
            }
        }
    },
    methods: {
        async onSignup() {
            await userService.signup(this.user)
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