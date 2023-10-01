import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/components/composables/useAuth'

const { isAuthenticated } = useAuth()

import MainPage from '@/components/MainPage.vue'
import Login from '@/components/Login.vue'
import SettingsPage from '@/components/SettingsPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/vue-company-directory', name: 'Home', component: MainPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value)
    next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router