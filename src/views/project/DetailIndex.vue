<template>
  <v-app app>
    <headtoolbar :list="menu" :tablist="detailtabs" :title="pagetitle" />
    <router-view />
  </v-app>
</template>

<script>
// const property = resolve => require(["./detailtabs/Property.vue"], resolve);
import { mapState, mapGetters } from "vuex";
// import contract from "./detailtabs/Contract.vue";
export default {
  components: {
    // property,
    // contract,
    headtoolbar: () => import("@/components/layout/AppbarDrawerExtend")
    // associate: () => import("./detailtabs/AssociateProject.vue"),
    // property: () => import("./detailtabs/Property"),
    // contract: () => import("./detailtabs/Contract.vue"),
    // document: () => import("./detailtabs/Document"),
    // issuelist: () => import("./detailtabs/IssueList"),
    // product: () => import("./detailtabs/Product"),
    // providing: () => import("./detailtabs/Providing"),
    // requirelist: () => import("./detailtabs/RequireList"),
    // schedule: () => import("./detailtabs/Schedule"),
    // trackpjt: () => import("./detailtabs/Track")
  },
  data: () => ({ tab: true }),
  methods: {
    fetchdrawerstatus() {
      // fetch menu from server
      // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
    }
  },
  computed: {
    ...mapState(["menu"]),
    ...mapState(
      { detailtabs: state => state.project.detailtabname },
      { pagetitle: state => state.project.title }
      // { menu: state => state.menu }
      // { pageTitle: state => state.pageTitle }
    )
  },
  created() {
    this.fetchdrawerstatus();
    this.$c;
  }
};
</script>
