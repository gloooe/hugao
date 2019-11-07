<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped app style="margin-top:10px">
      <!-- //可以作为一个路由,也可以是组件,不知道那种方法好用(类型有5-8种) -->
      <drawerList />
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
    drawerList: () => import("../Filter"),
    toolbarfilter: () => import("../Filter")
  },
  //使用store获取
  props: {
    parentToChild: String
  },
  data: () => ({
    extended: false,
    drawer: false,
    filterenable: false
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
this.extended=true
}
  }
};
</script>
