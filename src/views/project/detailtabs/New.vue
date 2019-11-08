<template>
  <v-content>
    <v-toolbar flat v-if="toolbar">
      <v-toolbar-items>
        <v-btn text v-show="!importextend" @click="startimport">import</v-btn>
        <v-btn text v-show="importextend">下载模板</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndUp">
        
        <v-btn text v-show="importextend">save</v-btn>
        <v-btn icon @click="closeimport" v-show="importextend">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
    <v-card v-if="importextend" class="mb-12" color="grey lighten-1" height="600px">excel plus</v-card>
    <v-row gutters v-if="templatelist" style="padding:10px,10px,10px,10px">
      <v-col v-for="k in 10" :key="k" gutters>
        <v-card>
          <v-card-text>
            <div>templatename</div>

            <div class="text--primary">well meaning and kindly.</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">edit</v-btn>
            <v-btn text color="deep-purple accent-4" @click="selectitem">select</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- 引用插件，并且启动appbar上的扩展条 -->

    <property v-if="iputextend" />
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
  </v-content>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    property: () => import("./Property")
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
  //父向子传值时,子组件这样写,用于中转来自于父亲的数值
  props: {
    parentToChild: String
  },
  data: () => ({
    toolbar: true,
    importextend: false,
    templatelist: true,
    iputextend: false
  }),
  computed: {
    ...mapState(["menu", "pageTitle"])
    // ...mapGetters(["changeRedDark", "switchcolor(color)", "switchlang(to)"])
  },
  methods: {
    startimport() {
      this.importextend = true;
      this.templatelist = false;
      this.iputextend = false;
    },
    closeimport() {
      this.importextend = false;
      this.templatelist = true;
      this.iputextend = false;
    },
    selectitem() {
      this.iputextend = true;
      this.templatelist = false;
      this.importextend = false;
      this.toolbar = false;
      //启动appbar上的扩展条this.$root.e
    },
    parentfn() {
      //从子组件获取到的数据
    },
    fetchMenu() {},
    ...mapMutations([""]),
    ...mapActions([""])
  },
  created() {
    this.fetchMenu();
  }
};
</script>

<style></style>
