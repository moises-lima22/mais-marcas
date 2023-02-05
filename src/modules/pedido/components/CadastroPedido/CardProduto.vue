<template>
  <el-card class="product-card">
    <el-carousel>
      <el-carousel-item v-for="img in product.images" :key="img">
        <img :src="img" alt="Imagem do produto" />
      </el-carousel-item>
    </el-carousel>
    <div class="card-body">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <div class="round-elements">
        <div class="round-element"></div>
        <div class="round-element"></div>
        <div class="round-element"></div>
        <div class="round-element"></div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
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

.round-elements {
  display: flex;
  justify-content: center;
}

.round-element {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ddd;
}
</style>
