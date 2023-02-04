<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <card-consulta-pedido />
    </base-header>

    <!--Main-->
    <b-container fluid class="mt--7" style="min-height: 700px">
      <card-listagem-pedido />
    </b-container>
  </div>
</template>
<script>
import CardConsultaPedido from "../components/ConsultaPedido/CardConsultaPedido.vue";
import CardListagemPedido from "../components/ConsultaPedido/CardListagemPedido.vue";

export default {
  name: "consulta-pedido",
  components: {
    CardConsultaPedido,
    CardListagemPedido,
  },
};
</script>
