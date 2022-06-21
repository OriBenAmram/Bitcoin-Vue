<template>
    <section class="contact-filter">
        <input @input="filter" ref="filter" v-model="filterBy.name" type="text" />
    </section>
</template>

<script>

export default {
    data() {
        return {
            filterBy: { name: '' }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    },
    mounted() {
        this.$refs.filter.focus()
    }
}
</script>

<style lang="scss">
.contact-filter {
    background-color: rgb(59, 102, 131);
    color: beige;
    padding: 10px;
}
</style>