<template>
    <div class="contact-page" >
        <h1>Contacts</h1>
        <ContactFilter @filter="onFilter"/>
        <ContactList @remove-contact="removeContact" :contacts="contactsToShow" />
    </div>
</template>

<script>
import contactService from '@/services/contact.service.js'
import ContactList from '../components/ContactList.vue'
import ContactFilter from '../components/ContactFilter.vue'

export default {
    data() {
        return {
            contacts: [],
            filterBy: ''
        }
    },
    methods: {
        async removeContact(contactId) {
            await contactService.removeContact(contactId)
            this.contacts = this.contacts.filter(contact => contact._id !== contactId)
        },
        onFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        contactsToShow() {
            console.log('this.contacts:', this.contacts);
            
            return this.contacts
            // const regex = new RegExp(this.filterBy.txt, 'i')
            // return this.contacts.filter(contact => regex.test(contact.name))
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactList,
        ContactFilter
    }
}
</script>