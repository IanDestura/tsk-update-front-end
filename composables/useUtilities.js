import { computed } from "vue";

import { utilitiesStore } from "~/stores/utilities";

export const useUtilities = () => {
     const useUtilitiesStore = utilitiesStore();

     const menuActive = computed(() => {
          return useUtilitiesStore.menuActive;
     });

     const sidebarOpen = computed(() => {
          return useUtilitiesStore.sidebarOpen;
     });

     const isActive = (navigation) => {
          if (
               menuActive.value == navigation ||
               menuActive.value.indexOf(navigation) == 0
          ) {
               return true;
          }
          return false;
     };

     const onClickMenu = (menu) => {
          useUtilitiesStore.setMenuActive(menu);
     };

     const onClickBurgerMenu = (status) => {
          useUtilitiesStore.setSidebarOpen(status);
     };

     return {
          menuActive,
          isActive,
          onClickMenu,
          sidebarOpen,
          onClickBurgerMenu
     };
};
