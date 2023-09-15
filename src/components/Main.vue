<script setup>
    import MainSearch from './MainSearch.vue';
</script>

<template>
    <div class="wrapper">
        <MainSearch />
        <h1>Hello There</h1>
    </div>
</template>

<style scoped lang="postcss">
.wrapper{
    @apply container mx-auto flex flex-col py-4 gap-4;
}
</style>