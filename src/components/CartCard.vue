<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import HeroiconsArrowRightCircle from "~icons/heroicons/arrow-right-circle";

export interface Porps {
  id: number;
  total: number;
  discountedTotal: number;
  userId: number;
}

const props = withDefaults(defineProps<Porps>(), {
  id: NaN,
  total: NaN,
  discountedTotal: NaN,
  userId: NaN,
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
      <button class="py-2 px-4" @click="onShowInvoiceClick">
        <HeroiconsArrowRightCircle :font-size="35" />
      </button>
    </div>
  </div>
</template>
