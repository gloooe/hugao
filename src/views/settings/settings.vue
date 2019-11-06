<template>
  <v-app id="inspire">
    <headtoolbar :list="menu" :title="pageTitle" />
    <v-content style="padding-top:60px">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    headtoolbar: () => import("@/components/layout/AppbarDrawer")
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
