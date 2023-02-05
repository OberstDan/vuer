<template>
  <v-row justify="center">
    <v-dialog
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue')"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">New monitor</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Monitor name*"
                  v-model="monitor.title"
                  required
                  :hint="monitor.title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Metric value"
                  v-model="monitor.value"
                  hint="Testhalber ein Wert zwischen 1 und 100"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="$emit('update:modelValue')"
          >
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="addMonitor">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup>
import { ref } from "vue";
defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const monitor = ref({
  title: "",
  value: "",
});

function addMonitor() {
  alert(JSON.stringify(monitor.value));
  emits("update:modelValue");
}
</script>
