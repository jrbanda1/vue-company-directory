import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'


const routes = [
  { path: '/', component: MainPage },
  { path: '/lgin', component: LoginPage},
]

export default createRouter({
  history: createWebHistory(),
  routes,
})