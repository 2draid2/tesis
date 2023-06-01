<template>
   <v-footer class="d-flex flex-column" 
   v-bind:image="require('../../assets/estr.jpeg')" >
     <div 
     class="d-flex w-100 align-center px-4">
       <strong>Get connected with us on social networks!</strong>
 
       <v-spacer></v-spacer>
 
       <v-btn
         v-for="icon in icons"
         :key="icon"
         class="mx-4"
         :icon="icon"
         variant="plain"
         size="small"
       ></v-btn>
     </div>
 <div class="d-flex w-100">
  <div class="px-4 py-2 bg-black text-center w-50">
        developed by <strong>DR@ID</strong>
    </div>
    <div class="px-4 py-2 bg-black text-center w-50">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
 </div>
     
   </v-footer>
 </template>
<script>

export default {
   name: 'FooterComp',

   data: () => ({
    items: [
        {
          title: 'home',
          disabled: false,
          href: '/',
        },
        {
          title: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          title: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
   }),
}
</script>