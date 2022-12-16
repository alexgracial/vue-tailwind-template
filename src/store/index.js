// import { createStore } from 'vuex'

// import AuthService from '../services/auth.service';

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })


import { createStore } from 'vuex';
import router from '../router';

 // SOLO SE UTILIZA PARA GUARDAR LA SESION DEL USUARIO.
 
const store = createStore({
    state: {
        user: null
    },
    actions: {
    },
    mutations: {
     
    },
    plugins: []
});

export default store;
