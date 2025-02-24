import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home_Page.vue'
import AboutUs from '@/components/AboutUs.vue'
import BookingPage from '@/components/Booking_Page.vue'
import ContactUs from '@/components/ContactUs.vue'
import FeedbackPage from '@/components/Feedback_Page.vue'
import RestaurantList from '@/components/Restaurant-List.vue'
import MenuPage  from '@/components/Menu_Page.vue'
import OrderPage from '@/components/Order_Page.vue'

// route array of object : path ,component
const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/About',
    component: AboutUs
  },
  {
    path:'/Booking',
    component:BookingPage
  },
  {
    path:'/Contact',
    component:ContactUs 
  },
  {
    path:'/Feedback',
    component:FeedbackPage
  },
  {
    path:'/RestaurantList',
    component:RestaurantList
  },
  {
    path:'/Menu',
    component:MenuPage
  },
  {
    path:'/Order',
    component :OrderPage
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router


