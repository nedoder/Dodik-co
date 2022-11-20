<script setup>
const email = "";
const name = "";
const message = "";
const onSubmit = "";
</script>

<template>
  <div class="contact">
    <div class="contact-us">
      <div class="form">
        <input
          required
          name="name"
          v-model="name"
          placeholder="Name"
          type="text"
          autocomplete="off"
          class="contact-name"
        />
        <input
          required
          name="email"
          v-model="email"
          placeholder="E-mail"
          type="email"
          autocomplete="off"
          class="contact-email"
        />
        <!-- <span class="email-validate" v-if="email">{{email}}</span> -->
        <textarea
          name="message"
          v-model="message"
          rows="8"
          placeholder="Message"
          class="contact-message"
        />
        <!-- <p v-if="errorMsg===true" class="comment-failed">Morate unijeti ispravnu email adresu.</p> -->
        <button class="button" @click="onSubmit">Send message</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  text-align: center;
  width: 50%;
  margin: 0 auto;
  background: var(--color-black);
}
input,
textarea {
  border-radius: 0.5rem;
  border: 0;
  outline: 0;
  padding: 1rem;
  resize: none;
  margin: 1rem 0;
  width: 100%;
  background: var(--color-black);
  border: 2px solid var(--color-white);
  color: var(--color-white);
}

.button {
  width: 100%;
  background: var(--color-blue);
  border-radius: 0.5rem;
  outline: none;
  border: none;
  padding: 1rem 0;
  color: var(--color-white);
  font-weight: 600;
  /* box-shadow: inset 0.1rem 0.1rem 0.4rem rgb(196, 194, 194), inset -0.2rem -0.1rem 0.3rem #000; */
  transition: all 0.5s ease;
}

.button:hover {
  cursor: pointer;
  letter-spacing: 0.5rem;
}

@media (max-width: 992px) {
  .contact {
    width: 80%;
  }
}
</style>
