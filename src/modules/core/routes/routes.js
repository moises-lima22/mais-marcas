import DashboardLayout from "@/modules/core/views/Layout/DashboardLayout.vue";
import AuthLayout from "@/modules/core/views/Pages/AuthLayout.vue";
import NotFound from "@/modules/core/views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
      },
      {
        path: "icons",
        name: "icons",
        component: () =>
          import(/* webpackChunkName: "icons" */ "../views/Icons.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/Pages/UserProfile.vue"
          ),
      },
      {
        path: "maps",
        name: "maps",
        component: () =>
          import(/* webpackChunkName: "maps" */ "../views/GoogleMaps.vue"),
      },
      {
        path: "tables",
        name: "tables",
        component: () =>
          import(/* webpackChunkName: "tables" */ "../views/RegularTables.vue"),
      },
    ],
  },
  {
    path: "/Auth",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/Pages/Login.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "register" */ "../views/Pages/Register.vue"),
      },
    ],
  },
  { path: "", component: NotFound },
];

export default routes;
