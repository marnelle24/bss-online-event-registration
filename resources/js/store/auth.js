import axios from "axios"
import { routes } from '../routes'

const userStr = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

export default {
    namespaced: true,
    state: {
        authenticated: false,
        invalidLoggedIn: {},
        user: userStr,
        isActive: false
    },

    getters: {

        authenticated(state) {
            return state.authenticated
        },
        user(state) {
            return state.user
        },
        invalidLoggedIn(state) {
            return state.invalidLoggedIn
        },
        isActiveUser(state) {
            return state.isActive
        }

    },

    mutations: {

        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },
        SET_USER(state, value) {
            state.user = Object.assign({}, value.user, {token: value.access_token, type: value.token_type});
            localStorage.setItem("user", JSON.stringify(state.user));
        },

        LOGIN_FAILED(state, err) {
            state.invalidLoggedIn = {}
            state.invalidLoggedIn = err
        },

        ISACTIVEUSER(state, value) {
            // state.isActive = true
            state.isActive = value
        }

    },

    actions: {

        async login({ commit }, data) {
            return await axios.post('/api/login', data)
                    .then((response) => {
                        if(response.data.user.isActive) {
                            commit('SET_USER', response.data)
                            commit('SET_AUTHENTICATED', true)
                            commit('ISACTIVEUSER', true)
                            routes.push({ path: '/login' })
                        }
                        else {
                            commit('ISACTIVEUSER', false)
                        }
                    })
                    .catch((error) => {
                        commit('LOGIN_FAILED', {error})
                        commit('SET_USER', {})
                        commit('SET_AUTHENTICATED', false);
                    })
        },
        
        logout({ commit }) {
            localStorage.removeItem('user');
            commit('SET_USER', {})
            commit('SET_AUTHENTICATED', false);
        },
    }

}