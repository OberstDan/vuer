import { defineStore } from "pinia";
import { ref } from "vue";
import data from "@/assets/monitors.json";

export const useMonitorStore = defineStore("monitor", () => {
  const monitors = ref();

  async function load() {
    monitors.value = data.monitors;
  }

  return {
    monitors,
    load,
  };
});
