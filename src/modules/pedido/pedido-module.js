import pedidoRoute from "@/modules/pedido/router";

export default class Pedido {
  install(routes) {
    for (const route of pedidoRoute) {
      routes[0].children.push(route);
    }
  }
}
