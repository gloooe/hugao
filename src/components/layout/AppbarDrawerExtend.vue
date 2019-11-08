<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      temporary
    >
      <v-list dense>
        <template v-for="item in drawerlist">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :href="item.url">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
      elevate-on-scroll
      hide-on-scroll
    >
      <v-toolbar-title class="ml-0 pl-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <span class="hidden-sm-and-down">{{ pagetitle }}</span>
      </v-toolbar-title>
      <headbarright />
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title background-color="transparent">
          <v-tabs-slider color="yellow"></v-tabs-slider>
<<<<<<< HEAD
          <v-tab v-for="item in detailtabs" :key="item.name">
=======
<<<<<<< HEAD
          <v-tab v-for="item in detailtabs" :key="item" @click="router.push("item.url")">
=======
          <v-tab v-for="item in detailtabs" :key="item" :href="item.url">
>>>>>>> b305287682dba59ed4f3837980aa5e6616aa08e6
>>>>>>> 2616a12abbed5f1ed13c8bf74a72152369d4afcd
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import headbarright from "./HeadBarRight";
export default {
  components: { headbarright },
  props: {
    list: Array,
    title: String,
    tablist: Array
  },
  data: () => ({
    drawer: null,
    pagetitle: "",
    drawerlist: [],
    tabname: [],
    tab: null,
    detailtabs: [
      {
        name: "property", //客户输入的名称
        url: "/project/property", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      },
      {
        name: "requirelist", //客户输入的名称
        url: "/project/requirelist", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      },
      {
        name: "contract", //客户输入的名称
        url: "/project/contract", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      },
      {
        name: "document", //客户输入的名称
        url: "/project/document", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      },
      {
        name: "product", //客户输入的名称
        url: "/project/product", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      },
      {
        name: "issuelist", //客户输入的名称
        url: "/project/issuelist", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      },
      {
        name: "providing", //客户输入的名称
        url: "/project/providing", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      },
      {
        name: "schedule", //客户输入的名称
        url: "/project/schedule", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      },
      {
        name: "track", //客户输入的名称
        url: "/project/track", //系统自动生成的标识，用户不可见
        icon: "P01", //客户输入的类型代码
        status: true
      }
    ]
  }),
  methods: {},
  computed: {},
  created() {
    this.tabname = this.tablist;
    this.pagetitle = this.title;
    this.drawerlist = this.list;
  }
};
</script>
