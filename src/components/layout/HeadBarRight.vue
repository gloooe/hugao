<template>
  <v-row justify="end">
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
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: {
    parentToChild: String
  },
  data: () => ({
    searchtextfield: false,
    language: "English",
    visibility: false
  }),
  computed: {
    ...mapState(["languages", "colors", "menu", "pageTitle"])
    // ...mapGetters(["changeRedDark", "switchcolor(color)", "switchlang(to)"])
  },
  methods: {
    fun() {
      this.$emit("childfn", this.msg, this.value2, this.value3, true);
    },
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
