<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    :hide-on-scroll="hideOnScroll"
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
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    visibility: false,
    hideOnScroll: true
  }),
  methods: {
    changeRedDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.visibility = !this.visibility;
    }
  }
};
</script>
