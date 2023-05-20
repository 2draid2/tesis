export function getToken(){
   const vuexLocalStore = JSON.parse(localStorage.getItem('farmacia'))
   const token = vuexLocalStore ? vuexLocalStore.farmacia.auth.tokenAuth : ''
   return token;
}

export function getUser(){
   const vuexLocalStore = JSON.parse(localStorage.getItem('farmacia'))
   const token = vuexLocalStore ? vuexLocalStore.farmacia.auth.user : {}
   return token;
}
export function getUsers(){
   const vuexLocalStore = JSON.parse(localStorage.getItem('farmacia'))
   const token = vuexLocalStore ? vuexLocalStore.farmacia : {}
   return token;
}