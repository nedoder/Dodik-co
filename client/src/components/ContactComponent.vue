<script setup>
import ContactForm from "./ContactForm.vue";
</script>

<template>
  <div id="contact">
    <div class="right">
      <p>Let&#39;s stay in touch</p>
      <contact-form />
    </div>
  </div>
</template>

<style scoped>
#contact {
  width: 100%;
}
#contact p {
  color: var(--color-white);
  /* -webkit-text-stroke: 2px var(--color-white); */
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
}

</style>
