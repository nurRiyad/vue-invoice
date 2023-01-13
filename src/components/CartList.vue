<script setup lang="ts">
import CartCardVue from "./CartCard.vue";
import CartLoaderVue from "./CartLoader.vue";

import { useCartsStore } from "@/stores/carts";
import { storeToRefs } from "pinia";

const store = useCartsStore();
const { cartList, dataFetching } = storeToRefs(store);
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-6">
    <h1 class="text-4xl text-black underline font-bold text-center my-5">
      Cart List
    </h1>
    <div v-if="dataFetching" class="mt-3 mb-8 space-y-5">
      <div v-for="n in 10" :key="n">
        <CartLoaderVue />
      </div>
    </div>
    <div v-else class="mt-3 mb-8 space-y-5">
      <div v-for="cart in cartList" :key="cart.id">
        <CartCardVue
          :id="cart.id"
          :total="cart.total"
          :discounted-total="cart.discountedTotal"
          :user-id="cart.userId"
        />
      </div>
    </div>
  </main>
</template>
