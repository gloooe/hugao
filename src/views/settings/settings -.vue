<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :href="item.url">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <headtoolbar />
    <v-content style="padding-top:60px">
      <toolbar />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import toolbar from "../common/toolbar";
import headtoolbar from "../common/headtoolbar";
export default {
  components: { toolbar, headtoolbar },
  props: {
    source: String
  },
  data: () => ({
    searchtextfield: false,
    workdrawer: true,
    drawer: null,
    visibility: false,
    hideOnScroll: true,
    language: "中文"
  }),
  methods: {
    changeRedDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.visibility = !this.visibility;
    },
    fetchdrawerstatus() {
      // fetch menu from server
      // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
    }
  },
  computed: {
    ...mapState(["message", "menu", "pageTitle"])
  },
  created() {
    this.fetchdrawerstatus();
  }
};
</script>
