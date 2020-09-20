<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      relative
      color="#2B1031"
      dark
      extended
      
      
      src="https://artsyfartsylife.com/wp-content/uploads/2019/09/aubergine.jpg"
      
    >
<template>
  <img
    class="VuetifyLogo"
    alt="Vuetify Logo"
    src="zee5logo11.png"
  >
</template>

<style>
.VuetifyLogo {
  height: 50px;
  width: 70px;}
</style>

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(43,16,49,.7), rgba(0,0,0,.7)"
        ></v-img>
      </template>
     <!-- <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
      </v-btn>-->       <!--button code-->
      <v-toolbar-title>Filter</v-toolbar-title>

      <v-spacer></v-spacer>
      <Searchbox/>
<!--searchbox-->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      
      max-height="auto"
    >
      <v-container style="height: 1500px;">
      
      <slide/>
      </v-container>
    </v-sheet><!--secondary scroll and container-->
  </v-card>
