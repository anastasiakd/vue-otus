<template>
    <div class="page-menu">
        <div
            v-for="page in pages"
            :key="page.key"
            class="page-menu__item"
            :class="[{'page-menu__item_active': page.key === activePage}]"
            @click="setActivePage(page)"
        >
            {{ page.title }}
        </div>
    </div>
</template>

<script setup>
import {inject} from 'vue';

const pages = inject('pages');
const activePage = inject('activePage');
const setActivePage = inject('setActivePage');
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