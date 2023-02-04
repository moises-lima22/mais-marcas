<template>
  <div>
    <div
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
    >
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-8"></span>
        <!-- Header container -->
        <b-container fluid class="d-flex align-items-center"> </b-container>
      </b-container>
    </div>

    <b-container fluid class="mt--6">
      <b-row class="d-flex justify-content-center">
        <b-col xl="11" class="order-xl-1">
          <formulario-criar-editar-pedido />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import FormularioCriarEditarPedido from "../components/CadastroPedido/FormularioCriarEditarPedido.vue";

export default {
  name: "cadastro-pessoal",
  components: {
    FormularioCriarEditarPedido,
  },
};
</script>
<style></style>
