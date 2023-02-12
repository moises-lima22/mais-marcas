<template>
  <b-form>
    <h6 class="heading-small text-muted mb-4">Detalhes do pedido</h6>

    <div class="pl-lg-4">
      <b-row>
        <b-col lg="2">
          <label class="m-0"> Pedido: </label>
          <p>0097/2023</p>
        </b-col>
        <b-col lg="3">
          <label>Nome cliente:</label>
          <p>Mais marcas</p>
        </b-col>
        <b-col lg="2">
          <label class="m-0"> CPF/CNPJ: </label>
          <p>333.111-198-03</p>
        </b-col>
        <b-col lg="4">
          <label>Email</label>
          <p>samantha.wilson@gmail.com</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="2">
          <label class="m-0"> Telefone: </label>
          <p>(11) 2454-4550</p>
        </b-col>
        <b-col lg="3">
          <label class="m-0"> Celular: </label>
          <p>(11) 94526-1588</p>
        </b-col>
      </b-row>
    </div>
  </b-form>
</template>
<script>
export default {
  name: "card-detalhes-pedido",
  data() {
    return {
      user: {
        email: "samantha.wilson@gmail.com",
        firstName: "Samantha",
        lastName: "Wilson",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "New York",
        country: "USA",
        postalCode: "",
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`,
        cpfCnpj: "333.111-198-03",
      },
    };
  },
  methods: {},
};
</script>
<style></style>
