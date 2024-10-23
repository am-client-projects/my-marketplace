import { Item, AllRoles } from "@helpers/index";

export const navigation: Item[] = [
  {
    page: "Page1",
    name: "User Management",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-users",
    current: false,
    roles: [AllRoles.NAVIGATOR],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Roles",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab3",
        name: "Groups",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab4",
        name: "Api Keys",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab5",
        name: "Policies",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab6",
        name: "Activity Logs",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab7",
        name: "Invite",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page2",
    name: "Booking & Scheduling",
    icon: "fa-solid fa-chart-line", // chart-line, chart-pie, chart-area
    current: false,
    roles: [AllRoles.NAVIGATOR],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Model",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab3",
        name: "Training",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab4",
        name: "Inference",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab5",
        name: "Evaluation",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },

  // {
  //   name: "Tenants",
  //   icon: "fa-solid fa-house-user", // house-user, building-user, users-gear, users-rectangle, users-viewfinder, users-between-line
  //   current: false,
  //   roles: [AllRoles.SUPER_ADMIN],
  //   items: [
  //     { name: "Overview", current: true, icon: "", items: [] },
  //     { name: "Onboard", current: true, icon: "", items: [] },
  //   ],
  // },
  // {
  //   name: "Calendar",
  //   icon: "fa-regular fa-calendar", // https://fontawesome.com/search?q=calendar&o=a&m=free
  //   current: false,
  //   items: [
  //     {
  //       name: "Team 1",
  //       icon: "fa-solid fa-chart-line",
  //       current: true,
  //       items: [],
  //     },
  //   ],
  // },
];

export const user_navigation = [
  {
    name: "Profile",
    icon: "fa-regular fa-user",
  },
  {
    name: "Preferences",
    icon: "fa-solid fa-sliders",
  },
];
