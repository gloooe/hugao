const purchase = {
    path: '/purchase',
    // name: 'purchase',
    meta: {
        role: ['admin', 'purchaser'], //页面需要的权限
        title: 'purchase', //the name show in submenu and breadcrumb (recommend set)
        icon: 'svg-name', //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false) 
    },
    component: (resolve) => require(['@/views/purchase/purchase.vue'], resolve),
    children: [{
            path: '/',
            // name: 'home',
            meta: {
                role: ['admin', 'purchaser'], //页面需要的权限
                title: 'home', //主页
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/purchase/home.vue'], resolve),
            
        },
        {
            path: '/purchaselist',
            // name: 'purchaselist',
            meta: {
                role: ['admin', 'purchaser'], //页面需要的权限
                title: 'list', //采购单列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/purchase/purchaselist.vue'], resolve),
            
        },
        {
            path: 'purchasedetail', //采购单详情，分栏页面
             // name: 'purchasedetail',
            meta: {
                role: ['admin', 'purchaser'], //页面需要的权限
                title: 'purchasedetail', //需求清单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/purchase/purchasedetail.vue'], resolve),

            
        },
        {
            path: 'selectpart', //分选零件到创建采购单
            // name: 'selectpart',
            meta: {
                role: ['admin', 'purchaser'], //页面需要的权限
                title: 'selectpart', //分选零件到创建采购单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/purchase/selectpart.vue'], resolve),
           
        },
        {
            path: 'createcontract', //创建合同
            // name: 'createcontract',
            meta: {
                role: ['admin', 'purchaser'], //页面需要的权限
                title: 'createcontract', //采购单跟踪
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/purchase/createcontract.vue'], resolve),
            
        },
        {
            path: 'contractdetail', //合同跟踪及详情
            // name: 'contractdetail',
            meta: {
                role: ['admin', 'purchaser'], //页面需要的权限
                title: 'contractdetail', //合同跟踪及详情
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/purchase/contractdetail.vue'], resolve),
            
        },
       
       // {
        //     path: 'BlankPart', //创建空零件
        //     components: {
        //         navside: (resolve) => require(['@/views/purchase/Create/BlankPartnav.vue'], resolve),
        //         content: (resolve) => require(['@/views/purchase/Create/newpart.vue'], resolve),
        //     },
        //     children: [{
        //             path: '/', //属性
        //             component: (resolve) => require(['@/views/purchase/Create/NewPart/attribute.vue'], resolve),
        //         },
        //         {
        //             path: 'getcode', //申请编码
        //             component: (resolve) => require(['@/views/purchase/Create/NewPart/applyCode.vue'], resolve),
        //         },
        //         {
        //             path: 'getdrawing', //添加图纸
        //             component: (resolve) => require(['@/views/purchase/Create/NewPart/importDraw.vue'], resolve),
        //         },
        //         {
        //             path: 'getrelation', //添加关系
        //             component: (resolve) => require(['@/views/purchase/Create/NewPart/addrelation.vue'], resolve),
        //         },
        //         {
        //             path: 'searchcode', //搜索页面
        //             component: (resolve) => require(['@/views/purchase/Create/NewPart/search.vue'], resolve),
        //         },
        //         {
        //             path: 'archive', //历史档案
        //             component: (resolve) => require(['@/views/purchase/Create/archive.vue'], resolve),
        //         },
        //         {
        //             path: 'maintain', //维修保养
        //             component: (resolve) => require(['@/views/purchase/Create/NewPart/maintain.vue'], resolve),
        //         },
        //         {
        //             path: 'getmaterial', //选择材质
        //             component: (resolve) => require(['@/views/purchase/Create/NewPart/materialmenu.vue'], resolve),
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
        //             component: (resolve) => require(['@/views/purchase/Create/NewPart/rawmenu.vue'], resolve),
        //             children: [{
        //                     path: '/', //最近使用的材料
        //                     component: (resolve) => require(['@/components/raw/rawnavTable.vue'], resolve),
        //                 },
        //                 {
        //                     path: 'list', //材料列表
        //                     component: (resolve) => require(['@/views/purchase/Create/NewPart/rawsize.vue'], resolve),
        //                 },
        //             ]
        //         },

        //     ]
        // },

    ],
}

export default purchase