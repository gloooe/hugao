<template>
  <v-app id="inspire">
    <v-navigation-drawer clipped app permanent>
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
    items: [
      { icon: "mdi-contacts", text: "Contacts", url: "/settings/userlist" },
      { icon: "mdi-history", text: "Frequently contacted", url: "/home2/tab" },
      { icon: "mdi-content-copy", text: "Duplicates", url: "/home2/cards" },
      { icon: "mdi-content_copy", text: "2col", url: "/home2/2col" },

      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Labels",
        model: true,
        children: [{ icon: "mdi-plus", text: "Create label" }]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "More",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: "mdi-settings", text: "Settings" },
      { icon: "mdi-message", text: "Send feedback" },
      { icon: "mdi-help-circle", text: "Help" },
      { icon: "mdi-download", text: "App downloads" },
      { icon: "mdi-keyboard", text: "Go to the old version" }
    ],
    language: "中文",
    // languages: ['zh-CN','en-US'],
    languages: ["中文", "English"],
    colors: ["blue", "green", "purple", "red"]
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
    ...mapState(["pagestatus.drawershow", "pagestatus.drawerposition"]),
    ...mapGetters(["getdrawershow", "getdrawerposition"])
  },
  created() {
    this.fetchdrawerstatus();
  }
};
</script>
