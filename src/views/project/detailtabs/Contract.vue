<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped app style="margin-top:10px">
      <!-- //可以作为一个路由,也可以是组件,不知道那种方法好用(类型有5-8种) -->
      <v-card class="mx-auto" max-width="500">
        <v-sheet class="pa-4 primary lighten-2">
          <v-text-field
            v-model="search"
            label="Search Company Directory"
            dark
            flat
            solo-inverted
            hide-details
            clearable
            clear-icon="mdi-close-circle-outline"
          ></v-text-field>
          <v-checkbox
            v-model="caseSensitive"
            dark
            hide-details
            label="Case sensitive search"
          ></v-checkbox>
        </v-sheet>
        <v-card-text>
          <v-treeview
            :items="items"
            :search="search"
            :filter="filter"
            :open.sync="open"
          >
            <template v-slot:prepend="{ item }">
              <v-icon
                v-if="item.children"
                v-text="
                  `mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`
                "
              ></v-icon>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>

    <v-content style="padding-top:60px">
      <v-row style="margin-top:10px">
        <v-toolbar :extended="extended" flat dense>
          <v-toolbar-title>Title 或面包屑</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text @click="btnimport">import</v-btn>
            <v-btn text @click="btnplan">process</v-btn>
            <v-btn text>Link 3</v-btn>
          </v-toolbar-items>

          <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon>
              <v-icon>mdi-delete-circle</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
            <v-btn icon @click="extendfilter">
              <v-icon>mdi-filter</v-icon>
            </v-btn>
          </template>
          <template v-if="$vuetify.breakpoint.smAndUp">
            <toolbarfilter v-if="filterenable" />
          </template>
        </v-toolbar>
      </v-row>
      <router-view />
    </v-content>
  </div>
</template>

<script>
export default {
  components: {
    //切换组件的做法,也可以切换路由
    // drawerList: () => import("../Filter"),
    // toolbarfilter: () => import("../Filter")
  },
  //使用store获取
  props: {
    parentToChild: String
  },
  data: () => ({
    extended: false,
    drawer: false,
    filterenable: false,
    items: [
      {
        id: 1,
        name: "Applications :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" }
            ]
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" }
        ]
      }
    ]
  }),
  methods: {
    btnimport() {
      this.drawer = !this.drawer;
      //切换获取drawerList的内容,用路由或组件
    },
    btnplan() {
      this.drawer = !this.drawer;
      //切换另一个drawerlist的内容,用路由或组件
    },
    extendfilter() {
      this.filterenable = !filterenable;
      this.extended = true;
    }
  }
};
</script>
