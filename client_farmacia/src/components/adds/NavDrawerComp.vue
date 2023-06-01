    <!--card lateral-->
<template>
   <v-container>
      <v-navigation-drawer
      expand-on-hover
      rail>
         <v-list nav>
               <v-list-item v-bind:prepend-avatar="require('../../assets/'+ this.foto)" :title="enline" nav>
                  <template v-slot:append>
                  <v-btn
                  variant="text"
                    icon="mdi-login"
                    @click="usuario()"
                  ></v-btn>
                </template>
               </v-list-item> 

                <v-divider></v-divider>

               <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
               <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors"
                  value="supervisors"></v-list-item>
               <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
         </v-list>
      </v-navigation-drawer>
   </v-container>
   
</template>
<script>
   import { mapState } from "vuex";

export default {
   name: 'NavDrawer',

  data: () => ({
        enline:'DRAID',
        foto: 'DRAID.jpg',
   }),

   computed: {

       },


       methods: {
         ...mapState('auth',['user']),
      
        usuario() {  
         this.enline= this.user().nombre
         this.foto= this.enline+'.jpg'
         console.log( this.user().nombre)
               },
       }

 
}
</script>