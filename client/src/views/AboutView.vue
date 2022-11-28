<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <main>
    <HeaderComponent />
    <div class="about-main">
      <div class="about"></div>
      <div class="about-content">
        <h1>About us</h1>
        <div class="flex">
          <div class="left">
            <h2>Dodik co mission</h2>
            <h3>HELPING CUSTOMERS KEEP PROMISES</h3>
            <p>
              It's not just a motto; it's the way we do business. At Dodik co, a
              satisfied customer is our main goal. We achieve that goal by
              working as a team to consistently provide the best possible
              service for our customers. Going the extra mile is literally what
              we do!
            </p>
          </div>
          <div class="right">
            <img src="../assets/about.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="about-numbers">
      <div class="about-number">
        <img src="../assets/truckicon.png" />
        <p><span>200+</span>trucks</p>
      </div>
      <div class="about-number">
        <img src="../assets/trailer.png" />
        <p><span>400+</span>trailers</p>
      </div>
    </div>
    <div class="about-contents">
      <h3>We are a perfect choice for</h3>
      <div class="about-cont">
        <div class="content-item">
          <h4>Truck drivers</h4>
          <ul>
            <li>Pay per mile is above the market</li>
            <li>Safety and Performance bonuses</li>
            <li>Paycheck (direct deposit) every Friday</li>
            <li>Benefits: insurance, company discounts, and many more</li>
            <li>New well-maintained equipment</li>
            <li>Experienced dispatchers will keep you moving</li>
            <li>After hours, safety and maintenance support - you never drive alone</li>
          </ul>
        </div>
        <div class="content-item">
          <h4>Clients</h4>
          <ul>
            <li>A partner you can rely on</li>
            <li>Transparent relationships built on trust</li>
            <li>Reasonable rates</li>
            <li>See more</li>
          </ul>
        </div>
        <div class="content-item">
          <h4>Owner operators</h4>
          <ul>
            <li>80% gross lease load pay</li>
            <li>24/7 high rated professional dispatchers</li>
            <li>24/7 truck maintenance support provided</li>
            <li>Brand new state of the art facility with driver's lounge</li>
            <li>Secured yards in Chicago and Philadelphia</li>
            <li>Dedicated lanes. Drop & Hook</li>
            <li>Samsara e-logbook provided by the company</li>
            <li>No hidden fees or charges!</li>
          </ul>
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<style scoped>
.about-main {
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-black);
}

.about {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: url("../assets/dots2.png");
  background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  filter: contrast(0.5);
  opacity: 0.4;
}

.about-content h1 {
  font-size: 5rem;
  color: var(--color-white);
  text-transform: uppercase;
  text-align: center;
  font-family: "Anton", sans-serif;
  text-align: center;
  width: 100%;
  display: block;
}

.about-content {
  position: relative;
  margin: 0 auto;
  margin-top: 6rem;
  width: 90%;
}

.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 70vh;
  align-items: center;
  justify-content: center;
}

.left,
.right {
  width: 50%;
}

.left {
  color: var(--color-white);
  font-size: 1.3rem;
  text-align: justify;
  padding: 2rem;
}

.right img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.about-numbers {
  width: 100%;
  background: var(--color-blue);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  row-gap: 5rem;
  column-gap: 5rem;
  flex-wrap: wrap;
}

.about-number {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
}

.about-number img {
  width: 10rem;
  height: 10rem;
  padding: 1rem;
}

.about-number p {
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 600;
}

.about-number span {
  font-size: 2.5rem;
  font-family: "Anton", sans-serif;
  display: block;
  margin-bottom: -1rem;
}

.about-contents {
  width: 90%;
  margin: 0 auto;
}

.about-cont {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  column-gap: 5rem;
}

.content-item h4 {
  font-size: 2.5rem;
  font-family: "Anton", sans-serif;
  color: var(--color-white);
}

.content-item ul {
  list-style-type: circle;
}
.content-item li {
  list-style: disc outside none;
  display: list-item;
  margin-left: 1em;
  color: var(--color-white);
}
.about-contents h3 {
  font-size: 5rem;
  font-family: "Anton", sans-serif;
  color: var(--color-white);
  text-align: center;
  margin: 4rem 0;
}
@supports (-webkit-touch-callout: none) {
  main {
    background-attachment: scroll;
  }
}

@media (max-width: 1200px) {
  .left,
  .right {
    width: 100%;
  }

  .left {
    order: 1;
    padding: 0;
  }

  .right {
    order: 0;
  }
}
@media (max-width: 992px) {
  .about-content h1,
  .about-contents h3 {
    font-size: 4rem;
  }

  .about-cont {
    flex-wrap: wrap;
  }

  .content-item {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .about-content h1,
  .about-contents h3 {
    font-size: 3rem;
  }
}
</style>
