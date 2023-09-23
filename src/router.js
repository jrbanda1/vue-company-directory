import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import Login from '@/components/Login.vue'
import NotFound from '@/components/NotFound.vue'


const routes = [
  { path: '/', name: 'Home', component: MainPage },
    { path: '/login', name: 'Login', component: Login },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})