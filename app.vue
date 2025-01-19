<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script>
import { useFlowbite } from '~/composables/useFlowbite';

export default {
  setup: () => {

    onMounted(() => {
      useFlowbite(() => {
        initFlowbite();
      })
    })

    return {

    };
  }
};
</script>