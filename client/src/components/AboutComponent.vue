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
    <div class="animated-component">
      <div class="about-title">
        <h1>About us</h1>
      </div>
      <div class="about-main">
        <div class="about-image">
          <img src="../assets/hero.webp" alt="About image" />
          <div class="bottom-text"><p>partnership</p></div>
        </div>
        <div class="about-text">
          <transition name="zoom" mode="out-in">
            <div v-if="animate">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo consectetur, quas qui quaerat optio quo vitae quod?
                Quos possimus tempore facilis repellat amet corporis libero
                perspiciatis nisi dolor ducimus veniam sunt reiciendis unde a
                vero, eos nobis atque modi quod corrupti quasi pariatur!
                Blanditiis adipisci veritatis dignissimos dolorem ipsam in.
                <button class="about-button">
                  <router-link
                    class="about-link"
                    class-active="is-active"
                    to="/about"
                    exact
                  >
                    <span>Show more</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12.172 12 9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" fill="#ffffff" class="fill-000000"></path></svg>
                  </router-link>
                </button>
              </p>
            </div>
          </transition>
        </div>
      </div>
      <!-- <transition name="fade" appear> -->
      <!-- </transition> -->
    </div>
  </div>
</template>

<style scoped>
#about-us {
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: var(--color-black);
}

.about-title {
  width: 100%;
  padding: 2rem;
  margin: 2rem auto;
}

.about-title h1 {
  color: var(--color-white);
  font-size: 6rem;
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
  z-index: 1;
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

.about-link {
  text-align: center;
  color: var(--color-white);
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  /* font-family: "Anton", sans-serif; */
  font-size: 1.2rem;
}

.about-link svg {
  width: 2rem;
  vertical-align: middle;
}
.about-button {
  display: block;
  background: var(--color-black);
  /* padding: 0.5rem; */
  margin: 2rem 0;
  /* border: 1px solid var(--color-white); */
}

.about-image::before {
  position: absolute;
  top: -10%;
  left: 10%;
  width: 100%;
  height: 100%;
  border: 4px solid var(--color-blue);
  content: "";
}
.about-text p {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: var(--color-white);
  text-align: justify;
  padding: 0 7rem;
}
.fade-enter-from,
.zoom-enter-from {
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

@media (max-width: 992px) {
  .about-main {
    flex-direction: column;
  }

  .about-image {
    width: 80%;
  }

  .about-text {
    width: 90%;
  }

  .about-text p {
    padding: 1rem;
  }

  .bottom-text p {
    font-size: 5rem;
    bottom: -3rem;
  }
}
@media (max-width: 768px) {
  .about-title h1 {
    font-size: 5rem;
  }
}

@media (max-width: 600px) {
  .about-title h1 {
    font-size: 4rem;
  }
  .bottom-text p {
    font-size: 3rem;
  }

  .about-button {
    margin: 2rem auto;
  }

  .about-link {
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .about-title h1 {
    font-size: 3rem;
  }

  .bottom-text p {
    font-size: 2rem;
  }
}

@media (max-width: 300px) {
  .about-title h1 {
    font-size: 2rem;
  }

  .bottom-text p {
    font-size: 1rem;
  }
}
</style>
