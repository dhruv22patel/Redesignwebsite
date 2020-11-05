<template>
  <v-footer
    dark
    padless
    class="mt-lg-18 mt-sm-12 mt-8 black"><!-- Padless footer for beter responsiveness-->
    <v-card
      flat
      tile
      class="black -1 white--text text-left"
      style="background-color: #220B27"
    >

      
      <v-card-text class="white--text ml-4"><!-- start of the footer -->
      <v-row>
        <v-col
        md="12"
        cols="12">
        <p class="font-weight-black"><!-- thick font(roboto)-->
        About us 
        <br><br>Help Center
        <br><br>Privacy Policy 
        <br><br>Parental Control
        </p>
        </v-col>
        <v-col>
          <template>
            

            
            
            </template>

          <style>
          .VuetifyLog {
            height: 60px;
            max-width: 170px;
          }
          </style>
        </v-col>
      </v-row>
      </v-card-text>
    </v-card>
    <v-card class="black -1 white--text text-left">
                <v-row>
                <v-col><!-- list of the shows and the movies -->
                       <p class="font-weight-thin">  <v-card-text class="white--text pt-0">
                          <v-list-item three-line>
                          <v-list-item-content>
                            <v-list-item-title>ZEE5 Original</v-list-item-title>
                            <v-list-item-subtitle>
                             State of Siege: 26/11
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              XXX
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              Menatalhood
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              Rangbaaz
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                    </v-card-text>
                       </p>
                </v-col>

                <v-col>
                  <p class="font-weight-thin">
                         <v-card-text class="white--text pt-0">
                          <v-list-item three-line>
                          <v-list-item-content>
                            <v-list-item-title>Club Original</v-list-item-title>
                            <v-list-item-subtitle>
                             Fittrat
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              Jamai 2.0
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              Karrle Tu Bhi Mohabbat
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              Baarish
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                    </v-card-text>
                    </p>
                </v-col>
      
                <v-col>
                  <p class="helvetica-weight-thin">
                         <v-card-text class="white--text pt-0">
                          <v-list-item three-line>
                          <v-list-item-content>
                            <v-list-item-title>Premium ZEE5 Original</v-list-item-title>
                            <v-list-item-subtitle>
                             Mafia
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              REJECT
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              LaalBazaar
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              Rangbaaz
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                    </v-card-text>
                  </p>
                </v-col>
                </v-row>

      <v-divider></v-divider>
      <v-card-text style="text-align: center">
        
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-5 white--text"
          icon
        >
          <v-icon size="34px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<!--social media -->
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>