<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <card-consulta-cadastro-pessoa @consultar="getPersons" />
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
import { getPersons } from "@/modules/cadastro-pessoa/service/personService";

export default {
  name: "consulta-cadastro-pessoa",
  components: {
    CardConsultaCadastroPessoa,
    CardListagemPessoa,
  },
  mounted() {
    this.getPersons();
  },
  methods: {
    ...mapActions("coreModule", ["startLoading", "dismissLoading"]),
    ...mapActions("cadastroPessoaModule", ["buscarPessoas"]),
    async getPersons() {
      this.startLoading();

      const response = await this.buscarPessoas();

      if (response.hasError) {
        this.$notify.error("Não foi possível buscar o cadastro de pessoas");
        this.dismissLoading();
        return;
      }
      this.dismissLoading();
    },
    teste(v) {
      console.log(v);
    },
    novoCadastro() {
      this.$router.push({ name: "novo-cadastro-pessoa" });
      return;
    },
  },
};
</script>
