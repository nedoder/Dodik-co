<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
</script>

<template>
  <main>
    <HeaderComponent />
    <div class="services-intro">
      <h1>Trucking company</h1>
      <img src="../assets/7.jpg" class="services-img" />
      <div class="service-flex">
        <div class="service-item">
          <img src="../assets/Box Truck.png" />
          <div class="item-content">
            <h2>200+ TRUCKS OWN FLEET</h2>
            <p>
              A trucking company with 200+ newest model trucks & 400+ trailers
            </p>
          </div>
        </div>
        <div class="service-item">
          <img src="../assets/GPS.png" />
          <div class="item-content">
            <h2>24/7 SERVICE</h2>
            <p>Best-in-class 24/7 Dispatch & Safety Service</p>
          </div>
        </div>
        <div class="service-item">
          <img src="../assets/Map.png" />
          <div class="item-content">
            <h2>SMART SATELLITE TRACKING</h2>
            <p>
              Always know the location of your shipment with pinpoint accuracy
            </p>
          </div>
        </div>
        <div class="service-item">
          <img src="../assets/Route.png" />
          <div class="item-content">
            <h2>WAREHOUSING & CROSS-DOCK</h2>
            <p>State-of-the-art 130,000 square-foot facility in Chicago</p>
          </div>
        </div>
      </div>
    </div>
    <div class="services-main">
      <div class="services"></div>
    </div>
    <div class="service-details">
      <h2>Our mission</h2>
      <div class="mission">
        <img src="../assets/truck.jpg" />
        <div class="mission-flex">
          <div class="mission-item">
            <svg data-name="Layer 1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M166.73 40.32a146.82 146.82 0 0 1-30.5-7.5c-12-4.5-22.5-10-28-17l-.5-.5-.5-.5c-.5 0-.5-.5-1-.5s-.5-.5-1-.5-.5-.5-1-.5-.5-.5-1-.5h-6c-.5 0-.5 0-1 .5-.5 0-.5 0-1 .5-.5 0-.5.5-1 .5s-.5.5-1 .5l-.5.5-.5.5c-6 7-16.5 12.5-28 17a176.56 176.56 0 0 1-30.5 7.5 10.23 10.23 0 0 0-9 10c0 25 1.5 53 11 77.5 6.5 16.5 16.5 31.5 30.5 42.5a66.19 66.19 0 0 0 16 10c6.5 3.5 14.5 9 22 6 19-7 37.5-20.5 49-37.5a108.89 108.89 0 0 0 11-21.5c9.5-24.5 11-52.5 11-77.5.5-4.5-3.5-8.5-8.5-9.5Zm-20.5 80.5c-7.5 19.5-21 36-45.5 46-24.5-10-38-26.5-45.5-46-7-18.5-9-40-9.5-62a170.71 170.71 0 0 0 26-7c10-3.5 20.5-8.5 29-15.5 8.5 7 19 12 29 15.5 9 3.5 18.5 5.5 26 7-.5 22-2.5 43.5-9.5 62Zm-49.5-14-20-14.5c-4.5-3-10.5-2.5-14 2-3 4.5-2.5 10.5 2 14l27.5 20c5.5 4 11 1.5 15-3.5 11-13.5 22.5-27 33.5-40.5 3.5-4.5 3-10.5-1.5-14s-10.5-3-14 1.5l-28.5 35Z" fill="#ffffff" class="fill-000000"></path></svg>
            <div class="mission-content">
              <h2>RESPONSIBLE</h2>
              <p>
                We always keep our promises and go extra mile for our customers!
              </p>
            </div>
          </div>
          <div class="mission-item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.783 2.826 12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-4.473 5a4.5 4.5 0 0 1 8.946 0H7.527z" fill="#ffffff" class="fill-000000"></path></svg>
            <div class="mission-content">
              <h2>RELIABLE</h2>
              <p>
                We work as a team to reach your goals!
              </p>
            </div>
          </div>
          <div class="mission-item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="m12 20.9 4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="#ffffff" class="fill-000000"></path></svg>
            <div class="mission-content">
              <h2>NATIONWIDE</h2>
              <p>
                We are serving all 48 contiguous states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-details">
      <h2>Services we provide</h2>
      <swiper
        :loop="true"
        :slidesPerView="5"
        :spaceBetween="5"
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        class="mySwiper"
        :breakpoints="{
          250: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }"
      >
        <swiper-slide class="services-item">
          <img src="../assets/services5.jpg" />
          <h3>24/7 dispatch</h3>
        </swiper-slide>
        <swiper-slide class="services-item">
          <img src="../assets/services7.jpg" />
          <h3>Truckload services</h3>
        </swiper-slide>
        <swiper-slide class="services-item">
          <img src="../assets/services3.jpg" />
          <h3>Satellite tracking</h3>
        </swiper-slide>
        <swiper-slide class="services-item">
          <img src="../assets/services4.jpg" />
          <h3>Team services</h3>
        </swiper-slide>
        <swiper-slide class="services-item">
          <img src="../assets/services1.jpg" />
          <h3>Expedited services</h3>
        </swiper-slide>
        <swiper-slide class="services-item">
          <img src="../assets/services6.jpg" />
          <h3>Customized programs</h3>
        </swiper-slide>
      </swiper>
    </div>
    <FooterComponent />
  </main>
</template>

<style scoped>
.services-main {
  width: 100%;
  /* min-height: 50vh; */
  background-color: var(--color-grey);
}

.services-intro,
.service-details {
  width: 100%;
  text-align: center;
  /* min-height: 50vh; */
  background-color: var(--color-black);
}

.services-img {
  width: 60%;
  height: auto;
}
.service-flex,
.mission {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
}

.mission {
  align-items: center;
  column-gap: 2rem;
}
.service-item {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
}

.service-item img {
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
}

.item-content {
  width: 100%;
  height: 100%;
}
.item-content h1 {
  color: var(--color-grey);
}

.mission img,
.mission-flex {
  width: calc(50% - 1rem);
}

.mission-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
}

.mission-content {
  width: calc(100% - 3rem);
}
.mission-content h2,
.services-item h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem !important;
  padding: 1rem 0;
  margin-top: 2rem !important;
  color: var(--color-white);
}
.item-content p,
.mission-content p {
  color: var(--color-white);
}
.services-intro h1,
.service-details h2,
.services-details h2 {
  color: var(--color-white);
  font-size: 6rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 6rem;
}

.services-details {
  width: 90%;
  margin: 0 auto;
}
.service-details h2,
.services-details h2 {
  font-size: 5rem;
}

.mySwiper {
  margin: 10rem 0;
}

.services-item {
  text-align: center !important;
}
.services-item img {
  width: 10rem;
  height: 10rem;
  clip-path: circle();
}
.mission svg {
  width: 3rem;
  height: 3rem;
}
.services {
  width: 100%;
  min-height: 50vh;
  height: auto;
  background: url("../assets/1.png");
  background-size: contain;
  -webkit-background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-position: center center; */
  filter: grayscale(1);
  opacity: 0.2;
}
@supports (-webkit-touch-callout: none) {
  main {
    background-attachment: scroll;
  }
}

@media (max-width: 1200px) {
  .services-img {
    width: 90%;
  }
  .service-item {
    width: 50%;
  }

  .mission img,
  .mission-flex {
    width: 100%;
  }
}

@media (max-width: 992px) {
  .services-intro h1,
  .service-details h2,
  .services-details h2 {
    font-size: 4rem;
  }
}

@media (max-width: 600px) {
  .service-item {
    width: 100%;
  }

  .mission-content h2 {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 400px) {
  .services-intro h1,
  .service-details h2,
  .services-details h2 {
    font-size: 3rem;
  }
}
</style>
