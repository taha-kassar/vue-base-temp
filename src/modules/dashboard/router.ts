import { type Router } from 'vue-router';

import { productsRoutes } from './products';
import { cartRoutes } from './cart';
import { defineRoutes } from '../shared';

const DashboardModule = () => import('./DashboardModule.vue');

const moduleRoutes = defineRoutes({
  path: '/dashboard',
  name: 'dashboard',
  component: DashboardModule,
  children: [productsRoutes, cartRoutes],
});

export const registerDashboardRoutes = (router: Router) => router.addRoute(moduleRoutes);
