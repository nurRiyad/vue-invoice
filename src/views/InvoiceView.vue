<script setup lang="ts">
import { useCartsStore } from "@/stores/carts";
import html2pdf from "html2pdf.js";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

// init route, raouter and cart store
const route = useRoute();
const router = useRouter();
const store = useCartsStore();

const showBtn = ref(true);

const { cartList, dataFetching } = storeToRefs(store);

const cartId = computed(() => route.params.invoiceId as string);

const cartData = computed(() => {
  return cartList.value.find((data) => String(data.id) === cartId.value);
});

const onDownloadClick = () => {
  const element = document.getElementById("riyaddd");
  const opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
};

const onPrintClick = () => {
  showBtn.value = false;
  const el = document.getElementById("riyaddd");
  window.print();
  showBtn.value = true;
};

const onHomeClick = () => {
  router.push("/");
};
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-6">
    <div class="print:hidden my-5 space-x-5 content-center flex justify-center">
      <button @click="onHomeClick" class="px-4 py-1 bg-sky-300 rounded-md">
        Home
      </button>
      <button @click="onPrintClick" class="px-4 py-1 bg-sky-300 rounded-md">
        Print
      </button>
      <button @click="onDownloadClick" class="px-4 py-1 bg-sky-300 rounded-md">
        Download
      </button>
    </div>
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
                    Invoice #: 123<br />
                    Created: January 1, 2015<br />
                    Due: February 1, 2015
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
                    Sparksuite, Inc.<br />
                    12345 Sunny Road<br />
                    Sunnyville, CA 12345
                  </td>

                  <td>
                    Acme Corp.<br />
                    John Doe<br />
                    john@example.com
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="heading">
            <td>Payment Method</td>

            <td>Check #</td>
          </tr>

          <tr class="details">
            <td>Check</td>

            <td>1000</td>
          </tr>

          <tr class="heading">
            <td>Item</td>

            <td>Price</td>
          </tr>

          <tr class="item">
            <td>Website design</td>

            <td>$300.00</td>
          </tr>

          <tr class="item">
            <td>Hosting (3 months)</td>

            <td>$75.00</td>
          </tr>

          <tr class="item last">
            <td>Domain name (1 year)</td>

            <td>$10.00</td>
          </tr>

          <tr class="total">
            <td></td>

            <td>Total: $385.00</td>
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
