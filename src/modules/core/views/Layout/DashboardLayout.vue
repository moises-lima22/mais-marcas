<template>
  <div class="wrapper">
    <div v-if="false" id="loading"></div>
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            path: '/dashboard',
            icon: 'ni ni-tv-2 text-primary',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Cadastro',
            icon: 'ni ni-circle-08 text-primary',
          }"
        >
          <sidebar-item
            :link="{
              name: 'Pessoa',
              path: '/consulta-cadastro-pessoa',
            }"
          ></sidebar-item>
          <sidebar-item
            :link="{ name: 'Usuário', path: '/consulta-cadastro-pessoa' }"
          ></sidebar-item>
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Pedido',
            path: '/consulta-pedido',
            icon: 'ni ni-bag-17 text-primary',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Planejamento Pedido',
            path: '/consulta-planejamento-pedido',
            icon: 'ni ni-chart-pie-35 text-primary',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Icons',
            path: '/icons',
            icon: 'ni ni-planet text-blue',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Maps',
            path: '/maps',
            icon: 'ni ni-pin-3 text-orange',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'User Profile',
            path: '/profile',
            icon: 'ni ni-single-02 text-yellow',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Tables',
            path: '/tables',
            icon: 'ni ni-bullet-list-67 text-red',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Login',
            path: 'auth/login',
            icon: 'ni ni-key-25 text-info',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Register',
            path: '/register',
            icon: 'ni ni-circle-08 text-pink',
          }"
        >
        </sidebar-item>
      </template>

      <template slot="links-after">
        <hr class="my-3" />
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <b-nav class="navbar-nav mb-md-3">
          <b-nav-item
            href="https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard"
          >
            <i class="ni ni-spaceship"></i>
            <b-nav-text class="p-0">Getting started</b-nav-text>
          </b-nav-item>
          <b-nav-item
            href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard"
          >
            <i class="ni ni-palette"></i>
            <b-nav-text class="p-0">Foundation</b-nav-text>
          </b-nav-item>
          <b-nav-item
            href="https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard"
          >
            <i class="ni ni-ui-04"></i>
            <b-nav-text class="p-0">Components</b-nav-text>
          </b-nav-item>
        </b-nav>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition,
  },
  data() {
    return {
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
    };
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
};
</script>
<style lang="css">
#loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

#loading::before {
  content: "";
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
