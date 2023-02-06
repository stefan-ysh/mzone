import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Layout } from "@/config/constant";
import Test from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: { name: 'index' },
    children:[
      {
        path: "/index",
        name: "index",
        component: Test,
        meta: {
          title: "首页",
        },
      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
