<template>
  <v-navigation-drawer permanent>
    <serv></serv>
  </v-navigation-drawer>
    <med-serv>
    </med-serv>
<!--overlay para cargando...-->
  <v-overlay :model-value="overlay" class="align-center justify-center">
    <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>
<script>
import Serv from "../components/service/ServComp.vue";
import MedServ from "../components/service/MedServComp.vue";

export default {
  name: 'Service',

  data: () => ({
    id: 0
  }),

  methods: {
    over() {
      this.overlay = !this.overlay
    },
    selected(select) {
      this.overlay = !this.overlay
      //console.log('vew', select)
      this.id = select
    },
    onClick() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  },
  components: {
    Serv,
    MedServ
  },
}
</script>