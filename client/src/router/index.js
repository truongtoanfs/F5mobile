import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import ProductCategory from '../views/ProductCategory.vue';
import ProductItem from '../views/ProductItem.vue';
import Search from '../views/Search.vue';
import Cart from '../views/Cart.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        component:  Homepage,
    },
    {
        path: '/categories/:categoryPath',
        component: ProductCategory,
        props: route => ({categoryPath: route.path}),
    },
    {
        path: '/series/:categoryPath',
        component: ProductCategory,
        props: route => ({categoryPath: route.path}),
    },
    {
        path: '/products/:itemPath',
        component: ProductItem,
        props: route => ({itemPath: route.path}),
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/cart',
        component:  Cart,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;