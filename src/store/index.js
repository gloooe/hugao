import Vue from "vue";
import Vuex from "vuex";
import account from "./module/account";
import permission from "./module/permission";
import pagestatus from "./module/pagestatus";
import menu from "@/views/settings/menu";
import project from "./module/project";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    pagetitle: "Home",
    menu: menu,
    user: {},
    light: true,
    language: "English",
    languages: ["中文", "English"],
    color: "",
    colors: ["blue", "green", "purple", "red"],
    token: null,
    message: {
      type: null,
      body: null
    }
  },

  getters: {},
  mutations: {
    // setMenu(state, data) {
    //   state.menu = data;
    // },
    // setPageTitle(state, data) {
    //   state.pageTitle = data;
    // },
    showMessage(state, type, body) {
      state.message = {
        type,
        body
      };
    }
  },
  actions: {
    // checkPageTitle({ commit, state }, path) {
    //   for (let k in state.menu) {
    //     if (state.menu[k].href === path) {
    //       commit("setPageTitle", state.menu[k].text);
    //       break;
    //     }
    //   }
    // }
  },
  modules: {
    pagestatus,
    account,
    project
  }
});

export default store;
