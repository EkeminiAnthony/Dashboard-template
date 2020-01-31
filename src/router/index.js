import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Icons from "@/views/Icons.vue";
import Map from "@/views/Map.vue";
import Notifications from "@/views/Notifications.vue";
import UserProfile from "@/views/UserProfile.vue";
import TableList from "@/views/TableList.vue";
import Typography from "@/views/Typography.vue";
import RTLSupport from "@/views/RTLSupport.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:'/dashboard',
    component: Dashboard,
    name: 'dashboard'
  },
  {
    path: '/icons',
    component: Icons,
    name: 'icons'
  },
  {
    path: '/map',
    component: Map,
    name: 'map'
  },
  {
    path: '/notifications',
    component: Notifications,
    name: 'notifications'
  },
  {
    path: '/userprofile',
    component: UserProfile,
    name: 'userprofile'
  },
  {
    path: '/tablelist',
    component: TableList,
    name: 'tablelist'
  },
  {
    path: '/typography',
    component: Typography,
    name: 'typography'  
  },
  {
    path: '/rtlsupport',
    component: RTLSupport,
    name: 'rtlsupport'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
