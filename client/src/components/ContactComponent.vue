<script setup>
// import { onMounted, ref } from "vue";
import ContactForm from "./ContactForm.vue";

// const contact = ref();
// const animated = ref(false);
// const observer = new IntersectionObserver(
//   ([entry]) => {
//     animated.value = entry.isIntersecting;
//   },
//   {
//     threshold: 0.5,
//   }
// );

// onMounted(() => {
//   observer.observe(contact.value);
// });
</script>

<template>
  <div id="contact" ref="contact">
    <!-- <transition name="fade"> -->
    <div class="animated-component">
      <p>Let&#39;s stay in touch</p>
      <contact-form />
    </div>
    <!-- </transition> -->
  </div>
</template>

<style scoped>
#contact p {
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 2px var(--color-white);
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  font-size: 7rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
  letter-spacing: 0.5rem;
  margin-top: 7rem;
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

@media (max-width: 1400px) {
  #contact p {
    font-size: 5rem;
  }
}

@media (max-width: 992px) {
  #contact p {
    font-size: 4rem;
  }
}
</style>
