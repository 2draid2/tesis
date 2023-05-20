<template>
  <v-card  style="margin-top: -64px;">
    <v-tabs
      v-model="tab"
      color="deep-purple-accent-4"
      align-tabs="end"
    >
      <v-tab :value="1">Info</v-tab>
      <v-tab :value="2">Pills</v-tab>
      <v-tab :value="3">Contact</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        v-for="n in 3"
        :key="n"
        :value="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 9"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
import store from '@/store';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  data: () => ({
    items: [],
    params: { limit: 10, skip: 2, page: 1, paget: 1 },
    overlay: false,
    loaded: false,
    loading: false,
    farmitem: {},
    tab:[]
  }),

//props: {pass: Number},


created() {
  this.cargar_med(this.farmUsedNow)
},

computed: {
    ...mapGetters('farm', ['farmUsedNow', 'farmListNow']),
    // id_muestra=this.farmUsedNow
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
    //...mapActions('med', ['getMed']),

    async cargar_datos() {
    //
    //console.log('watch en accion', this.farmUsedNow)
    this.overlay = !this.overlay
    //this.items = await this.lister(this.pass)
    this.overlay = !this.overlay
    this.onClick()
    //users(this.farmlist),
    // console.log('store en accion', store.state.farm.farmused)
  },
  cargar_med(newfarm) {
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