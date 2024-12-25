<script setup>
import { ROADMAP_SECTIONS } from '@/constants/sections.js'
</script>

<template>
  <section>
    <header class="relative overflow-hidden bg-black">
      <div class="absolute top-0 left-0 w-screen h-full overflow-hidden">
        <img src="@/assets/images/bg-full.png" class="w-full h-full scale-105 object-cover max-w-none" />
      </div>
      <img src="@/assets/images/bg-mini.png" class="relative md:w-[700px] mx-auto" />
    </header>

    <section class="md:w-[700px] mx-auto">
      <main class="py-8">
        <h1 class="text-center text-5xl md:text-[80px] font-yomogi uppercase md:-tracking-[3px]">
          Eurydice Ui/Ux
        </h1>
      </main>

      <section class="the real roadmap" dir="rtl">

        <section class="grid md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-10 px-6">
          <template v-for="section in ROADMAP_SECTIONS" :key="section.id">
            <section class="relative">
              <div
                class="
                  border border-primary-500 rounded-md overflow-hidden
                  bg-[linear-gradient(160deg,#E9F5EB_-9.5%,#D5EBD9_106.18%)]
                "
                :class="{'md:mt-[180px]': !(!!(section.id % 2))}"
              >
                <template v-if="section?.has_thumbnail">
                  <a :href="section.thumbnail_url">
                    <img
                      :src="section.thumbnail"
                      class="h-56 md:h-44 w-full object-cover"
                    />
                  </a>
                </template>
                <div class="p-4" v-html="section.html_inject" />
              </div>

              <img
                src="@/assets/icons/road-vector.svg"
                :class="[
                  !!(section.id % 2)
                    ? 'top-20 right-full mt-2 -mr-px'
                    : '-bottom-12 left-full -mb-0.5 -ml-px -scale-x-100',
                  'absolute -z-10 hidden md:block'
                ]"
                v-if="section.id !== 1012"
              />

              <img
                src="@/assets/icons/two-roads-vector.svg"
                class="-mt-2 relative left-9 -z-10 hidden md:block"
                v-else
              >

              <img
                class="absolute left-1/2 -translate-x-1/2 h-20 -bottom-20 -z-10 md:hidden"
                src="@/assets/icons/straight-road-vector.svg"
              />
              <img
                class="absolute left-1/2 -translate-x-1/2 h-20 -bottom-40 -z-10 md:hidden"
                src="@/assets/icons/straight-road-vector.svg"
                v-if="section.id === 1012"
              />
            </section>
          </template>
        </section>

      </section>

      <footer class="text-center text-4xl md:text-5xl leading-[52px] md:leading-[70px] font-yomogi mt-40 md:mt-0">
        <h2>HABIBA ROADMAP</h2>
        <a
          href="https://bento.me/habibanasr"
          target="_blank"
          class="text-primary-500 flex items-center justify-center gap-x-1 transition hover:brightness-75"
        >
          MY WEBSITE: <img src="@/assets/icons/link.svg" alt="">
        </a>
        <h2>THE END</h2>
      </footer>
    </section>
  </section>
</template>
