<template>
     <!-- min-h-screen h-full lg:h-auto -->
     <div
          class="z-40 h-screen bg-tskmgmr-2 overflow-y-auto absolute lg:relative transition-all ease-out flex flex-col"
          :class="sidebarOpen
               ? 'left-0 w-80 duration-300 lg:duration-500'
               : 'delay-150 -left-80 md:-left-96 lg:left-0 w-20 duration-700 lg:duration-300'
               "
          tabindex="-1"
          aria-labelledby="drawer-label"
     >
          <div
               class="px-sidebar-small py-2 h-14 flex flex-row gap-3 items-center justify-center w-full relative">
               <img
                    class="h-full w-auto transition-all duration-200 ease-in-out"
                    :class="sidebarOpen
                         ? 'opacity-0 invisible scale-50'
                         : 'opacity-100 visible scale-100 delay-200'
                         "
                    src="/img/logo/logo-icon.svg"
                    alt="user photo"
               />
               <img
                    class="h-7 w-full absolute left-0 flex items-center justify-center transition-all duration-150 ease-in-out"
                    :class="sidebarOpen
                         ? 'opacity-100 visible scale-100 delay-200'
                         : 'opacity-0 invisible scale-50'
                         "
                    src="/img/logo/logo-brand.svg"
                    alt="user photo"
               />
          </div>
          <div class="px-sidebar-small py-4 flex flex-col justify-between items-center h-full overflow-hidden">
               <!-- <button
                    @click="onClickBurgerMenu(!sidebarOpen)"
                    type="button"
                    class="lg:hidden text-white bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center hover:scale-105 hover:bg-tskmgmr-3 transition-all duration-300 ease-in-out"
               >
                    <svg
                         class="w-3 h-3"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 14 14"
                    >
                         <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                         />
                    </svg>
                    <span class="sr-only">Close menu</span>
               </button> -->
               <ol class="w-full flex flex-col gap-3">
                    <li
                         v-for="(menu, key) in menus"
                         :key="key"
                         class="w-full"
                    >
                         <SidebarLink
                              v-if="menu.children == null"
                              :menu="menu"
                         />
                         <SidebarDropdown
                              v-if="menu.children"
                              :menu="menu"
                         />
                    </li>
               </ol>
               <button
                    @click="onClickBurgerMenu(!sidebarOpen)"
                    type="button"
                    class="group inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-tskmgmr-4 rounded-full border transition-all duration-300 ease-in-out scale-100 hover:scale-105"
               >
                    <span class="sr-only">Open main menu</span>
                    <img
                         src="/img/sidebar/arrow.svg"
                         alt="icon"
                         class="h-full w-auto z-10 transition-transform duration-300 ease-out invert-0"
                         :class="{
                              'rotate-180': !sidebarOpen,
                              'rotate-0': sidebarOpen
                         }"
                    />

               </button>
          </div>
     </div>
</template>
<script>
import { useUtilities } from "~/composables/useUtilities.js";

import { menus } from "~/constants/menu.js";

import SidebarLink from "./components/link.vue";
import SidebarDropdown from "./components/dropdown.vue";

export default {
     components: {
          SidebarLink,
          SidebarDropdown
     },
     setup: () => {
          const { sidebarOpen, onClickBurgerMenu } = useUtilities();

          return {
               sidebarOpen,
               onClickBurgerMenu,
               menus
          };
     }
};
</script>
