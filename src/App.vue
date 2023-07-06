<script setup>
import { ref } from "vue";
import home from "./pages/home.vue";
import trailer from "./pages/trailer.vue";
import overview from "./pages/overview.vue";
import gallery from "./pages/gallery.vue";

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
let hamBtn = ref(null);
let hamstat = ref(false);

function activeHam() {
  hamstat.value = !hamstat.value;
}
</script>

<template>
  <div class="grid grid-cols-5 gap-4 bg-custblack-0">
    <div class="col-start-1 col-span-2">
      <nav
        class="hidden lg:flex justify-evenly font-bold items-center p-10 text-white font-montserrat"
      >
        <a @click="scrollToElement('home')" class="cursor-pointer">HOME</a>
        <a @click="scrollToElement('trailer')" class="cursor-pointer"
          >TRAILER</a
        >
        <a @click="scrollToElement('overview')" class="cursor-pointer"
          >OVERVIEW</a
        >
        <a @click="scrollToElement('gallery')" class="cursor-pointer"
          >GALLERY</a
        >
      </nav>
      <img
        src="../src/assets/iconSvg/menu-bars-svgrepo-com.svg"
        class="lg:hidden block white-img w-2/5 p-2"
        ref="hamBtn"
        @click="activeHam"
      />
    </div>
    <div class="col-end-4 col-span-1 flex justify-center items-center">
      <img src="../src/assets/Marvel-Logo.svg" alt="Marvel Logo" />
    </div>
  </div>
  <div
    v-if="hamstat === true"
    class="grid grid-cols-5 gap-4 bg-custblack-0 h-1/3 absolute w-screen"
  >
    <div class="col-start-2 col-span-3 flex justify-center">
      <nav
        class="flex gap-3 flex-col justify-center font-bold items-center p-10 text-white font-montserrat"
      >
        <a @click="scrollToElement('home')" class="cursor-pointer">HOME</a>
        <a @click="scrollToElement('trailer')" class="cursor-pointer"
          >TRAILER</a
        >
        <a @click="scrollToElement('overview')" class="cursor-pointer"
          >OVERVIEW</a
        >
        <a @click="scrollToElement('gallery')" class="cursor-pointer"
          >GALLERY</a
        >
      </nav>
    </div>
  </div>
  <div id="home">
    <home />
  </div>
  <div id="trailer">
    <trailer />
  </div>
  <div class="" id="overview">
    <overview />
  </div>
  <div id="gallery">
    <gallery />
  </div>
</template>
<style>
.white-img {
  filter: invert(100%);
}
</style>
