<template>
  <v-footer
    dark
    padless
    class="mt-lg-16 mt-sm-20 mt-8"
    
  >
    <v-card
      flat
      tile
      class="black -1 white--text text-center"
    
    >

      
      <v-card-text class="white--text"><!-- start of the footer -->
        About us 
        <br><br>Help Center
        <br><br>Privacy Policy 
        <br><br>Parental Control
      </v-card-text>
      
                <v-row>
                <v-col><!-- list of the shows and the movies -->
                         <v-card-text class="white--text pt-0">
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
                </v-col>
                <v-col>
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
                </v-col>
                <v-col>
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
                </v-col>
                </v-row>

      <v-divider></v-divider>
      <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
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