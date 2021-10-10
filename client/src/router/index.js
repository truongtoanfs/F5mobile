import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import ProductCategory from '../views/ProductCategory.vue';
import ProductItem from '../views/ProductItem.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        component:  Homepage,
    },
    {
        path: '/categories/:categoryName',
        component:  ProductCategory,
        props: true,
    },
    {
        path: '/products/:productName',
        component:  ProductItem,
        props: true,
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