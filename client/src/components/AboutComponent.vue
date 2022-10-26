<script setup>
import { onMounted, ref } from "vue";

const target = ref();
const animate = ref(false);
const observer = new IntersectionObserver(
  ([entry]) => {
    animate.value = entry.isIntersecting;
  },
  {
    threshold: 0.5,
  }
);

onMounted(() => {
  observer.observe(target.value);
});
</script>

<template>
  <div id="about-us" ref="target">
    <transition name="zoom">
      <div v-if="animate" class="animated-component">
        <div class="about-title">
          <h1>About us</h1>
        </div>
        <div class="about-main">
          <div class="about-image">
            <img src="../assets/hero.webp" alt="About image" />
          </div>
          <div class="about-text">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo consectetur, quas qui quaerat optio quo vitae quod? Quos possimus tempore facilis repellat amet corporis libero perspiciatis nisi dolor ducimus veniam sunt reiciendis unde a vero, eos nobis atque modi quod corrupti quasi pariatur! Blanditiis adipisci veritatis dignissimos dolorem ipsam in.</p>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade" appear>
      <div class="bottom-text"><p>partnership</p></div>
    </transition>
  </div>
</template>

<style scoped>
#about-us {
  height: 100vh;
}

.about-title {
  width: 100%;
  padding: 2rem;
  margin: 2rem auto;
}

.about-title h1 {
  color: var(--color-white);
  font-size: 8rem;
  text-align: center;
  text-transform: uppercase;
}

.bottom-text p {
  position: absolute;
  bottom: -6rem;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 2px var(--color-blue);
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  font-size: 7rem;
  font-weight: 400;
  width: 100%;
  text-align: left;
  letter-spacing: 0.5rem;
}

.about-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  column-gap: 1rem;
}

.about-image,
.about-text {
  width: calc(50% - 1rem);
}

.about-image img {
  width: 100%;
  height: auto;
}
.about-text p {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: var(--color-white);
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
