<template>
  <v-app id="controlPanel">
    <v-app-bar color="primary" density="compact" rounded flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ user.i18n.common.appTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="addItem">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container fluid>
        <v-row dense>
          <v-col class="mt-2" cols="12">
            <MetricsCarousel :metrics="store.metrics" />
          </v-col>
        </v-row>
        <v-row>
          <template v-for="n in 3" :key="n">
            <v-col class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 3" :key="`${n}${j}`" cols="6" md="4">
              <v-sheet height="50"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onBeforeMount } from "vue";
import MetricsCarousel from "@/components/metrics/MetricsCarousel.vue";
import { useMetricStore } from "@/stores/MetricStore.js";
import { useUserStore } from "@/stores/UserStore.js";

const drawer = false;
const store = useMetricStore();
const user = useUserStore();

onBeforeMount(async () => {
  await store.load();
});

function addItem() {
  alert(JSON.stringify(store.metrics));
}
</script>
