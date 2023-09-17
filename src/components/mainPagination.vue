<script setup>
import { ref } from 'vue'
const pages = ref(10)
const activePage = ref(4)

const prevPage = () => {
    if (activePage.value > 1) {
        activePage.value--
    }
}
const nextPage = () => {
    if (activePage.value < pages.value) {
        activePage.value++
    }
}
</script>


<template>
    <pre>
        Current Page is {{ activePage }}
    </pre>
    
    <div class="pagination">
        <button class="action" :disabled="activePage === 1" @click="prevPage">Prev</button>
        <button class="page" v-for="page in pages" :class="page === activePage ? 'active' : ''" @click="activePage = page">
        {{ page }}
        </button>
        <button class="action" :disabled="activePage === 1" @click="nextPage">Next</button>
    </div>
</template>