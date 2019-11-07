const reviewproject = {
    path: '/reviewproject',
    // name: 'reviewproject',
    meta: {
        role: ['admin', 'projectmanager'], //页面需要的权限
        title: 'newproject', //the name show in submenu and breadcrumb (recommend set)
        icon: 'svg-name', //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false) 
    },
    component: (resolve) => require(['@/views/project/new/new.vue'], resolve),
    children: [{
        path: '/',
        // name: 'properity',
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'properity', //属性
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/Properity.vue'], resolve),
    },
    {
        path: 'requirelist', //需求清单
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'requirelist', //需求清单
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/RequireList.vue'], resolve),


    },

    {
        path: 'document', //文档
        // name: 'document',
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'document', //文档
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/Document.vue'], resolve),

    },
    {
        path: 'product', //产品
        // name: 'product',
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'product', //产品
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/Product.vue'], resolve),

    },
    {
        path: 'providing', //客户提供件
        // name: 'providing',
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'providing', //客户提供件
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/Providing.vue'], resolve),

    },
    {
        path: 'associateproject', //关联项目
        // name: 'associateproject',
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'associateproject', //关联项目
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/AssociateProject.vue'], resolve),

    },
    {
        path: 'schedule', //进度计划
        // name: 'schedule',
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'schedule', //进度计划
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/Schedule.vue'], resolve),

    },
    {
        path: 'contract', //合同
        // name: 'contract',
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'contract', //合同
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/Contract.vue'], resolve),

    },

    {
        path: 'issuelist', //问题清单
        // name: 'issuelist',
        meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'issuelist', //问题清单
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
        component: (resolve) => require(['@/views/project/new/IssueList.vue'], resolve),

    },
        {
            path: 'track', //跟踪
         // name: 'track',
         meta: {
            role: ['admin', 'projectmanager'], //页面需要的权限
            title: 'track', //跟踪
            icon: 'svg-name', //the icon show in the sidebar,
            noCache: true // if fasle ,the page will no be cached(default is false) 
        },
            component: (resolve) => require(['@/views/project/review/Track.vue'], resolve),
            
            children: [{
                    path: '/', //设备
                    component: (resolve) => require(['@/views/project/review/DeviceMonitor.vue'], resolve),
                },
                {
                    path: 'production', //物料
                    component: (resolve) => require(['@/views/project/review/PartMonitor.vue'], resolve),
                },
                {
                    path: 'persons', //人员
                    component: (resolve) => require(['@/views/project/review/PersonsMonitor.vue'], resolve),
                },
                {
                    path: 'issue', //问题
                    component: (resolve) => require(['@/views/project/review/Issue.vue'], resolve),
                },
                {
                    path: 'problem', //异常
                    component: (resolve) => require(['@/views/project/review/ErrMonitor.vue'], resolve),
                },
                {
                    path: 'report', //报表
                    component: (resolve) => require(['@/views/project/review/Report.vue'], resolve),
                },
              
            ]
        },
    ],
}

export default reviewproject