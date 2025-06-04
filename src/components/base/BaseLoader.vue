<template>
    <div class="loader"></div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.loader {
    width: fit-content;
    font-weight: bold;
    font-family: monospace;
    font-size: 16px;
    clip-path: inset(0 3ch 0 0);
    animation: l4 1s steps(4) infinite;
}

.loader:before {
    content: "Загрузка..."
}

@keyframes l4 {
    to {
        clip-path: inset(0 -1ch 0 0)
    }
}
</style>