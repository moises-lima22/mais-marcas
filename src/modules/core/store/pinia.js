import { defineStore } from "pinia";

export const useCoreStore = defineStore({
  id: "coreStore",
  state: () => ({
    loading: false,
  }),
  actions: {
    startLoading() {
      this.loading = true;
    },
    dismissLoading() {
      this.loading = false;
    },
  },
});
