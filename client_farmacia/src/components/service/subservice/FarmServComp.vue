<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>
      <v-text-field :loading="loading" density="compact" variant="solo" label="Search pills"
        append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
    </v-card-title>

    <v-divider></v-divider>

    <v-virtual-scroll :items="items" height="390" item-height="40">
      <template v-slot:default="{ item }">
        <v-list-item :title="item.nombre" :subtitle="item.direccion" @click="select(item.f_id)" variant="tonal">
          <template v-slot:prepend>
            <v-icon class="bg-primary">mdi-home</v-icon>
          </template>

          <template v-slot:append>
            <v-btn icon="mdi-view-headline"  size="x-small"></v-btn>
          </template>
        </v-list-item>
      </template>

    </v-virtual-scroll>
    <div class="text-center">

      <!--pagination...-->

      <v-pagination v-model="params.skip" :length="params.leng" :total-visible="1" @click="cargar_datos"></v-pagination>
    </div>
  </v-card>

  <!--overlay para cargando...-->
  <v-overlay :model-value="overlay" class="align-center justify-center">
    <v-progress-circular color="black" indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>
<script>
import store from '@/store';
import { mapActions, mapMutations } from 'vuex';

export default {

  data: () => ({
    items: Array.from({ length: 25 }, (k, v) => v + 1),
    params: { limit: 10, skip: 1, leng: 1, paget: 1 },
    overlay: false,
    loaded: false,
    loading: false,
    page: 1,
  }),

  created() {
    this.cargar_datos()
  },

  methods: {
    ...mapActions('farm', ['lister', 'leng']),
    ...mapMutations('farm', ['SET_FARM_LIST', 'SET_FARM_USED']),

    async cargar_datos() {
      //
      this.overlay = !this.overlay
      this.items = await this.lister(this.params)
      this.params.leng = await this.leng(this.params)
      this.params.leng= this.params.leng[0].len/25+1
      this.overlay = !this.overlay
      this.SET_FARM_LIST( this.items)
      //users(this.farmlist),
      //console.log('farm serv', )
    },
    select(id) {
      //console.log('farm view id', id)
      this.SET_FARM_USED( id)
      //this.$emit('select', id);
      //console.log('farm view', store.state.farm.farmUsed)

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