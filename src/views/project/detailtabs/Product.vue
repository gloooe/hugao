<template>
  <div>
    <v-content>
      <v-sheet color="grey lighten-3" v-show="!edit">
        <v-slide-group show-arrows v-model="slidegroup" active-class="primary">
          <v-slide-item
            style="margin:5px 10px 5px 0px"
            v-for="n in 5"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-card>
              <span @click="toggle" style="padding:0px 10px 0px 10px "
                >结构</span
              >
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i" @click="">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card>
          </v-slide-item>
          <v-slide-item style="margin:5px 0px 10px 0px">
            <v-btn icon>
              <v-icon>mdi-expand-all</v-icon>
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-toolbar flat dense>
        <v-btn text color="primary" v-show="!edit" @click="edit = !edit"
          >new</v-btn
        >
        <v-btn icon v-show="edit" @click="edit = !edit">
          <v-icon>mdi-arrow-left-circle</v-icon>
        </v-btn>

        <v-btn text v-show="edit" @click.stop="drawer = !drawer"
          >生成物料编码</v-btn
        >
        <v-btn text v-show="edit">save</v-btn>
        <!-- <v-btn icon v-show="edit" color="error" @click="edit = !edit">
          <v-icon>mdi-close</v-icon>
        </v-btn> -->
        <v-toolbar-items></v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn text v-show="!edit">关联到...</v-btn>
        <v-btn text v-show="!edit">提交审核</v-btn>
      </v-toolbar>
      <!-- 用于导入物料 -->
      <v-card v-if="edit" class="mb-12" color="grey lighten-1" height="600px"
        >excel plus
        <v-navigation-drawer floating absolute clipped right v-model="drawer">
          <v-list dense rounded>
            <v-list-item v-for="item in 3" :key="item" link>
              <v-list-item-icon>
                <v-icon>{{ item }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>

      <!-- 导入物料结束 -->
      产品图纸列表
    </v-content>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      slidegroup: null,
      edit: false,
      drawer: false,
      items: [{ title: "设置列表" }, { title: "配置权限" }, { title: "删除" }],
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
