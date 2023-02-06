<template>
  <div>
    <div>
      <el-row class="m-0">
        <el-button circle class="mr-1" icon="el-icon-minus" @click="decrement">
        </el-button>
        <el-input-number
          style="width: 110px"
          v-model="value"
          :controls="false"
          :step="1"
          :min="1"
        >
        </el-input-number>
        <el-button
          circle
          class="ml-1"
          icon="el-icon-plus"
          @click="increment"
        ></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "quantidade-input",
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    increment() {
      this.value++;
    },
    decrement() {
      if (this.value > 1) {
        this.value--;
      }
    },
  },
};
</script>
