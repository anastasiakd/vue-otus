<template>
    <ul>
        <user-list-item
            v-for="user in users"
            :key="user.id"
        />
    </ul>
</template>

<script setup>
import UsersListItem from './UsersListItem.vue';

const users = [
    {
        id: 1,
        name: 'Воланд',
        description: 'повелитель сил Тьмы',
        age: null
    }, 
    {
        id: 2,
        name: 'Азазелло',
        description: 'посланник дьявола',
        age: null
    }, 
    {
        id: 3,
        name: 'Коровьев-Фагот',
        description: 'маг, регент, чародей, переводчик или черт его знает кто на самом деле',
        age: null
    }
]
</script>

<style lang="scss" scoped>

</style>