import type { Cart } from "@/types/Cart";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartsStore = defineStore("carts", () => {
  const cartList = ref<Array<Cart>>([]);
  const dataFetching = ref(false);

  const fetchCartList = async () => {
    try {
      dataFetching.value = true;
      const response = await fetch("https://dummyjson.com/carts");
      const data = await response.json();
      cartList.value = data.carts as Array<Cart>;
    } catch (error) {
      console.log(error);
      cartList.value = [];
    }
    dataFetching.value = false;
  };

  return { cartList, fetchCartList, dataFetching };
});
