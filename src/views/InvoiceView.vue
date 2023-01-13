<script setup lang="ts">
import InvoiceHeader from "@/components/InvoiceHeader.vue";
import { useCartsStore } from "@/stores/carts";
import moment from "moment";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRoute } from "vue-router";

// init route, raouter and cart store
const route = useRoute();

const store = useCartsStore();

const { cartList, dataFetching } = storeToRefs(store);

const cartId = computed(() => route.params.invoiceId as string);

const cartData = computed(() => {
  return cartList.value.find((data) => String(data.id) === cartId.value);
});

const date = computed(() => moment().format("MMM Do YY"));

const products = computed(() => cartData.value?.products || []);
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-6">
    <InvoiceHeader />
    <div id="downloadable-element">
      <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
          <tr class="top">
            <td colspan="2">
              <table>
                <tr>
                  <td class="title">
                    <img
                      src="/Al-Qamar-Al-Zhabi.png"
                      style="width: 100%; max-width: 300px"
                    />
                  </td>

                  <td>
                    Invoice # {{ cartData?.id || "-" }}<br />
                    Created at {{ date }}<br />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="information">
            <td colspan="2">
              <table>
                <tr>
                  <td>
                    Al QAMAR AL ZHABI General Trading LLC<br />
                    near Gold Souq Ajman-U.A.E<br />
                    +971558332996
                  </td>

                  <td>
                    Riyad Inc<br />
                    Nur Riyad<br />
                    alasadnurriyad3@google.com
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="heading">
            <td>Item</td>

            <td>Price</td>
          </tr>

          <tr v-for="product in products" :key="product.id" class="item">
            <td>{{ product.title }}</td>

            <td>${{ product.total }}</td>
          </tr>

          <tr class="total">
            <td></td>

            <td>Total: ${{ cartData?.total || "-" }}</td>
          </tr>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

@page {
  size: auto;
  margin: 4mm;
}

/** RTL **/
.invoice-box.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.invoice-box.rtl table {
  text-align: right;
}

.invoice-box.rtl table tr td:nth-child(2) {
  text-align: left;
}
</style>
