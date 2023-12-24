import { createStore } from 'vuex';
import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from "./getters"
import counterModule from "./modules/counter/index.js"

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
})


export default store