import Vuex from 'vuex'
import Vue from 'vue'
import moduleA from '@/views/vuex_module_a'
const ADD = 'ADD'
const ADD_B = 'ADD_B'
Vue.use(Vuex)
const state = {
  numberA: 3,
  numberB: 8
}
const actions = {
  add ({ commit, state }, v) {
    commit(ADD, v)
  },
  addB ({ commit, state }, v) {
    commit(ADD_B, v)
  }
}
const mutations = {
  [ADD] (state, val) {
    state.numberA = state.numberA + 1
  },
  [ADD_B] (state, val) {
    state.numberB = state.numberB + 1
  }
}
const getters = {

}
const modules = {
  moduleA
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})
