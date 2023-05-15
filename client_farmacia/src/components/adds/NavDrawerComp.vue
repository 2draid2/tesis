    <!--card lateral-->
<template>
   <v-container>
      <v-navigation-drawer v-bind:image="require('../../assets/back.jpg')" permanent>
         <v-list nav>
               <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
                  <template v-slot:append>
                  <v-btn
                  variant="text"
                    icon="mdi-logout"
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

export default {
   name: 'NavDrawer',

   data: () => ({

   }),
}
</script>