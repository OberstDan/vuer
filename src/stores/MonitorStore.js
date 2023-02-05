import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMonitorStore = defineStore("monitor", () => {
  const monitors = ref([]);

  return {
    monitors,
  };
});
