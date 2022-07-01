<template>
    <section v-if="userMsg" class="user-msg">
        <button class="dark-blue-close" @click="onCloseMsg">
            x
        </button>
        <h2>{{userMsg.header}}</h2>
        <p>{{ userMsg.txt }}</p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            timeoutId: null
        }
    },
    methods: {
        onCloseMsg() {
            clearTimeout(this.timeoutId)
            this.$store.dispatch({ type: "onSetUserMsg", msg: null });
        }
    },
    computed: {
        userMsg() {
            return this.$store.getters.userMsg
        }
    },
    created() {
        this.timeoutId = setTimeout(() => {
            this.$store.dispatch({ type: "onSetUserMsg", msg: null });
        }, 2500);
    }
}
</script>
