<script setup>
import { onMounted, ref } from "vue";

const contact = ref();
const animated = ref(false);
const observer = new IntersectionObserver(
  ([entry]) => {
    animated.value = entry.isIntersecting;
  },
  {
    threshold: 0.5,
  }
);

onMounted(() => {
  observer.observe(contact.value);
});
</script>

<template>
  <div id="contact" ref="contact">
    <transition name="fade">
      <div v-if="animated" class="animated-component">
        <p>Let&#39;s stay in touch</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
#contact {
  height: 100vh;
}

#contact p {
  position: absolute;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 2px var(--color-white);
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  font-size: 7rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
  letter-spacing: 0.5rem;
}

.animated-component {
  right: 0%;
}
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  right: -50%;
}
/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: all 1s ease;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.9);
}
</style>
