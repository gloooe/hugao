<template>
  <div>
    文档管理
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 新建文档的属性
      docID: "", //文档内部ID
      docCode: "", //文档编号
      docName: "新建文档", //文档名称
      docDesc: "", //文档描述
      docCreator: "", //文档创建人
      docSize: "", //文档大小
      docModifyTime: "", //文档最后修改时间
      docCreateTime: "" //文档创建时间
    };
  },
  computed: {
    ...mapGetters([" ", " "]) // 列的名称来自于store或后台或和这个一样
  },

  methods: {
    ...mapMutations([" "]),
    function() {}
  }
};
</script>
<style scoped></style>
