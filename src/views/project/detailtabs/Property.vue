<template>
  <!-- <div align="start" justify="justify">
    <v-card width="1200px"> -->
  <!-- <v-card-title class="grey darken-2">
        Create contact
      </v-card-title>
      
      <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
      
       -->
  <v-container>
    <v-card align="start" justify="center">
      <v-toolbar flat dense style="background-color:transparent">
        <v-toolbar-items> </v-toolbar-items>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn text >save</v-btn>
          <v-btn icon @click="$router.push('/')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-toolbar>
      <v-form v-model="property" style="margin:0px 80px 0px 80px">
        <v-row>
          <v-col cols="6">
            <!-- <v-select
              v-model="property.Status"
              :items="property.StatusList"
              label="type"
            ></v-select> -->
            <v-text-field
              v-model="property.Code"
              placeholder="projectCode"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="property.Name"
              placeholder="projectName"
            />
          </v-col>
          <!-- <v-col class="align-center justify-space-between" cols="12">
                 <v-row align="center">
                <v-avatar size="40px" class="mr-4">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  />
                </v-avatar>
                <v-text-field placeholder="Name" />
              </v-row> 
            </v-col>-->
          <v-col cols="6">
            <!-- 客户公司名称  -->
            <v-autocomplete
              v-model="property.Customer"
              :items="property.Customers"
              prepend-icon="mdi-domain"
              dense
              label="Company"
            ></v-autocomplete>
          </v-col>
          <!-- 客户公司联系人  -->
          <v-col cols="6">
            <v-autocomplete
              v-model="property.Contactor"
              :items="property.Contactors"
              dense
              label="Company contractor"
            ></v-autocomplete>
          </v-col>
          <!-- 项目开始结束的计划时间 -->
          <v-col cols="6">
            <v-text-field
              type="tel"
              prepend-icon="mdi-calendar"
              placeholder="2019/8/9~2020/9/9"
            />
          </v-col>
            <!-- 项目状态 -->
            <v-col cols="6">
              <v-select
                v-model="property.Status"
                :items="property.StatusList"
                label="Status"
              ></v-select>
            </v-col>
          </v-col>
          <!-- 项目结构 -->
          <v-col cols="12">
            <v-autocomplete
              v-model="property.Construction"
              :items="property.Constructions"
                    prepend-icon="mdi-group"
              dense
              chips
              small-chips
              label="Construction"
              multiple
            ></v-autocomplete>
          </v-col>
          <!-- 项目成员 -->
          <v-col cols="12">
            <v-autocomplete
            prepend-icon="mdi-account-group"
              v-model="property.Member"
             :items="property.Members"
              outlined
              dense
              chips
              small-chips
              label="Members"
              multiple
            ></v-autocomplete>
          </v-col>
          <!-- 项目备注 -->
          <v-col cols="12">
            <v-text-field
              v-model="property.comment"
              prepend-icon="mdi-note"
              placeholder="input more info."
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
  <!-- <v-card-actions>
        <v-btn text color="primary">More</v-btn>
        <v-spacer />
        <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
        <v-btn text @click="dialog = false">Save</v-btn>
      </v-card-actions>
  
  </div> -->
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
  },
  data() {
    return {
      property: {
        Types: "", //项目类型
        ID: "", //项目内部ID
        Code: "", //项目编号
        Name: "新建项目", //项目名称
        Customer: "", //客户公司
        Customers: [""], //客户公司
        Contactor: "", //客户联系人
        Contactors: [""], //客户联系人
        lifttime: "", //项目开始结束的计划时间
        Status: "", //项目当前状态
        StatusList: ["未启动","进行中","完成","关闭"], //项目状态:未启动,进行中,完成,关闭
        Construction:[],
        Constructions:['机械',"电气","程序","气动","备件","标准件"],
        Member: [], //项目成员
        Members: ['张三','乔峰'], //项目成员候选成员
        Comment: "" //项目备注
      }
    };
  },
  computed: {
    ...mapGetters([" ", " "])
  },

  methods: {
    save() {
      /* json格式提交： */
      // let formData = JSON.stringify(this.formMess);
 /* 本地储存,使用store的action异步提交： */
//  store.js
//  https://blog.csdn.net/yelin042/article/details/79951444
//  https://github.com/marcuswestin/store.js
      /* formData格式提交： */
      let formData = new FormData();
      for(var key in this.formMess){
        formData.append(key,this.formMess[key]);
      }
    },
    ...mapMutations([" "]),
    function() {}
  }
};
</script>
<style scoped></style>
