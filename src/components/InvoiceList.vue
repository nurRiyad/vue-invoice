<script setup lang="ts">
import { ref } from "vue";
import InvoiceCard from "./InvoiceCard.vue";

const userList = ref([1, 2, 3]);

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    userList.value = data;
  });
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-6">
    <h1 class="text-4xl text-black underline font-bold text-center my-5">
      Invoice List
    </h1>
    <div>
      <div v-for="n in userList">
        <InvoiceCard />
      </div>
    </div>
  </main>
</template>
