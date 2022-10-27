<script setup>
import { ref, onMounted } from "vue";
const showMobileMenu = ref(false);

const runMouseOver = () => {
  document.querySelector("#mouse-cursor").style.transform = "scale(4)";
  document.querySelector("#mouse-cursor").style.background = "#fff";
};
const runMouseLeave = () => {
  document.querySelector("#mouse-cursor").style.transform = "";
  document.querySelector("#mouse-cursor").style.background = "";
};

onMounted(async () => {
  const handleMousePos = (e) => {
    const cursor = document.querySelector("#mouse-cursor");
    const { pageX: posX, pageY: posY } = e;
    return (
      (cursor.style.left = `${posX - 10}px`),
      (cursor.style.top = `${posY - 10}px`)
    );
  };
  document.addEventListener("mousemove", handleMousePos);
});
</script>

<template>
  <main>
    <div id="mouse-cursor"></div>
    <header class="header" id="header">
      <nav class="navbar header-container">
        <a href="/" class="brand" aria-label="Logo">
          <img src="../assets/logo.png" alt="Logo" />
        </a>
        <div class="menu" id="menu">
          <div
            class="wrapper-menu"
            :class="{ active: showMobileMenu }"
            @click="showMobileMenu = !showMobileMenu"
          >
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>
        </div>
      </nav>
    </header>
    <transition name="enter">
      <div class="menu-wrapper" v-if="showMobileMenu">
        <div class="menu-title">
          <p>dodik co</p>
        </div>
        <div class="menu-list" v-if="showMobileMenu">
          <router-link
            class="menu-link"
            class-active="is-active"
            to="/"
            exact
            @mouseenter="runMouseOver"
            @mouseleave="runMouseLeave"
          >
            <span class="menu-name">Home</span>
          </router-link>
          <router-link
            class="menu-link"
            class-active="is-active"
            to="/#about-us"
            exact
            @mouseenter="runMouseOver"
            @mouseleave="runMouseLeave"
          >
            <span class="menu-name">About</span>
          </router-link>
          <router-link
            class="menu-link"
            class-active="is-active"
            to="/#services"
            exact
            @mouseenter="runMouseOver"
            @mouseleave="runMouseLeave"
          >
            <span class="menu-name">Services</span>
          </router-link>
          <router-link
            class="menu-link"
            class-active="is-active"
            to="/#contact"
            exact
            @mouseenter="runMouseOver"
            @mouseleave="runMouseLeave"
          >
            <span class="menu-name">Contact</span>
          </router-link>
        </div>
      </div>
    </transition>
  </main>
</template>

<style scoped>
#mouse-cursor {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--color-black);
  border: 4px solid var(--color-white);
  border-radius: 999px;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 999;
  transition: top 0.025s ease, left 0.025s ease, transform 0.25s ease;
}
.header-container {
  height: auto;
  margin: 0 auto;
}
.brand img {
  height: 4rem;
}
.header {
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 100;
  padding: 1rem 0;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 3rem;
  margin: 0 auto;
}

.wrapper-menu {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
  z-index: 10;
}

.wrapper-menu.active {
  transform: rotate(-45deg);
}

.line-menu {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  height: 6px;
}

.line-menu.half {
  width: 50%;
}

.line-menu.start {
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
}

.active .line-menu.start {
  transform: rotate(-90deg) translateX(3px);
}

.line-menu.end {
  align-self: flex-end;
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: left;
}

.active .line-menu.end {
  transform: rotate(-90deg) translateX(-3px);
}

.menu-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: var(--color-black);
  z-index: 3;
  width: 100%;
}
.menu-list {
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.menu-list a {
  text-decoration: none;
}

.menu-name {
  font-family: "Anton", sans-serif;
  font-size: 4rem;
  color: var(--color-white);
  padding: 1rem;
  transition: all 0.5s ease;
}

.menu-name:hover {
  transform: scale(1.1);
  letter-spacing: 1.1rem;
}
.menu-title {
  width: 30%;
  float: left;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-title p {
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 2px var(--color-white);
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  font-size: 12rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5rem;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.enter-enter-active,
.enter-leave-active {
  transition: all 1.5s ease-in-out;
}
.enter-enter-from,
.enter-leave-to {
  right: -100%;
  opacity: 0.5;
}
</style>
