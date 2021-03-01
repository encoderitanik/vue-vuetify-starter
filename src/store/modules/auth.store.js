const state = {
  isAuth: false
}

const mutations = {
  setAuth(state, isAuth) {
    state.isAuth = isAuth
  }
}

export default {
  namespaced: true,
  state,
  mutations
}