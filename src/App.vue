<template>
    <component
        :is="activePage.component"
    />
</template>

<script setup>
import {shallowRef, provide} from 'vue';
import UsersList from './components/user/UsersList.vue';
import ProductsList from './components/product/ProductsList.vue';

const pages = [
    {
        key: 'users',
        title: 'Пользователи',
        component: UsersList,
    },
    {
        key: 'products',
        title: 'Товары',
        component: ProductsList,
    },
];

const activePage = shallowRef(pages[0]);
const setActivePage = newPage => {
    activePage.value = newPage;
};

provide('pages', pages);
provide('activePage', activePage);
provide('setActivePage', setActivePage);
</script>

<style scoped>

</style>
