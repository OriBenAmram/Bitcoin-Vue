<template>
  <img class="user-avatar" :src="getAvatar(contact.imgIdx)" />
  <div class="contact-preview-details">
    <h2 class="contact-name">{{ contact.name }}</h2>
    <p class="contact-email">{{ contact.email }}</p>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    contact: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getAvatar(idx) {
      console.log("index", this.index);
      return `https://xsgames.co/randomusers/assets/avatars/male/${idx}.jpg`;
    },
  },
};
</script>

<style lang="scss">
</style>