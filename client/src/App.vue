<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- <RouterView /> -->
  <RouterView v-slot="{ Component }">
  <!-- Use any custom transition and  to `fade` -->
  <transition name="scale" mode="out-in">
    <component :is="Component" />
  </transition>
</RouterView>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
  transition-delay: 0.5s;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

</style>
