<template>
     <div
          class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"
     >
          <div
               class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
          >
               <ProjectListSearch />
               <div
                    class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
               >
                    <ProjectListAdd />
                    <ProjectListActions />
               </div>
          </div>
          <ProjectListTable />
          <ProjectListPagination />
     </div>
</template>
<script>
import ProjectListSearch from "./components/search.vue";
import ProjectListTable from "./components/table.vue";
import ProjectListPagination from "./components/pagination.vue";
import ProjectListAdd from "./components/add.vue";
import ProjectListActions from "./components/actions.vue";

export default {
     components: {
          ProjectListSearch,
          ProjectListTable,
          ProjectListPagination,
          ProjectListAdd,
          ProjectListActions
     },
     setup: () => {
          return {};
     }
};
</script>
