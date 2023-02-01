<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <card-consulta-cadastro-pessoa />
    </base-header>

    <!--Main-->
    <b-container fluid class="mt--7" style="min-height: 700px"> </b-container>
  </div>
</template>
<script>
import CardConsultaCadastroPessoa from "../components/CardConsultaCadastroPessoa.vue";

export default {
  name: "CadastroPessoa",
  components: {
    CardConsultaCadastroPessoa,
  },
};
</script>
