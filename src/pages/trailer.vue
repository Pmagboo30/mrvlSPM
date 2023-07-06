<script setup>
import HomeLayout from "../layout/homelayout.vue";
</script>

<template class="">
  <HomeLayout class="bg-custblack-0">
    <div class="grid grid-cols-6 gap-4 h-full">
      <div
        class="col-start-2 col-span-4 gap-5 py-10 w-full text-white font-oswald text-2xl font-bold flex justify-center items-start flex-col"
      >
        <h1>OFFICIAL TRAILER</h1>
        <div class="flex flex-col justify-center items-center h-4/5 w-full">
          <iframe
            src="https://www.youtube.com/embed/shW9i6k8cB0"
            allowfullscreen
            class="h-4/5 w-4/5"
          ></iframe>
          <img src="../assets/intologo.svg" alt="into logo" class="h-1/5" />
        </div>
      </div>
    </div>
  </HomeLayout>
</template>
