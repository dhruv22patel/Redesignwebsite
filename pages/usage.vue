<template>
  <v-container class="black">
    <v-row no-gutters>
      <v-col
        v-for="n in 12"
        :key="n"
        cols="12"
        md="12"
        sm="12"
        xs="3">
        
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>