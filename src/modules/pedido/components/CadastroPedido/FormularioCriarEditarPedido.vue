<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">Dados do pedido</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <a href="#!" @click="goBack()" class="btn btn-sm">Voltar</a>
        <base-button size="sm">Salvar</base-button>
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
              v-model="user.firstName"
              trim
            >
            </b-form-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Último nome"
              placeholder="Último nome"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <base-input
              type="email"
              label="Email:"
              placeholder="mike@email.com"
              v-model="user.email"
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
              v-model="user.cpfCnpj"
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
              v-model="user.bankName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Tipo da conta"
              placeholder="Tipo da conta"
              v-model="user.accountType"
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
              v-model="user.agencyNumber"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Número da conta"
              placeholder="Número da conta"
              v-model="user.accountNumber"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>

      <hr class="my-4" />

      <h6 class="heading-small text-muted mb-4">Informações de contato</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="12">
            <base-input
              type="text"
              label="Endereço"
              placeholder="Endereço residencial"
              v-model="user.address"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Telefone"
              placeholder="Telefone (formato: (XX) XXXX-XXXX)"
              v-model="user.phone"
              :mask="['(##) ####-####']"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Celular"
              placeholder="Celular (formato: (XX) XXXXX-XXXX)"
              v-model="user.cellPhone"
              :mask="['(##) #####-####']"
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
          ></b-form-textarea>
        </b-form-group>
      </div>
      <b-row class="mt-4" slot="footer">
        <b-col cols="12" class="text-right">
          <a href="#!" class="btn btn-sm" @click="goBack()">Voltar</a>
          <base-button size="sm">Salvar</base-button>
        </b-col>
      </b-row>
    </b-form>
  </card>
</template>
<script>
export default {
  name: "formulario-criar-editar-pedido",
  data() {
    return {
      user: {
        company: "Creative Code Inc.",
        username: "michael23",
        email: "",
        firstName: "Mike",
        lastName: "Andrew",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "New York",
        country: "USA",
        postalCode: "",
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`,
        cpfCnpj: "333.111-198-03",
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
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    goBack() {
      this.$router.push({ name: "consulta-pedido" });
    },
  },
};
</script>
<style></style>
