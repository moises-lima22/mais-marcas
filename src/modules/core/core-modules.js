import App from "./App.vue";
import router from "./routes/newRoutes";
import DashboardPlugin from "@/modules/core/plugins/dashboard-plugin";

export default {
  components: {
    App,
  },
  routes: router,
  plugins: [DashboardPlugin],
};
