<script setup lang="ts">
import CartListVue from "@/components/CartList.vue";
import FooterVue from "@/components/Footer.vue";
import NavbarVue from "@/components/Navbar.vue";
</script>

<template>
  <div class="gd-container p-0">
    <header class="fixed w-full backdrop-blur-3xl z-10">
      <NavbarVue />
    </header>
    <main>
      <div class="p-9"></div>
      <CartListVue />
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
