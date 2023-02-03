<template>
  <v-progress-circular
    class="text-h3"
    :size="180"
    :width="15"
    :model-value="metric"
    :color="metricColor(metric)"
  >
    {{ metric }}%
  </v-progress-circular>
  <div class="d-flex justify-center align-center mt-2">
    <v-card-subtitle>{{ text }}</v-card-subtitle>
  </div>
</template>

<script setup>
const props = defineProps({
  metric: String,
  text: String,
});

function metricColor(value) {
  if (value >= 95) {
    return "error";
  }
  if (value >= 70) {
    return "warning";
  }
  return "success";
}
</script>
