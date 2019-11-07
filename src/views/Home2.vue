<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      temporary
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

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      elevate-on-scroll
      hide-on-scroll
      color="blue darken-3"
      dark
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <span class="hidden-sm-and-down primary--text text--lighten-2">{{
          $t("Google Contacts")
        }}</span>
      </v-toolbar-title>
      <v-text-field
        v-if="searchtextfield"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn
        icon
        v-if="!searchtextfield"
        @click="searchtextfield = !searchtextfield"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon @click="changeRedDark">
        <v-icon>{{ visibility ? "mdi-lightbulb-on" : "mdi-lightbulb" }}</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            {{ language }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="lang in languages"
            :key="lang"
            @click="switchlang(lang)"
          >
            <v-list-item-title>{{ lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y="offset-y">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-palette</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in colors"
            :key="n"
            :class="n"
            @click="switchcolor(n)"
          >
            <!-- <v-list-item-title>{{ lang}}</v-list-item-title> -->
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          />
        </v-avatar>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title background-color="transparent">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in 5" :key="item"> tab {{ item }} </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <router-view />

    <!-- <v-content>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in 5" :key="item">
          <router-view />
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-content> -->
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {
    source: String
  },
  data: () => ({
    tab: null,
    searchtextfield: false,
    drawer: null,
    visibility: false,
    language: "English",
    items: [
      { icon: "mdi-contacts", text: "Contacts", url: "/home2/project" },
      { icon: "mdi-history", text: "Frequently contacted", url: "/home2/tab" },
      { icon: "mdi-content-copy", text: "Duplicates", url: "/home2/cards" },
      { icon: "mdi-content-copy", text: "2col", url: "/home2/2col" },
      { icon: "mdi-content-copy", text: "new", url: "/home2/new" },
      { icon: "mdi-content-copy", text: "totop", url: "/home2/totop" },
      {
        icon: "mdi-contacts",
        "mdi-contacts": "mdi-contacts",
        text: "Labels",
        model: true,
        children: [{ icon: "mdi-contacts", text: "Create label" }]
      }
    ]
  }),
  computed: {
    ...mapState(["languages", "colors", "menu", "pageTitle"])
    // ...mapGetters(["changeRedDark", "switchcolor(color)", "switchlang(to)"])
  },
  methods: {
    changeRedDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.visibility = !this.visibility;
    },
    switchcolor(color) {
      switch (color) {
        case "blue":
          this.$vuetify.theme.themes.light.primary = "#3f51b5";
          break;
        case "green":
          this.$vuetify.theme.themes.light.primary = "#4CAF50";
          break;
        case "purple":
          this.$vuetify.theme.themes.light.primary = "#9C27B0";
          break;
        case "red":
          this.$vuetify.theme.themes.light.primary = "#F44336";
          break;
        default:
          break;
      }
    },
    switchlang(to) {
      switch (to) {
        case "中文":
          this.language = "中文";
          this.$i18n.locale = "zh-CN"; //关键语句
          break;
        case "English":
          this.language = "English";
          this.$i18n.locale = "en-US"; //关键语句
          break;
        default:
          break;
      }
    },
    fetchMenu() {
      // fetch menu from server
      // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
    }
  },
  created() {
    this.fetchMenu();
  }
};
</script>
