export default {
    // actions we use for asyncronous code
    login(context) {
        context.commit('setAuth', { isAuth: true })
    },
    logout(context) {
        context.commit('setAuth', { isAuth: false })
    }
}