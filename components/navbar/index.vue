<template>
     <nav
          class="sticky top-0 w-full bg-slate-100 h-max border-b border-solid border-tskmgmr-5 bg-white transition-all duration-300 ease-in-out">
          <div class="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
               <div class="flex gap-4">
                    <button
                         @click="onClickBurgerMenu(!sidebarOpen)"
                         type="button"
                         class="inline-flex lg:hidden items-center p-2 w-10 h-10 justify-center text-sm text-tskmgmr-2 rounded-lg border border-solid border-tskmgmr-2 hover:scale-105 hover:bg-tskmgmr-2 hover:text-white transition-all duration-300 ease-in-out"
                    >
                         <span class="sr-only">Open main menu</span>
                         <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 17 14"
                         >
                              <path
                                   stroke="currentColor"
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M1 1h15M1 7h15M1 13h15"
                              />
                         </svg>
                    </button>
                    <!-- <div>
                         <h5
                              class="inline-flex items-center text-base font-semibold text-tskmgmr-2 overflow-hidden whitespace-nowrap"
                              id="drawer-label"
                         >
                              Welcome Back! John Doe
                         </h5>
                         <p class="text-xs"> Ready to dive in and get things done? </p>
                    </div> -->
               </div>

               <div class="flex items-center gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <p class="text-tskmgmr-2">Monday, October 24 2024</p>
                    <div>
                         <button
                              type="button"
                              class="flex text-sm bg-gray-800 border border-solid border-tskmgmr-3 rounded-full md:me-0 focus:ring-2 focus:ring-tskmgmr-3"
                              id="user-menu-button"
                              aria-expanded="false"
                              data-dropdown-toggle="user-dropdown"
                              data-dropdown-placement="bottom"
                         >
                              <span class="sr-only">Open user menu</span>
                              <img
                                   class="w-8 h-8 rounded-full"
                                   src="https://flowbite.com/docs/images/logo.svg"
                                   alt="user photo"
                              />
                         </button>
                         <!-- Dropdown menu -->
                         <div
                              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                              id="user-dropdown"
                         >
                              <div class="px-4 py-3">
                                   <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                   <span
                                        class="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                              </div>
                              <ul
                                   class="py-2"
                                   aria-labelledby="user-menu-button"
                              >
                                   <li>
                                        <a
                                             href="#"
                                             class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >Dashboard</a>
                                   </li>
                                   <li>
                                        <a
                                             href="#"
                                             class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >Settings</a>
                                   </li>
                                   <li>
                                        <a
                                             href="#"
                                             class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >Earnings</a>
                                   </li>
                                   <li>
                                        <a
                                             href="#"
                                             class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >Sign out</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     </nav>
</template>
<script>
import { useUtilities } from "~/composables/useUtilities.js";

export default {
     setup: () => {
          const { sidebarOpen, onClickBurgerMenu } = useUtilities();

          return {
               sidebarOpen,
               onClickBurgerMenu
          };
     }
};
</script>
