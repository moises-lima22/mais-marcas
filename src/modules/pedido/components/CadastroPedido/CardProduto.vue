<template>
  <el-card style="min-width: 294px" class="product-card">
    <el-carousel height="250px">
      <el-carousel-item v-for="img in product.images" :key="img">
        <img :src="img" alt="Imagem do produto" />
      </el-carousel-item>
    </el-carousel>
    <div class="card-body">
      <h3>{{ name }}</h3>
      <p>R$: {{ product.price }}</p>
    </div>
    <div v-for="(item, index) in tamanhosPeca" :key="index">
      <b-row class="mb-3">
        <round-element :value="item" />
        <quantidade-input />
      </b-row>
    </div>
    <el-row>
      <b-cols cols="12">
        <el-button
          style="width: 100%"
          type="primary"
          icon="el-icon-goods"
          round
        >
          Adicionar
        </el-button>
      </b-cols>
    </el-row>

    <!-- <el-row>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
    </el-row> -->
  </el-card>
</template>

<script>
import QuantidadeInput from "./QuantidadeInput.vue";
import RoundElement from "./RoundElement.vue";
export default {
  components: { QuantidadeInput, RoundElement },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      value: 0,
      tamanhosPeca: ["P", "M", "G", "GG", "EG", "BIG"],
    };
  },
  computed: {
    name() {
      return this.product.name.toUpperCase();
    },
  },
};
</script>

<style scoped>
.product-card {
  margin: 20px;
  width: 300px;
  text-align: center;
}

.card-body {
  padding: 20px;
}
</style>
