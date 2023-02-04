import { defineStore } from "pinia";
import { computed, ref } from "vue";
import data from "@/assets/metrics.json";

export const useMetricStore = defineStore("metric", () => {
  const metrics = ref();

  async function load() {
    metrics.value = data.metrics;
  }

  return {
    metrics,
    load,
  };
});
