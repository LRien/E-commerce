<template>
  <div>
    <navigation-bar></navigation-bar>
  </div>
  <router-view></router-view>
</template>
<script setup>
import NavigationBar from './components/NavigationBar.vue';
</script>
<style lang="scss" scoped>
@import '@/assets/Styles/main.scss';
</style>