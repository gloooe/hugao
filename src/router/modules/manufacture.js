const manufacture = {
    path: '/manufacture',
    // name: 'manufacture',
    meta: {
        role: ['admin', 'productmanager'], //页面需要的权限
        title: 'manufacture', //the name show in submenu and breadcrumb (recommend set)
        icon: 'svg-name', //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false) 
    },
    component: (resolve) => require(['@/views/manufacture/Manufacture.vue'], resolve),
    children: [{

            path: '/',
            // name: 'home',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'home', //主页
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/Home.vue'], resolve),

        },     

        {
            path: '/list',
            // name: 'list',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'list', //生产单列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/list/List.vue'], resolve),

        },
        {
            path: '/listdetail',
            // name: 'list',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'listdetail', //生产单详情
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/list/ListDetail.vue'], resolve),

            children: [{
                    path: 'devicemonitor', //生产单详情查看设备
                    // name: 'devicemonitor',
                    meta: {
                        role: ['admin', 'productmanager'], //页面需要的权限
                        title: 'devicemonitor', //生产进度查看设备
                        icon: 'svg-name', //the icon show in the sidebar,
                        noCache: true // if fasle ,the page will no be cached(default is false) 
                    },
                    component: (resolve) => require(['@/views/manufacture/list/DeviceMonitor.vue'], resolve),

                },
                {
                    path: 'partmonitor', //生产单详情查看零件工序
                    // name: 'partmonitor',
                    meta: {
                        role: ['admin', 'productmanager'], //页面需要的权限
                        title: 'partmonitor', //生产进度查看零件工序
                        icon: 'svg-name', //the icon show in the sidebar,
                        noCache: true // if fasle ,the page will no be cached(default is false) 
                    },
                    component: (resolve) => require(['@/views/manufacture/list/PartMonitor.vue'], resolve),


                },
                {
                    path: 'errmonitor', //生产单详情查看问题
                    // name: 'manufacturedetail',
                    meta: {
                        role: ['admin', 'productmanager'], //页面需要的权限
                        title: 'errmonitor', //生产单详情查看问题
                        icon: 'svg-name', //the icon show in the sidebar,
                        noCache: true // if fasle ,the page will no be cached(default is false) 
                    },
                    component: (resolve) => require(['@/views/manufacture/list/errMonitor.vue'], resolve),


                },
            ]
        },
        {
            path: '/manufacturschedule', //生产计划
            // name: 'manufacturschedule',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'manufacturschedule', //生产计划
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/schedule/ManufatureSchedule.vue'], resolve),


        },
        {
            path: 'selectparttoprocess', //分选零件到创建生产单
            // name: 'selectparttoprocess',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'selectparttoprocess', //分选零件到创建生产单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/schedule/SelectParttoProcess.vue'], resolve),

        },
        {
            path: 'processlistofpart', //单个零件的工艺列表
            // name: 'processlistofpart',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'processlistofpart', //单个零件的工艺列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/schedule/ProcessListofPart.vue'], resolve),

        },
        {
            path: 'createprocessstep', //创建工序
            // name: 'createprocessstep',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'createprocessstep', //创建工序
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/schedule/CreateProcessStep.vue'], resolve),

        },
        {
            path: 'processlist', //工序零件列表
            // name: 'processlist',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'processlist', //工序列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/schedule/ProcessList.vue'], resolve),

        },

        {
            path: 'requirelistofprocess', //单工序和选中的多工序的需求表
            // name: 'requirelistofprocess',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'requirelistofstep', //单工序和选中的多工序的需求表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/schedule/RequireListofProcess.vue'], resolve),

        },
        {
            path: 'rawlistofprocess', //单工序和选中的多工序的原材料列表
            // name: 'rawlistofprocess',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'rawlistofprocess', //单工序和选中的多工序的需求表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/schedule/RawListofProcess.vue'], resolve),

        },
        {
            path: 'selectparttoassembly', //分选零件到创建装配单
            // name: 'selectparttoassembly',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'selectparttoassembly', //分选零件到创建装配单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/assembly/SelectParttoAssembly.vue'], resolve),

        },
        {
            path: 'makeMbom', //制作Mbom
            // name: 'makeMbom',
            meta: {
                role: ['admin', 'productmanager'], //页面需要的权限
                title: 'makeMbom', //制作Mbom
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/manufacture/assembly/MakeMBOM.vue'], resolve),

        },


    ],
}

export default manufacture