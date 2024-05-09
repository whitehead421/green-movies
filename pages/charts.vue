<script setup>
import { ref } from "vue";

const options = ref({
  title: {
    text: "Reviews",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.y}</b><br/>",
    valueSuffix: " furkan",
    shared: true,
  },
  series: [
    {
      name: "Series 232",
      data: Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * 10 + 4)
      ),
    },
    {
      data: Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * 4 + 4)
      ),
    },
  ],
});
</script>

<template>
  <div>
    <highcharts :options="options" />
  </div>
</template>
