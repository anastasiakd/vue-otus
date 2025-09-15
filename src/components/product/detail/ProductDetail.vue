<template>
    <base-page
        title="Карточка товара"
        class="products"
    >
        <base-loader v-if="showLoader" />

        <template v-else>
            <div class="products-list">
                <products-list-item
                    :product="product"
                />
            </div>
        </template>
    </base-page>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';
import BasePage from '../../base/BasePage.vue';
import BaseLoader from '../../base/BaseLoader.vue';
import ProductsListItem from '../ProductsListItem.vue';
import API from '../api.js';

const route = useRoute();

const showLoader = ref(true);
const products = ref([]);
const product = computed(() => products.value.find(p => p.id === parseInt(route.params.id)));

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