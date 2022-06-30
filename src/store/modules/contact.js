import contactService from '@/services/contact.service.js'
export default {
    state: {
        contacts: [],
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        saveContact(state, { contact }) {
            const contactId = contact._id
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            if (idx === -1) {
                state.contacts.push(contact)
            } else {
                state.contacts.splice(idx, 1, contact)
            }
        }
    },
    actions: {
        async loadContacts(context) {
            const contacts = await contactService.getContacts()
            context.commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.deleteContact(contactId)
            commit({ type: 'removeContact', contactId })
        },
        async saveContact({ commit }, { contact }) {
            try {
                await contactService.saveContact(contact)
                commit({ type: 'saveContact', contact })
            } catch (error) {
                throw error
            }
        }
    },
    getters: {
        contacts(state) { return state.contacts }
    }
}