<template>
  <app-header />
  <user-msg />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import  AppHeader  from './components/AppHeader.vue'
import  UserMsg  from './components/UserMsg.vue'

export default {
  components: {
    AppHeader,
    UserMsg
  }
}
</script>