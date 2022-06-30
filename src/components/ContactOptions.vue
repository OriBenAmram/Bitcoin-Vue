<template>
    <section class="contact-options">
        <button v-if="isAdding" class="grey-close" @click="onToggleAdding">x</button>
        <h2>{{ isAdding ? 'Add a new contact' : 'Spread your kindness!' }}</h2>
        <p>
            {{isAdding ? 'Fill free to fill-up your new contact details. They will be available for you right after submition' : 'Fill free to add someone new to your contacts! And! you can always just give someone random from your contacts some money'}}
        </p>
        <div class="active-contact-triggers" v-if="!isAdding">
            <button class="primary-btn" @click="onRandomTransform">I feel generous!</button>
            <button class="secondary-btn" @click="onToggleAdding">Add a new contact</button>
        </div>
    </section>
    <section v-if="isAdding" class="add-contact-section">
        <form class="inputs-container" @submit.prevent="onSaveContact">
            <input ref="name" autofocus required type="text" placeholder="Contact name..." v-model="contact.name"
                class="secondary-input">
            <input ref="email" required type="text" placeholder="Contact mail..." v-model="contact.email" class="secondary-input">
            <input ref="phone" required type="text" placeholder="Contact phone..." v-model="contact.phone" class="secondary-input">
            <button class="primary-btn">Submit</button>
        </form>
    </section>
</template>

<script>

export default {
    data() {
        return {
            isAdding: false,
            contact: {
                name: '',
                email: '',
                phone: '',
            }
        }
    },
    methods: {
        onToggleAdding() {
            this.isAdding = !this.isAdding
        },
        async onSaveContact(ev) {
            ev.preventDefault();
            await this.$store.dispatch({
                type: "saveContact",
                contact: this.contact,
            });
            const userMsg = { header: `${contact.name} is added!`, txt: `You just added a new contact to your contact list!` }
            this.$store.dispatch({ type: "onSetUserMsg", userMsg });
            this.$refs.name.value = ''
            this.$refs.email.value = ''
            this.$refs.phone.value = ''
        },
        onRandomTransform() { 
            // TODO: transforming to someone random
            // TODO: userMsg
            const userMsg = { header: 'Thank you', txt: `You have just transfered an anonymous contact a 10$. You have probably made their day a bit better!` }
            this.$store.dispatch({ type: "onSetUserMsg", userMsg });
        }
            
    },
    mounted() {
    }
}
</script>