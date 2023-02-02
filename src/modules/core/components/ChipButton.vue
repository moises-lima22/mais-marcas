<template>
  <b-button
    v-b-tooltip.hover
    :title="tooltipText"
    class="p-0 shadow-none bg-transparent"
    @click="handleClick"
  >
    <div
      class="chip-button"
      :class="{ 'is-hovered': isHovered }"
      :style="{
        backgroundColor: chipColor,
        width: chipSize + 'px',
        height: chipSize + 'px',
      }"
    >
      <i :class="icon" :style="{ fontSize: iconSize + 'px' }"></i>
    </div>
  </b-button>
</template>
<script>
export default {
  name: "chip-button",
  props: {
    chipColor: {
      type: String,
      default: "#ffffff",
    },
    chipSize: {
      type: Number,
      default: 40,
    },
    icon: {
      type: String,
      default: "fas fa-pencil-alt",
    },
    tooltipText: {
      type: String,
      default: "fas fa-pencil-alt",
    },
    iconSize: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
    },
  },
};
</script>
<style>
.chip-button {
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
