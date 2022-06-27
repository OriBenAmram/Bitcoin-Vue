<template>
    <section class="contact-list-container" v-if="contacts.length">
        <article v-for="contact in contacts" :key="contact._id" class="conatct-preview-container" @click="onClickContact(contact._id)">
            <contact-preview :contact="contact" />
        </article>
    </section>
    <article v-else>
        <h1>No Contacts were found</h1>
    </article>
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
        // removeContact(contactId) {
        //     this.$emit('remove-contact', contactId)
        // },
        onClickContact(contactId) {
            this.$router.push(`/contact/${contactId}`)
        }
    },
    components: {
        ContactPreview
    }
}
</script>
