import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    pomodoroDuration: 1500,
    shortBreakDuration: 3,
    longBreakDuration: 10,
    finishedPomodoros: [],
    actualPomodoroTitle: 'Pomodoro'
  },
  mutations: {
    setActualPomodoroTitle (state, payload){
      state.actualPomodoroTitle = payload
    },
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
    getActualPomodoroTitle (state){
      return state.actualPomodoroTitle
    },
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
