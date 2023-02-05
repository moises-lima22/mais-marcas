<template>
  <div>
    <card class="mb-4">
      <card-detalhes-pedido />
    </card>
    <card>
      <card-catalogo />
    </card>
  </div>
</template>
<script>
import CardDetalhesPedido from "../../CardDetalhesPedido.vue";
import CardCatalogo from "../CardCatalogo.vue";

export default {
  name: "step-itens-pedido",
  components: {
    CardDetalhesPedido,
    CardCatalogo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
