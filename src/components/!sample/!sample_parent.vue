<template>
  <div>
    <MyDemo ref="mydemo" :parentToChild="message" @childfn="parentfn" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    MyDemo: () => import("")
  },
  //父向子传值时,子组件这样写,用于中转来自于父亲的数值
  props: {
    parentToChild: String
  },
  data: () => ({
    message: ""
  }),
  computed: {
    ...mapState(["menu", "pageTitle"])
    // ...mapGetters(["changeRedDark", "switchcolor(color)", "switchlang(to)"])
  },
  methods: {
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
