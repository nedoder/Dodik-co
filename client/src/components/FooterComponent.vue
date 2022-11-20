<script setup>
import { onMounted, ref } from "vue";
import ContactComponent from "./ContactComponent.vue";

const footer = ref();
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
  observer.observe(footer.value);
});
</script>

<template>
  <footer class="footer" id="contact" ref="footer">
    <transition name="fade" mode="out-in">
      <div v-if="animations" class="footer-wrapper">
        <ContactComponent />
        <div class="footer-container">
          <div class="footer-brand">
            <a href="/" class="brand-image" aria-label="Logo"
              ><img src="..//assets/logo.png" alt="Logo" />
            </a>
          </div>
          <div class="social-icons">
            <a href="#" class="facebook" aria-label="Facebook">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 3H8a5 5 0 0 0-5 5v16a5 5 0 0 0 5 5h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1v-2h1a1 1 0 0 0 1-1v-3.5a2.5 2.5 0 0 1 2.5-2.5H22v2h-1a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h1.72l-.5 2H20a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-.76l1-4a1 1 0 0 0-.18-.86A1 1 0 0 0 23 15h-2v-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3.5a4.51 4.51 0 0 0-4.5 4.5V15h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v6H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3h-4a1 1 0 0 0 0 2h4a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"
                  data-name="facebook fb face book"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </a>
            <a href="#" class="instagram" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.7 56.7"
                xml:space="preserve"
              >
                <path
                  d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
                <circle
                  cx="41.5"
                  cy="16.4"
                  r="2.9"
                  fill="#ffffff"
                  class="fill-000000"
                ></circle>
                <path
                  d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </a>
            <a href="#" class="gmail" aria-label="Gmail">
              <svg
                id="Icons"
                version="1.1"
                viewBox="0 0 32 32"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 32 32"
              >
                <path
                  d="M25 27H7c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v14c0 2.2-1.8 4-4 4z"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  class="stroke-000000"
                ></path>
                <path
                  d="m3 10 13 8 13-8"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  class="stroke-000000"
                ></path>
              </svg>
            </a>
          </div>
          <p class="copyrights">Licence number: KON5654KHY HHH882</p>
          <p class="copyrights">
            &copy; Dodik co. All rights reserved. Powered by
            <a href="https://www.linkedin.com/in/tanjadoderovic/">nedoder</a>
          </p>
        </div>
        <div class="footer-contact">
          <p>Main office</p>
          <a href="/join-us" aria-label="Join us">31E OGDEN AVE APT 230</a>
          <a>LA GRANGE, IL 60525</a>
          <a href="https://www.patreon.com/" aria-label="Patreon">
            +382 67 5555 88
          </a>
        </div>
        <div class="quick-links">
          <!-- <p>Quick links</p> -->
          <a href="/" aria-label="Home">Home</a>
          <a href="/#about-us" aria-label="About us">About</a>
          <a href="/#services" aria-label="services">Services</a>
          <a href="/#contact" aria-label="Support">Contact</a>
        </div>
      </div>
    </transition>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  min-height: 100vh;
  padding: 0 calc(5% + 1rem);
  overflow: hidden;
  background: var(--color-black);
}

.brand-image img {
  width: 5rem;
}
/* FOOTER ITEMS */
.footer-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

#contact {
  width: 100%;
}

.footer-container,
.quick-links,
.footer-contact {
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 33%;
}
.gmail svg {
  margin: 0 0.5rem 0 0;
  height: 1.5rem;
  color: var(--color-white);
}
.quick-links,
.footer-contact {
  flex-direction: column;
}
.quick-links a,
.footer-contact a {
  color: var(--color-white);
  padding: 0.5rem 0;
}
.quick-links a,
.footer-contact p {
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  padding: 0.2rem 0;
  color: var(--color-white);
}

.social-icons svg {
  padding: 0 1em 0 0;
  height: 2rem;
}
.footer-brand a,
.social-icons a,
.copyrights a {
  text-decoration: none;
  color: var(--color-white);
}
.social-icons {
  text-align: left;
}
.copyrights,
.social-icons {
  width: 100%;
  text-align: left;
  color: var(--color-white);
}
.copyrights a {
  color: var(--color-white);
}
.copyrights a:hover {
  color: var(--color-blue);
}

.footer-wrapper.fade-enter-from {
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
/* @media (max-width: 820px) {
  .footer {
    padding: 3rem calc(5% + 1rem);
  }
} */
/* @media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
  .footer-brand,
  .social-icons,
  .partner-logo,
  .quick-links,
  .footer-contact,
  .footer-container {
    width: 100%;
    text-align: center;
    align-items: center;
  }
  .copyrights {
    text-align: center;
  }
  .partner-logo img {
    margin: 0 auto;
  }
} */

@media (max-width: 768px) {
  .footer-wrapper {
    flex-direction: column;
  }

  .footer-container,
  .footer-contact,
  .quick-links {
    width: 100%;
  }

  .copyrights,
  .social-icons,
  .footer-brand {
    text-align: center;
  }

  .footer-brand {
    margin: 0 auto;
  }
}
</style>
