<template>
  <v-card  style="margin-top: -64px;">
    <v-tabs
      v-model="tab"
      align-tabs="end"
    >
    <v-tab :value="1">{{ farmitem.nombre }}</v-tab>

    <v-spacer></v-spacer>
      <v-tab :value="2">Pills</v-tab>
      <v-tab :value="3">Personal</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        :value="1"
      >
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
            >
               <farm-dat></farm-dat>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item
      :value="2"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="i in 9"
            :key="i"
            cols="12"
            md="4"
          >
          <medicina></medicina>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
    <v-window-item
    :value="3"
  >
    <v-container fluid>
      <v-row>
        <v-col
          v-for="i in 9"
          :key="i"
          cols="12"
          md="4"
        >
          shjhajxjashxahxhasxahsxa
        </v-col>
      </v-row>
    </v-container>
  </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
//import store from '@/store';
import { mapGetters } from 'vuex';
import Medicina from "./subservice/MedicinaComp.vue";
import FarmDat from "./subservice/FarmaciaDatosComp.vue"

export default {
  name: 'MedServ',

  components: {
    Medicina,
    FarmDat,
  },
  data: () => ({
    items: [],
    componente: ['', '', ''],
    params: { limit: 10, skip: 2, page: 1, paget: 1 },
    overlay: false,
    loaded: false,
    loading: false,
    farmitem: {'nombre': 'farm'},
    tab:[]
  }),

//props: {pass: Number},


created() {
  this.cargar_med(this.farmUsedNow)
},

computed: {
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
    return newfarm
  },
  select() {
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