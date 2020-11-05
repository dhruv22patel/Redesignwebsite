<template><!-- slider -->
<v-card style="background-color: #2B1031" flat> <!--Background of the slider in order to match the one with the website -->
      <v-container style="border-bottom: 1.5px solid hsla(0,0%,100%,.5)" class="font-weight-thin">
      <p class="font-weight-thin"><subtitle-1> Top on ZEE5</subtitle-1></p>
      </v-container>



      <v-container style="max-height: 320px; ">
      <v-row>
        <v-col>
        <v-carousel
          hide-delimiters
          hide-delimiter-background
          show-arrows-on-hover="false"
          height="auto">
          <v-carousel-item :key="i" v-for="i in 2">
            <v-layout>

              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
               <v-img
              width="550">
              <!-- use of thumbnails to give the user a glumps of the show -->
              <v-flex> <!--For the responsiveness of the slide -->
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-227385/portrait/1920x770_520818177.jpg'"
                width="220px"
                class="responsive2"
                >
              
              </v-flex>
              </v-img>
              </v-col>
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-224669/portrait/1920x770_640789252.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-3015/portrait/1920x770_2108485985.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-188032/portrait/1920x770_681456904.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
               <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
               <v-img
              width="550">
              
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-2211/portrait/1920x770_1924575036.jpg'"
                width="220px"
                class="responsive2"
                >
              
              </v-flex>
              </v-img>
              </v-col>
               <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
               <v-img
              width="550">
              
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-178543/portrait/1920x770_1256355519.jpg'"
                width="220px"
                class="responsive2"
                >
              
              </v-flex>
              </v-img>
              </v-col>
              
            </v-layout>
          </v-carousel-item>
        </v-carousel>
        </v-col>
      </v-row>
      </v-container>


      <v-container style="border-bottom: 1.5px solid hsla(0,0%,100%,.5)" class="font-weight-thin">

       <p class="font-weight-thin"> Trending on ZEE5</p>

      </v-container>


      <v-container style="max-height: 310px;">
        <v-carousel
          hide-delimiters
          hide-delimiter-background
          show-arrows-on-hover="false"
          height="auto"
         
          show-arrows
          >
          <v-carousel-item :key="i" v-for="i in 2">
            <v-layout>
           
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">             
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-34667/portrait/mtviwmawards_192_783487492.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-86035/portrait/1920x770_337500092.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-6728/portrait/1920x770_180659001.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
                  <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-33204/portrait/1920x770_1777282099.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
               <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
               <v-img
              width="550">
              
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-366/portrait/1920x770_791248136.jpg'"
                width="220px"
                class="responsive2"
                >
              
              </v-flex>
              </v-img>
              </v-col>
               <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
               <v-img
              width="550">
              
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-2614/portrait/1920x770_990561933.jpg'"
                width="220px"
                class="responsive2"
                >
              
              </v-flex>
              </v-img>
              </v-col>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-container>



      <v-container style="border-bottom: 1.5px solid hsla(0,0%,100%,.5)" class="font-weight-thin">
       <subtitle-1> Popular on ZEE5</subtitle-1>
      </v-container>


      <v-container>
        <v-carousel
          hide-delimiters
          hide-delimiter-background
          show-arrows-on-hover="false"
          height="auto">
      
          <v-carousel-item :key="i" v-for="i in 2">
            <v-layout>
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-2615/portrait/1920x770_367930755.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-2395/portrait/1920x770_1704799057.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
              <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-1903/portrait/1920x770_2129135177.jpg'"
                width="220px"
                class="responsive2"
                >
              </v-flex>
              </v-col>
               <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-2922/portrait/1920x770_1739194297.jpg'"
                width="220px"
                class="responsive2">
              </v-flex>
              </v-col>
               <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
               <v-img
              width="550">
              
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-1741/portrait/1920x770_217301227.jpg'"
                width="220px"
                class="responsive2"
                >
              
              </v-flex>
              </v-img>
              </v-col>
               <v-col
                  cols="5"
                  md="3"
                  sm="4"
                  lg="2">
               <v-img
              width="550">
              
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-1138/portrait/1920x770_825129395.jpg'"
                width="220px"
                class="responsive2"
                >
              
              </v-flex>
              </v-img>
              </v-col>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
        
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
.containerh {
  width: 83.5%;
  height: auto;
}
</style>