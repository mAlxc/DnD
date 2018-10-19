import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Maro\'s Help'
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      key: 'Fiches',
      storage: localStorage,
      paths: [],
      reducer: state => {
        const obj = {}
        return obj
      }
    })
  ]
})
