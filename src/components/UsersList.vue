<template>
    <div class="users">
        <div class="title">
            <h2>Список пользователей</h2>

            <div class="link" @click="showUsers = !showUsers">
                {{ showUsers ? 'Скрыть' : 'Показать' }}
            </div>
        </div>

        <div v-show="showUsers" class="users-list">
            <UsersListItem v-for="user in users" :key="user.id" :user="user" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UsersListItem from './UsersListItem.vue';

const users = [
    {
        id: 1,
        name: 'Воланд',
        description: 'Повелитель сил Тьмы',
        age: null,
    },
    {
        id: 2,
        name: 'Азазелло',
        description: 'Посланник дьявола',
        age: null,
    },
    {
        id: 3,
        name: 'Коровьев-Фагот',
        description: 'Маг, регент, чародей, переводчик или черт его знает кто на самом деле',
        age: null,
    },
    {
        id: 4,
        name: 'Кот Бегемот',
        description: 'Лучший из шутов',
        age: null,
    },
    {
        id: 5,
        name: 'Гелла',
        description: '«...служанку мою Геллу рекомендую. Расторопна, понятлива, и нет такой услуги, которую она не сумела бы оказать»',
        age: null,
    },
    {
        id: 6,
        name: 'Мастер',
        description: '— Вы — писатель? — с интересом спросил поэт.'
            + '\nГость потемнел лицом и погрозил Ивану кулаком, потом сказал:'
            + '\n— Я — мастер…',
        age: 38,
    },
    {
        id: 7,
        name: 'Маргарита',
        description: 'Ежегодно мессир дает один бал. Он называется весенним балом полнолуния, или балом ста королей… Так вот-с: мессир холост, как вы, конечно, сами понимаете. Но нужна хозяйка',
        age: 30,
    },
];

const showUsers = ref(true);
</script>

<style lang="scss" scoped>
.users {
    margin: 2rem auto;
    max-width: 40rem;
    min-width: 21rem;
    width: 80%;

    .title {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;

        h2 {
            flex: 1
        }
    }

    &-list {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%
    }
}
</style>