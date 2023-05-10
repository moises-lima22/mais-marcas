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
              <validation-observer ref="formLogin">
                <b-form>
                  <base-input
                    class="mb-3"
                    required
                    name="Email"
                    :rules="{ email: true }"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    v-model="username"
                  >
                  </base-input>

                  <base-input
                    class="mb-3"
                    name="Password"
                    required
                    :rules="{ required: true, min: 6 }"
                    prepend-icon="ni ni-lock-circle-open"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  >
                  </base-input>

                  <div class="text-center">
                    <el-button
                      type="primary"
                      :loading="loadingButtom"
                      @click="handleSubmit()"
                    >
                      Entrar
                    </el-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
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
      // username: null,
      // password: null,
      username: "moises.lima@nexus-softwares.online",
      password: "Masterns@23",
      rememberMe: false,
      loadingButtom: false,
    };
  },
  computed: {
    isFormValid() {
      return this.username && this.password;
    },
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$refs.formLogin.validate();

      if (!isValid) return;

      try {
        this.loadingButtom = true;
        await AuthService.login(this.username, this.password);
        this.$router.push("/");
      } catch (error) {
        this.$notify.error("Usuário ou senha inválidos");
      } finally {
        this.loadingButtom = false;
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
