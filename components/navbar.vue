<template>
  <div>
    <v-content>
      <template>
  <v-bottom-navigation
    v-model="bottomNav"
  background-color="rgb(32, 0, 68)">
    <v-btn value="recent">
      <span>Language</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="Settings">
      <span>Settings</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Parental control</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
hjg
<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
      }
    },
  }
</script>
    </v-content>
  </div>
</template>
<script>
</script>

<style> 
</style>