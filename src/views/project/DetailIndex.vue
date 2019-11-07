<template>
  <v-app app>
    <headtoolbar :list="menu" :title="pageTitle" :tablist="detailtabs" />
    <!-- 在headbar上slot一个面包屑  -->
    <v-content style="padding-top:60px">
      <v-tabs-items>
        <v-tab-item>
          <router-view />
        </v-tab-item>
        <!-- <v-tab-item :value="'tab-' + i">
          需求列表,requirelist
          <requirelist />
        </v-tab-item>
        <v-tab-item>
          项目属性,property
          <property />
        </v-tab-item>
        <v-tab-item>
          合同管理
          <contract />
        </v-tab-item>
        <v-tab-item>
          文档管理
          <document />
        </v-tab-item>
        <v-tab-item>
          问题跟踪记录
          <issuelist />
        </v-tab-item>
        <v-tab-item>
          客户提供件
          <providing />
        </v-tab-item>
        <v-tab-item>
          产品文件和图纸
          <product />
        </v-tab-item>
        <v-tab-item>
          项目计划
          <schedule />
        </v-tab-item>
        <v-tab-item>
          项目跟踪
          <trackpjt />
        </v-tab-item> -->
      </v-tabs-items>
    </v-content>
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
    headtoolbar: () => import("@/components/layout/AppbarDrawerExtend"),
    associate: () => import("./detailtabs/AssociateProject.vue"),
    // property: () => import("./detailtabs/Property"),
    // contract: () => import("./detailtabs/Contract.vue"),
    document: () => import("./detailtabs/Document"),
    issuelist: () => import("./detailtabs/IssueList"),
    product: () => import("./detailtabs/Product"),
    // providing: () => import("./detailtabs/Providing"),
    requirelist: () => import("./detailtabs/RequireList"),
    schedule: () => import("./detailtabs/Schedule"),
    trackpjt: () => import("./detailtabs/Track")
  },
  data: () => ({ tab: true }),
  methods: {
    fetchdrawerstatus() {
      // fetch menu from server
      // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
    }
  },
  computed: {
    ...mapState(["message", "menu", "pagetitle"]),
    ...mapState(
      { detailtabs: state => state.project.detailtabname }
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
