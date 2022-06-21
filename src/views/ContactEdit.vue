<template>
    <section class="edit-page">
        <div v-if="contact" class="contact-edit-info">
            <h1>{{ contact.name }}</h1>
            <form @submit.prevent="save" class="contact-edit-form">
                <p>
                    contact's name:
                    <span>{{ contact.name }}</span>
                </p>
                <input v-model="contact.name" type="text" />
                <p>
                    contact's mail:
                    <span>{{ contact.email }}</span>
                </p>
                <input v-model="contact.email" type="text" />
                <p>
                    contact's phone:
                    <span>{{ contact.phone }}</span>
                </p>
                <input v-model="contact.phone" type="number" />
                <button>Save</button>
            </form>
        </div>
        <div v-else>Loading...</div>
    </section>
</template>

<script>
import contactService from "../services/contact.service"
export default {
    date() {
        return {
            contact: null
        }
    },
    methods: {
        async save() {
            // await contactService.saveContact(this.contact)
            await this.$store.dispatch({ type: 'saveContact', contact: this.contact })
            this.$router.push('/contact')
        }
    },
    computed: {

    },
    async created() {
        const _id = this.$route.params._id
        if (_id) {
            this.contact = await contactService.getContactById(_id)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    },
    components: {
    }
}
</script>
