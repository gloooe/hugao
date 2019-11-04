<template>
  <v-row>
    <v-toolbar :extended="extended">
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text @click="clip">Link 1000</v-btn>
        <v-btn text @click="sl">Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </v-row>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    extended: false,
    drawer: false
  }),
  methods: {
    clip(){
      this.$store.commit('todrawertemporary')
    },
    ...mapMutations({
      clipa: "todrawertemporary" // clickTotal 是mutation 里的方法，totalAlise是重新定义的一个别名方法，本组件直接调用这个方法
    },{sl:"todrawerpermanent"}),
      }
};
</script>
