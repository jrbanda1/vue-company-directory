<script setup>
import { faker } from '@faker-js/faker'
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const fullName = firstName +' ' + lastName;
</script>

<template>
    <div class="card">
        <img :src="faker.internet.avatar()" alt="" srcset="" />
        <p class="">{{ fullName }}</p>
        <p class="">{{ faker.internet.exampleEmail(firstName, lastName) }}</p>
    </div>
</template>