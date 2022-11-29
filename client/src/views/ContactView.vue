<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
</script>

<template>
  <main>
    <HeaderComponent />
    <div class="contact-flex">
      <div class="contact-left">
        <h4>Contact information</h4>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z" fill="#ffffff" class="fill-000000"></path></svg>
          <span>Phone: 312-846-6858</span>
        </p>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zm-2 0V4H5v16h14zM8 11h3v2H8v-2zm0-4h3v2H8V7zm0 8h3v2H8v-2zm5 0h3v2h-3v-2zm0-4h3v2h-3v-2zm0-4h3v2h-3V7z" fill="#ffffff" class="fill-000000"></path></svg>
          <span>31E OGDEN AVE APT 230 LA GRANGE, IL 60525</span>
        </p>
        <p>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8h2v5.5a1.5 1.5 0 0 0 3 0V12zm-8-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#ffffff" class="fill-000000"></path></svg>
          <span>dodikco@gmail.com</span>
        </p>
      </div>
      <div class="contact-right">
        <ContactComponent />
      </div>
    </div>
    <!-- <div class="contact-main">
      <div class="contact-dots"></div>
    </div> -->
    <FooterComponent />
  </main>
</template>

<style scoped>
main {
  margin-top: 9rem;
}
.contact-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: baseline;
  padding: 4rem 0;
  column-gap: 1rem;
  row-gap: 6rem;
}

.contact-left,
.contact-right {
  color: var(--color-white);
}

.contact-left svg {
  width: 3rem;
  height: 3rem;
}

.contact-left span {
  padding: 0 1rem;
}

.contact-left p {
  padding: 1rem 0;
}

.contact-left h4 {
  font-size: 3rem;
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

/* .contact-main {
  width: 100%;
  background-color: var(--color-grey);
}

.contact-dots {
  width: 100%;
  min-height: 50vh;
  height: auto;
  background: url("../assets/lines.webp");
  background-size: contain;
  -webkit-background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  filter: grayscale(1);
  opacity: 0.2;
} */

@media (max-width: 1400px) {
  .contact-left,
  .contact-right {
    width: 100%;
  }

  .contact-left {
    text-align: center;
  }

  .contact-flex {
    padding: 0;
  }
}

@media (max-width: 992px) {
  .contact-left svg {
    width: 2rem;
    height: 2rem;
  }
}
</style>
