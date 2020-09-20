<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-system-bar
      color="indigo darken-2"
      dark 
    ><!--The top system bar in-order to close oor minimize the grid card-->
      <v-spacer></v-spacer><!-- alignment for the system bar-->

      <v-icon>mdi-window-minimize</v-icon><!-- to minimize-->

      <v-icon>mdi-window-maximize</v-icon><!-- to maximize-->

      <v-icon>mdi-close</v-icon><!-- to close-->
    </v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon><!-- hamburger menu-->

      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon><!-- search icon-->
      </v-btn>
    </v-toolbar><!-- tool bar for information-->

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ><!-- for the thumbnail-->
              <v-card-title v-text="card.title"></v-card-title><!-- title text for eg {best airlines}-->
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn><!-- Icons for heart, bookmark, share icon-->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'second Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 16 },
      ],
    }),
  }
</script><!-- title, scr, flex-the size of the card(horizontaly)-->