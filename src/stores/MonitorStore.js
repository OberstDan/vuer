import { defineStore } from "pinia";
import { ref } from "vue";
import data from "@/assets/monitors.json";

export const useMonitorStore = defineStore("monitor", () => {
  const monitors = ref();

  async function load() {
    monitors.value = data.monitors;
  }

  function add(element) {
    monitors.value.push(element);
  }

  function remove(element) {
    monitors.value = monitors.value.filter((e) => e.title == element.title);
  }

  return {
    monitors,
    load,
    add,
    remove,
  };
});
