<template>
  <v-app theme="dark">
    <v-container>
           <v-main>
            <nav-bar-comp app></nav-bar-comp>
            <Footer app></Footer>
           <nav-drawer></nav-drawer>
             <router-view/>
          </v-main> 
        </v-container>
 
        
  </v-app>
</template>

<script>

import NavBarComp from '@/components/adds/NavBarComp.vue';
import NavDrawer from '@/components/adds/NavDrawerComp.vue';
import Footer from '@/components/adds/FooterComp.vue';

//componente control scroll
//import NiceScroller from '@/components/adds/ScrollerComp.vue';

export default {
  name: 'App',

  components: {
    NavBarComp,
    NavDrawer,
    Footer,
   // NiceScroller
  },
  data: () => ({
    //
  }),
}
</script>
<style>
#fixedtop {
  position: absolute;
  display: block;
}
</style>
