export default {
    testAuth(state, getters, rootState, rootGetters) {
        state, getters, rootGetters, rootState;
        return
    },
    finalCounter(state, otherGetters) {
        otherGetters;
        return state.counter * 3
    },
    normalizedCounter(_, getters) {
        // const finalCounter = state.counter * 3;
        // if (finalCounter < 0) {
        //     return 0
        // }
        // if (finalCounter > 100) {
        //     return 100
        // }
        // return finalCounter
        // .....................................if we can use other getteres
        const finalCounter = getters.finalCounter
        return finalCounter

    },
}