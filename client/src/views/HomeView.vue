<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import ServicesComponent from "../components/ServicesComponent.vue";
// import ContactComponent from "../components/ContactComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { ref } from "vue";
const test = ref(null);
function runOnScroll() {
  const position = -Math.round(window.pageYOffset) / 5 + "%";
  test.value.style.transform = "translateX(" + position + ")";
  test.value.style.transition = "transform 100ms linear";
}

window.addEventListener("scroll", () => {
  runOnScroll();
});
</script>

<template>
  <main>
    <HeaderComponent />
    <div class="hero-overlay">
      <div class="hero-text">
        <h1>
          <transition name="show" appear>
            <span>We drive</span>
          </transition>
          <transition name="fade" appear>
            <span>your business further</span>
          </transition>
        </h1>
      </div>
    </div>
    <transition name="fade" appear>
      <div class="bottom-text" ref="test"><p>reliable partner</p></div>
    </transition>
    <AboutComponent />
    <ServicesComponent />
    <!-- <ContactComponent /> -->
    <FooterComponent />
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  background: url("../assets/hero.webp");
  background-blend-mode: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

h1 span {
  font-size: 20rem;
  color: var(--color-blue);
  text-transform: uppercase;
  text-align: center;
  font-family: "Anton", sans-serif;
  text-align: center;
  width: 100%;
  display: block;
}

span:last-child {
  position: absolute;
  top: 60%;
  color: var(--color-white);
  font-size: 5rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-text {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bottom-text {
  z-index: 2;
}
.bottom-text p {
  position: absolute;
  bottom: -6rem;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 2px var(--color-white);
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  font-size: 7rem;
  font-weight: 400;
  width: 100%;
  text-align: right;
  letter-spacing: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2.5s ease;
  transition-delay: 2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4rem);
}

.show-enter-active,
.show-leave-active {
  transition: all 2.5s ease;
}
.show-enter-from,
.show-leave-to {
  opacity: 0;
}

@media (max-width: 1400px) {
  h1 span {
    font-size: 15rem;
  }
}

@media (max-width: 1400px) {
  h1 span {
    font-size: 14rem;
  }

  span:last-child {
    font-size: 4.5rem;
  }

  .bottom-text p {
    font-size: 6.5rem;
  }
}

@media (max-width: 992px) {
  h1 span {
    font-size: 11rem;
  }

  span:last-child {
    font-size: 4rem;
  }

  .bottom-text p {
    font-size: 5rem;
    bottom: -4rem;
  }
}

@media (max-width: 768px) {
  .hero-text {
    width: 100%;
  }
  h1 span {
    font-size: 10rem;
  }

  span:last-child {
    font-size: 3.5rem;
  }

  .bottom-text p {
    font-size: 4.5rem;
    bottom: -3rem;
    right: -7rem;
  }
}

@media (max-width: 768px) {
  h1 span {
    font-size: 8rem;
  }

  span:last-child {
    font-size: 3rem;
  }

  .bottom-text p {
    font-size: 3.5rem;
    bottom: -3rem;
    right: -7rem;
    letter-spacing: 0.2rem;
  }
}

@media (max-width: 450px) {
  h1 span {
    font-size: 7rem;
  }

  span:last-child {
    font-size: 2.5rem;
  }

  .bottom-text p {
    font-size: 3rem;
    bottom: -3rem;
    right: -7rem;
    letter-spacing: 0.2rem;
  }
}

@media (max-width: 400px) {
  h1 span {
    font-size: 6rem;
  }
  span:last-child {
    font-size: 2rem;
  }
  .bottom-text p {
    font-size: 2.5rem;
    bottom: -2rem;
    right: -7rem;
    letter-spacing: 0.2rem;
  }
}
@media (max-width: 350px) {
  h1 span {
    font-size: 4.5rem;
  }
  span:last-child {
    font-size: 1rem;
  }
  .bottom-text p {
    font-size: 1.5rem;
    bottom: -1rem;
    right: -7rem;
    letter-spacing: 0.2rem;
  }
}
</style>
