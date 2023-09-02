import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/estudiantes",
    component: () => import("../pages/GuardarEstudiantePage")
  },
  {
    path: "/tokens",
    component: () => import("../pages/Token")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
