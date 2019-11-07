const newproject = {
    path: '/database',
    // name: 'database',
    meta: {
        role: ['admin', 'super_editor'], //页面需要的权限
        title: 'title', //the name show in submenu and breadcrumb (recommend set)
        icon: 'svg-name', //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false) 
    },
    component: (resolve) => require(['@/views/database/database.vue'], resolve),
    children: [{
            path: '/',
            // name: 'home',
            meta: {
                role: ['admin', 'super_editor'], //页面需要的权限
                title: 'home', //属性
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/database/Home.vue'], resolve),
            
        },
        {
            path: 'properitymanage', //属性管理
            meta: {
                role: ['admin', 'super_editor'], //页面需要的权限
                title: 'requirelist', //需求清单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/database/ProperityManage.vue'], resolve),

            
        },
        // {
        //     path: 'BlankPart', //创建空零件
        //     components: {
        //         navside: (resolve) => require(['@/views/database/Create/BlankPartnav.vue'], resolve),
        //         content: (resolve) => require(['@/views/database/Create/newpart.vue'], resolve),
        //     },
        //     children: [{
        //             path: '/', //属性
        //             component: (resolve) => require(['@/views/database/Create/NewPart/attribute.vue'], resolve),
        //         },
        //         {
        //             path: 'getcode', //申请编码
        //             component: (resolve) => require(['@/views/database/Create/NewPart/applyCode.vue'], resolve),
        //         },
        //         {
        //             path: 'getdrawing', //添加图纸
        //             component: (resolve) => require(['@/views/database/Create/NewPart/importDraw.vue'], resolve),
        //         },
        //         {
        //             path: 'getrelation', //添加关系
        //             component: (resolve) => require(['@/views/database/Create/NewPart/addrelation.vue'], resolve),
        //         },
        //         {
        //             path: 'searchcode', //搜索页面
        //             component: (resolve) => require(['@/views/database/Create/NewPart/search.vue'], resolve),
        //         },
        //         {
        //             path: 'archive', //历史档案
        //             component: (resolve) => require(['@/views/database/Create/archive.vue'], resolve),
        //         },
        //         {
        //             path: 'maintain', //维修保养
        //             component: (resolve) => require(['@/views/database/Create/NewPart/maintain.vue'], resolve),
        //         },
        //         {
        //             path: 'getmaterial', //选择材质
        //             component: (resolve) => require(['@/views/database/Create/NewPart/materialmenu.vue'], resolve),
        //             children: [{
        //                     path: '/', //最近使用的材质
        //                     component: (resolve) => require(['@/components/material/recent.vue'], resolve),
        //                 },
        //                 {
        //                     path: 'list', //材质列表
        //                     component: (resolve) => require(['@/components/material/list.vue'], resolve),
        //                 },
        //             ]
        //         },
        //         {
        //             path: 'getraw', //添加材料类型
        //             component: (resolve) => require(['@/views/database/Create/NewPart/rawmenu.vue'], resolve),
        //             children: [{
        //                     path: '/', //最近使用的材料
        //                     component: (resolve) => require(['@/components/raw/rawnavTable.vue'], resolve),
        //                 },
        //                 {
        //                     path: 'list', //材料列表
        //                     component: (resolve) => require(['@/views/database/Create/NewPart/rawsize.vue'], resolve),
        //                 },
        //             ]
        //         },

        //     ]
        // },
        {
            path: 'categorymanage', //类型管理
            // name: 'categorymanage',
            meta: {
                role: ['admin', 'super_editor'], //页面需要的权限
                title: 'categorymanage', //类型管理
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            components: {
                navside: (resolve) => require(['@/views/database/Create/BlankPartnav.vue'], resolve),
                content: (resolve) => require(['@/views/database/Create/document.vue'], resolve),
            }
        },
        {
            path: 'partslib', //产品库
            // name: 'partslib',
            meta: {
                role: ['admin', 'super_editor'], //页面需要的权限
                title: 'partslib', //产品库
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            components: {
                navside: (resolve) => require(['@/views/database/Create/BlankPartnav.vue'], resolve),
                content: (resolve) => require(['@/views/database/Create/ImportProd.vue'], resolve),
            }
        },
        {
            path: 'templatelib', //模板库
            // name: 'providing',
            meta: {
                role: ['admin', 'super_editor'], //页面需要的权限
                title: 'templatelib', //模板库
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            components: {
                navside: (resolve) => require(['@/views/database/Create/BlankPartnav.vue'], resolve),
                content: (resolve) => require(['@/views/database/Create/ImportProd.vue'], resolve),
            }
        },
       

    ],
}

export default newproject