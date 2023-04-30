<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">Dados</h3>
      </b-col>
    </b-row>

    <b-form>
      <validation-observer ref="formCadastroPessoa">
        <h6 class="heading-small text-muted mb-4">Informações da pessoa</h6>

        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <base-input
                type="text"
                required
                label="Primeiro nome:"
                placeholder="Primeiro nome"
                v-model.trim="person.firstName"
                name="firstName"
              >
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input
                type="text"
                required
                label="Último nome:"
                placeholder="Último nome"
                v-model.trim="person.lastName"
                name="lastName"
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
                name="email"
                required
              >
              </base-input>
            </b-col>
            <b-col lg="6">
              <label class="m-0"> Perfil: </label>

              <b-row class="m-0">
                <b-col class="p-0">
                  <label> Cliente </label>
                  <b-form-checkbox name="isClient" v-model="person.isClient">
                  </b-form-checkbox>
                </b-col>
                <b-col class="p-0">
                  <label> Vendedor </label>
                  <b-form-checkbox name="isSeller" v-model="person.isSeller">
                  </b-form-checkbox>
                </b-col>
                <b-col class="p-0">
                  <label> Colaborador </label>
                  <b-form-checkbox
                    name="isEmployee"
                    v-model="person.isEmployee"
                  >
                  </b-form-checkbox>
                </b-col>
                <b-col class="p-0">
                  <label> Oficina </label>
                  <b-form-checkbox
                    name="isWorkshop"
                    v-model="person.isWorkshop"
                  >
                  </b-form-checkbox>
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row>
            <b-col lg="6">
              <base-input
                type="text"
                label="CPF/CNPJ:"
                placeholder="Informe o CPF ou CNPJ"
                v-model="person.cpfCnpj"
                name="cpfCnpj"
                v-mask="['###.###.###-##', '##.###.###/####-##']"
                required
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
                label="CEP:"
                placeholder="Informe o CEP"
                v-model="person.cep"
                name="cep"
                required
                v-mask="'#####-###'"
                @change="searchCep"
              >
              </base-input>
            </b-col>
            <b-col md="5">
              <base-input
                name="logradouro"
                type="text"
                label="Logradouro:"
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
                label="Número:"
                placeholder="Informe o número."
                required
                v-model.trim="person.numberAddress"
                name="numberAddress"
              >
              </base-input>
            </b-col>
            <b-col md="3">
              <base-input
                type="text"
                label="Bairro:"
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
                label="Localidade:"
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
                label="UF:"
                filled
                disabled
                :value="address.uf"
              >
              </base-input>
            </b-col>
            <b-col lg="4">
              <base-input
                type="text"
                label="Celular:"
                placeholder="Informe o celular"
                v-model="person.cellNumber"
                name="cellNumber"
                v-mask="'(##) #####-####'"
              >
              </base-input>
            </b-col>
            <b-col lg="4">
              <base-input
                type="text"
                label="Telefone:"
                placeholder="Informe telefone"
                v-model="person.phone"
                name="phone"
                v-mask="'(##) ####-####'"
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
                label="Nome do banco:"
                placeholder="Nome do banco"
                v-model.trim="person.bankName"
                name="bankName"
              >
              </base-input>
            </b-col>
            <b-col lg="6">
              <label for="tipoConta">Tipo de Conta:</label>
              <b-form-select
                id="tipoConta"
                v-model="person.bankAccountType"
                name="bankAccountType"
                :options="bankAccountTypes"
              >
              </b-form-select>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="6">
              <base-input
                type="text"
                label="Número da agência:"
                placeholder="Número da agência"
                v-model="person.bankAgencyNumber"
                name="bankAgencyNumber"
              >
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input
                type="text"
                label="Número da conta:"
                placeholder="Número da conta"
                v-model="person.bankAccountNumber"
                name="bankAccountNumber"
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
            label="Nota:"
            label-class="form-control-label"
            class="mb-0"
            label-for="about-form-textaria"
          >
            <b-form-textarea
              rows="4"
              id="about-form-textaria"
              placeholder="Espaço livre ..."
              v-model.trim="person.note"
              name="note"
            ></b-form-textarea>
          </b-form-group>
        </div>
      </validation-observer>
      <b-row class="mt-4" slot="footer">
        <b-col cols="12" class="text-right">
          <a class="btn" name="btnVoltar" @click="goBack()">Voltar</a>
          <b-button
            name="btnPersonSave"
            variant="primary"
            @click.prevent="saveOrUpdatePerson"
          >
            Salvar
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </card>
</template>
<script>
import { mapActions } from "vuex";
import {
  updatePerson,
  savePerson,
  searchCep,
} from "@/modules/cadastro-pessoa/service/personService";

export default {
  name: "formulario-criar-editar-pessoa",
  data() {
    return {
      person: {
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        isClient: null,
        isSeller: null,
        isEmployee: null,
        isWorkshop: null,
        cpfCnpj: null,
        cellNumber: null,
        phone: null,
        bankName: null,
        bankAccountNumber: null,
        bankAgencyNumber: null,
        bankAccountType: null,
        cep: null,
        numberAddress: null,
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
    ...mapActions("coreModule", ["startLoading", "dismissLoading"]),
    async saveOrUpdatePerson() {
      const isValid = await this.$refs.formCadastroPessoa.validate();

      if (!isValid) {
        this.$notify.warning("Informe os campos obrigatórios");
        return;
      }

      this.startLoading();

      const response = this.person.id
        ? await updatePerson(this.person)
        : await savePerson(this.person);

      if (response.hasError) {
        this.$notify.error("Não foi possível salvar o cadastro");
        this.dismissLoading();
        return;
      }
      this.$notify.success("Cadastro salvo com sucesso");
      this.dismissLoading();
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
