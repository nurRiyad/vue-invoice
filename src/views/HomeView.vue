<script setup lang="ts">
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<template>
  <div>pos: {{ x }}, {{ y }}</div>
  <RouterLink to="/invoice/10">Go to invoice page</RouterLink>
</template>
