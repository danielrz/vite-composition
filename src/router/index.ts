import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Options from '@/Options.vue'
import Pinia from '@/Pinia.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Options },
  { path: '/pinia', component: Pinia }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router