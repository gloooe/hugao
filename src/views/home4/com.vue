<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      style="margin-top:10px"
      fixed
      disable-resize-watcher
    >
      <batch />
    </v-navigation-drawer>
    <v-row style="margin-top:10px">
      <v-toolbar :extended="extended" flat dense>
        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text @click="btnimport">import</v-btn>
          <v-btn text @click="btnplan">process</v-btn>
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
  </div>
</template>

<script>
import batch from "./batch";
export default {
  components: { batch },
  data: () => ({
    extended: false,

    drawer: false
  }),
  methods: {
    btnimport() {
      this.drawer = !this.drawer;
      //切换路由
    },
    btnplan() {
      this.drawer = !this.drawer;
      //切换路由
    }
  }
};
</script>
