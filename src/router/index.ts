import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeContent from "@/components/HomeContent.vue";
import HomeLayout from "@/layout/HomeLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeLayout',
    component: HomeLayout,
    redirect: '/',
    children:[
      {
        path: '/',
        name: 'HomeContent',
        component: HomeContent
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
