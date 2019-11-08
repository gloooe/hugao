<template>
  <v-toolbar flat dense style="background-color:transparent">
    <v-toolbar-items> </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-btn text>save</v-btn>
    <v-btn icon>
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="n in 5"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card>
            <v-btn text>
              ddsds
            </v-btn>
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" @click="">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card>
        </v-slide-item>
        <v-slide-item>
          <v-btn icon>
            <v-icon>mdi-expand-all</v-icon>
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </template>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style></style>
