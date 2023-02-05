<template>
  <card>
    <!-- <card-dados-cliente /> -->
    <!-- <hr class="my-4" /> -->
    <!-- <card-dados-vendedor /> -->
    <card-detalhes-pedido />
  </card>
</template>
<script>
import CardDadosCliente from "../../CardDadosCliente.vue";
import CardDadosVendedor from "../../CardDadosVendedor.vue";
import CardDetalhesPedido from "../../CardDetalhesPedido.vue";

export default {
  name: "step-itens-pedido",
  components: {
    CardDadosCliente,
    CardDadosVendedor,
    CardDetalhesPedido,
  },
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
      active: 0,
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
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>
<style></style>
