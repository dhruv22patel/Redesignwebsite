<template>
  <v-card class="overflow-hidden" style="background-color: #2B1031;">
    <v-card class="pa-2" style="background-color: #220B27;"
    >
    <v-app-bar
      relative
      color="#220B27"
      flat
      >
      
        <template>
          <img
            class="VuetifyLogo"
            alt="Vuetify Logo"
            src="zee5logo11.png">
        </template>
          <style>
          .VuetifyLogo {
            height: 85px;
            width: 120px;}
          </style>
          <v-spacer></v-spacer>
          
        <v-card class="mt-7 pa-0" style="background-color: #220B27;" flat>

            <box/>  

        </v-card>
          <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-wrench</v-icon>
            </v-btn>
            

            <v-btn icon>
              <Parentalcontrol/>
            </v-btn>
            
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
    
        </style>
      </v-app-bar>
    </v-card>
                
    <template >
      <v-card flat>
      <v-bottom-navigation
        :value="activeBtn"
        color="white"
        horizontal
        background-color="#220B27"
        grow
        max-width="1600"
        >
        
        <v-btn>
          <span>Home</span>
        </v-btn>

        <v-btn>
          <span>Originals</span>
        </v-btn>

        <v-btn>
          <span>Club</span>
        </v-btn>
            
        <v-btn>
          <span>More</span>
        </v-btn>


      </v-bottom-navigation>
    </v-card>
    </template>

      <script>
        export default {
          data () {
            return {
              activeBtn: 1,
            }
          },
        }
      </script>
              
          

    
      <v-container> <!--style="height: 1500px;"-->
        <slide/>
      </v-container>
            
            
          
      <v-container>
        Top on ZEE5
      </v-container>



      <v-container>
        <v-carousel
          hide-delimiters
          hide-delimiter-background
          show-arrows-on-hover="false">
          <v-carousel-item :key="i" v-for="i in 2">
            <v-layout row>
              <v-flex xs4 :key="j" v-for="j in 1">
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-227385/portrait/1920x770_520818177.jpg'">
              </v-flex>
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-224669/portrait/1920x770_640789252.jpg'">
              </v-flex>
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-188032/portrait/1920x770_681456904.jpg'">
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-container>


      <v-container>
        Trending on ZEE5
      </v-container>


      <v-container>
        <v-carousel
          hide-delimiters
          hide-delimiter-background
          show-arrows-on-hover="false"
          height="500">
          <v-carousel-item :key="i" v-for="i in 2">
            <v-layout row>
              <v-flex xs4 :key="j" v-for="j in 1">
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-34667/portrait/mtviwmawards_192_783487492.jpg'">
              </v-flex>
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-86035/portrait/1920x770_337500092.jpg'">
              </v-flex>

              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-6728/portrait/1920x770_180659001.jpg'">
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-container>



      <v-container>
        Popular on ZEE5
      </v-container>


      <v-container>
        <v-carousel
          hide-delimiters
          hide-delimiter-background
          show-arrows-on-hover="false">
      
          <v-carousel-item :key="i" v-for="i in 2">
            <v-layout row>
              <v-flex xs4 :key="j" v-for="j in 1">
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-2615/portrait/1920x770_367930755.jpg'">
              </v-flex>
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-2395/portrait/1920x770_1704799057.jpg'">
              </v-flex>
              <v-flex>
                <img :src="'https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-1903/portrait/1920x770_2129135177.jpg'">
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    
   


  </v-card>
