<!--<template>
  <components>
    <v-row>
      <v-col>
        <v-card
          class="ma-5 pt-6"
          color="black"
          width="200px"
        >
          <v-card-text>
            Centered
          </v-card-text>
          </v-card>
      </v-col>

      <v-col>
        <v-card
          class="ma-5 pt-6"
          color="black"
          width="200px">
          <v-card-text>
            Centered
          </v-card-text>
          </v-card>
      </v-col>

            <v-col>
        <v-card
          class="ma-5 pt-6"
          color="black"
          width="200px">
          <v-card-text>
            Centered
          </v-card-text>
          </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="ma-5 pa-6"
          color="black"
          width="700px">
          <v-card-text>
            Centered
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          class="ma-5 pa-6"
          color="black"
          width="700px">
          <v-card-text>
            Centered
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </components>
</templet>-->


<template>
<v-container>
    <v-row
    no-gutters
    >
    <v-col
    v-for="i in 1"
    :key=i
    cols="4"
    md="4"
    >

      <v-card
        class="ma-3 pa-3"
      >

        <v-img
          src="https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-227385/portrait/1920x770_520818177.jpg">
          </v-img>
      </v-card>

    </v-col>

        <v-col
    v-for="i in 1"
    :key=i
    cols="12"
    md="4"
    >

      <v-card
        class="ma-3 pa-3"
      >

        <v-img
          src="https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-101-externall_1205972331/portrait/1920x770_1695133240.jpg">
          </v-img>
      </v-card>

    </v-col>


        <v-col
    v-for="i in 1"
    :key=i
    cols="12"
    md="4"
    >

      <v-card
        class="ma-3 pa-3"
      >

        <v-img
          src="https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-6-2395/portrait/1920x770_1704799057.jpg">
          </v-img>
      </v-card>

    </v-col>
    </v-row>

  <v-row
    no-gutters
   
    >
    <v-col
    v-for="j in 1"
    :key=j
    cols="12"
    md="6"
    
    >

      <v-card
        class="purple lighten-6 pa-1"
      >
        <v-img
          src="https://akamaividz2.zee5.com/image/upload/w_297,h_446,c_scale,f_auto,q_auto/resources/0-0-122732/portrait/hotel_mumbai_hi_1916686684.jpg"
          height="200">
          </v-img>
      </v-card>

    </v-col>

     <v-col
    v-for="j in 1"
    :key=j
    cols="12"
    md="6"
    >

      <v-card
        class="purple lighten-6 pa-4"
      >
        <v-card-text>
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
      </v-card>

    </v-col>
    </v-row>
</v-container>
  </template>

