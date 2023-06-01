<template>
   <v-container fluid>
      <v-row>
        <v-col
          md="4"
        >
        <h3>{{ farmitem.nombre }}</h3>
        </v-col>
      </v-row>
   </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
   name: 'MedicinaComp',

   data: () => ({
    items: [],
    overlay: false,
    loaded: false,
    loading: false,
    farmitem: {'nombre': 'farm'},
  }),

    computed:{
      ...mapGetters('farm', ['farmUsedNow', 'farmListNow'])
    },
    watch: {
  farmUsedNow(newfarm) {
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