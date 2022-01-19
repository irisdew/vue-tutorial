import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  mutations: {
    increaseOne(state) {
      state.counter++;
    },
    increaseRandom(state, randomNumber) {
      state.counter += randomNumber
    },
    decrease(state) {
      state.counter--;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    getRandom({ commit }) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(res => {
        commit('increaseRandom', res.data)
      })
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
