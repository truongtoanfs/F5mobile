import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductCategory from '../views/ProductCategory.vue';
import ProductItem from '../views/ProductItem.vue';
import Search from '../views/Search.vue';
import Cart from '../views/Cart.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/categories/:categoryPath',
    name: 'Categories',
    component: ProductCategory,
    props: route => ({ categoryPath: route.path }),
  },
  {
    path: '/series/:categoryPath',
    name: 'Series',
    component: ProductCategory,
    props: route => ({ categoryPath: route.path }),
  },
  {
    path: '/products/:itemPath',
    name: 'Products',
    component: ProductItem,
    props: route => ({ itemPath: route.path }),
  },
  {
    path: '/search',
    name: 'Search',
    component: ProductCategory,
    props: route => ({ categoryPath: 'search', query: route.query.q })
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
