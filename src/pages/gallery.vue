<script setup>
import HomeLayout from "../layout/homelayout.vue";
import { ref } from "vue";
let imgBtn1 = ref(null);
let imgStat1 = ref(true);

function showImage() {
  imgStat1.value = !imgStat1.value;
  imgStat2.value = false;
  imgStat3.value = false;
}

let imgBtn2 = ref(null);
let imgStat2 = ref(false);

function showImage2() {
  imgStat2.value = !imgStat2.value;
  imgStat1.value = false;
  imgStat3.value = false;
}
let imgBtn3 = ref(null);
let imgStat3 = ref(false);

function showImage3() {
  imgStat1.value = false;
  imgStat2.value = false;
  imgStat3.value = !imgStat3.value;
}
</script>

<template class="">
  <HomeLayout class="bg-custblack-0">
    <div class="grid grid-cols-6 gap-4 h-full">
      <div
        class="md:col-start-2 md:col-span-4 col-start-1 col-span-6 gap-5 py-10 w-full text-white font-oswald text-2xl font-bold flex justify-center items-start flex-col"
      >
        <h1>GALLERY</h1>
        <div
          class="flex flex-col justify-center items-center h-4/5 w-full px-3"
        >
          <img
            v-if="imgStat2 === true"
            src="../assets/spmGal2.svg"
            allowfullscreen
          />
          <img
            v-else-if="imgStat3 === true"
            src="../assets/spmGal3.svg"
            allowfullscreen
          />
          <img v-else src="../assets/spmGal1.svg" allowfullscreen />
          <div class="flex justify-center items-center mt-5">
            <img
              ref="imgBtn1"
              @click="showImage"
              src="../assets/spmGal1.svg"
              allowfullscreen
              :class="[
                {
                  active1: imgStat1 === true,
                  inactive1: imgStat1 === false,
                },
              ]"
            />
            <img
              ref="imgBtn2"
              @click="showImage2"
              src="../assets/spmGal2.svg"
              allowfullscreen
              :class="[
                { active: imgStat2 === true, inactive: imgStat2 === false },
              ]"
            />
            <img
              ref="imgBtn3"
              @click="showImage3"
              src="../assets/spmGal3.svg"
              allowfullscreen
              :class="[
                { active: imgStat3 === true, inactive: imgStat3 === false },
              ]"
            />
          </div>
          <p class="font-thin text-sm pt-20">
            No copyright infringement is intended. DISCLAIMER: I do not own the
            copyright to the picture/graphics. The website is purely for
            educational purposes only.
          </p>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>
<style scoped>
.active {
  @apply w-[20%];
  pointer-events: none;
}
.inactive {
  @apply w-[20%] opacity-50;
}
.active1 {
  @apply w-[20%];
  pointer-events: none;
}
.inactive1 {
  @apply w-[20%] opacity-50;
}
</style>
