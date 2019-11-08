const newproject = {
  path: "/project",
  // name: 'project',
  meta: {
    role: ["admin", "projectmanager"], //页面需要的权限
    title: "newproject", //the name show in submenu and breadcrumb (recommend set)
    icon: "mdi-name", //the icon show in the sidebar,
    noCache: true // if fasle ,the page will no be cached(default is false)
  },
  component: resolve => require(["@/views/project/DetailIndex.vue"], resolve),
  children: [
    {
      path: "/",
      // name: 'new',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "properity", //属性
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/New.vue"], resolve)
    },
    {
      path: "/properity",
      // name: 'properity',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "properity", //属性
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/Property.vue"], resolve)
    },
    {
      path: "requirelist", //需求清单
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "requirelist", //需求清单
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/RequireList.vue"], resolve)
    },

    {
      path: "document", //文档
      // name: 'document',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "document", //文档
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/Document.vue"], resolve)
    },
    {
      path: "product", //产品
      // name: 'product',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "product", //产品
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/Product.vue"], resolve)
    },
    {
      path: "providing", //客户提供件
      // name: 'providing',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "providing", //客户提供件
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/Providing.vue"], resolve)
    },
    {
      path: "associateproject", //关联项目
      // name: 'associateproject',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "associateproject", //关联项目
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/AssociateProject.vue"], resolve)
    },
    {
      path: "schedule", //进度计划
      // name: 'schedule',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "schedule", //进度计划
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/Schedule.vue"], resolve)
    },
    {
      path: "contract", //合同
      // name: 'contract',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "contract", //合同
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/Contract.vue"], resolve)
    },

    {
      path: "issuelist", //问题清单
      // name: 'issuelist',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "issuelist", //问题清单
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/IssueList.vue"], resolve)
    },
    {
      path: "track", //项目跟踪
      // name: 'track',
      meta: {
        role: ["admin", "projectmanager"], //页面需要的权限
        title: "track", //项目跟踪
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/project/detailtabs/Track.vue"], resolve)
    }
  ]
};

export default newproject;
