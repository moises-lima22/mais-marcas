const cadastroPessoaRoute = [
  {
    path: "cadastro-pessoa",
    name: "cadastroPessoa",
    component: () =>
      import(
        /* webpackChunkName: "cadastroPessoa" */ "@/modules/cadastro-pessoa/views/cadastroPessoa"
      ),
  },
];

export default cadastroPessoaRoute;
