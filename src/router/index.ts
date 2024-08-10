import { createRouter, createWebHistory } from 'vue-router';

import { registerAuthRoutes, registerDashboardRoutes } from '@/modules';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

export const registerModules = (modules: Function[]) => {
  modules.forEach((module) => {
    module(router);
  });
};

registerModules([registerAuthRoutes, registerDashboardRoutes]);

export default router;
