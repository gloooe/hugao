<template>
  <div>
    <!-- <MyDemo ref="mydemo" :parentToChild="message" @childfn="parentfn" /> -->
    <mytab @test="parentfn" />
    {{ value }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    mytab: () => import("./child")
  },
  //父向子传值时,子组件这样写,用于中转来自于父亲的数值
  props: {
    parentToChild: String
  },
  data: () => ({
    message: "",
    tab: null,
    value: ""
  }),
  computed: {
    ...mapState(["menu", "pageTitle"])
    // ...mapGetters(["changeRedDark", "switchcolor(color)", "switchlang(to)"])
  },
  methods: {
    parentfn(childvalue) {
      //从子组件获取到的数据
      this.value = childvalue;
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
