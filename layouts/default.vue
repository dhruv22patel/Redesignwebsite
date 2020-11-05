<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
   <v-card class="overflow-hidden" style="background-color: #220B27" flat><!--The main colors for the Header -->
      
      <App/> <!-- header -->
      
     
        
        
          <SecondaryHeader/> <!--thing bellow header -->
   </v-card>
       

    
    <!-- Body -->
    <v-content light>
      <nuxt /> 
    </v-content>
    
    <!-- Footer -->
    <MainFooter/>
 
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