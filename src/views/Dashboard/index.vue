<template>
  <div class="dashboard-wrapper subscan-content">
    <div class="container">
      <search-input
        class="search-input"
        :selectList="selectList"
        placeholder="Search by Block / Extrinsic / Account"
      />
      <div class="metadata-chart-wrapper space-between">
        <metadata class="metadata-component" />
        <chart class="chart-component" />
      </div>
      <div class="blocks-transfers-wrapper space-between">
        <latest-blocks class="latest-blocks-component" :currentTime="currentTime" />
        <transfers class="transfers-component" :currentTime="currentTime" />
      </div>
    </div>
  </div>
</template>
<script>
import SearchInput from "@/views/Components/SearchInput";
import Metadata from "./metadata";
import Chart from "./chart";
import LatestBlocks from "./latestBlocks";
import Transfers from "./transfers";
import moment from "moment";

export default {
  name: "Dashboard",
  components: {
    SearchInput,
    Metadata,
    Chart,
    LatestBlocks,
    Transfers
  },
  data() {
    return {
      currentTime: Date.now(),
      selectList: [
        {
          label: "All",
          value: "all"
        },
        {
          label: "Block",
          value: "block"
        },
        {
          label: "Extrinsic",
          value: "extrinsic"
        },
        {
          label: "Account",
          value: "account"
        }
      ]
    };
  },
  created() {
    this.init();
    this.w = new Worker(process.env.BASE_URL + "timeWorker.js");
    this.w.onmessage = () => {
      this.changeTime();
    };
  },
  beforeDestroy() {
    // 销毁 worker
    if (this.w && typeof this.w.terminate === "function") {
      this.w.terminate();
    }
    this.$loop.removeLoop("dashborad");
  },
  methods: {
    async init() {
      // await this.getData();
      this.$loop.addLoop(
        "dashborad",
        () => {
          return this.getData();
        },
        true
      );
    },
    async getData() {
      const end = moment();
      const start = moment().subtract(15, "days");
      await Promise.all([
        this.$store.dispatch("SetMetadata"),
        this.$store.dispatch("SetLatestBlocks", { row: 25, page: 0 }),
        // this.$store.dispatch("SetLatestExtrinsics", { row: 25, page: 0 }),
        this.$store.dispatch("SetTransfers", { row: 25, page: 0 }),
        this.$store.dispatch("SetDailyChart", {
          start: start.format("YYYY-MM-DD"),
          end: end.format("YYYY-MM-DD")
        })
      ]);
    },
    changeTime() {
      this.currentTime = Date.now();
    }
  }
};
</script>
<style lang="scss" scoped>
.dashboard-wrapper {
  .container {
    .search-input {
      height: 50px;
    }
    .metadata-chart-wrapper {
      margin-top: 20px;
      height: 156px;
      .metadata-component {
        width: 780px;
      }
      .chart-component {
        width: 380px;
      }
    }
    .blocks-transfers-wrapper {
      margin-top: 30px;
      .latest-blocks-component,
      .transfers-component {
        width: 580px;
      }
    }
  }
}
</style>
