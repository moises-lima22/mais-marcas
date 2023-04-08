<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">Dados</h3>
      </b-col>
    </b-row>

    <b-form>
      <h6 class="heading-small text-muted mb-4">Informações do usuário</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <label for=""> Primeiro nome </label>
            <b-form-input
              type="text"
              label="Primeiro nome"
              placeholder="Primeiro nome"
              v-model.trim="person.firstName"
            >
            </b-form-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Último nome"
              placeholder="Último nome"
              v-model.trim="person.lastName"
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
              v-model.trim="person.email"
              required
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <label class="m-0"> Perfil: </label>

            <b-row class="m-0">
              <b-col class="p-0">
                <label> Cliente </label>
                <b-form-checkbox v-model="person.isClient"> </b-form-checkbox>
              </b-col>
              <b-col class="p-0">
                <label> Vendedor </label>
                <b-form-checkbox v-model="person.isSeller"> </b-form-checkbox>
              </b-col>
              <b-col class="p-0">
                <label> Colaborador </label>
                <b-form-checkbox v-model="person.isEmployee"> </b-form-checkbox>
              </b-col>
              <b-col class="p-0">
                <label> Oficina </label>
                <b-form-checkbox v-model="person.isWorkshop"> </b-form-checkbox>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="CPF/CNPJ"
              placeholder="Informe o CPF ou CNPJ"
              v-model="person.cpfOrCnpj"
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
              v-model.trim="person.bankName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <label for="tipoConta">Tipo de Conta:</label>
            <b-form-select
              id="tipoConta"
              v-model="person.bankAccountType"
              :options="bankAccountTypes"
            >
            </b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Número da agência"
              placeholder="Número da agência"
              v-model="person.bankAgencyNumber"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Número da conta"
              placeholder="Número da conta"
              v-model="person.bankAccountNumber"
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
              @change="searchCep"
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
              :value="address.logradouro"
            >
            </base-input>
          </b-col>
          <b-col md="2">
            <base-input
              type="text"
              label="Número"
              placeholder="Informe o número."
              required
              v-model="person.addressNumber"
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
              :value="address.bairro"
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
              :value="address.localidade"
            >
            </base-input>
          </b-col>
          <b-col lg="1">
            <base-input
              type="text"
              label="UF"
              filled
              disabled
              :value="address.uf"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Celular"
              placeholder="Informe o celular"
              v-model="person.cellNumber"
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
            v-model.trim="person.note"
          ></b-form-textarea>
        </b-form-group>
      </div>
      <b-row class="mt-4" slot="footer">
        <b-col cols="12" class="text-right">
          <a href="#!" class="btn" @click="goBack()">Voltar</a>
          <b-button variant="primary" @click.prevent="updateProfile">
            Salvar
          </b-button>
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
        firstName: null,
        lastName: null,
        email: null,
        isClient: null,
        isSeller: null,
        isEmployee: null,
        isWorkshop: null,
        cpfOrCnpj: null,
        cellNumber: null,
        phone: null,
        bankName: null,
        bankAccountNumber: null,
        bankAgencyNumber: null,
        bankAccountType: null,
        cep: null,
        addressNumber: null,
        note: null,
      },
      address: {
        cep: null,
        logradouro: null,
        complemento: null,
        bairro: null,
        localidade: null,
        uf: null,
      },
      bankAccountTypes: [
        {
          value: null,
          text: "Selecione uma conta",
        },
        {
          value: "CHECKING",
          text: "Corrente",
        },
        { value: "SAVINGS", text: "Poupança" },
        { value: "SALARY", text: "Salário" },
        { value: "INVESTMENT", text: "Investimento" },
      ],
    };
  },
  methods: {
    async updateProfile() {
      console.log(this.person);
      // await savePerson(personData);

      // const response = await getPersons();
      // console.log("response", response);
    },
    async searchCep() {
      const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

      if (!cepRegex.test(this.person.cep)) {
        this.$notify.warning("CEP inválido");
        return;
      }

      const response = await searchCep(this.person.cep);

      if (response.hasError) {
        this.$notify.warning("Não encontramos o cep digitado");
        return;
      }

      const { data } = response.content;

      if (data.hasOwnProperty("erro")) {
        this.$notify.warning("Não encontramos o cep digitado");
        return;
      }

      this.address = response.content.data;
    },
    goBack() {
      this.$router.push({ name: "consulta-pessoa" });
    },
  },
};
</script>
