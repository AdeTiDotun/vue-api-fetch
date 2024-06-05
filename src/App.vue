<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Repodetails from './components/Repodetails.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
      <Repodetails />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
