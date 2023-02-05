<template>
  <b-form @submit.prevent="updateProfile">
    <h6 class="heading-small text-muted mb-4">Dados do cliente</h6>

    <div class="pl-lg-4">
      <b-row class="m-0 mb-4">
        <b-col class="p-0">
          <div class="d-flex flex-column">
            <label for=""> Nome completo:</label>
            <b-form-input
              disabled
              type="text"
              label="Primeiro nome"
              placeholder="Primeiro nome"
              v-model="user.firstName"
            >
            </b-form-input>
          </div>
        </b-col>
        <div class="d-flex align-items-end pl-3">
          <base-button outline>
            <i class="fas fa-search"></i>
            <span>Selecionar cliente</span>
          </base-button>
        </div>
      </b-row>
      <b-row>
        <b-col lg="3">
          <label>Nome fantasia:</label>
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
        <b-col lg="2">
          <label class="m-0"> Telefone: </label>
          <p>(11) 2454-4550</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="3">
          <label class="m-0"> Celular: </label>
          <p>(11) 94526-1588</p>
        </b-col>

        <b-col lg="3">
          <label class="m-0"> Logradouro: </label>
          <p>Av. Pr. Luís Inácio Lula da Silva</p>
        </b-col>
        <b-col lg="2">
          <label class="m-0"> Número: </label>
          <p>13.22</p>
        </b-col>
        <b-col lg="4">
          <label class="m-0"> Bairro: </label>
          <p>Pr. Jair Messias Bolsonaro</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <label class="m-0"> Complemento: </label>
          <p>Próximo ao posto Ipiranga</p>
        </b-col>
        <b-col lg="3">
          <label class="m-0"> Cidade: </label>
          <p>Guarulhos</p>
        </b-col>
        <b-col lg="2">
          <label class="m-0"> Estado: </label>
          <p>São Paulo</p>
        </b-col>
      </b-row>
    </div>
  </b-form>
</template>
<script>
export default {
  name: "card-dados-cliente",
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
