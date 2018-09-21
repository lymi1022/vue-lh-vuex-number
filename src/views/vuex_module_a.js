import Vuex from 'vuex'
import Vue from 'vue'
const ADD = 'ADD'
const REDUCE = 'REDUCE'

Vue.use(Vuex)
const state = {
  moduleNumberA: 99,
  moduleNumberB: 111
}
const actions = {
  add ({ commit, state }, v) {
    commit(ADD, v)
  },
  reduce ({ commit, state }, v) {
    commit(REDUCE, v)
  }
}
const getters = {
}
const mutations = {
  [ADD] (state, v) {
    v.page === 'page_a' ? (state.moduleNumberA = state.moduleNumberA + 1) : (state.moduleNumberB = state.moduleNumberB + 1)
  },
  [REDUCE] (state, v) {
    v.page === 'page_a' ? (state.moduleNumberA = v.val - 1) : (state.moduleNumberB = v.val - 1)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
