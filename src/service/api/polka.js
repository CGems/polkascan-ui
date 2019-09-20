export default [
  {
    name: "getNow",
    method: "GET",
    desc: "获取时间信息",
    baseURL: "",
    path: "/now",
    options: {}
  },
  {
    name: "getBlocks",
    method: "GET",
    desc: "获取块信息",
    baseURL: "",
    path: "/v1/block",
    options: {}
  },
  {
    name: "getMetadata",
    method: "GET",
    desc: "元数据",
    baseURL: "",
    path: "/v1/metadata",
    options: {}
  },
  {
    name: "getExtrinsics",
    method: "GET",
    desc: "extrinsics数据",
    baseURL: "",
    path: "/v1/extrinsic",
    options: {}
  },
  {
    name: "getTransfers",
    method: "GET",
    desc: "transfers数据",
    baseURL: "",
    path: "/v1/transfer",
    options: {}
  },
  {
    name: "getDaily",
    method: "GET",
    desc: "图表数据",
    baseURL: "",
    path: "/v1/daily",
    options: {}
  },
  {
    name: "getBlockByKey",
    method: "GET",
    desc: "获取单个块数据",
    baseURL: "",
    path: "/v1/block",
    options: {
      noShowDefaultError: true
    }
  },
  {
    name: "getExtrinsicByKey",
    method: "GET",
    desc: "获取单个extrinsics数据",
    baseURL: "",
    path: "/v1/extrinsic",
    options: {
      noShowDefaultError: true
    }
  },
  {
    name: "getSearchRes",
    method: "GET",
    desc: "获取搜索结果",
    baseURL: "",
    path: "/v1/search",
    options: {
      noShowDefaultError: true
    }
  },
  {
    name: "checkHash",
    method: "GET",
    desc: "判断blockHash还是extrinsicHash",
    baseURL: "",
    path: "/v1/check_hash",
    options: {
      noShowDefaultError: true
    }
  }
];
