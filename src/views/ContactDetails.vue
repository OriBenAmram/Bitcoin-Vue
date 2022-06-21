<template>
    <div v-if="contact" class="contact-details-container">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.phone }}</h3>
        <h3>{{ contact.email }}</h3>
        <button @click="back">Back</button>
        <router-link :to="`/contact/edit/${contact._id}`">Edit</router-link>
        <button @click="removeContact(contact._id)">Delete</button>
        <!-- <transfer-fund /> -->
    </div>
    <p v-else>Loading...</p>
</template>

<script>
import contactService from '@/services/contact.service.js'
export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        back() {
            this.$router.push('/contact')
        },
        async removeContact(contactId) {
            console.log('contactId:', contactId);
            
            await this.$store.dispatch({ type: 'removeContact', contactId })
            this.$router.push('/contact')
        }
    },
    async created() {
        const _id = this.$route.params._id
        this.contact = await contactService.getContactById(_id)
    },
    components: {
        // TransferFund
    }
}
</script>

<style lang="scss">
.contact-details {
    background-color: lightslategray;
    color: beige;
    padding: 10px;
}
</style>