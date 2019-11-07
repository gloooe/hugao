const design = {
    path: '/design',
    // name: 'design',
    meta: {
        role: ['admin', 'designer'], //页面需要的权限
        title: 'design', //the name show in submenu and breadcrumb (recommend set)
        icon: 'svg-name', //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false) 
    },
    component: (resolve) => require(['@/views/design/Design.vue'], resolve),
    children: [{
            path: '/',
            // name: 'home',
            meta: {
                role: ['admin', 'designer'], //页面需要的权限
                title: 'home', //主页
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/design/Home.vue'], resolve),
        },
        {
            path: 'designschedule', //设计计划
            meta: {
                role: ['admin', 'designer'], //页面需要的权限
                title: 'designschedule', //设计计划
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/design/DesignSchedule.vue'], resolve),
        },
        {
            path: 'product', //设计报工
            meta: {
                role: ['admin', 'designer'], //页面需要的权限
                title: 'product', //设计报工
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/design/Product.vue'], resolve),
        },
        {
            path: 'advancededit', //高级编辑
            meta: {
                role: ['admin', 'designer'], //页面需要的权限
                title: 'advancededit', //高级编辑
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/design/Product.vue'], resolve),
        },
        // {
        //     path: 'partdetail', //零件详情
        //     meta: {
        //         role: ['admin', 'designer'], //页面需要的权限
        //         title: 'partdetail', //零件详情
        //         icon: 'svg-name', //the icon show in the sidebar,
        //         noCache: true // if fasle ,the page will no be cached(default is false) 
        //     },
        //     component: (resolve) => require(['@/views/design/partdetail.vue'], resolve),
        // },
       

    ],
}

export default design