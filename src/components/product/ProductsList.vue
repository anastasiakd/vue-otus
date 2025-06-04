<template>
    <base-page
        title="Список товаров"
        class="products"
    >
        <base-loader v-if="showLoader"/>

        <div
            v-else
            class="products-list"
        >
            <products-list-item
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </base-page>
</template>

<script setup>
import {ref} from 'vue';
import BasePage from '../base/BasePage.vue';
import BaseLoader from '../base/BaseLoader.vue';
import ProductsListItem from './ProductsListItem.vue';
import API from './api.js';

const showLoader = ref(true);

const products = ref([]);

async function initProducts() {
    products.value = await API.getProducts();
    showLoader.value = false;
}

initProducts();
</script>

<style scoped lang="scss">
.products {
    &-list {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        padding-bottom: 32px;
    }
}
</style>