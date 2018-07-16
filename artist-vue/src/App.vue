<template>
    <div id="app">
        <Topbar label="Hello, world"></Topbar>
    </div>
</template>

<script>
import Topbar from './components/Topbar/Topbar.vue';

export default {
    name: 'app',
    components: {
        Topbar: Topbar,
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
