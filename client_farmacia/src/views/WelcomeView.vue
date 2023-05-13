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
                  <v-form validate-on="submit" @submit.prevent="submit">
                     <v-text-field v-model="userName" :rules="rules" label="User name"></v-text-field>
                     <v-text-field v-model="userName" :rules="rules" label="Password"></v-text-field>
                     <v-btn type="submit" block class="mt-2">Submit</v-btn>
                  </v-form>
               </v-sheet>
            </v-container>
         </v-container>
      </v-container>
</template>
 
<script lang="ts">
import { useTheme } from 'vuetify'

export default {
   data: vm => ({
      userName: '',
      rules: [
         value => vm.checkApi(value),
      ],
      timeout: null,
   }),

   mounted() {
    const theme = useTheme()

    return 
   },


   methods: {
      async submit(event) {
         const results = await event
         alert(JSON.stringify(results, null, 2))
      },
      async checkApi(userName) {
         return new Promise(resolve => {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
               if (!userName) return resolve('Please enter a user name.')
               if (userName === 'johnleider') return resolve('User name already taken. Please try another one.')

               return resolve(true)
            }, 1000)
         })
      },
   },


}
</script>
