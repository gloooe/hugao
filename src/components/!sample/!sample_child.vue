<template>
  <div>
    <v-btn @click="fun('data')" />
    <!-- 来自于父亲的数值 -->
    {{ msg }}
    <router-link to="/new">new</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: {
    parentToChild: String
  },
  data: () => ({
    msg: ""
  }),
  computed: {
    ...mapState(["menu", "pageTitle"])
    // ...mapGetters(["changeRedDark", "switchcolor(color)", "switchlang(to)"])
  },
  methods: {
    fun() {
      this.$emit("childfn", this.msg, this.value2, this.value3, true);
    },
    fetchMenu() {},
    ...mapMutations([""]),
    ...mapActions([""])
  },
  created() {
    this.msg = this.parentToChild; //用于子组件中
    this.fetchMenu();
  }
};
</script>

<style></style>
