<!--<template>
  <v-container style>
    <v-btn
    icon
      @click="overlay = !overlay"
    >
    <v-icon>mdi-account</v-icon>
      
    </v-btn>

    <v-overlay :value="overlay">
      <v-btn
        icon
        @click="overlay = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-overlay>
</v-container>  
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
    }),
  }
</script>-->
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
         <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Parental control settings</span>
        </v-card-title>
        <v-card-text>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple-1" text @click="dialog = false">next</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>