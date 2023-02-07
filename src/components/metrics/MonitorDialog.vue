<template>
  <v-row justify="center">
    <v-dialog
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue')"
      style="max-width: 80%"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Neues Monitoring hinzufügen</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  :label="userStore.i18n.common.title"
                  v-model="monitor.title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  :label="userStore.i18n.common.value"
                  v-model="monitor.value"
                  :hint="userStore.i18n.hint.monitorValueRange"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="$emit('update:modelValue')">
            {{ userStore.i18n.common.close }}
          </v-btn>
          <v-btn color="primary" variant="text" @click="addMonitor">
            {{ userStore.i18n.common.add }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/UserStore.js";
import { useMonitorStore } from "@/stores/MonitorStore.js";

defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const userStore = useUserStore();
const monitorStore = useMonitorStore();

const monitor = ref({
  title: "",
  value: "",
});

function addMonitor() {
  monitorStore.add(monitor.value);
  monitor.value = {};
  emits("update:modelValue");
}
</script>
