const state = {
  drawershow: true,
   drawerpermanent:"permanent"
}

const getters = {
  // 用户信息
  getdrawershow: (state) => {
    // if (!state.drawershow) {
    //   return account.getAccountInfo()
    // }
    return state.drawershow
  },
  // 用户权限
  getdrawerposition: (state) => {
    // if (!state.drawerposition) {
    //   return account.getRules()
    // }
    return state.drawerposition
  }
}

const actions = {
  // 登录
  
  
}

const mutations = {
  todrawertemporary(){
    this.state.drawershow=true;
    this.state.position="temporary";
    console.log(11111)
  },
  todrawerpermanent(){
    this.state.drawershow=true;
    this.state.position="permanent";
    console.log(22222)
  },
}

export default{
  state,
  getters,
  actions,
  mutations
}
