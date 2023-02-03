import { defineStore } from "pinia";
import { computed, ref } from "vue";
import de_AT from "@/assets/lang/de_AT.json";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    locale: "de_AT",
  });

  const i18n = computed(() => {
    if (user.value.locale == "de_AT") {
      return de_AT;
    }
    return de_AT;
  });

  return {
    user,
    i18n,
  };
});
