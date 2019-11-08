<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped app>
      <!-- //可以作为一个路由,也可以是组件,不知道那种方法好用(类型有5-8种) -->
      <drawerList />
    </v-navigation-drawer>
    <v-content style="padding-top:60px">
      <v-row style="margin-top:10px">
        <v-toolbar :extended="extended" flat dense>
          <!-- <v-toolbar-title>Title 或面包屑</v-toolbar-title> -->

          <v-btn @click="$router.push('/new')" color="primary">new</v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text @click="btnimport">import</v-btn>
            <v-btn text @click="btnplan">process</v-btn>
            <v-btn text @click="dense = !dense">dense</v-btn>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
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
          <template v-slot:extension v-if="filterenable">
            <toolbarfilter />
          </template>
        </v-toolbar>
      </v-row>
      <v-data-table
        single-select
        :headers="headers"
        :items="desserts"
        :dense="dense"
        item-key="name"
        group-by="category"
        class="elevation-1"
        show-group-by
        :search="search"
      ></v-data-table>
      <router-view />
    </v-content>
  </div>
</template>

<script>
export default {
  components: {
    //切换组件的做法,也可以切换路由
    // drawerList: () => import("./Filter"),
    toolbarfilter: () => import("./ListFilter")
  },
  //使用store获取
  props: {
    parentToChild: String
  },
  data: () => ({
    extended: false,
    drawer: false,
    filterenable: false,
    dense: false,
    search: "",
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "left",
        value: "name"
      },
      { text: "Category", value: "category" }
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        category: "Ice cream"
      },
      {
        name: "Ice cream sandwich",
        category: "Ice cream"
      },
      {
        name: "Eclair",
        category: "Cookie"
      },
      {
        name: "Cupcake",
        category: "Pastry"
      },
      {
        name: "Gingerbread",
        category: "Cookie"
      },
      {
        name: "Jelly bean",
        category: "Candy"
      },
      {
        name: "Lollipop",
        category: "Candy"
      },
      {
        name: "Honeycomb",
        category: "Toffee"
      },
      {
        name: "Donut",
        category: "Pastry"
      },
      {
        name: "KitKat",
        category: "Candy"
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
      this.filterenable = !this.filterenable;
      this.extended = !this.extended;
    }
  }
};
</script>
