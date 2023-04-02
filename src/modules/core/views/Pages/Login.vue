<template>
  <div id="login" class="background">
    <!-- Header -->

    <!-- Page content -->
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <!-- <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/github.svg"
                  /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/google.svg"
                  /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </b-card-header> -->
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Entre com suas credenciais</small>
              </div>
              <validation-observer ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit()">
                  <base-input
                    alternative
                    class="mb-3"
                    name="Email"
                    :rules="{ required: true, email: true }"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    v-model="username"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    name="Password"
                    :rules="{ required: true, min: 6 }"
                    prepend-icon="ni ni-lock-circle-open"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  >
                  </base-input>

                  <b-form-checkbox v-model="rememberMe"
                    >lembre de min</b-form-checkbox
                  >
                  <div class="text-center">
                    <base-button
                      type="primary"
                      native-type="submit"
                      class="my-4"
                      >Entrar</base-button
                    >
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <!-- <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/dashboard" class="text-light"
                ><small>Forgot password?</small></router-link
              >
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"
                ><small>Create new account</small></router-link
              >
            </b-col>
          </b-row> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import AuthService from "../../services/auth/api-auth";

export default {
  data() {
    return {
      username: "moises.lima@nexus-softwares.online",
      password: "Masterns@23",
      rememberMe: false,
    };
  },
  computed: {
    isFormValid() {
      return this.username && this.password;
    },
  },
  methods: {
    async handleSubmit() {
      if (!this.isFormValid) return console.log("vazio");
      try {
        await AuthService.login(this.username, this.password);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.background {
  background-color: #0a70b9 !important;
}
</style>
