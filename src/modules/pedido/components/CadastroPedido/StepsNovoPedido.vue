<template>
  <card>
    <b-row class="d-flex justify-content-center">
      <b-col cols="12">
        <el-steps
          :active="step"
          class="mb-3"
          align-center
          finish-status="success"
        >
          <el-step title="Dados do pedido"> </el-step>
          <el-step title="Itens"></el-step>
          <el-step title="Resumo"></el-step>
        </el-steps>
      </b-col>
    </b-row>
    <step-dados-pedido v-if="step === 0" />
    <b-row slot="footer">
      <b-col cols="12" class="text-right">
        <a href="#!" class="btn btn-sm" @click="goBack()">Voltar</a>
        <base-button size="sm" @click="next()">Avancar</base-button>
      </b-col>
    </b-row>
  </card>
</template>
<script>
import StepDadosPedido from "./Steps/StepDadosPedido.vue";

export default {
  name: "steps-novo-pedido",
  components: { StepDadosPedido },
  data() {
    return {
      user: {
        company: "Creative Code Inc.",
        username: "michael23",
        email: "",
        firstName: "Mike",
        lastName: "Andrew",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "New York",
        country: "USA",
        postalCode: "",
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`,
        cpfCnpj: "333.111-198-03",
      },
      selected: [], // Must be an array reference!
      options: [
        { text: "Cliente", value: "cliente" },
        { text: "Vendedor", value: "vendedor" },
        { text: "Colaborador", value: "colaborador" },
        { text: "Oficina", value: "oficina" },
      ],
      step: 0,
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    goBack() {
      this.$router.push({ name: "consulta-pedido" });
    },
    next() {
      if (this.step++ > 2) this.step = 0;
    },
  },
};
</script>
<style></style>
