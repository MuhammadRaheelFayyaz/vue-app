import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        posts: []
    },
    actions: {
        getUsers: ({ commit }, paylod) => {
            commit('getUsers', paylod)
        },
        setUser: ({ commit }, paylod) => {
            commit('setUser', paylod)
        },
        getPosts: ({ commit }, paylod) => {
            commit('getPosts', paylod)
        },
    },
    mutations: {
        getUsers: (state, paylod) => {
            state.users = paylod
        },
        setUser: (state, paylod) => {
            let { name, email } = paylod
            state.users.push({ name, email })
        },
        getPosts: (state, paylod) => {
            state.posts = paylod
        },
        setPost: (state, paylod) => {
            state.posts.unshift(paylod)
        }
    }
})