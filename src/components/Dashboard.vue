<template>
  <v-app id="controlPanel">
    <v-app-bar color="primary" density="compact" rounded flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ userStore.i18n.common.appTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="showMonitorDialog = true">
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
          <v-col
            class="mt-2 ml-0 mr-0"
            cols="2"
            v-for="n in monitorStore.monitors"
            :key="n"
          >
            <MonitorBox :monitor="n" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <MonitorDialog v-model="showMonitorDialog" />
  </v-app>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useMetricStore } from "@/stores/MetricStore.js";
import { useUserStore } from "@/stores/UserStore.js";
import { useMonitorStore } from "@/stores/MonitorStore.js";
import MetricsCarousel from "@/components/metrics/MetricsCarousel.vue";
import MonitorDialog from "@/components/metrics/MonitorDialog.vue";
import MonitorBox from "@/components/metrics/MonitorBox.vue";

const metricStore = useMetricStore();
const monitorStore = useMonitorStore();
const userStore = useUserStore();

const drawer = ref(false);
const showMonitorDialog = ref(false);

onBeforeMount(async () => {
  if (!metricStore.metrics) {
    await metricStore.load();
  }

  if (!monitorStore.monitors) {
    await monitorStore.load();
  }
});

function showStore() {
  alert(JSON.stringify(monitorStore.monitors));
}
</script>
