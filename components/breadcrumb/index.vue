<template>
     <nav
          class="flex items-center p-4 mb-3 rounded-lg bg-white"
          aria-label="Breadcrumb"
     >
          <ol
               class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
          >
               <li
                    v-for="(page, key) in breadcrumbs[menuActive]"
                    :key="key"
                    class="inline-flex items-center"
                    aria-current="page"
               >
                    <div class="flex items-center">
                         <img
                              v-if="key == 0"
                              :src="`/img/sidebar/${page.icon}.svg`"
                              alt="icon"
                              class="h-full w-auto invert-0 opacity-30"
                         />
                         <svg
                              v-else
                              class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-200"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                         >
                              <path
                                   stroke="currentColor"
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="m1 9 4-4-4-4"
                              />
                         </svg>
                         <span
                              class="ms-1 text-sm md:ms-2 cursor-default"
                              :class="
                                   key === breadcrumbs[menuActive].length - 1
                                        ? 'text-tskmgmr-3 font-bold'
                                        : 'text-tskmgmr-2 font-medium opacity-50'
                              "
                         >
                              {{ page.label }}
                         </span>
                    </div>
               </li>
          </ol>
     </nav>
</template>
<script>
import { breadcrumbs } from "~/constants/breadcrumbs.js";

import { useUtilities } from "~/composables/useUtilities.js";

export default {
     setup: () => {
          const { menuActive } = useUtilities();

          return {
               breadcrumbs,
               menuActive
          };
     }
};
</script>
