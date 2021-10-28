import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import ProductCategory from '../views/ProductCategory.vue';
import ProductItem from '../views/ProductItem.vue';
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
        component:  ProductItem,
        props: true,
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