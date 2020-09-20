<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!-- Body -->
    <v-content light>
      <nuxt /> 
    </v-content>
    
    <!-- Footer -->
    <footercopy/>
  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    border: 0px solid;
  }

   #inspire {
    background-color: rgb(43, 16, 49);
    color: black;
  }
</style>