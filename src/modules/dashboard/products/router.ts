import { defineRoutes } from '@/modules/shared';

const ProductsList = () => import('./views/ProductsList.vue');
const ProductDetails = () => import('./views/ProductDetails.vue');
const ProductsModule = () => import('./ProductsModule.vue');

export const productsRoutes = defineRoutes({
  path: 'products',
  name: 'products',
  component: ProductsModule,
  children: [
    {
      path: '',
      name: 'list',
      component: ProductsList,
    },
    {
      path: ':id',
      name: 'product-details',
      component: ProductDetails,
    },
  ],
});
