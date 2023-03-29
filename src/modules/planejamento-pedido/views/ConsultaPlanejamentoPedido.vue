<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <card-consulta-planejamento-pedido />
    </base-header>

    <!--Main-->
    <b-container fluid class="mt--7" style="min-height: 700px">
      <card-listagem-pedido />
    </b-container>
  </div>
</template>
<script>
import CardConsultaPlanejamentoPedido from "../components/ConsultaPlanejamentoPedido/CardConsultaPlanejamentoPedido.vue";
import CardListagemPedido from "../components/ConsultaPlanejamentoPedido/CardListagemPedido.vue";

export default {
  name: "consulta-planejamento-pedido",
  components: {
    CardConsultaPlanejamentoPedido,
    CardListagemPedido,
  },
};
</script>
