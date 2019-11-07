<template>
  <v-app id="appbarExtend">
  <v-app id="appbardrawer">
    <headtoolbar :list="menu" :title="pageTitle" :tablist="tabs" />
 <v-content style="padding-top:60px">
       <v-tabs-items v-model="tab">
        <v-tab-item>
          <router-view />
          <v-card flat>
            <v-card-text v-text="text1"></v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <router-view />
          <v-card flat>
            <v-card-text v-text="text2"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
          </v-content>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    headtoolbar: () => import("@/components/layout/AppbarDrawerExtend")
  },
  data: () => ({}),
  methods: {
    fetchdrawerstatus() {
      // fetch menu from server
      // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
    }
  },
  computed: {
    ...mapState(["tabs", "menu", "pageTitle"])
  },
  created() {
    this.fetchdrawerstatus();
  }
};
</script>

