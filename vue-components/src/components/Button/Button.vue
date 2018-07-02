<template>
    <div class="button-body">
        <button :class="setBtn" @click="onClick"> {{ label }} </button>
    </div>
</template>

<script>
export default {
    name: 'button',
    props: {
        label: {
            type: String,
            required: false,
            default: "Press"
        },
        onClick: {
            type: Function,
            required: false,
        },
        color: {
            type: String,
            required: false,
            default: "light",
        }
    },
    computed: {
        setBtn: function() {
            return "btn " + this.color;
        }
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
