<template>

<v-card style="background-color: #2B1031" flat>
      <v-container style="max-height: 406px;"> <!-- container for the main carousel the max height of the main carousel is fixed to 406px -->
       <v-row>
        <v-col
            cols="12"
            md="12"
            sm="12"
            
            >
            <v-card flat><!-- for the flat look that goes on through the website -->
              
              <Carousel/><!-- main carousel  -->
          </v-card>
         </v-col>
        </v-row>
      </v-container>
 
    <v-container>        
          
     <Sliders/>  <!-- secondary Carousels (the small thumbnails)-->
   
    </v-container>
    

</v-card>
</template>
<script>
export default {}
</script>

<style> 
  .white--text {

  }

   #inspire {

  }
.responsive {
  width: 300.6%;
  height: auto;
}
.responsive2 {
  width: 83.5%;
  height: auto;
}

</style>