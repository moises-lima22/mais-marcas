<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <card-consulta-cadastro-pessoa />
    </base-header>

    <!--Main-->
    <b-container fluid class="mt--7" style="min-height: 700px">
      <card-listagem-pessoa />
    </b-container>
  </div>
</template>
<script>
import CardConsultaCadastroPessoa from "../components/ConsultaPessoa/CardConsultaCadastroPessoa.vue";
import CardListagemPessoa from "../components/ConsultaPessoa/CardListagemPessoa.vue";
import { mapActions } from "vuex";

export default {
  name: "consulta-cadastro-pessoa",
  components: {
    CardConsultaCadastroPessoa,
    CardListagemPessoa,
  },
  mounted() {},
  methods: {
    ...mapActions("cadastroPessoaModule", ["buscarPessoas"]),
  },
};
</script>
