const manufacture = {
  path: "/manufacture",
  // name: 'manufacture',
  meta: {
    role: ["admin", "productmanager"], //页面需要的权限
    title: "manufacture", //the name show in submenu and breadcrumb (recommend set)
    icon: "mdi-name", //the icon show in the sidebar,
    noCache: true // if fasle ,the page will no be cached(default is false)
  },
  component: resolve =>
    require(["@/views/manufacture/Manufacture.vue"], resolve),
  children: [
    {
      path: "/", //这个页面还没考虑好,应当是个人的汇总页面,比如dashboard,或是product页面,或计划中心页面,生产看板页面
      // name: 'home',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "home", //主页
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve => require(["@/views/manufacture/Home.vue"], resolve)
    },

    {
      //汇总方式下的生产看板-生产单
      path: "/list", //生产单列表
      // name: 'list',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "list", //生产单列表
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/list/List.vue"], resolve)
    },
    //层级方式下的生产单看板
    {
      path: "/listdetail", //生产单详情
      // name: 'list',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "listdetail", //生产单详情
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/list/ListDetail.vue"], resolve),

      children: [
        {
          path: "devicemonitor", //生产单详情查看设备
          // name: 'devicemonitor',
          meta: {
            role: ["admin", "productmanager"], //页面需要的权限
            title: "devicemonitor", //生产进度查看设备
            icon: "mdi-name", //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false)
          },
          component: resolve =>
            require(["@/views/manufacture/list/DeviceMonitor.vue"], resolve)
        },
        {
          path: "partmonitor", //生产单详情查看零件
          // name: 'partmonitor',
          meta: {
            role: ["admin", "productmanager"], //页面需要的权限
            title: "partmonitor", //生产进度查看零件工序
            icon: "mdi-name", //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false)
          },
          component: resolve =>
            require(["@/views/manufacture/list/PartMonitor.vue"], resolve),

          children: [
            //零件的下一级:工序
            {
              path: "devicemonitor", //工序详情查看,操作,处理设备,移动版界面
              // name: 'devicemonitor',
              meta: {
                role: ["admin", "productmanager"], //页面需要的权限
                title: "devicemonitor", //工序查看设备
                icon: "mdi-name", //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false)
              },
              component: resolve =>
                require(["@/views/manufacture/list/DeviceMonitor.vue"], resolve)
            },
            {
              path: "partmonitor", //查看,报错汇报工序问题,移动版界面
              // name: 'partmonitor',
              meta: {
                role: ["admin", "productmanager"], //页面需要的权限
                title: "partmonitor", //生产进度查看零件工序
                icon: "mdi-name", //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false)
              },
              component: resolve =>
                require(["@/views/manufacture/list/PartMonitor.vue"], resolve)
            },
            {
              path: "stepmonitor", //工序列表,移动版界面
              // name: 'stepmonitor',
              meta: {
                role: ["admin", "productmanager"], //页面需要的权限
                title: "stepmonitor", //工序列表
                icon: "mdi-name", //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false)
              },
              component: resolve =>
                require(["@/views/manufacture/list/StepMonitor.vue"], resolve)
            }
          ]
        },
        {
          path: "errmonitor", //生产单详情查看问题
          // name: 'manufacturedetail',
          meta: {
            role: ["admin", "productmanager"], //页面需要的权限
            title: "errmonitor", //生产单详情查看问题
            icon: "mdi-name", //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false)
          },
          component: resolve =>
            require(["@/views/manufacture/list/errMonitor.vue"], resolve)
        }
      ]
    },
    //汇总方式下的生产看板-设备
    {
      path: "devicemonitor", //查看设备
      // name: 'devicemonitor',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "devicemonitor", //查看设备
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/list/DeviceMonitor.vue"], resolve)
    },
    //汇总方式下的生产看板-异常
    {
      path: "errmonitor", //生产单详情查看问题
      // name: 'manufacturedetail',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "errmonitor", //生产单详情查看问题
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/list/errMonitor.vue"], resolve)
    },
    //汇总方式下的生产看板-零件,共分3个模块:1.所有的工序;2.所有的零件进度;3.装配件完成状态
    {
      path: "stepmonitor", //工序列表,移动版界面
      // name: 'stepmonitor',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "stepmonitor", //工序列表
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/list/StepMonitor.vue"], resolve)
    },
    {
      path: "partmonitor", //查看,报错汇报工序问题,移动版界面
      // name: 'partmonitor',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "partmonitor", //生产进度查看零件工序
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/list/PartMonitor.vue"], resolve)
    },
    {
      path: "assemmonitor", //查看,报错汇报工序问题,移动版界面
      // name: 'assemmonitor',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "assemmonitor", //生产进度查看零件工序
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/list/AsseMonitor.vue"], resolve)
    },
    {
      path: "/manufacturschedule", //创建生产计划
      // name: 'manufacturschedule',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "manufacturschedule", //创建生产计划
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require([
          "@/views/manufacture/schedule/ManufatureSchedule.vue"
        ], resolve)
    },
    {
      path: "/tasklist", //创建生产任务即导入零件(可以不创建工单纠结),无论是否有生产计划
      // name: 'tasklist',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "manufacturschedule", //创建生产任务即导入零件
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/schedule/TaskList.vue"], resolve)
    },
    {
      path: "selectparttoprocess", //分选零件到创建生产单
      // name: 'selectparttoprocess',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "selectparttoprocess", //分选零件到创建生产单
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require([
          "@/views/manufacture/schedule/SelectParttoProcess.vue"
        ], resolve)
    },
    {
      path: "processlistofpart", //单个零件的工艺列表
      // name: 'processlistofpart',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "processlistofpart", //单个零件的工艺列表
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/schedule/ProcessListofPart.vue"], resolve)
    },
    {
      path: "createprocessstep", //创建工序
      // name: 'createprocessstep',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "createprocessstep", //创建工序
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/schedule/CreateProcessStep.vue"], resolve)
    },
    {
      path: "processlist", //工序零件列表
      // name: 'processlist',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "processlist", //工序列表
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/schedule/ProcessList.vue"], resolve)
    },

    {
      path: "requirelistofprocess", //单工序和选中的多工序的需求表
      // name: 'requirelistofprocess',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "requirelistofstep", //单工序和选中的多工序的需求表
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require([
          "@/views/manufacture/schedule/RequireListofProcess.vue"
        ], resolve)
    },
    {
      path: "rawlistofprocess", //单工序和选中的多工序的原材料列表
      // name: 'rawlistofprocess',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "rawlistofprocess", //单工序和选中的多工序的需求表
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/schedule/RawListofProcess.vue"], resolve)
    },
    {
      path: "selectparttoassembly", //分选零件到创建装配单
      // name: 'selectparttoassembly',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "selectparttoassembly", //分选零件到创建装配单
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require([
          "@/views/manufacture/assembly/SelectParttoAssembly.vue"
        ], resolve)
    },
    {
      path: "makeMbom", //制作Mbom
      // name: 'makeMbom',
      meta: {
        role: ["admin", "productmanager"], //页面需要的权限
        title: "makeMbom", //制作Mbom
        icon: "mdi-name", //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false)
      },
      component: resolve =>
        require(["@/views/manufacture/assembly/MakeMBOM.vue"], resolve)
    }
  ]
};

export default manufacture;
