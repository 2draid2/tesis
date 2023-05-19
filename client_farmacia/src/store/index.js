import { createStore } from 'vuex'
  
//create store
import farm from './modules/farm'
import auth from './modules/auth'
export default createStore({
  /*state: {
  },
  getters: {
  },
  mutations: {
  }, 
  actions: {
  },*/
  modules: {
    farm,auth
  }
})
