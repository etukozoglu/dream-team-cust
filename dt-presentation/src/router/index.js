import { createRouter, createWebHistory } from 'vue-router'
import CustomerForm from '../components/CustomerForm.vue'
import UploadCSV from '../components/UploadCSV.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: CustomerForm,
    },
    {
      path: '/upload',
      name: 'UploadCSV',
      component: UploadCSV,
    },
  ]
})

export default router
