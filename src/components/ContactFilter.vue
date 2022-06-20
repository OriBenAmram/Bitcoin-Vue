<template>
    <section class="contact-filter">
        <input @input="onChange" v-model="filterBy.name" type="text">
    </section>
</template>

<script>

export default {
   data(){
            return {
                filterBy: { name: '' }
            }
        },
        methods:{
            onChange(){
                this.$emit('filter', this.filterBy)
            }
        },
}
</script>
