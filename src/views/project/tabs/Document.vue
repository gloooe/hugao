<template>
  <div>
    <div class="mc-navigation">
      <a href="#" class="mc-nav-item" mc-action="home">Home</a>
      <a href="#" class="mc-nav-item" mc-action="text">Texts</a>
      <a href="#" class="mc-nav-item" mc-action="icon">Icons</a>
      导航, it is from store or database
    </div>
    <div class="mc-header">
      工具栏...</div>
    <div class="mc-content">
      <div class="mc-layout" mc-layout-size="big | biggest">
        <div class="mc-card">...here is a table</div>
      </div>
    </div>
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
    ...mapGetters([" ", " "])   // 列的名称来自于store或后台或和这个一样
  },

  methods: {
    ...mapMutations([" "]),
    function() {}
  }
};
</script>
<style scoped>
</style>