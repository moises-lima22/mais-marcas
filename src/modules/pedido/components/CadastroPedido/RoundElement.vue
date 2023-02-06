<template>
  <p class="round-element">{{ value }}</p>
</template>
<script>
export default {
  name: "round-element",
  props: {
    value: {
      Type: String,
    },
  },
};
</script>
<style scoped>
.round-element {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ddd;
}
</style>
