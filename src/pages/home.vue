<script setup>
import HomeLayout from "../layout/homelayout.vue";
import { ref } from "vue";
let watch = ref(null);
function btnact() {
  window.location.href =
    "https://www.apps.disneyplus.com/ph/onboarding?gclid=CjwKCAjwzJmlBhBBEiwAEJyLu-X9AErBcuS7lBJZ1CjaUPHl1QpC_gCD_kunypUSqW-f8w8rtBxnIxoCSG4QAvD_BwE&utm_campaign=MK-PH_YR-22_AN-WALDIZ_BS-DIS_CN-Performance_PB-Google_DT-CROSS_OB-Prf_CP-_FF-DisneyPlusBrandPhrase&utm_medium=search&utm_source=google";
}
</script>

<template>
  <HomeLayout>
    <div class="h-[80%] bg-svg1 sm:grid hidden grid-cols-4">
      <div
        class="pl-20 col-start-1 lg:col-span-2 col-span-4 flex justify-center items-start flex-col"
      >
        <img src="../assets/Group2.svg" alt="Marvel Logo" />
        <button
          class="font-oswald text-xl border border-solid py-2 px-3 rounded-lg font-bold text-white bg-custred-0 border-custred-0"
          ref="watch"
          @click="btnact"
        >
          WATCH NOW
        </button>
      </div>
    </div>
    <div class="h-full bg-svg2 grid sm:hidden grid-cols-4">
      <div
        class="pl-20 col-start-1 lg:col-span-2 col-span-4 flex justify-center items-start flex-col"
      >
        <img src="../assets/Group2.svg" alt="Marvel Logo" />
        <button
          ref="watch"
          @click="btnact"
          class="font-oswald text-xl border border-solid py-2 px-3 rounded-lg font-bold text-white bg-custred-0 border-custred-0"
        >
          WATCH NOW
        </button>
      </div>
    </div>
  </HomeLayout>
</template>
<style>
.bg-svg1 {
  background-image: url("../assets/spidyImage.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-svg2 {
  background-image: url("../assets/milesbg.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
