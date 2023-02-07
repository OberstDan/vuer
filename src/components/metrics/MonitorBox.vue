<template>
  <div class="d-flex justify-left align-center mt-2">
    <v-card-subtitle class="keep-left">
      {{ monitor.title }}
    </v-card-subtitle>
  </div>

  <v-sheet height="150" :color="monitorColor(monitor.value)">
    <div class="d-flex fill-height justify-center align-center">
      <div :class="['text-h2', 'text--white']">
        {{ monitor.value }}
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
defineProps({
  monitor: Object,
});

function monitorColor(value) {
  if (value >= 30) {
    return "error";
  }
  if (value >= 10) {
    return "warning";
  }
  return "success";
}
</script>

<style>
.keep-left {
  padding-left: 0px;
  margin-left: 0px;
}
</style>
