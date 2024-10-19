// import { reactive } from "vue";

// export const store = reactive({
//   currentUser: {},
//   setCurrentUser(user) {
//     this.currentUser = user;
//   },
// })
import { createStore } from 'vuex'

export const store = createStore({
    state () {
      return {
        currentUser: { id: 1},
          mutations: {
              setUser(state, user) {
              state.currentUser = user
            }
          }
        }
      },
    mutations: {
        setUser(state, user) {
        state.currentUser = user
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
