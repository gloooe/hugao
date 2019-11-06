<template>
  <v-app id="appbar">
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
        <span class="hidden-sm-and-down">{{$t('pagetitle')}}</span>
      </v-toolbar-title>
<headbarright />
    </v-app-bar>
 <v-content style="padding-top:60px">
      
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
//import { mapState, mapGetters } from "vuex";
import headbarright from "./HeadBarRight";
export default {
  components: {  headbarright },
  props: {
    drawerlist: Object
  },
  data: () => ({
    drawer: null,
    visibility: false,
  
  }),
  methods: {
    

  },
  computed: {
   // ...mapState(["pagetitle", ]),
   // ...mapGetters(["getdrawershow", "getdrawerposition"])
  },
  created() {
 // fetch menu from server
 // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
  }
};
</script>
