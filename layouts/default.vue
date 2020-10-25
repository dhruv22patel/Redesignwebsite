<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
   <v-card class="overflow-hidden">
      
      <App/> <!-- header -->
      
     
        
        
          <FootApp/> <!--thing bellow header -->
   </v-card>
       

    
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
    background-color: rgb(42, 18, 48);
    color: rgb(0, 0, 0);
  }
</style>