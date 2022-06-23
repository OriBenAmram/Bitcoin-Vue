<template>
    <section class="contact-options">
        <h2>Spread your kindness!</h2>
        <p>
            Fill free to add someone new to your contacts!
            <br />And! you can always just give someone random from your contacts some money
        </p>
        <div class="active-contact-triggers">
            <button class="primary-btn">I feel generous!</button>
            <router-link class="secondary-btn" to="/contact/edit">Add a new contact</router-link>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>