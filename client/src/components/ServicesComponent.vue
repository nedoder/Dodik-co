<script setup>
import { onMounted, ref } from "vue";

const target2 = ref();
const animate2 = ref(false);
const observer = new IntersectionObserver(
  ([entry]) => {
    animate2.value = entry.isIntersecting;
  },
  {
    threshold: 0.5,
  }
);

onMounted(() => {
  observer.observe(target2.value);
});
</script>

<template>
  <div id="services" ref="target2">
    <transition name="zoom2">
      <div v-if="animate2" class="animated">
        <div class="services-title">
          <h1>Our services</h1>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
#services {
  height: 100vh;
}
.services-title {
  width: 100%;
  padding: 2rem;
  margin: 2rem auto;
}

.services-title h1 {
  color: var(--color-white);
  font-size: 8rem;
  text-align: center;
  text-transform: uppercase;
}

.animated.fade2-enter-from,
.animated.zoom2-enter-from {
  transition: none;
}
/* Fade animation */
.fade2-enter-active,
.fade2-leave-active {
  transition: all 1s ease;
}
.fade2-enter-from,
.fade2-leave-to {
  opacity: 0;
}
/* Zoom animation */
.zoom2-enter-active,
.zoom2-leave-active {
  transition: all 1s ease;
}
.zoom2-enter-from,
.zoom2-leave-to {
  transform: scale(0.9);
}
</style>
