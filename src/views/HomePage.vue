<template>
        <div v-if="user?.name" class="home-page">
            <h1>Hi, {{ user.name }}!</h1>
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
            <button @click="onRedirect">Please enter your name first</button>
        </div>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js"
import { userService } from "@/services/user.service.js"
export default {
    data() {
        return {
            user: null,
            rate: null,
        }
    },
    methods: {
        onRedirect() {
            this.$router.push('/')
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