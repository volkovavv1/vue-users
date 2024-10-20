import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      currentUserId: null,
    }
    },
  mutations: {
    setUserId(state, id) {
      state.currentUserId = id
    }
  }
})
//   setPrevPage() {
//     this.currentPage--
//   },
//   setNextPage() {
//     this.currentPage++
//   },
  
//   filter: false,
//   setFilter(param) {
//     this.filter = param
//   }
