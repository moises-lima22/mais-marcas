<template>
  <card>
    <b-card-header class="p-0 d-flex">
      <b-col class="p-0">
        <h3>Parâmetros da consulta</h3>
      </b-col>
      <div class="ml-auto">
        <b-button
          class="shadow-none bg-transparent"
          size="sm"
          @click="novoCadastro()"
        >
          <div class="d-flex align-content-center">
            <span>Novo Cadastro</span>
            <i class="ni ni-fat-add" style="font-size: 20px"></i>
          </div>
        </b-button>
      </div>
    </b-card-header>
    <b-card-body class="pl-0 pr-0 pb-0">
      <b-row>
        <b-col lg="6">
          <base-input
            type="text"
            label="Número pedido"
            placeholder="Pesquise pelo número do pedido"
            clearableIcon
            v-model="input"
            @input="(v) => teste(v)"
          >
          </base-input>
        </b-col>
        <b-col lg="6">
          <base-input
            type="text"
            label="CPF/CNPJ"
            placeholder="Pesquise por CPF ou CNPJ"
            clearableIcon
            v-model="input"
            @input="(v) => teste(v)"
          >
          </base-input>
        </b-col>
      </b-row>
      <b-row class="m-0">
        <div class="ml-auto">
          <a href="#!" class="btn btn-sm">Limpar</a>
          <base-button size="sm">Consultar</base-button>
        </div>
      </b-row>
    </b-card-body>
  </card>
</template>
<script>
export default {
  name: "card-consulta-pedido",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    teste(v) {
      console.log(v);
    },
    novoCadastro() {
      this.$router.push({ name: "novo-pedido" });
      return;
    },
  },
  mounted() {},
};
</script>
<style scoped></style>
