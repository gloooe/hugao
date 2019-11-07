<template>
  <div>
    <!-- <v-btn @click="fun('data')" /> -->
    <!-- 来自于父亲的数值 -->
    <!-- {{ msg }} -->
    <v-tabs>
      <v-tab @click="test1">
        Recents
      </v-tab>
      <v-tab @click="test2">
        head
      </v-tab>
      <v-tab @click="test2">
        tab3
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: {
    parentToChild: String
  },
  data: () => ({
    msg: "",
    childvalue
  }),
  computed: {
    ...mapState(["menu", "pageTitle"])
    // ...mapGetters(["changeRedDark", "switchcolor(color)", "switchlang(to)"])
  },
  methods: {
    test1() {
      this.value = 1;
      this.$emit("test", this.value);
    },
    test2() {
      this.value = 2;
      this.$emit("test", this.value);
    },
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
