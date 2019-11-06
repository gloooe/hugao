<template>
  <div class="mc-layout" mc-layout="1">
    <div class="mc-layout" mc-layout-size="big">
      <div class="mc-card">
        <div class="mc-content">here is table</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  
  data() {
    return {
    requireID: "", //需求内部ID
    requireCode: "", //需求编号
    requireName: "新建需求", //需求名称
    requireDesc: "", //需求描述
    requireCost: "", //需求的价格
    requireQuantity: "", //需求数量
    requireUnit: "", //需求数量单位
    requireCreateTime: "", //需求创建时间
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