<template>
    <Button
        :label="label"
    />
</template>

<script setup>
import Button from 'primevue/button';

defineProps({
    label: {
        type: String,
        default: null,
    },
});
</script>

<style scoped lang="scss">

</style>