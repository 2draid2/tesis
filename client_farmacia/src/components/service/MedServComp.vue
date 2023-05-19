<template>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Perferendis iste sed id minus quam neque quia eaque no
   strum? Minus recusandae voluptates debitis quae autem e
   ius nobis vero provident veritatis ipsa.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit
   . Nisi ipsam quae neque nobis repellendus aliquam totam
    tempore, quod unde deleniti magnam vitae reprehenderit
     voluptate excepturi voluptatibus ipsa, cum eos. Unde.
{{ 
}}<v-btn @click="cargar_datos">{{this.farmUsedNow}}</v-btn>
</template>
<script>
 import store from '@/store';
 import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  data: () => ({
    items:[],
    params: { limit: 10, skip: 2, page: 1, paget: 1 },
    overlay: false,
    loaded: false,
    loading: false,
    id_muestra: 0
  }),
  
  //props: {pass: Number},


  created() {
    this.cargar_datos()
  },
  
  computed: {
      ...mapGetters('farm', ['farmUsedNow']),
      
  },

  watch(farmUsedNow) {
    this.cargar_datos()
  },
  
  methods: {
     ...mapActions('farm', ['farmUsedNow']),

    async cargar_datos() {
      //
    console.log('watch en accion', farmUsedNow)
      this.overlay = !this.overlay
      //this.items = await this.lister(this.pass)
      this.overlay = !this.overlay
      //users(this.farmlist),
     // console.log('store en accion', store.state.farm.farmused)
    },
    select(id) {
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