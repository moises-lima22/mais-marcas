<template>
  <div>
    <el-header
      class="d-flex align-items-center justify-content-end"
      style="border-bottom: 1px solid #ccc"
    >
      <el-dropdown
        v-for="(dropdown, index) in dropdowns"
        :key="index"
        class="ml-3 mr-3"
        @command="onDropdownSelect(index, $event)"
      >
        <span class="el-dropdown-link">
          {{ dropdown.title }} <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in dropdown.items"
            :key="item.command"
            :command="item.command"
            >{{ item.text }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "filtro-dropdown",
  // Exemplo de array esperado
  // dropdowns: [
  //   {
  //     title: "Preço",
  //     items: [
  //       { text: "Maior preço", value: "price_desc" },
  //       { text: "Menor preço", value: "price_asc" },
  //     ],
  //   },
  // ],
  props: {
    dropdowns: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onDropdownSelect(index, command) {
      this.$emit("dropdown-select", { index, command });
    },
  },
};
</script>
