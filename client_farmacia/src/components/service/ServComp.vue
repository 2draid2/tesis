    <!--card lateral-->
<template>
<v-card>
       <farm-serv v-on:select="selected"></farm-serv>
</v-card>
      <!--overlay para cargando...-->
  <v-overlay :model-value="overlay" class="align-center justify-center">
    <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>
<script>
import store from '@/store';
import { mapActions, mapMutations } from 'vuex';
import FarmServ from "./subservice/FarmServComp.vue";

//import NiceScroller from '@/components/adds/ScrollerComp.vue';

export default {
  name: 'Serv',

  components: {
    FarmServ,
  },
  data: () => ({
    farmlist: '',
    params: { limit: 10, skip: 2, page: 1, paget: 1 },
    overlay: false,
    loaded: false,
    loading: false,
    id: 0

  }),

  created() {
    this.cargar_datos()
  },

  methods: {
    ...mapActions('farm', ['lister','leng']),
    ...mapMutations('users', ['SET_USER_LIST']),
    async cargar_datos() {
      //
      this.farmlist = await this.lister(this.params)
      //users(this.farmlist),
      console.log(store.state)
    },
    selected(select){
       this.$emit('select', select);
    },
    onClick() {
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