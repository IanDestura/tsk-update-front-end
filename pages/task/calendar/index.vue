<template>
     <div>
          <Breadcrumb />
          <div class="flex flex-row gap-3">
               <div class="block w-8/12 p-3 bg-white rounded-lg shadow">
                    <FullCalendar :options="calendarOptions" />
               </div>
               <div class="block w-4/12 p-3 bg-white rounded-lg shadow"></div>
          </div>
     </div>
</template>
<script>
import { reactive, ref } from "vue";

import Breadcrumb from "~/components/breadcrumb/index.vue";

import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
     components: {
          Breadcrumb,
          FullCalendar // make the <FullCalendar> tag available
     },
     setup: () => {
          // const handleDateClick = (arg) => {
          //      alert('date click! ' + arg.dateStr)
          // }

          const eventGuid = ref(0);

          const handleDateSelect = (selectInfo) => {
               let title = prompt("Please enter a new title for your event");
               let calendarApi = selectInfo.view.calendar;

               calendarApi.unselect(); // clear date selection

               if (title) {
                    calendarApi.addEvent({
                         id: createEventId(),
                         title,
                         start: selectInfo.startStr,
                         end: selectInfo.endStr,
                         allDay: selectInfo.allDay
                    });
               }
          };

          const handleEventClick = (clickInfo) => {
               if (
                    confirm(
                         `Are you sure you want to delete the event '${clickInfo.event.title}'`
                    )
               ) {
                    clickInfo.event.remove();
               }
          };

          const handleEvents = (events) => {
               console.log(events);
          };

          function createEventId() {
               eventGuid.value = eventGuid.value + 1;
               return String(eventGuid.value);
          }

          const calendarOptions = reactive({
               plugins: [dayGridPlugin, interactionPlugin],
               initialView: "dayGridMonth",
               editable: true,
               selectable: true,
               selectMirror: true,
               dayMaxEvents: true,
               weekends: true,
               select: handleDateSelect,
               eventClick: handleEventClick,
               eventsSet: handleEvents
               // dateClick: handleDateClick,
               // events: [
               //      { title: 'event 1', date: '2024-1-01' },
               //      { title: 'event 2', date: '2024-31-02' }
               // ]
          });

          definePageMeta({
               layout: 'auth',
          })

          return {
               calendarOptions
          };
     }
};
</script>
