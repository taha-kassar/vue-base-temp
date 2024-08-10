import { defineRoutes } from '@/modules/shared';

const CartView = () => import('./views/CartView.vue');
const CartModule = () => import('./CartModule.vue');

export const cartRoutes = defineRoutes({
  path: 'cart',
  component: CartModule,
  children: [
    {
      path: '',
      name: 'cart-view',
      component: CartView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
