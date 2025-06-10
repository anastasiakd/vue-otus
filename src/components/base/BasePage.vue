<template>
    <div class="page">
        <base-menu/>

        <div class="page-header">
            <template v-if="$slots.title">
                <slot name="title"/>
            </template>

            <div
                v-else-if="title"
                class="page-title"
            >
                <h2>{{ title }}</h2>
            </div>
        </div>

        <div class="page-content">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import BaseMenu from './BaseMenu.vue';

defineProps({
    title: String,
})
</script>

<style scoped lang="scss">
.page {
    margin: 0 auto 2rem;
    max-width: 40rem;
    min-width: 21rem;
    width: 80%;

    &-menu {
        padding: 1.5rem;

        &__item {
            padding: 1.5rem;
        }
    }

    &-title {
        margin-bottom: 2rem;
    }
}
</style>