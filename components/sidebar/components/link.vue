<template>
     <router-link
          @click="onClickMenu(menu.alias)"
          :to="menu.path"
          class="px-3 py-2 gap-2 flex flex-row items-center group w-full h-10 text-sm font-medium text-center rounded-lg transition-all duration-300 ease-out"
          :class="{
               'bg-tskmgmr-4': isActive(menu.alias),
               'bg-transparent hover:bg-tskmgmr-4 delay-0': !isActive(
                    menu.alias
               )
          }"
     >
          <img
               :src="`/img/sidebar/${menu.icon}.svg`"
               alt="icon"
               class="h-full w-auto z-10 transition-all ease-linear"
               :class="{
                    'invert-0 delay-150': isActive(menu.alias),
                    'invert group-hover:invert-0': !isActive(menu.alias)
               }"
          />
          <span
               class="transition-all ease-linear text-start duration-150"
               :class="{
                    'text-tskmgmr-1': isActive(menu.alias),
                    'text-white group-hover:text-tskmgmr-1': !isActive(
                         menu.alias
                    ),
                    'show-menu-label': sidebarOpen,
                    'hide-menu-label': !sidebarOpen
               }"
          >
               {{ menu.label }}
          </span>
     </router-link>
</template>
<script>
import { useUtilities } from "~/composables/useUtilities.js";

export default {
     props: {
          menu: {
               type: Object,
               required: true
          }
     },
     setup: () => {
          const { isActive, onClickMenu, sidebarOpen } = useUtilities();

          return {
               isActive,
               onClickMenu,
               sidebarOpen
          };
     }
};
</script>
