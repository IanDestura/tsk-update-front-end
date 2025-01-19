<template>
     <NuxtLayout name="auth">
          <AlertInfo />
          <Breadcrumb />
          <DashboardStats />
     </NuxtLayout>
</template>
<script>
import AlertInfo from "~/components/alert/info.vue";
import Breadcrumb from "~/components/breadcrumb/index.vue";

import DashboardStats from "./components/stats.vue";

export default {
     components: {
          AlertInfo,
          Breadcrumb,
          DashboardStats
     },
     setup: () => {

          return {};
     }
};
</script>
