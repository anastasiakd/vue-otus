<template>
    <div class="page-menu">
        <div
            v-for="item in menu"
            :key="item.key"
            class="page-menu__item"
            :class="[{'page-menu__item_active': item.key === routeName}]"
            @click="goTo(item)"
        >
            {{ item.title }}
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';

const menu = [
    {
        key: 'users',
        title: 'Пользователи',
    },
    {
        key: 'products',
        title: 'Товары',
    },
];

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name);

function goTo(item) {
    router.push({name: item.key});
}
</script>

<style scoped lang="scss">
.page-menu {
    display: flex;
    padding: 1.5rem 0;

    &__item {
        background: #FFF;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1;
        height: 2rem;
        padding: 1rem;
        transition: all 0.3s ease-in-out;
        white-space: nowrap;

        &_active, :hover {
            background: #F4F4F4;
        }
    }
}
</style>