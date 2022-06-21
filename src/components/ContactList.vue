<template>
    <section class="contact-list-container" v-if="contacts.length">
        <article v-for="contact in contacts" :key="contact._id" class="conatct-preview-container">
            <contact-preview :contact="contact" />
            <section class="actions">
                <router-link :to="`/contact/${contact._id}`">Details</router-link>
                <!-- <router-link :to="`/contact/edit/${contact._id}`">Edit</router-link> -->
                <button @click="removeContact(contact._id)">x</button>
            </section>
        </article>
    </section>
    <article v-else>Loading...</article>
</template>

<script>
import ContactPreview from '../components/ContactPreview.vue'
export default {
    props: {
            contacts: {
                type: Array,
                required: true,
            }
        },
    methods: {
        removeContact(contactId) {
            this.$emit('remove-contact', contactId)
        }
    },

    computed: {

    },
    async created() {

    },
    components: {
        ContactPreview
    }
}
</script>
