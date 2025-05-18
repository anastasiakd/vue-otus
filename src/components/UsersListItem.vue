<template>
    <li class="user-item">
        <h1>{{ user.name }}</h1>
        <span v-if="user.age" class="user-item-age">
            {{ user.age }}
        </span>
        <p>{{ user.description }}</p>
    </li>
</template>

<script setup>
defineProps({
    user: Object,
})

</script>

<style lang="scss" scoped>
.user-item {}
</style>