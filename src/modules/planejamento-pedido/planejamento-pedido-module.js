import planejamentoPedidoRoute from "@/modules/planejamento-pedido/router";

export default class PlanejamentoPedidoRoute {
  install(routes) {
    for (const route of planejamentoPedidoRoute) {
      routes[0].children.push(route);
    }
  }
}
