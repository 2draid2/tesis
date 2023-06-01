<template>
   <v-container fluid>
      <v-row>
         <v-col md="6">
            <h3>{{ farmitem.nombre }}</h3>
         </v-col>
         <v-col md="4">
            
         </v-col>
      </v-row>
      <v-row md="6">
         <v-col md="6">
            <h5>{{ farmitem.direccion }}</h5>
         </v-col>
         <h5>{{ farmitem.a_m_id }}</h5>
      </v-row>
   </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
   name: 'FarmDat',

   data: () => ({
      items: [],
      farmitem: { 'nombre': 'farm' },
   }),
   computed: {
      ...mapGetters('farm', ['farmUsedNow', 'farmListNow'])
   },
   watch: {
      farmUsedNow(newfarm) {
        // console.log('',this.farmitem)
         for (let index = 0; index < this.farmListNow.length; index++) {
            if (newfarm == this.farmListNow[index].f_id) {
               this.farmitem = this.farmListNow[index];
            }
         }
         this.cargar_med(newfarm)
      }
   },
   methods: {
      cargar_med(newfarm) {
        return newfarm
      },
   },
   components: {
   },
} 
</script>