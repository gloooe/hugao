const inspection = {
    path: '/inspection',
    // name: 'inspection',
    meta: {
        role: ['admin', 'inspector'], //页面需要的权限
        title: 'inspection', //the name show in submenu and breadcrumb (recommend set)
        icon: 'svg-name', //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false) 
    },
    component: (resolve) => require(['@/views/inspection/Inspection.vue'], resolve),
    children: [{
            path: '/',
            // name: 'home',
            meta: {
                role: ['admin', 'inspector'], //页面需要的权限
                title: 'home', //主页
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/inspection/Home.vue'], resolve),
        },
        {
            path: 'inspectList', //检验单列表
            meta: {
                role: ['admin', 'inspector'], //页面需要的权限
                title: 'inspectList', //检验单列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/inspection/InspectList.vue'], resolve),
        },
        {
            path: 'createinspect', //创建检验单
            meta: {
                role: ['admin', 'inspector'], //页面需要的权限
                title: 'createinspect', //创建检验单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/inspection/CreateInspect.vue'], resolve),
        },
        {
            path: 'inspectdetail', //检验单明细
            meta: {
                role: ['admin', 'inspector'], //页面需要的权限
                title: 'inspectdetail', //检验单明细
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/inspection/OutputList.vue'], resolve),
        },
        {
            path: 'rubbishparts', //报废零件列表
            meta: {
                role: ['admin', 'inspector'], //页面需要的权限
                title: 'rubbishparts', //报废零件列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/inspection/OutputList.vue'], resolve),
        },

    ],
}

export default inspection