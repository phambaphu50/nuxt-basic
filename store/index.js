import Vuex from 'vuex'
export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    }
}

// new Vuex.Store({
//     state: () => ({
//         counter: 0
//     }),
//     mutations: {
//         increment (state) {
//           state.counter++
//         },
//         decrement (state) {
//             state.counter--
//           }
//       },
// })