import cadastroPessoaRoute from "@/modules/cadastro-pessoa/router";
export default class CadastroPessoa {
  install(routes) {
    for (const route of cadastroPessoaRoute) {
      routes[0].children.push(route);
    }
  }
}
