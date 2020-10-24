<template>    
    <v-card 
    class="pa-2" 
    style="background-color: #220B27;"
    >
      <v-app-bar
        relative
        color="#220B27"
        flat
        >
    
      <v-col
      cols="1"
      md="12"
      sm="10">
       <VuetifyLogo/>
      </v-col>
          
          <v-spacer></v-spacer>
          
        <v-card class="mt-6 pa-12" style="background-color: #220B27;" flat width="700">  
              <v-row>
                <v-col
                    cols="12"
                    md="12"
                    sm="12"
                    >
                    <v-text-field
                      solo
                      light
                      rounded
                      label="Search"
                      append-icon="mdi-magnify">
                      </v-text-field>
                    </v-col>
              </v-row>            
        </v-card>
          <v-spacer></v-spacer>
            <v-btn icon
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-wrench</v-icon>
            </v-btn>
            

            <v-btn icon>
              <Parentalcontrol/>
            </v-btn>
          
            
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
    
      
      </v-app-bar>
    </v-card>
  </template>