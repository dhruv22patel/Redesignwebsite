<template>
  <v-carousel
  height="500px"
  width="200px"
  cycle="true"
  interval="3000"
  show-arrows-on-hover="false"
  
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-101-externall_1205972331/cover/1170x658withlog_1210774572.jpg',
          },
          {
            src: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlog_1679931286.jpg',
          },
          {
            src: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-227385/cover/1170x658withlogo_713450159.jpg',
          },
          {
            src: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-1-manual_952bbgl792g0/cover/01manual_952bbg_2030694402.jpg',
          },
        ],
      }
    },
  }
</script>