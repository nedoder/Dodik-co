<script setup>
import ContactForm from "./ContactForm.vue";
</script>

<template>
  <div id="contact">
    <div>
      <p>Let&#39;s stay in touch</p>
      <contact-form />
    </div>
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
