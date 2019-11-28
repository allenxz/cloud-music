import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

function storeLocalStore (state) {
  window.localStorage.setItem("state",JSON.stringify(state));
}

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  mutations: {
    LOGINED(state, data){
      state.userInfo = data;
      storeLocalStore (state);
    }
  },
  actions: {
    logined({commit}, data) {
      commit('LOGINED', data);
    }
  },
  modules: {
  }
})
