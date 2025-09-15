import {createRouter, createWebHistory} from 'vue-router';
import ProductsList from '../components/product/ProductsList.vue';
import ProductDetail from '../components/product/detail/ProductDetail.vue';
import UsersList from '../components/user/UsersList.vue';

const routes = [
    {
        name: 'main',
        path: '/',
        component: ProductsList,
    },
    {
        name: 'products',
        path: '/products',
        component: ProductsList,
    },
    {
        name: 'product-detail',
        path: '/product/:id',
        component: ProductDetail,
    },
    {
        name: 'users',
        path: '/users',
        component: UsersList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Пример использования global navigation guard
router.beforeEach((to, from, next) => {
    if (to.name === 'product-detail' && from.name !== 'products') {
        // Если в карточку товара переходим не из списка товаров, то отправляем пользователя в список товаров
        next({name: 'products'});
    } else {
        next();
    }
});

export default router;
