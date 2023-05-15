    <!--card lateral-->
    <template>
         <v-list>
            <v-list-item >
                 <v-card-text>
                   <v-text-field
                     :loading="loading"
                     density="compact"
                     variant="solo"
                     label="Search pills"
                     append-inner-icon="mdi-magnify"
                     single-line
                     hide-details
                     @click:append-inner="onClick"
                   ></v-text-field>
                 </v-card-text>
            </v-list-item>

            <v-list-item v-for="f,i in farm" :key="i"
             :title='f.title' :value='f.values'></v-list-item>

         </v-list>


             <!--overlay para cargando...-->
             <v-overlay :model-value="overlay" class="align-center justify-center">
               <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
             </v-overlay>
   </template>
   <script>
   
   export default {
      name: 'Serv',
      methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
          this.overlay=!this.overlay
        }, 2000)
      },
   },
      data: () => ({
         farm:  [
            {'title': '01' , 'values' : 'la foca'},
            {'title': '02' , 'values' : 'la fg'},
            {'title': '03' , 'values' : 'la ffg'},
            {'title': '04' , 'values' : 'la gfd'},
            {'title': '05' , 'values' : 'la ggggg'},
            {'title': '06' , 'values' : 'la fddd'},
            {'title': '07' , 'values' : 'la ddeee'},
            {'title': '08' , 'values' : 'la eerr'},
            {'title': '09' , 'values' : 'la gg'},
            {'title': '10' , 'values' : 'la dff'},
            {'title': '11' , 'values' : 'la wewe'},
            {'title': '12' , 'values' : 'la wetrt'}
      ],
      overlay: false,
      loaded: false,
      loading: false,
   
      }),
   }
   </script>