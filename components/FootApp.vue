    <template >
      <v-card flat elevation="0">
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