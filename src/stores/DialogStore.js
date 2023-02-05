import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useDialogStore = defineStore("dialog", () => {
  const dialogs = ref([]);

  const showExampleDialog = computed(() => {
    return dialogs.value.find((dialog) => dialog == "showExampleDialog");
  });

  function openDialog(name) {
    dialogs.value.push(name);
  }

  function closeDialog(name) {
    const i = dialogs.value.lastIndexOf(name);
    if (i > -1) dialogs.value.splice(i, 1);
  }

  return {
    showExampleDialog,
    openDialog,
    closeDialog,
  };
});
