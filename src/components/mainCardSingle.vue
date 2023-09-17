<script setup>
import { faker } from '@faker-js/faker'
</script>

<template>
    <img :src="faker.internet.avatar()" alt="" srcset="" />
    <span class="bg-red-500">{{}}</span>
</template>