<template>
        <div v-if="user?.name" class="home-page">
            <h1>Hi, {{ user.name }}!</h1>
            <button class="primary-btn">Get started!</button>
            <div v-if="user" class="user-info">
                <h3>Current Balance</h3>
                <p>
                    USD:
                    <span>${{ user.coins }}</span>
                </p>
                <p>
                    Bitcoin:
                    <span>${{ userBit }}</span>
                </p>
                <p>
                    Current 1 USD in Bitcoin:
                    <span>{{ rate }}</span>
                </p>
            </div>
        </div>
        <div v-else class="user-redirect">
            <h1>Welcome, please sign up first</h1>
            <button class="primary-btn" @click="onRedirect">Get started</button>
        </div>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js"
export default {
    data() {
        return {
            user: null,
            rate: null,
        }
    },
    methods: {
        onRedirect() {
            this.$router.push('/signup')
        }
    },
    computed: {
        userBit() {
            return this.user.coins * this.rate
        },
    },
    async created() {
        this.rate = await bitcoinService.getRate(1)
        this.user = this.$store.state.user.user
    },
    components: {

    }
}
</script>