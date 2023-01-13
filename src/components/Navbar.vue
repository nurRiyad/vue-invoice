<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="py-5 border-b text-zinc-700">
    <div
      class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline"
    >
      <ul class="flex items-baseline space-x-5">
        <li class="">
          <RouterLink to="/" class="text-2xl text-black font-bold">
            Home
          </RouterLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3">
        <li title="About Me">
          <a href="https://www.nurriyad.xyz/" target="_blank"> About Me </a>
        </li>
      </ul>
    </div>
  </div>
</template>
