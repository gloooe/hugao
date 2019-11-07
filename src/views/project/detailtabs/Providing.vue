<template>
  <div>
providing
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
   props: {
    sortNo: String, //序号
    name: String, //名称
    quantity: floor, //数量
    qtyUnit: String, //数量单位
    status: String, //状态
    receptionDate: String, //接受时间
    projectlifttime: Intl, //项目开始结束的计划时间
    projectstation: String, //项目状态
    projectmembers: Array, //项目成员
    projectcomment: String //项目备注
  },
  data() {
    return {
    projectTypes: "", //项目类型
    projectID: "", //项目内部ID
    projectCode: "", //项目编号
    projectName: "新建项目", //项目名称
    projectcustomer: "", //客户公司
    projectContactor: "", //客户联系人
    projectlifttime: "", //项目开始结束的计划时间
    projectstation: "", //项目状态:未启动,进行中,完成,关闭,,
    projectmembers: "", //项目成员
    projectcomment: "" //项目备注
    };
  },
  computed: {
    ...mapGetters([" ", " "])
  },

  methods: {
    ...mapMutations([" "]),
    function() {}
  }
};
</script>
<style scoped>
</style>