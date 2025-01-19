<template>
     <div>
          <Breadcrumb />
     </div>
</template>
<script>
import Breadcrumb from "~/components/breadcrumb/index.vue";

export default {
     components: {
          Breadcrumb
     },
     setup: () => {

          definePageMeta({
               layout: 'auth',
          })
          
          return {};
     }
};
</script>
