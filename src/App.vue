<script setup>
import NavBar from '@/components/NavBar.vue'
import MainPage from '@/components/MainPage.vue'


</script>

<template>
  <NavBar/>
  <button class="bg-orange-700 px-4 py-2" @click="showMainPage = !showMainPage"> Show Main Page</button>
  <MainPage v-if="showMainPage" />
  <div v-else>
    <h1>This is another "Page"</h1>
  </div>
</template>
