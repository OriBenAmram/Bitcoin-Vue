<template>
    <div class="contact-page main-layout">
        <section class="contact-content">
            <div class="contact-description">
                <ContactFilter @filter="onFilter" />
                <ContactOptions />
            </div>
            <ContactList @remove-contact="removeContact" :contacts="contactsToShow" />
        </section>
    </div>
</template>

<script>
import ContactHeader from '../components/ContactHeader.vue'
import ContactList from '../components/ContactList.vue'
import ContactFilter from '../components/ContactFilter.vue'
import ContactOptions from '../components/ContactOptions.vue'

export default {
    data() {
        return {
            filterBy: { name: '' }
        }
    },
    methods: {
        async removeContact(contactId) {
            // await contactService.removeContact(contactId)
            // this.contacts = this.contacts.filter(contact => contact._id !== contactId)
            await this.$store.dispatch({ type: 'removeContact', contactId })
        },
        onFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        contactsToShow() {
            const regex = new RegExp(this.filterBy.name, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        },
        contacts() {
            return this.$store.getters.contacts
        }
    },
    async created() {
        // this.contacts = await contactService.getContacts()
        this.$store.dispatch({ type: 'loadContacts' })
    },
    components: {
        ContactHeader,
        ContactList,
        ContactFilter,
        ContactOptions
    }
}
</script>