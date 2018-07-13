<template>
  <div class="topbar">
    <div class="topbar-header">
      <scan class="topbar-header-text">{{ label }}</scan>
    </div>
    <div class="topbar-icon">
      <scan class="topbar-icon-menu"><font-awesome-icon icon="bars" /></scan>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  props: {
    label: {
      type: String,
      required: false,
      default: "Header",
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
