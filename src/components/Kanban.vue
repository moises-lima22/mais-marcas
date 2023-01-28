<template>
  <b-card no-body>
    <b-card-header class="border-0">
      <h3 class="mb-0">{{ title }}</h3>
    </b-card-header>

    <el-table
      class="table-responsive table"
      header-row-class-name="thead-light"
      :data="projects"
    >
      <el-table-column label="Status" min-width="170px" prop="status">
        <template v-slot="{ row }">
          <badge class="badge-dot mr-4" type="">
            <i :class="`bg-${row.statusType}`"></i>
            <span class="status" :class="`text-${row.statusType}`">{{
              row.status
            }}</span>
          </badge>
        </template>
      </el-table-column>

      <!-- <el-table-column label="Completion" prop="completion" min-width="240px">
        <template v-slot="{ row }">
          <div class="d-flex align-items-center">
            <span class="completion mr-2">{{ row.completion }}%</span>
            <div>
              <base-progress :type="row.statusType" :value="row.completion" />
            </div>
          </div>
        </template>
      </el-table-column> -->
    </el-table>

    <b-card-footer class="py-4 d-flex justify-content-end">
      <base-pagination
        v-model="currentPage"
        :per-page="10"
        :total="50"
      ></base-pagination>
    </b-card-footer>
  </b-card>
</template>
<script>
import Card from "@/components/Cards/Card";

import projects from "@/views/Tables/projects.js";
import { Table, TableColumn } from "element-ui";

export default {
  name: "kanban",
  components: {
    Card,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  methods: {
    notifyTopRight() {
      this.$notify({
        type: "success",
        verticalAlign: "top",
        horizontalAlign: "right",
        message: "Top right",
      });
    },
  },
  data() {
    return {
      projects,
      currentPage: 1,
    };
  },
};
</script>
<style scoped>
</style>
