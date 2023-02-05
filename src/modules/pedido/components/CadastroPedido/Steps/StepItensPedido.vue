<template>
  <div>
    <card class="mb-4">
      <card-detalhes-pedido />
    </card>
    <card>
      <card-adicionar-material />
    </card>
  </div>
</template>
<script>
import CardDetalhesPedido from "../../CardDetalhesPedido.vue";
import CardAdicionarMaterial from "../CardAdicionarMaterial.vue";

export default {
  name: "step-itens-pedido",
  components: {
    CardDetalhesPedido,
    CardAdicionarMaterial,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
