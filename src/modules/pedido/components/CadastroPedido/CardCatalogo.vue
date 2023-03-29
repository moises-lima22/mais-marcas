<template>
  <div>
    <h6 class="heading-small text-muted mb-4">Adicionar produto</h6>
    <b-row class="m-0 d-flex justify-content-center">
      <b-button pill variant="primary">Todos</b-button>
      <b-button pill variant="outline-primary" disabled>
        Itens adicionados
      </b-button>
    </b-row>
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
    <el-main
      class="p-0 d-flex justify-content-start"
      style="min-height: 100px; flex-wrap: wrap"
    >
      <el-col style="width: auto" v-for="item in displayedItems" :key="item.id">
        <CardProduto :product="item" />
      </el-col>
    </el-main>
    <el-footer v-if="displayedItems.length < items.length">
      <el-button @click="showMore">Mostrar Mais</el-button>
    </el-footer>
  </div>
</template>

<script>
import CardProduto from "./CardProduto.vue";
import items from "./items";
import FiltroDropdown from "./FiltroDropdown.vue";

export default {
  name: "Catalogo",
  components: {
    CardProduto,
    FiltroDropdown,
  },
  data() {
    return {
      items: [],
      displayedItems: [],
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
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.items = items;
      this.displayedItems = this.items.slice(0, 20);
    },
    showMore() {
      this.displayedItems = this.displayedItems.concat(this.items.slice(0, 20));
      this.items = this.items.slice(20);
    },
    sort(key) {
      this.items = this.items.sort((a, b) => {
        if (a[key] > b[key]) {
          return 1;
        }
        if (a[key] < b[key]) {
          return -1;
        }
        return 0;
      });
      this.displayedItems = this.items.slice(0, 20);
    },
  },
};
</script>
