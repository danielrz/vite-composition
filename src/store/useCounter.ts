import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    name: 'Daniel'
  }),
  getters: {
    doubleCount: (state) => {
      return state.counter * 2
    }
  },
  actions: {
    reset() {
      this.counter = 0
    },
    addOne() {
      this.counter++
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}