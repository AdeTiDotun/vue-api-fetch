<script setup>
import { onMounted, ref } from 'vue'
import api from '../Fetch/Apifetch.js'

const github = ref(null)

onMounted(() => {
  api.getUser('AdeTiDotun').then((user) => {
    console.log('User:', user)
    // github.value = user.data
  })
})
</script>

<template>
  <div>
    <h1>Component Mounted</h1>
  </div>
  <div v-if="github">
    <h3>{{ github.login }}</h3>
  </div>
</template>
