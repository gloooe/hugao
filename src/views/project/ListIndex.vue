<template>
  <v-app id="appbardrawer">
    <headtoolbar :list="menu" :title="pageTitle" />
    <list />
    <!-- <router-view /> -->
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    headtoolbar: () => import("@/components/layout/AppbarDrawer"),
    list: () => import("./detailtabs/ListContent")
  },
  data: () => ({}),
  methods: {
    fetchdrawerstatus() {
      // fetch menu from server
      // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
    }
  },
  computed: {
    ...mapState(["message", "menu", "pageTitle"])
  },
  created() {
    this.fetchdrawerstatus();
  }
};
</script>
