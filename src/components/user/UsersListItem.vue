<template>
    <div class="user-item">
        <div class="title">
            <h3>{{ user.name }}</h3>

            <div class="age">
                <template v-if="user.age">
                    ({{ user.age }})
                </template>
                <template v-else>
                    (Бессмертный)
                </template>
            </div>
        </div>

        <div class="descripton">{{ user.description }}</div>
    </div>
</template>

<script setup>
defineProps({
    user: Object,
})

const bgColor = '#FFFFFF';
const hoveredBgColor = '#F8FEFB';
</script>

<style lang="scss" scoped>
.user-item {
    background: v-bind(bgColor);
    border: 1px solid #0AAF604D;
    border-radius: 0.5rem;
    box-sizing: border-box;
    padding: 1.5rem;
    transition: all 0.3s ease-out;
    width: 100%;

    &:hover {
        background-color: v-bind(hoveredBgColor);
    }

    .title {
        display: flex;
        gap: 0.5rem;
    }

    .age {
        color: #AAAAAA;
    }

    .descripton {
        color: #AAAAAA;
        margin-top: 0.5rem;
        font-size: 0.875rem;
        white-space: pre-wrap;
    }
}
</style>