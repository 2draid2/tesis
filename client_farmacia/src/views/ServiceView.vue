<template>
         <v-navigation-drawer permanent>
            <serv></serv>
         </v-navigation-drawer>

         <v-main style="height: 350px"></v-main>



       <!--overlay para cargando...-->
       <v-overlay :model-value="overlay" class="align-center justify-center">
         <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
       </v-overlay>
</template>
<script>
import Serv from "../components/service/ServComp.vue";

export default {
   name: 'Service',

   data: () => ({

   }),

   methods: {
      over() {
         this.overlay=!this.overlay
      },
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
   },
   components: {
    Serv,
   
  },
}
</script>