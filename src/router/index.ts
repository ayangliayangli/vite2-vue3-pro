import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "root",
    path: "/",
    redirect: {
      name: "home",
    },
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/pages/HomePage.vue"),
  },
  //   {
  //     name: "notfound",
  //     path: "*",
  //     component: import("@/pages/NotFound.vue"),
  //   },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
