<template>
  <div>
    <h6 class="heading-small text-muted mb-4">Resumo de itens do pedido</h6>
    <b-row class="m-0 d-flex justify-content-center"> </b-row>
    <b-row class="m-0 mb-4">
      <b-col class="p-0">
        <div class="d-flex flex-column">
          <label for=""> Buscar:</label>
          <b-form-input type="text" placeholder="Pesquise por nome ou código">
          </b-form-input>
        </div>
      </b-col>
      <div class="d-flex align-items-end pl-3">
        <b-button variant="outline-primary">
          <i class="fas fa-search"></i>
          <span>Buscar produto</span>
        </b-button>
      </div>
    </b-row>

    <FiltroDropdown :dropdowns="dropdowns" />
    <el-table
      :data="tableData"
      :show-header="false"
      :pagination="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <el-table-column>
        <template slot-scope="scope">
          <b-card>
            <span>{{ scope.row.name }}</span>
          </b-card>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import CardProduto from "./CardProduto.vue";
import FiltroDropdown from "./FiltroDropdown.vue";

export default {
  name: "card-resumo-itens-pedido",
  components: {
    FiltroDropdown,
    CardProduto,
  },
  data() {
    return {
      tableData: [
        { name: "John Doe", age: "25" },
        { name: "Jane Doe", age: "27" },
        { name: "Jim Doe", age: "28" },
        { name: "Jack Doe", age: "29" },
      ],
      pagination: {
        currentPage: 1,
        pageSize: 2,
      },
      total: 0,
      locale: "en-US",
      dropdowns: [
        {
          title: "Preço",
          items: [
            { text: "Maior preço", value: "price_desc" },
            { text: "Menor preço", value: "price_asc" },
          ],
        },
        {
          title: "Tamanho",
          items: [
            { text: "P", value: "size_p" },
            { text: "M", value: "size_m" },
            { text: "G", value: "size_g" },
          ],
        },
        {
          title: "Cor",
          items: [
            { text: "Azul", value: "color_blue" },
            { text: "Verde", value: "color_green" },
            { text: "Amarelo", value: "color_yellow" },
          ],
        },
        {
          title: "Categoria",
          items: [
            { text: "Blusa", value: "category_shirt" },
            { text: "Calça", value: "category_pants" },
            { text: "Meia", value: "category_socks" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.total = this.tableData.length;
  },
  methods: {
    handleSizeChange(val) {
      this.pagination.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
    },
  },
};
</script>
