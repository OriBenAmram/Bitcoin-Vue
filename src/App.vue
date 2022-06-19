<template>
  <app-header />

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import  AppHeader  from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>