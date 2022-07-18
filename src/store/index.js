import { createStore } from 'vuex'

export default createStore({
  state: {
    img: ''
  },
  mutations: {
    imgUrl(state, imgUrl) {
      state.img = imgUrl
    }
  },
  getters: {
   
  }
})
