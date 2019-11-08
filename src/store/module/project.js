const state = {
  extended: false,
  title: "project",
  detailtabname: [
    "property",
    "contract",
    "document",
    "issuelist",
    "product",
    "providing",
    "requirelist",
    "schedule",
    "track"
  ],
  detailtabs: [
    {
      name: "property", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    },
    {
      name: "requirelist", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    },
    {
      name: "contract", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    },
    {
      name: "document", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    },
    {
      name: "product", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    },
    {
      name: "issuelist", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    },
    {
      name: "providing", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    },
    {
      name: "schedule", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    },
    {
      name: "track", //客户输入的名称
      url: "machinery", //系统自动生成的标识，用户不可见
      icon: "P01", //客户输入的类型代码
      status: true
    }
  ],
  //项目类型，对应的页面是基础数据
  projectTypes: [
    {
      name: "整车", //客户输入的名称
      type: "machinery", //系统自动生成的标识，用户不可见
      code: "P01", //客户输入的类型代码
      subType: [
        {
          type: "fasten",
          name: "商用车",
          code: "P011",
          symbol: ""
        },
        {
          type: "bearing",
          name: "乘用车",
          code: "P012",
          symbol: ""
        }
        //增加和删除列
      ]
    },
    {
      name: "零配件",
      type: "electric",
      code: "P02",
      subType: [{}, {}]
    },
    {
      name: "焊接台",
      type: "hydraulic",
      code: "P03",
      subType: [{}, {}]
    },
    {
      name: "夹具",
      type: "pneumatic",
      code: "P04",
      subType: [{}, {}]
    },
    {
      name: "其他",
      type: "other",
      code: "P05",
      subType: [{}, {}]
    }
    //增加和删除列
  ],
  // 项目阶段，对应的页面是基础数据
  projectstage: [
    {
      stage: "car", // 第一种项目类型
      name: "项目启动", // 项目英文名称
      subType: [
        {
          // 项目子阶段
          stage: "car", // 项目阶段标志
          name: "项目启动" // 项目英文名称
        },
        {
          stage: "mold",
          name: "设计",
          subType: [{}, {}]
        },
        {
          stage: "cast",
          name: "生产",
          subType: [{}, {}]
        }
        //增加列，删除列
      ]
    },
    {
      stage: "mobile", // 第二种项目类型
      name: "项目启动", // 项目英文名称
      subType: [
        {
          // 项目子阶段
          stage: "car", // 项目阶段标志
          name: "项目启动" // 项目英文名称
        },
        {
          stage: "mold",
          name: "设计",
          subType: [{}, {}]
        }

        //增加列，删除列
      ]
    }
  ],
  // 项目子组，对应的页面是基础数据
  projectSubGroup: [
    {
      name: "机械",
      type: "machinery",
      defaultDisplay: "true",
      column: [
        {
          name: "fasten", // 列标题名称
          width: 200, //设置的默认宽度
          sortNo: 1 //列的序号
        },
        {
          name: "fasten",
          width: 200,
          sortNo: 2
        }
        //增加列，删除列
      ]
      //权限是否在这里写出，需要和后端讨论
    },
    {
      name: "电气",
      type: "electric",
      defaultDisplay: "false",
      subType: [{}, {}]
    },
    {
      name: "液压",
      type: "hydraulic",
      defaultDisplay: "false",
      subType: [{}, {}]
    },
    {
      name: "气动",
      type: "pneumatic",
      defaultDisplay: "false",
      subType: [{}, {}]
    },
    {
      name: "其他",
      type: "other",
      defaultDisplay: "false",
      subType: [{}, {}]
    }
    //增加列，删除列
  ],
  projectListColumn: [
    {
      projectID: "tem000", //项目内部ID
      projectCode: "tem000", //项目编号
      projectName: "新项目", //项目名称
      icon: ":iconfont icon-wendang", //项目图标
      projectRecentNews: "", //项目最新信息
      projectTypes: "", //项目类型
      projectManager: "", //项目负责人
      // projectpic: [],//项目负责人
      projectstation: "", //项目状态
      // projectcomment: "",//项目备注
      projectcustomer: "", //客户公司
      // projectmembers: [],//项目成员
      projectlifttime: "", //项目开始结束的计划时间
      // devicesubTypes: [],//项目负责人
      remainDay: []
    } //剩余天数
  ]
};

const getters = {
  productTypes(state) {
    return state.productTypes; //从后台获取数据
  },
  productLabels(state) {
    return state.productLabels;
  }
  // getTabName(state) {
  //   let tabname = [];
  //   for (let index = 0; index < detailtabs.length; index++) {
  //     tabname.push = detailtabs[name];
  //   }
  //   console.log(tabname);
  //   // return (state.detailtabname = tabname);
  // }
};
const mutations = {
  openExtend(state) {
    state.extended = true;
  }
};
export default {
  state,
  getters, //在使用页面获取数据
  mutations,
  // getTabName(state) {
  //   let tabname = [];
  //   for (let index = 0; index < detailtabs.length; index++) {
  //     tabname.push = detailtabs[name];
  //   }
  //   console.log(tabname);
  //   return (state.detailtabname = tabname);
  // }

  //在基础页面修改后的数据在次存入后台
  actions: {} //在基础页面修改后的数据在次存入后台
};
