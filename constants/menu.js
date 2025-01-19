// export const menus = [
//      {
//           label: 'Dashboard',
//           icon: 'dashboard',
//           alias: 'dashboard',
//           path: 'dashboard',
//      },
//      {
//           label: 'Task Management',
//           icon: 'task',
//           alias: 'task',
//           path: '',
//           children: [
//                {
//                     label: 'Create Task',
//                     icon: 'add',
//                     alias: 'task-create',
//                     path: 'task/create',
//                },
//                {
//                     label: 'Task List',
//                     icon: 'table',
//                     alias: 'task-list',
//                     path: 'task/list',
//                }
//           ]
//      },
//      {
//           label: 'Project Management',
//           icon: 'project',
//           alias: 'project',
//           path: 'project',
//      },
//      {
//           label: 'Settings',
//           icon: 'settings',
//           alias: 'settings',
//           path: '',
//           children: [
//                {
//                     label: 'Export/Import Settings',
//                     icon: 'export-import',
//                     alias: 'export-import',
//                     path: 'settings/export-import',
//                },
//                {
//                     label: 'Account Settings',
//                     icon: 'account',
//                     alias: 'account',
//                     path: 'settings/account',
//                }
//           ]
//      },
//      {
//           label: 'Logout',
//           icon: 'logout',
//           alias: 'logout',
//           path: 'logout',
//      },

// ];

export const menus = [
     {
          label: "Dashboard",
          icon: "dashboard",
          alias: "dashboard",
          path: "/dashboard"
     },
     {
          label: "Task Management",
          icon: "task",
          alias: "task",
          path: "",
          children: [
               {
                    label: "Calendar",
                    icon: "dots",
                    alias: "task-calendar",
                    path: "/task/calendar"
               },
               {
                    label: "Task List",
                    icon: "dots",
                    alias: "task-list",
                    path: "/task/list"
               }
          ]
     },
     {
          label: "Projects",
          icon: "project",
          alias: "project",
          path: "/project"
     },
     {
          label: "Settings",
          icon: "settings",
          alias: "settings",
          path: "",
          children: [
               {
                    label: "Export/Import Settings",
                    icon: "dots",
                    alias: "export-import",
                    path: "/settings/export-import"
               },
               {
                    label: "Account Settings",
                    icon: "dots",
                    alias: "account",
                    path: "/settings/account"
               }
          ]
     },
];
