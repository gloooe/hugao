import Vue from "vue";
import VueRouter from "vue-router";
import newproject from "./modules/project";
Vue.use(VueRouter);

const routes = [
  {
    path: "/testtab",

    // name: "error",
    component: function() {
      return import("@/components/parent.vue");
    }
  },
  {
    path: "/error",
    redirect: "/error",
    name: "error",
    component: function() {
      return import("@/components/error/Error.vue");
    }
  },
  {
    path: "/login",
    // redirect: "/login",
    name: "login",
    component: function() {
      return import("@/components/login.vue");
    }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  newproject,
  {
    path: "/home3",
    name: "home3",
    component: function() {
      return import("../views/Home3.vue");
    }
  },

  {
    path: "/home4",
    name: "home4",
    component: function() {
      return import("../views/Home4.vue");
    }
  },
  {
    path: "/home2",
    name: "main2",
    component: function() {
      return import("../views/Home2.vue");
    },

    children: [
      {
        path: "tab",
        component: function() {
          return import("../views/table1.vue");
        }
      },
      {
        path: "contract",
        component: function() {
          return import("../views/project");
        },
        children: [
          {
            path: "/",
            component: function() {
              return import("../views/table1");
            }
          }
        ]
      },
      {
        path: "cards",
        component: function() {
          return import("../views/cards.vue");
        }
      },
      {
        path: "2col",
        component: function() {
          return import("../views/2col.vue");
        }
      },
      {
        path: "new",
        component: function() {
          return import("../views/sample.vue");
        }
      },
      {
        path: "totop",
        component: function() {
          return import("../views/totop.vue");
        }
      }
    ]
  },
  {
    path: "/settings",
    // name: "settings",
    component: function() {
      return import("../views/settings/settings.vue");
    },

    children: [
      {
        path: "userlist",
        component: function() {
          return import("../components/user/index.vue");
        }
      }
    ]
  },
  {
    path: "/settings",
    name: "settings",
    component: function() {
      return import("../views/Home2.vue");
    },

    children: [
      {
        path: "userlist",
        component: function() {
          return import("../components/user/index.vue");
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
