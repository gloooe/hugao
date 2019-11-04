<template>
  <div >
    <v-row>
      <v-toolbar :extended="extended" flat>
        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text @click="lip">Link 1</v-btn>
          <v-btn text >Link 2</v-btn>
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
    <v-navigation-drawer v-if="primaryDrawer.clipped"
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :permanent="primaryDrawer.type"
   
      app
      
     
    >
      <form>
        <v-text-field
          :counter="10"
          label="Name"
          
        >123121</v-text-field>
        <v-text-field  label="E-mail" >123123</v-text-field>

        <v-btn class="mr-4">submit</v-btn>
        <v-btn>clear</v-btn>
      </form>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    extended: false,
    clipped:false,
    workdrawer:"",
    primaryDrawer: {
      model: null,
      type: true,
      clipped: true,
      floating: false,
      mini: false
    },
  }),
  methods: {
      lip(){
          this.primaryDrawer.clipped=!this.primaryDrawer.clipped
      }
  }
};
</script>
