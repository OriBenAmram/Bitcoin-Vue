<template>
    <img class="user-avatar" :src="getAvatar(contact._id)" />
    <div class="details-container">
        <div class="contact-preview-details">
            <h2 class="contact-name">{{ contact.name }}</h2>
            <p class="contact-email">{{ contact.email }}</p>
        </div>
        <p class="grey-text time-description"></p>
    </div>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getAvatar(name) {
            return `https://avatars.dicebear.com/api/adventurer/${name}.svg?b=%23f4f4f4`;
        }
    },
}
</script>

<style lang="scss">
</style>