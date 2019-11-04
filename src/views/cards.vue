<template>
  <v-container class="grey lighten-5">
    <!-- <v-row>
      <v-col
        v-for="item in props.items"
        :key="item.name"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card v-for="i in 8" :key="i" class="pa-2" outlined tile>
          {{ k }} of {{ n + 1 }}
        </v-card>
      </v-col>
    </v-row> -->

    <v-row    gutters
    >
      <v-col
        v-for="k in 20"
        :key="k"
         gutters
      >
        <v-card  width="200px" height="500px"
        >
          {{ k }} of {{ k + 1 }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
