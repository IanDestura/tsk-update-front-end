<template>
     <div>
          <Breadcrumb />
          <ProjectList />
     </div>
</template>
<script>
import Breadcrumb from "~/components/breadcrumb/index.vue";

import ProjectList from "./components/list.vue";

export default {
     components: {
          Breadcrumb,
          ProjectList // make the <FullCalendar> tag available
     },
     setup: () => {

          definePageMeta({
               layout: 'auth',
          })
          
          return {};
     }
};
</script>
