<template>
      <v-container class="align-self-center">
         <v-container class="d-block ">
            <v-container color="black" class=" text-center">
               <h1>
                  Bienvenidos
               </h1>
            </v-container>
            <v-container class="d-block">
               <v-sheet width="300" class="mx-auto">
                  <v-form validate-on="submit">
                     <v-text-field v-model="userName" :rules="rules" label="User name"></v-text-field>
                     <v-text-field v-model="password" :rules="rules" label="Password"></v-text-field>
                     <v-btn  @click="register" block class="mt-2">Submit</v-btn>
                  </v-form>
               </v-sheet>
            </v-container>
         </v-container>
      </v-container>
</template>
 
<script lang="ts">
import { useTheme } from 'vuetify';
import  AutenticacionServices  from "../services/AutenticacionServices.js";

export default {
   name: 'WelcomeView',

   data() {
      return{
      userName: '',
      password: '',
      autenticacion: false,
      rules: []
      }
   },

   mounted() {
          console.log('wwwwwwwwwwwww')
         const theme = useTheme()
         return theme.computedThemes.value;
   },


   methods: {
      async register(){
         this.autenticacion= await AutenticacionServices.register({
            email: this.userName,
            password: this.password
         })
         console.log(this.autenticacion);
      }
   }

}
</script>
