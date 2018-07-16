<template>
    <div class="topbar">
        <h1>{{ label }}</h1>
    </div>
</template>

<script>
export default {
    name: 'topbar',
    props: {
        label: {
            type: String,
            required: true,
            default: "Header",
        },
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
