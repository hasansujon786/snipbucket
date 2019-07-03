export const state = () => ({
  theme: ''
})
// mutations ==============================
export const mutations = {
  _setTheme(state, theme) {
    state.theme = theme
  }
}
// actions ==============================
export const actions = {
  setTheme({ commit }, theme) {
    commit('_setTheme', theme)
  }
}
// getters ==============================
export const getters = {
  getTheme: state => {
    return state.theme
  }
}
