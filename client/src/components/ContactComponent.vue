<script setup>
import { onMounted, ref } from "vue";
import ContactForm from "./ContactForm.vue";

const form = ref();
const animations = ref(false);
const observer = new IntersectionObserver(
  ([entry]) => {
    animations.value = entry.isIntersecting;
  },
  {
    threshold: 0.5,
  }
);

onMounted(() => {
  observer.observe(form.value);
});
</script>

<template>
  <div id="contact" ref="form">
    <transition name="zoom3" mode="out-in">
      <div v-if="animations" class="right">
        <p>Let&#39;s stay in touch</p>
        <contact-form />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.right {
  right: 0;
}

#contact {
  width: 100%;
  min-height: 100vh;
}
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

.zoom3-enter-from {
  transition: none;
}

.zoom3-enter-active,
.zoom3-leave-active {
  transition: all 0.5s ease;
}

.zoom3-enter-from,
.zoom3-leave-to {
  right: -100%;
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
