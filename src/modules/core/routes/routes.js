import DashboardLayout from "@/modules/core/views/Layout/DashboardLayout.vue";
import AuthLayout from "@/modules/core/views/Pages/AuthLayout.vue";
import NotFound from "@/modules/core/views/NotFoundPage.vue";
import cadastroPessoaRoute from "@/modules/cadastro-pessoa/router";
import pedidoRoute from "@/modules/pedido/router";
import planejamentoPedidoRoute from "@/modules/planejamento-pedido/router";

const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: DashboardLayout,
    meta: { requiresAuth: true },
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
      ...cadastroPessoaRoute,
      ...pedidoRoute,
      ...planejamentoPedidoRoute,
    ],
  },
  {
    path: "/Auth",
    component: AuthLayout,
    meta: { requiresAuth: false },
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
          import(
            /* webpackChunkName: "register" */ "../views/Pages/Register.vue"
          ),
      },
    ],
  },
  {
    path: "*",
    component: NotFound,
    meta: { requiresAuth: false },
  },
];

function addMeta(route) {
  if (route.meta && route.meta.requiresAuth) {
    if (route.children) {
      route.children.forEach((child) => {
        child.meta = { requiresAuth: true };
      });
    }
    return;
  }
}

// Adiciona a meta tag em todas as rotas
routes.forEach((route) => addMeta(route));

export default routes;
