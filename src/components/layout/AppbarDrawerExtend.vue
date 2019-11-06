<template>
  <v-app id="appbarExtend">
    <v-navigation-drawer
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
ref=drawerlist
    >
      <v-list dense>
        //从父组件获取list
      </v-list>
    </v-navigation-drawer>

     <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
hideOnScroll
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <span class="hidden-sm-and-down">PageTitle</span>
      </v-toolbar-title>
<headbarright />
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title background-color="transparent">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in tabname" :key="item"> tab {{ item }} </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
 <v-content style="padding-top:60px">
       <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in 5" :key="item">
          <router-view />
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
          </v-content>
  </v-app>
</template>

<script>
//import { mapState, mapGetters } from "vuex";
import headbarright from "./HeadBarRight";
export default {
  components: {  headbarright },
  props: {
    drawerlist: Object,
  },
  data: () => ({
    drawer: null,
    visibility: false,
      tab: null,
  }),
  methods: {
    

  },
  computed: {
   // ...mapState(["tabname", ]),
   // ...mapGetters(["getdrawershow", "getdrawerposition"])
  },
  created() {
 // fetch menu from server
 // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
  }
};
</script>
