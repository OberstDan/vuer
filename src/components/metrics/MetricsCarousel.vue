<template>
  <v-carousel
    cycle
    height="350"
    hide-delimiter-background
    show-arrows="hover"
    color="primary"
  >
    <v-carousel-item v-for="(metric, i) in metrics" :key="i">
      <v-card height="100%" :title="metric.server">
        <template v-slot:prepend>
          <v-icon size="x-large" icon="mdi-poll" />
        </template>

        <div class="d-flex align-center justify-center">
          <div class="text-h2">
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <ServerMetrics
                    :metric="metric.cpu"
                    :text="userStore.i18n.common.cpu"
                  />
                </v-col>
                <v-col cols="4">
                  <ServerMetrics
                    :metric="metric.memory"
                    :text="userStore.i18n.common.memory"
                  />
                </v-col>
                <v-col cols="4">
                  <ServerMetrics
                    :metric="metric.disk"
                    :text="userStore.i18n.common.storage"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </div>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup>
import { useUserStore } from "@/stores/UserStore";
import ServerMetrics from "./ServerMetrics.vue";

const userStore = useUserStore();
const props = defineProps({
  metrics: Array,
});
</script>
