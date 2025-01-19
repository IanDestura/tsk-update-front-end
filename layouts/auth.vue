<template>
     <div class="bg-gray-100">
          <div class="flex flex-row">
               <Sidebar />
               <div class="flex flex-col w-full relative h-screen">
                    <Navbar />
                    <div class="p-3 overflow-auto">
                         <slot />
                    </div>
               </div>
          </div>
     </div>
</template>
<script>

import Navbar from "~/components/navbar/index.vue";
import Sidebar from "~/components/sidebar/index.vue";

export default {
     components: {
          Navbar,
          Sidebar
     },
};

</script>
