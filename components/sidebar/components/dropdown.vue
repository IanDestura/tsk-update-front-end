<template>
     <div>
          {{ show }}
          {{ menu.alias }}
          {{ isActive(menu.alias) }}
          <button
               type="button"
               @click="setShow(!show)"
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
                    class="flex flex-row justify-between items-center w-full transition-all ease-linear text-start duration-150"
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
                    <svg
                         class="w-3 h-3 transition-transform duration-300 ease-out"
                         :class="show ? 'rotate-180' : 'rotate-0'"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 10 6"
                    >
                         <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                         />
                    </svg>
               </span>
          </button>
          <ul
               v-if="menu.children"
               class="space-y-2 mt-3 transition-all"
               :class="show ? '' : 'hidden'"
          >
               <li
                    v-for="(menuChild, key) in menu.children"
                    :key="key"
                    class="w-full"
               >
                    <router-link
                         v-if="menuChild.children == null"
                         @click="onClickMenu(menuChild.alias)"
                         :to="menuChild.path"
                         class="px-3 py-2 gap-2 flex flex-row items-center group w-full h-10 text-sm font-medium text-center rounded-lg transition-all duration-300 ease-out"
                         :class="{
                              'bg-tskmgmr-4': isActive(menuChild.alias),
                              'bg-transparent hover:bg-tskmgmr-4 delay-0': !isActive(
                                   menuChild.alias
                              )
                         }"
                    >
                         <img
                              :src="`/img/sidebar/${menuChild.icon}.svg`"
                              alt="icon"
                              class="h-full w-auto z-10 transition-all ease-linear"
                              :class="{
                                   'invert-0 delay-150': isActive(menuChild.alias),
                                   'invert group-hover:invert-0': !isActive(
                                        menuChild.alias
                                   )
                              }"
                         />
                         <span
                              class="transition-all ease-linear text-start duration-150"
                              :class="{
                                   'text-tskmgmr-1': isActive(menuChild.alias),
                                   'text-white group-hover:text-tskmgmr-1':
                                        !isActive(menuChild.alias),
                                   'show-menu-label': sidebarOpen,
                                   'hide-menu-label': !sidebarOpen
                              }"
                         >
                              {{ menuChild.label }}
                         </span>
                    </router-link>
               </li>
          </ul>
     </div>
</template>
<script>
import { useUtilities } from "~/composables/useUtilities.js";
import { ref, watch } from "vue";

export default {
     props: {
          menu: {
               type: Object,
               required: true
          }
     },
     setup: () => {
          const show = ref(false);

          const { menuActive, isActive, onClickMenu, sidebarOpen, onClickBurgerMenu } =
               useUtilities();

          const setShow = (status) => {
               if (!sidebarOpen.value) {
                    onClickBurgerMenu(true);
                    setTimeout(() => {
                         show.value = status;
                    }, 500);
               } else {
                    show.value = status;
               }
          };

          watch(sidebarOpen, (newVal) => {
               if (!newVal) {
                    show.value = false;
               }
          });

          watch(menuActive, (newVal) => {
               console.log(newVal);
               // if (newVal !== menu.alias) {
               //      show.value = false;
               // }
          });

          return {
               show,
               setShow,
               isActive,
               onClickMenu,
               sidebarOpen
          };
     }
};
</script>
