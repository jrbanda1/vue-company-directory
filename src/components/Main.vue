<script setup>
import MainSearch from './MainSearch.vue'
import mainCards from './mainCards.vue';
</script>

<template>
    <div class="wrapper">
        <MainSearch />
        <mainCards />
    </div>
</template>

<style scoped lang="postcss">
.wrapper{
    @apply container mx-auto flex flex-col py-4 gap-4;
}
</style>