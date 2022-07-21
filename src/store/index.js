import { createStore } from 'vuex'
import { setItem, getItem } from '../utils/storage'
export default createStore({
  state: {
    img: '',
    status: '',
    taglist: getItem('tag') || []
  },
  mutations: {
    imgUrl(state, imgUrl) {
      state.img = imgUrl
    },
    add(state, status) {
      state.status = status
      // localStorage.setItem('flag', state.status)
      // console.log(status)
    },
    tagview(state, ele) {
      // console.log(ele)
				let rel = true
				state.taglist.map(item => {
					if (item.name === ele.name) {
						rel = false
						return
					}
				})
				if(rel){
					state.taglist.push(
						ele
					)
				}
      setItem('tag', state.taglist)
      console.log(state.taglist)
    }
  },
  getters: {}
})
