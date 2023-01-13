<script setup lang="ts">
import { useCartsStore } from "@/stores/carts";
import { RouterView } from "vue-router";

// init the cart store
const store = useCartsStore();

// fetch cart data
store.fetchCartList();
</script>

<template>
  <RouterView />
</template>
