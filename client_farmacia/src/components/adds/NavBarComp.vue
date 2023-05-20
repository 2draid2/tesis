<template>
  <v-container>
    <v-app-bar class="d-flex align-center">
      <v-btn to="/about">
        <v-icon height="48" left class="mr-2">mdi mdi-signature</v-icon>
          <h2>DRAID</h2>
      </v-btn>
      <v-spacer></v-spacer>
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
 