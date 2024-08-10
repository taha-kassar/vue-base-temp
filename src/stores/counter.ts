import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})

// const count = ref(0)
// const doubleCount = computed(() => count.value * 2)
// function increment() {
//   count.value++
// }

// return { count, doubleCount, increment }
