<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">Dados</h3>
      </b-col>
    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">Informações do usuário</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <label for=""> Primeiro nome </label>
            <b-form-input
              type="text"
              label="Primeiro nome"
              placeholder="Primeiro nome"
              v-model="person.firstName"
              trim
            >
            </b-form-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Último nome"
              placeholder="Último nome"
              v-model="person.lastName"
            >
            </base-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <base-input
              type="email"
              label="Email:"
              placeholder="Informe um email"
              v-model="person.email"
              required
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <label class="m-0"> Perfil: </label>

            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                name="flavour-1"
              ></b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="CPF/CNPJ"
              placeholder="Informe o CPF ou CNPJ"
              v-model="person.cpfCnpj"
              v-mask="['###.###.###-##', '##.###.###/####-##']"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>

      <hr class="my-4" />

      <!-- Dados bancários -->
      <h6 class="heading-small text-muted mb-4">Dados bancários</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Nome do banco"
              placeholder="Nome do banco"
              v-model="person.bankName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Tipo da conta"
              placeholder="Tipo da conta"
              v-model="person.accountType"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Número da agência"
              placeholder="Número da agência"
              v-model="person.agencyNumber"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Número da conta"
              placeholder="Número da conta"
              v-model="person.accountNumber"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>

      <hr class="my-4" />

      <!-- Informações de contato -->
      <h6 class="heading-small text-muted mb-4">Informações de contato</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="2">
            <base-input
              type="text"
              label="CEP"
              placeholder="Informe o CEP"
              v-model="person.cep"
              required
              v-mask="'#####-###'"
            >
            </base-input>
          </b-col>
          <b-col md="5">
            <base-input
              type="text"
              label="Logradouro"
              placeholder="Rua/Avenida"
              filled
              disabled
            >
            </base-input>
          </b-col>
          <b-col md="2">
            <base-input
              type="text"
              label="Número"
              placeholder="Informe o número."
              required
            >
            </base-input>
          </b-col>
          <b-col md="3">
            <base-input
              type="text"
              label="Bairro"
              placeholder="Informe o bairro."
              filled
              disabled
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="3">
            <base-input
              type="text"
              label="Localidade"
              placeholder="Informe a localidade"
              filled
              disabled
            >
            </base-input>
          </b-col>
          <b-col lg="1">
            <base-input type="text" label="UF" filled disabled> </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Celular"
              placeholder="Informe o celular"
              v-model="person.cellPhone"
              v-mask="'(##) #####-####'"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Telefone"
              placeholder="Informe telefone"
              v-model="person.phone"
              v-mask="'(##) ####-####'"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>

      <hr class="my-4" />
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">Bloco de nota</h6>
      <div class="pl-lg-4">
        <b-form-group
          label="Nota"
          label-class="form-control-label"
          class="mb-0"
          label-for="about-form-textaria"
        >
          <b-form-textarea
            rows="4"
            id="about-form-textaria"
            placeholder="Espaço livre ..."
            v-model="person.note"
          ></b-form-textarea>
        </b-form-group>
      </div>
      <b-row class="mt-4" slot="footer">
        <b-col cols="12" class="text-right">
          <a href="#!" class="btn" @click="goBack()">Voltar</a>
          <base-button>Salvar</base-button>
        </b-col>
      </b-row>
    </b-form>
  </card>
</template>
<script>
import {
  savePerson,
  getPersons,
  searchCep,
} from "@/modules/cadastro-pessoa/service/personService";

export default {
  name: "formulario-criar-editar-pessoa",
  data() {
    return {
      person: {
        firstName: "",
        lastName: "",
        email: "",
        isClient: null,
        isSeller: null,
        isEmployee: null,
        isWorkshop: null,
        cpfOrCnpj: "",
        cellNumber: "",
        phone: "",
        bankName: "",
        accountNumber: "",
        cep: "",
        numberAddress: "",
        note: "",
      },
      selected: [], // Must be an array reference!
      options: [
        { text: "Cliente", value: "cliente" },
        { text: "Vendedor", value: "vendedor" },
        { text: "Colaborador", value: "colaborador" },
        { text: "Oficina", value: "oficina" },
      ],
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    async updateProfile() {
      console.log(this.$$router);

      // await savePerson(personData);

      const response = await getPersons();
      console.log("response", response);
    },
    async searchCep(cep) {
      const response = await searchCep(cep);
    },
    goBack() {
      this.$router.push({ name: "consulta-pessoa" });
    },
  },
};
</script>
