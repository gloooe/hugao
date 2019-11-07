<template>
  <div>产品图纸</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 项目子组，来自于项目信息， 也可以新建和删除
      productGroup: [
        { groupID: "", groupName: "" },
        { groupID: "", groupName: "" }
      ],
      // 新建零件的属性
      productAttribute: [
        // 来自于store， 以下只是举例
        {
          partID: "", //零件内部ID
          partCode: "", //零件编号
          partName: "新建零件", //零件名称
          partQuantity: "", //零件数量
          partUnit: "", //零件数量单位
          partMaterial: "" //零件材料
          // partModifyTime: "", //零件最后修改时间
          // partCreateTime: "" //零件创建时间
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["productAttribute", " "]) // 列的名称来自于store或后台或和这个一样
  },

  methods: {
    ...mapMutations(["saveProductAttribute"]),
    function() {}
  }
};
</script>
<style scoped></style>
