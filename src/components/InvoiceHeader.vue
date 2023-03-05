<script setup lang="ts">
import html2pdf from "html2pdf.js";
import { useRouter } from "vue-router";
import HeroiconsArrowDownCircle from "~icons/heroicons/arrow-down-circle";
import HeroiconsArrowLeftCircle from "~icons/heroicons/arrow-left-circle";
import HeroiconsPrinter from "~icons/heroicons/printer";

const router = useRouter();

const onDownloadClick = () => {
  const element = document.getElementById("downloadable-element");
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
  window.print();
};

const onHomeClick = () => {
  router.push("/");
};
</script>

<template>
  <div class="print:hidden my-5 space-x-5 content-center flex justify-center">
    <button
      @click="onHomeClick"
      class="px-4 py-1 flex space-x-1 items-center bg-gray-200 rounded-lg hover:text-black"
    >
      <HeroiconsArrowLeftCircle :font-size="20" />
      <p>Home</p>
    </button>
    <button
      @click="onPrintClick"
      class="px-4 py-1 flex space-x-1 items-center bg-gray-200 rounded-lg hover:text-black"
    >
      <p>Print</p>
      <HeroiconsPrinter :font-size="25" />
    </button>
    <button
      @click="onDownloadClick"
      class="px-4 py-1 flex space-x-1 items-center bg-gray-200 rounded-lg hover:text-black"
    >
      <p>Download</p>
      <HeroiconsArrowDownCircle :font-size="25" />
    </button>
  </div>
</template>
