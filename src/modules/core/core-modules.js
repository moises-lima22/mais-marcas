import App from "./App.vue";
import coreRoutes from "./routes/routes";

export default class CoreModule {
  router;
  // store;

  constructor(router, store) {
    this.router = router;
    // this.store = store;
  }

  install(Vue) {
    this.router.addRoutes(coreRoutes);
    /* eslint-disable no-new */
    new Vue({
      router: this.router,
      // store: this.store,
      render: (h) => h(App),
    }).$mount("#app");
  }
}
