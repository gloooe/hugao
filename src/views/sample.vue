<template>
  <v-content>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
            <v-toolbar flat>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
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
            
     
   
      <!-- <v-tab>One</v-tab>
      <v-tab>Two</v-tab>
      <v-tab>Three</v-tab>
      <v-tab>Four</v-tab>
      <v-tab>Five</v-tab> -->
     
 
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <span>Scheme</span>
                  <v-switch
                    v-model="$vuetify.theme.dark"
                    primary
                    label="Dark"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <span>Drawer</span>
                  <v-radio-group v-model="primaryDrawer.type" column>
                    <v-radio
                      v-for="drawer in drawers"
                      :key="drawer"
                      :label="drawer"
                      :value="drawer.toLowerCase()"
                      primary
                    />
                  </v-radio-group>
                  <v-switch
                    v-model="primaryDrawer.clipped"
                    label="Clipped"
                    primary
                  />
                  <v-switch
                    v-model="primaryDrawer.floating"
                    label="Floating"
                    primary
                  />
                  <v-switch v-model="primaryDrawer.mini" label="Mini" primary />
                </v-col>
                <v-col cols="12" md="6">
                  <span>Footer</span>
                  <v-switch v-model="footer.inset" label="Inset" primary />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text>Cancel</v-btn>
              <v-btn text color="primary">Submit</v-btn>
            </v-card-actions>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
  export default {
    data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
    }),
  }
</script>