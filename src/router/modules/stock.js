const stock = {
    path: '/stock',
    // name: 'stock',
    meta: {
        role: ['admin', 'stockkeeper'], //页面需要的权限
        title: 'stock', //the name show in submenu and breadcrumb (recommend set)
        icon: 'svg-name', //the icon show in the sidebar,
        noCache: true // if fasle ,the page will no be cached(default is false) 
    },
    component: (resolve) => require(['@/views/stock/stock.vue'], resolve),
    children: [{
            path: '/',
            // name: 'home',
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'home', //主页
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/Home.vue'], resolve),
        },
        {
            path: 'inputlist', //入库单列表
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'inputlist', //入库单列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/InputList.vue'], resolve),
        },
        {
            path: 'createinput', //创建入库单
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'createinput', //创建入库单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/CreateInput.vue'], resolve),
        },
        {
            path: 'outputlist', //出库单列表
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'outputlist', //出库单列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/OutputList.vue'], resolve),
        },
        {
            path: 'createoutput', //创建出库单
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'createoutput', //创建出库单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/CreateOutput.vue'], resolve),
        },
        {
            path: 'listdetail', //出入库单明细
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'listdetail', //出入库单明细
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/ListDetail.vue'], resolve),
        },
        {
            path: 'shiplist', //发货单列表
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'shiplist', //出库单列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/ShipList.vue'], resolve),
        },
        {
            path: 'createship', //创建发货单
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'createship', //创建出库单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/CreateShip.vue'], resolve),
        },
        {
            path: 'returnlist', //退货单列表
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'returnlist', //退货单列表
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/ReturnList.vue'], resolve),
        },
        {
            path: 'createreturn', //创建退货单
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'createreturn', //创建退货单
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/CreateReturn.vue'], resolve),
        },
        {
            path: 'shipdetail', //发货单退货单明细
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'shipdetail', //发货单退货单明细
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/ShipDetail.vue'], resolve),
        },
        {
            path: 'managestock', //仓库管理
            // name: 'managestock',
            meta: {
                role: ['admin', 'stockkeeper'], //页面需要的权限
                title: 'managestock', //仓库管理
                icon: 'svg-name', //the icon show in the sidebar,
                noCache: true // if fasle ,the page will no be cached(default is false) 
            },
            component: (resolve) => require(['@/views/stock/ManageStock.vue'], resolve),
        },

    ],
}

export default stock