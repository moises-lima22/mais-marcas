<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col>
        <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
        <h5 class="h3 mb-0">Total orders</h5>
        <button @click="t">Teste</button>
      </b-col>
    </b-row>
  </card>
</template>
<script>
import Card from "@/components/Cards/Card";
export default {
  name: "kanban",
  components: {
    Card,
  },
  methods: {
    t() {
      this.$notification.succes;
    },
  },
};
</script>
<style>
</style>
