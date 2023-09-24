<script setup>
import { useAuth } from './composables/useAuth';
const { login } =useAuth()
</script>

<template>
    <h1>Login Page</h1>
    <button class="bg-green-500 px-4 py-2" @click-="login('admin','admin')">Log In</button>
</template>