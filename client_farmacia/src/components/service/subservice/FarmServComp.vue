<template>
  <v-table
   fixed-header
    height="70vh"
    max-width="400px"
  >
    <thead>
      <tr>
        <th class="text-left">
          <v-text-field
          :loading="loading"
          density="compact"
          label="Search"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="search"
        ></v-text-field>
        </th>
      </tr>
    </thead>
    <tbody>
      <v-list>  
         <v-list-item
         v-for="item, i in items"
         :key="i"
          :value="item"
          active-color="primary"
          rounded="shaped"
          @click="select(item.f_id)"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
  
          <v-list-item-title v-text="item.f_id+' '+ item.nombre"></v-list-item-title>
        </v-list-item>
      </v-list>
    </tbody>
  </v-table>

  <!--paginacion-->
  <v-pagination
  v-model="page"
  :length="params.leng"
  rounded="circle"
></v-pagination>
  
  <!--overlay para cargando...--> 
     <v-overlay :model-value="overlay" contained class="align-center justify-center">
        <v-progress-circular color="black" indeterminate size="64"></v-progress-circular>
      </v-overlay>
   

    
</template>
<script>
//import store from '@/store';
import { mapActions, mapMutations } from 'vuex';

export default {


  data: () => ({
    items: Array.from({ length: 25 }, (k, v) => v + 1),
    params: { limit: 10, leng: 1, paget: 1 },
    overlay: false,
    loaded: false,
    loading: false,
    item_s: '',
    sticky: 'true',
    page: 1,
  }),

  created() {
    //console.log('farm serv created', this.page)
    this.cargar_datos_init()
  },
  computed() {

  },
  watch: {
    page(newpag) {
      //console.log('farm serv watch', this.hw)
      this.cargar_datos(newpag)
    }
  },


  methods: {
    ...mapActions('farm', ['lister', 'leng']),
    ...mapMutations('farm', ['SET_FARM_LIST', 'SET_FARM_USED']),


    async cargar_datos_init() {
      this.overlay = !this.overlay
      this.items = await this.lister(1)
      this.params.leng = await this.leng()
      this.params.leng = this.params.leng[0].len / 25 + 1
      this.overlay = !this.overlay
      this.SET_FARM_LIST(this.items)
           // console.log('farm serv', this.items)
    },


    async cargar_datos(skip) {
      //
      this.overlay = !this.overlay
      //console.log('farm serv', skip)
      this.items = await this.lister(skip)
      //console.log('farm serv', this.items)
      this.overlay = !this.overlay
      this.SET_FARM_LIST(this.items)
      //users(this.farmlist),
      //console.log('farm serv', )
    },

    select(id) {
      //console.log('farm view id', id)
      this.SET_FARM_USED(id)
      //this.$emit('select', id);
      //console.log('farm view', store.state.farm.farmUsed)

    },
    search() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
        this.overlay = !this.overlay
      }, 2000)
    },
  },

}
</script>