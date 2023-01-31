import cadastroPessoaRoute from "@/modules/cadastro-pessoa/router";
import routes from "../core/routes/routes";

export default class CadastroPessoa {
  install() {
    for (const route of cadastroPessoaRoute) {
      routes[0].children.push(route);
    }
  }
}
