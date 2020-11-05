    <template >
    
      <v-card class="ml-5" style="background-color: #220B27" 
      flat>
    
          <v-fab-transition><!--for the coloured circle behind the icons -->
              <v-btn
                v-show="!hidden"
                color="#CFA4CC"
                fab
                small
              >
                <v-icon>mdi-filter</v-icon><!--Filter icon -->
              </v-btn>
            </v-fab-transition>
        <v-bottom-navigation
          :value="activeBtn"
          color="white"
          horizontal
          background-color="#220B27"
          grow
          max-width="1600"
          
          >

          
          <!-- second step of the header -->
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