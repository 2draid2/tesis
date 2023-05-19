<template>
  <v-container>
    <v-app-bar class="d-flex align-center">
      <v-btn>
        <v-icon height="48" color="yellow" left class="mr-2">mdi mdi-signature</v-icon>
        DRAID
      </v-btn>
      <v-spacer></v-spacer>
      <v-container v-model="drawer" permanent>
        <v-text-field v-model="item_s" :loading="loading" density="compact" variant="solo"
          label="Search pills" single-line hide-details>
        </v-text-field>
      </v-container>
      <v-btn :loading="loading" :disabled="this.item_s === '' || this.item_s === null" height="48" @click="search()">
        <v-icon left height="48" class="mr-2">
          mdi mdi-magnify
        </v-icon>
      </v-btn>
      <v-btn height="48" text @click="toggleTheme" class="">
        <v-icon height="48" class="mr-2">
          mdi mdi-brightness-6
        </v-icon>
      </v-btn>  <v-btn height="48" text to="/" class="">
        Home
      </v-btn>
      <v-btn height="48" text to="service">
        Services
      </v-btn>
      <v-btn height="48" text to="notice">
        Notice
      </v-btn>
      <v-btn height="48" text to="about">
        About
      </v-btn>
    </v-app-bar>

       <!--overlay para cargando...-->
       <v-overlay :model-value="overlay" class="align-center justify-center">
        <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
      </v-overlay>

  </v-container>
</template>
 
<script>
import { VNavigationDrawer } from 'vuetify/lib/components';
import { useTheme } from 'vuetify'


export default {
  name: "NavBarComp",
  

  data: () => ({
    loading: false,
    item_s: "",
    overlay: false,
    rules: [
      value => !!value || "Required.",
      value => (value || "").length <= 20 || "Max 20 characters",
    ],
  }),

  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  methods: {
    searchbd() {
      setTimeout(() => (this.overlay = false, this.item_s = ""), 1500);
    },

    search() {

      this.loading = true;
      setTimeout(() => (this.loading = false, this.overlay = true, this.searchbd()), 500);
    },

  },
  components: { VNavigationDrawer }
}
</script>
 