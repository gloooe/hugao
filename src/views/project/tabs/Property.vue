<template>
  <div class="mc-layout" mc-layout="1">
<v-card>
        <v-card-title class="grey darken-2">
          Create contact
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row align="center">
                <v-avatar
                  size="40px"
                  class="mr-4"
                >
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Job title"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
          >More</v-btn>
          <v-spacer />
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
          <v-btn
            text
            @click="dialog = false"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    projectTypes: String, //项目类型
    projectID: String, //项目内部ID
    projectCode: String, //项目编号
    projectName: String, //项目名称
    projectcustomer: String, //客户公司
    projectContactor: String, //客户联系人
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