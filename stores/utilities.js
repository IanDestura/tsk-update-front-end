export const utilitiesStore = defineStore("utilities", {
     state: () => {
          return {
               menuActive: "",
               sidebarOpen: true
          };
     },
     actions: {
          setMenuActive(menu) {
               this.$patch((state) => {
                    state.menuActive = menu;
               });
          },
          setSidebarOpen(status) {
               this.$patch((state) => {
                    state.sidebarOpen = status;
               });
          }
     }
});
