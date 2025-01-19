<template>
     <!-- classess: add exclamation -->
     <div
          id="alert-1"
          class="flex items-center p-4 mb-3 text-white rounded-lg bg-tskmgmr-3 bg"
          :class="[
               classess, 
               transitionClass
          ]"
          role="alert"
     >
          <div class="flex flex-row gap-3 items-center">
               <div v-if="!noIcon">
                    <slot
                         v-if="$slots.icon"
                         name="icon"
                    ></slot>
                    <svg
                         v-else
                         class="flex-shrink-0 w-5 h-5"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                    >
                         <path
                              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
               </div>
               <slot
                    v-if="$slots.label"
                    name="label"
               ></slot>
               <div
                    v-else
                    class="text-sm"
               >
                    Its Monday! Please export your task for last week and submit
                    to your team leader.
               </div>
          </div>
          <button
               @click="setClose"
               type="button"
               class="ms-auto -mx-1.5 -my-1.5 bg-tskmgmr-2 text-white rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8"
               aria-label="Close"
          >
               <span class="sr-only">Close</span>
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
          </button>
     </div>
</template>
<script>
export default {
     props: {
          classess: {
               type: String,
          },
          noIcon: {
               type: Boolean,
               default: false,
          },
     },
     setup: () => {
          const open = ref(true);

          const transitionClass = ref('');

          const setClose = () => {
               open.value = false
          }

          watch(open, (newVal) => {
               if(!newVal) {
                    transitionClass.value = 'transition-opacity duration-300 ease-out opacity-0'
                    setTimeout(() => {
                         transitionClass.value = transitionClass.value + " hidden"
                    }, 300);
               }
          });

          return {
               open,
               transitionClass,
               setClose
          };
     }
};
</script>
