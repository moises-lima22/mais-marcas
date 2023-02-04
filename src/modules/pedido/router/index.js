const cadastroPedidoRoute = [
  {
    path: "consulta-pedido",
    name: "consulta-pedido",
    component: () =>
      import(
        /* webpackChunkName: "consultaPedido" */ "@/modules/pedido/views/ConsultaPedido.vue"
      ),
  },
  {
    path: "cadastro-pedido",
    name: "novo-pedido",
    component: () =>
      import(
        /* webpackChunkName: "cadastroPedido" */ "@/modules/pedido/views/CadastroPedido.vue"
      ),
  },
];

export default cadastroPedidoRoute;
