const cadastroPessoaRoute = [
  {
    path: "consulta-cadastro-pessoa",
    name: "Cadastro Pessoa",
    component: () =>
      import(
        /* webpackChunkName: "consultaCadastroPessoa" */ "@/modules/cadastro-pessoa/views/ConsultaCadastroPessoa.vue"
      ),
  },
];

export default cadastroPessoaRoute;
