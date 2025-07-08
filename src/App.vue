<template>
    <component
        :is="activePage.component"
    />
</template>

<script setup>
import {shallowRef, provide} from 'vue';
import components from './components';

const pages = [
    {
        key: 'users',
        title: 'Пользователи',
        component: components.user.UsersList,
    },
    {
        key: 'products',
        title: 'Товары',
        component: components.product.ProductsList,
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
