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

    <el-header
      class="d-flex align-items-center justify-content-end"
      style="border-bottom: 1px solid #ccc"
    >
      <el-dropdown class="ml-3 mr-3" @command="sort">
        <span class="el-dropdown-link">
          Preço <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="name">Maior preço</el-dropdown-item>
          <el-dropdown-item command="price">Menor preço</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="ml-3 mr-3" @command="sort">
        <span class="el-dropdown-link">
          Tamanho <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="name">P</el-dropdown-item>
          <el-dropdown-item command="price">M</el-dropdown-item>
          <el-dropdown-item command="category">G</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="ml-3 mr-3" @command="sort">
        <span class="el-dropdown-link">
          Cor <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="Azul">Azul</el-dropdown-item>
          <el-dropdown-item command="Verde">Verde</el-dropdown-item>
          <el-dropdown-item command="Amarelo">Amarelo</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="ml-3 mr-3" @command="sort">
        <span class="el-dropdown-link">
          Categoria <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="Blusa">Blusa</el-dropdown-item>
          <el-dropdown-item command="Calça">Calça</el-dropdown-item>
          <el-dropdown-item command="Meia">Meia</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
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

export default {
  name: "Catalogo",
  components: {
    CardProduto,
  },
  data() {
    return {
      items: [],
      displayedItems: [],
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
