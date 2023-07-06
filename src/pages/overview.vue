<script setup>
import HomeLayout from "../layout/homelayout.vue";
import { ref } from "vue";

let chevbtn = ref(null);
let chevstat = ref(false);

function chevactive() {
  chevstat.value = !chevstat.value;
}

let chevback = ref(null);
let chevbackstat = ref(false);
function chevbackactive() {
  chevbackstat.value = !chevbackstat.value;
}
</script>

<template class="">
  <HomeLayout>
    <div class="grid grid-cols-7 h-[90%] justify-center items-center">
      <div class="xl:block hidden col-start-2 col-span-3">
        <div class="grid grid-cols-4 px-20 py-10">
          <div class="col-start-1 col-span-4">
            <h1 class="font-oswald text-2xl font-bold pb-3">OVERVIEW</h1>
            <p class="font-montserrat text-justify pb-3">
              In Spider-Man: Across the Spider-Verse, Miles Morales joins forces
              with Gwen Stacy and ventures into the Multiverse. They meet the
              Spider Society, a group dedicated to preserving the Multiverse.
              However, conflicts arise when they disagree on how to handle a new
              danger. Miles is forced to go solo and protect his loved ones. The
              film explores the idea that anyone can be a hero, emphasizing the
              importance of how one wears the mask.
            </p>
          </div>
          <div class="col-start-1 col-span-2">
            <h1 class="font-oswald text-2xl font-bold pb-3">DIRECTED BY</h1>
            <p class="font-montserrat">
              Joaquim Dos Santos <br />Kemp Powers <br />Justin K. Thompson
            </p>
          </div>
          <div class="col-end-5 col-span-2">
            <h1 class="font-oswald text-2xl font-bold pb-3">WRITTEN BY</h1>
            <p class="font-montserrat pb-3">
              Phil Lord <br />Christopher Miller <br />David Callaham
            </p>
          </div>
          <div class="col-start-1 col-span-4 flex">
            <h1 class="font-oswald text-2xl font-bold py-3 text-custred-0">
              BASED ON MARVEL COMICS
            </h1>
          </div>
          <div class="col-start-1 col-span-2">
            <h1 class="font-oswald text-2xl font-bold pb-3">
              EXECUTIVE PRODUCERS
            </h1>
            <p class="font-montserrat pb-3">
              Bob Persichetti <br />Peter Ramsey<br />
              Rodney Rothman<br />
              Aditya Sood<br />Brian Michael Bendis
            </p>
          </div>
          <div class="col-end-5 col-span-2">
            <h1 class="font-oswald text-2xl font-bold pb-3">PRODUCE BY</h1>
            <p class="font-montserrat pb-3">
              Avi AradAmy Pascal<br />
              Phil Lord<br />
              Christopher Miller<br />
              Christina Steinberg
            </p>
          </div>
          <div class="col-start-1 col-span-2">
            <h1 class="font-oswald text-2xl font-bold pb-3">CAST</h1>
            <p class="font-montserrat pb-3">
              Shameik Moore <br />Hailee Steinfeld <br />Brian Tyree Henry
              <br />Luna Lauren Velez<br />
            </p>
          </div>
          <div class="col-end-5 col-span-2">
            <p class="font-montserrat pt-5">
              Jake Johnson<br />
              Jason Schwartzman<br />
              Issa RaeKaran Soni <br />Daniel Kaluuya <br />Oscar Isaac
            </p>
          </div>
        </div>
      </div>
      <div class="col-end-7 col-span-2 xl:block hidden">
        <img src="../assets/spmcover.svg" alt="spmcover" class="h-4/5" />
      </div>

      <div
        :class="[{ hiddenCnt: chevstat === true, show: chevstat === false }]"
        class="col-start-2 col-span-5 font-montserrat text-justify pb-3 text-sm flex items-center justify-center"
      >
        <div class="flex items-center justify-center">
          <img
            src="../assets/spmcover.svg"
            alt="spmcover"
            class="w-[50%] xl:hidden pb-5"
          />
        </div>

        <h1 class="font-oswald text-2xl font-bold pb-3 xl:hidden">OVERVIEW</h1>
        <p class="font-montserrat text-justify pb-3 text-xs xl:hidden">
          In Spider-Man: Across the Spider-Verse, Miles Morales joins forces
          with Gwen Stacy and ventures into the Multiverse. They meet the Spider
          Society, a group dedicated to preserving the Multiverse. However,
          conflicts arise when they disagree on how to handle a new danger.
          Miles is forced to go solo and protect his loved ones. The film
          explores the idea that anyone can be a hero, emphasizing the
          importance of how one wears the mask.
        </p>
      </div>
      <div
        :class="[{ hiddenCnt: chevstat === false, show: chevstat === true }]"
        class="col-start-2 col-span-5 font-montserrat text-justify pb-3 text-sm"
      >
        <h1 class="font-bold pb-1">DIRECTED BY</h1>
        <p>Joaquim Dos Santos, Kemp Powers, Justin K. Thompson</p>
        <h1 class="font-bold pb-1">WRITTEN BY</h1>
        <p>Phil Lord & Christopher Miller & David Callaham</p>
        <h1 class="font-bold py-3">BASED ON THE MARVEL COMICS</h1>
        <h1 class="font-bold pb-1">PRODUCED BY</h1>
        <p>
          Avi Arad, Amy Pascal, Phil Lord, Christopher Miller, Christina
          Steinberg
        </p>
        <h1 class="font-bold pb-1">EXECUTIVE PRODUCERS</h1>
        <p>
          Bob Persichetti, Peter Ramsey, Rodney Rothman, Aditya Sood, Brian
          Michael Bendis
        </p>
        <h1 class="font-bold pb-1">CAST</h1>
        <p>
          Shameik Moore, Hailee Steinfeld, Brian Tyree Henry, Luna Lauren Velez,
          Jake Johnson, Jason Schwartzman, Issa Rae, Karan Soni, with Daniel
          Kaluuya, and Oscar Isaac
        </p>
      </div>
    </div>
    <div
      class="col-start-2 col-span-5 flex gap-10 justify-center items-center h-[10%] xl:hidden"
    >
      <img
        v-if="chevstat === false"
        src="../assets/iconSvg/chevron-left-icon.svg"
        class="h-[50%] rotate-180"
        ref="chevbtn"
        @click="chevactive"
      />
      <img
        v-else
        src="../assets/iconSvg/chevron-left-icon.svg"
        class="h-[50%]"
        ref="chevbtn"
        @click="chevactive"
      />
    </div>
  </HomeLayout>
</template>
<style scoped>
.show {
  @apply block;
}
.hiddenCnt {
  display: none;
}
</style>
