<template>
  <v-app id="controlPanel">
    <v-app-bar color="primary" density="compact" rounded flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ userStore.i18n.common.appTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="metricDialog = true">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
      <v-btn icon @click="showStore">
        <v-icon> mdi-apps </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container fluid>
        <v-row dense>
          <v-col class="mt-2" cols="12">
            <MetricsCarousel :metrics="metricStore.metrics" />
          </v-col>
        </v-row>
        <v-row>
          <template v-for="n in monitorStore.monitors.length" :key="n">
            <v-col class="mt-2 ml-0 mr-0" cols="2">
              <div class="d-flex justify-left align-center mt-2">
                <v-card-subtitle class="keep-left"
                  >Category {{ n }}</v-card-subtitle
                >
              </div>

              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
    <AddMetricDialog v-model="metricDialog" />
  </v-app>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import MetricsCarousel from "@/components/metrics/MetricsCarousel.vue";
import AddMetricDialog from "./metrics/AddMetricDialog.vue";
import { useMetricStore } from "@/stores/MetricStore.js";
import { useUserStore } from "@/stores/UserStore.js";
import { useMonitorStore } from "@/stores/MonitorStore.js";
const metricStore = useMetricStore();
const monitorStore = useMonitorStore();
const userStore = useUserStore();

const drawer = ref(false);
const metricDialog = ref(false);

onBeforeMount(async () => {
  if (!metricStore.metrics) {
    await metricStore.load();
  }
});

function showStore() {
  alert(JSON.stringify(monitorStore.monitors));
}
</script>
<style>
.keep-left {
  padding-left: 0px;
  margin-left: 0px;
}
</style>
