<template>
  <b-card>
    <b-card-header class="p-0 d-flex">
      <h3>Resultado da consulta</h3>
    </b-card-header>
    <b-card-body class="pl-0 pr-0 pb-0">
      <el-table
        :data="people"
        stripe
        :row-class-name="rowClass"
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
      >
        <el-table-column label="Nome" prop="nome"></el-table-column>
        <el-table-column label="Email" prop="email"></el-table-column>
        <el-table-column label="Telefone" prop="telefone"></el-table-column>
        <el-table-column label="Endereço" prop="endereco"></el-table-column>
        <el-table-column label="Ação" width="65">
          <template slot-scope>
            <chip-button tooltipText="Editar" />
          </template>
        </el-table-column>
      </el-table>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "card-listagem-pedido",
  data() {
    return {
      people: [
        {
          nome: "John Doe",
          email: "john.doe@gmail.com",
          telefone: "(11) 91234-5678",
          endereco: "123 Main St.",
        },
        {
          nome: "Jane Doe",
          email: "jane.doe@gmail.com",
          telefone: "(11) 98765-4321",
          endereco: "456 Maple Ave.",
        },
        {
          nome: "Jim Smith",
          email: "jim.smith@gmail.com",
          telefone: "(11) 12345-6789",
          endereco: "789 Oak St.",
        },
        {
          nome: "Bob Johnson",
          email: "bob.johnson@gmail.com",
          telefone: "(11) 11111-2222",
          endereco: "111 First St.",
        },
        {
          nome: "Samantha Wilson",
          email: "samantha.wilson@gmail.com",
          telefone: "(11) 22222-3333",
          endereco: "222 Second St.",
        },
        {
          nome: "Tom Davis",
          email: "tom.davis@gmail.com",
          telefone: "(11) 33333-4444",
          endereco: "333 Third St.",
        },
        {
          nome: "Emily Brown",
          email: "emily.brown@gmail.com",
          telefone: "(11) 44444-5555",
          endereco: "444 Fourth St.",
        },
        {
          nome: "Michael Martinez",
          email: "michael.martinez@gmail.com",
          telefone: "(11) 55555-6666",
          endereco: "555 Fifth St.",
        },
        {
          nome: "Ava Robertson",
          email: "ava.robertson@gmail.com",
          telefone: "(11) 66666-7777",
          endereco: "666 Sixth St.",
        },
        {
          nome: "William Peterson",
          email: "william.peterson@gmail.com",
          telefone: "(11) 77777-8888",
          endereco: "777 Seventh St.",
        },
        {
          nome: "Olivia Anderson",
          email: "olivia.anderson@gmail.com",
          telefone: "(11) 88888-9999",
          endereco: "888 Eighth St.",
        },
      ],
    };
  },
  methods: {
    edit(row) {
      console.log(`Editing row: ${row.name}`);
    },
  },
  computed: {
    headerCellStyle() {
      return {
        backgroundColor: "#EEEEEE",
        color: "#495060",
      };
    },
    cellStyle() {
      return {
        color: "#495060",
      };
    },
    rowClass() {
      return "text-secondary";
    },
  },
};
</script>

<style>
.el-table td.actions {
  text-align: center;
}
.el-icon {
  font-size: 200px;
}
</style>
