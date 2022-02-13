<template>
  <div class="home">
    <Carousel
      :pagination="true"
      :navigation="true"
      :autoPlay="true"
      :timeout="1000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in caroselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="`https://picsum.photos/id/${slide}/1000/800`" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";

export default {
  name: "Home",
  components: { Carousel, Slide },
  setup() {
    const caroselSlides = ["11", "222", "33"];

    return { caroselSlides };
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
}

.slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
}

img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>