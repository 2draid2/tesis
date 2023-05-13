import api from "./api";
import { defineComponent } from 'vue';


export default defineComponent({
   name: 'AutenticacionServices'
   
   methods(){
      register (credentials) {
      return api().post('register', credentials)
   }
   } 
})
