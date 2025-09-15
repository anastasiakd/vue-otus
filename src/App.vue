<template>
    <router-view :key:key="`path_${route.fullPath}`"></router-view>
</template>

<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
</script>

<style scoped>

</style>
