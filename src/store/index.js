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
        async signin({ commit }, form) {
            return await AuthService.signin(form).then(
                (data) => {
                    commit('signinSuccess', data);
                    return Promise.resolve(data);
                },
                (error) => {
                    commit('signinFailure');
                    return Promise.reject(error);
                }
            );
        },
        async signup({ commit }, form) {
            return await AuthService.signup(form).then(
                (data) => {
                    commit('signinSuccess', data);
                    return Promise.resolve(data);
                },
                (error) => {
                    commit('signinFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        }
    },
    mutations: {
        signinSuccess(state, data) {
            state.user = data.user;
        },
        signinFailure(state) {
            state.user = null;
        },
        logout(state) {
            console.log('logout');
            router.push('/');
            state.user = null;
        }
    },
    plugins: []
});
export default store;
