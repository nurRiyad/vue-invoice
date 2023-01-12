<script setup lang="ts">
import FooterVue from "@/components/Footer.vue";
import InvoiceListVue from "@/components/InvoiceList.vue";
import NavbarVue from "@/components/Navbar.vue";
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();

fetch("https://dummyjson.com/carts")
  .then((res) => res.json())
  .then(console.log);
</script>

<template>
  <div class="gd-container p-0">
    <header class="fixed w-full backdrop-blur-3xl z-10">
      <NavbarVue />
    </header>
    <main>
      <div class="p-9"></div>
      <InvoiceListVue />
    </main>
    <footer>
      <FooterVue />
    </footer>
  </div>
</template>

<style scoped>
.gd-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>
