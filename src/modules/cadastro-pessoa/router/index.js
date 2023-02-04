const cadastroPessoaRoute = [
  {
    path: "consulta-cadastro-pessoa",
    name: "consulta-pessoa",
    component: () =>
      import(
        /* webpackChunkName: "consultaCadastroPessoa" */ "@/modules/cadastro-pessoa/views/ConsultaCadastroPessoa.vue"
      ),
  },
  {
    path: "cadastro-pessoa",
    name: "novo-cadastro-pessoa",
    component: () =>
      import(
        /* webpackChunkName: "cadastroPessoa" */ "@/modules/cadastro-pessoa/views/CadastroPessoa.vue"
      ),
  },
];

export default cadastroPessoaRoute;
