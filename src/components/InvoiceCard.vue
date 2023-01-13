<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

export interface Porps {
  id: number;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
}

const props = withDefaults(defineProps<Porps>(), {
  id: NaN,
  total: NaN,
  discountedTotal: NaN,
  userId: NaN,
  totalProducts: NaN,
});

const router = useRouter();

const disCounted = computed(() => props.total - props.discountedTotal);

const onShowInvoiceClick = () => {
  router.push(`/invoice/${props.id}`);
};
</script>

<template>
  <div
    class="shadow-lg p-4 bg-gray-100 rounded-md hover:shadow-xl transition-all duration-300 text-black flex justify-between items-center"
  >
    <div>
      <p class="text-xl font-semibold space-x-8 py-1">User {{ userId }}</p>
      <p class="text-base text-slate-600 space-x-3">
        <span>Cart ID {{ id }} </span>
        <span>|</span>
        <span>Total Price ${{ total }} </span>
        <span>|</span>
        <span>Discounte ${{ disCounted }}</span>
      </p>
    </div>
    <div>
      <button
        class="py-2 px-4 hover:bg-sky-300 hover:shadow-lg bg-sky-200 rounded-lg"
        @click="onShowInvoiceClick"
      >
        Show Invoice
      </button>
    </div>
  </div>
</template>
