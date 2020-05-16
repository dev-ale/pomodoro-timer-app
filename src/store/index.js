import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    pomodoroDuration: 10,
    shortBreakDuration: 3,
    longBreakDuration: 10,
    finishedPomodoros: []
  },
  mutations: {
    setPomodoroDuration (state, payload){
      state.pomodoroDuration = payload
    },
    setShortBreakDuration (state, payload){
      state.shortBreakDuration = payload
    },
    setLongBreakDuration (state, payload){
      state.longBreakDuration = payload
    },
    addFinishedPomodoro (state, payload) {
      state.finishedPomodoros.push(payload)
    },
  },
  actions: {
  },
  getters: {
    getPomodoroDuration (state){
      return state.pomodoroDuration
    },
    getShortBreakDuration (state){
      return state.shortBreakDuration
    },
    getLongBreakDuration (state){
      return state.longBreakDuration
    },
    getFinishedPomodoros (state){
      return state.finishedPomodoros
    },
  },
  modules: {
  }
})
