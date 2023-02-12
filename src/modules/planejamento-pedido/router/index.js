const planejamentoPedidoRoute = [
  {
    path: "consulta-planejamento-pedido",
    name: "consulta-planejamento-pedido",
    component: () =>
      import(
        /* webpackChunkName: "consultaPlanejamentoPedido" */ "@/modules/planejamento-pedido/views/ConsultaPlanejamentoPedido.vue"
      ),
  },
  {
    path: "planejamento-pedido",
    name: "planejamento-pedido",
    component: () =>
      import(
        /* webpackChunkName: "planejamentoPedido" */ "@/modules/planejamento-pedido/views/PlanejamentoPedido.vue"
      ),
  },
];

export default planejamentoPedidoRoute;
