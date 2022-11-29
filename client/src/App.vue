<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.25s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
}
</style>
