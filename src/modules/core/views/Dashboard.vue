<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <card>
        <b-card-header class="p-0">
          <h3>Parâmetros da consulta</h3>
        </b-card-header>
        <b-card-body class="pl-0 pr-0">
          <b-row>
            <b-col lg="6">
              <base-input
                type="text"
                label="Pedido"
                placeholder="Informe o número do pedido"
                appendIcon="fas fa-search"
                clearableIcon
                v-model="input"
                @input="(v) => teste(v)"
              >
              </base-input>
              <!-- <autocomplete></autocomplete> -->
              <!-- <base-input
                type="email"
                label="Email address"
                placeholder="mike@email.com"
              >
              </base-input> -->
            </b-col>
          </b-row>
        </b-card-body>
        <b-row>
          <!-- <b-col xl="3" md="6">
          <stats-card
            title="Total pedidos abertos"
            type="gradient-red"
            sub-title="2.550"
            icon="ni ni-bag-17"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Janeiro/2023</span>
            </template>
          </stats-card>
        </b-col> -->
          <!-- <b-col xl="3" md="6">
          <stats-card
            title="Dentro do prazo"
            type="gradient-orange"
            sub-title="2.295"
            icon="ni ni-watch-time"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">90.00%</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Atrasado"
            type="gradient-green"
            sub-title="255"
            icon="ni ni-chart-pie-35"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-danger mr-2">10.00%</span>
            </template>
          </stats-card>
        </b-col> -->
        </b-row>
      </card>
    </base-header>

    <!--Main-->
    <b-container fluid class="mt--7">
      <b-row style="min-height: 700px">
        <b-col xl="3" class="mb-5 mb-xl-0" style="min-height: 200px">
          <Kanban />
        </b-col>
        <b-col xl="3" class="mb-5 mb-xl-0" style="min-height: 200px">
          <Kanban />
        </b-col>
        <b-col xl="3" class="mb-5 mb-xl-0" style="min-height: 200px">
          <Kanban />
        </b-col>
        <b-col xl="3" class="mb-5 mb-xl-0" style="min-height: 200px">
          <Kanban />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/modules/core/components/Charts/config";
import LineChart from "@/modules/core/components/Charts/LineChart";
import BarChart from "@/modules/core/components/Charts/BarChart";

// Components
import BaseProgress from "@/modules/core/components/BaseProgress";
import StatsCard from "@/modules/core/components/Cards/StatsCard";
import Kanban from "@/modules/core/components/Kanban";

// Tables
import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
import PageVisitsTable from "./Dashboard/PageVisitsTable";

export default {
  components: {
    LineChart,
    BarChart,
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable,
    Kanban,
  },
  data() {
    return {
      input: "",
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: "Performance",
              data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            },
          ],
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29],
            },
          ],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
    teste(v) {
      console.log(v);
    },
  },
  mounted() {
    this.initBigChart(0);
  },
};
</script>
<style scoped>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
