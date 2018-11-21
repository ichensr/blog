import Vue from 'vue'
import Vuex from 'vuex'
import {getStore} from "../utils"
import * as types from './mutation-types'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    language: 0,
    screenWidth: getStore('screenWidth'),
    isActive: true
  },
  getters: {
    language: state => {
      return state.language
    },
    screenWidth: state => {
      return state.screenWidth
    },
    isActive: state => {
      return state.isActive
    }
  },
  actions: {
    setScreenwidth ({ commit }, payload) {
      commit(types.SET_SCREEN_WIDTH, payload)
    },
    ToggleSideBar ({ commit }, payload) {
      commit(types.TOGGLE_SIDEBAR, payload)
    },
  },
  mutations: {
    [types.CHANGE_LANGUAGE] (state, payload) {
      state.language = payload
    },
    [types.SET_SCREEN_WIDTH] (state, payload) {
      state.screenWidth = payload
    },
    [types.TOGGLE_SIDEBAR] (state, payload) {
      state.isActive = !state.isActive
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
