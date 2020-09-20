<template>
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
</script>