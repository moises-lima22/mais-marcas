<template>
  <div>
    <card class="mb-4">
      <card-detalhes-pedido />
    </card>
    <card>
      <card-resumo-itens-pedido />
    </card>
  </div>
</template>
<script>
import CardDetalhesPedido from "../../CardDetalhesPedido.vue";
import CardResumoItensPedido from "../CardResumoItensPedido.vue";

export default {
  name: "step-resumo-pedido",
  components: {
    CardDetalhesPedido,
    CardResumoItensPedido,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
