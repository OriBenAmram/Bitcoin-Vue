<template>
  <section class="contact-filter">
    <h1 class="filter-header">
      <span>Filter your friends</span> by <br />
      their names or phone numbers!
    </h1>
    <div class="gradient-border"></div>
    <p class="input-trigger">Don't stay with any open checks....</p>
    <input
      class="secondary-input"
      @input="filter"
      ref="filter"
      v-model="filterBy.name"
      type="text"
      placeholder="Search by name and phone number"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { name: "" },
    };
  },
  methods: {
    filter() {
      console.log("this.filterby", this.filterby);
      this.$emit("filter", this.filterBy);
    },
  },
  mounted() {
    this.$refs.filter.focus();
  },
};
</script>