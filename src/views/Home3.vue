<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-else="getdrawershow"
      v-model="drawer"
           :temporary="pagestatus.drawerposition"

      app
    >
    疯疯癫癫发
     
    </v-navigation-drawer> -->
    <v-navigation-drawer v-if="getdrawershow"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      :permanent="getdrawerposition"
      app
    >
      <router-view />
      <form>
        <v-text-field
          v-model="name"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>

        <v-btn class="mr-4">submit</v-btn>
        <v-btn>clear</v-btn>
      </form>
    </v-navigation-drawer>
    <headtoolbar />
    <v-content style="padding-top:50px">
      <toolbar />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapGetters} from "vuex";
import toolbar from "./common/toolbar";
import headtoolbar from "./common/headtoolbar";
export default {
  components: { toolbar, headtoolbar },
  props: {
    source: String
  },
  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    extended: false,
    drawer: true,
    visibility: false,
    hideOnScroll: true,
    dr: false,
    items: [
      { icon: "mdi-contacts", text: "Contacts", url: "/home2/project" },
      { icon: "mdi-history", text: "Frequently contacted", url: "/home2/tab" },
      { icon: "mdi-content_copy", text: "Duplicates", url: "/home2/cards" },
      { icon: "mdi-content_copy", text: "2col", url: "/home2/2col" },

      {
        icon: "mdi-contacts",
        "mdi-contacts": "mdi-contacts",
        text: "Labels",
        model: true,
        children: [{ icon: "mdi-contacts", text: "Create label" }]
      }
    ]
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
    ...mapState(["pagestatus.drawershow",'pagestatus.drawerposition']),
    ...mapGetters(["getdrawershow",'getdrawerposition'])
   
    
  },
  created() {
    this.fetchdrawerstatus();
  }
};
</script>
