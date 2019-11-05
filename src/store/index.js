import Vue from "vue";
import Vuex from "vuex";
import account from "./module/account";
import permission from "./module/permission";
import pagestatus from "./module/pagestatus";
// import menu from "@views/common/menu";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    pageTitle: "Home",
    // menu: menu,
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

  getters: {
    changeRedDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.visibility = !this.visibility;
      return (this.state.light = true);
    },
    switchcolor(state, data) {
      switch ((state, data)) {
        case "blue":
          this.$vuetify.theme.themes.light.primary = "#3f51b5";
          break;
        case "green":
          this.$vuetify.theme.themes.light.primary = "#4CAF50";
          break;
        case "purple":
          this.$vuetify.theme.themes.light.primary = "#9C27B0";
          break;
        case "red":
          this.$vuetify.theme.themes.light.primary = "#F44336";
          break;
        default:
          break;
      }
      state.color = data;
    },
    switchlang(state, data) {
      switch ((state, data)) {
        case "中文":
          this.language = "中文";
          this.$i18n.locale = "zh-CN"; //关键语句
          break;
        case "English":
          this.language = "English";
          this.$i18n.locale = "en-US"; //关键语句
          break;
        default:
          break;
      }
      state.language = data;
    }
  },
  mutations: {
    // setMenu(state, data) {
    //   state.menu = data;
    // },
    setPageTitle(state, data) {
      state.pageTitle = data;
    },
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
    //       commit("setPageTitle", state.menu[k].title);
    //       break;
    //     }
    //   }
    // }
  },
  modules: {
    pagestatus,
    account
  }
});

export default store;
