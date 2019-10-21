export const state = () => ({
  theme: 'dark',
  alerts: []
})
// mutations ==============================
export const mutations = {
  _setTheme(state, theme) {
    state.theme = theme
  },
  _pushAlert(state, newAlert) {
    // const preLenght = state.alerts.length
    state.alerts.unshift(newAlert)
  },
  _deleteAlertById(state, id) {
    this.state.alerts = state.alerts.filter(al => al._id !== id)
  }
}
// actions ==============================
export const actions = {
  setTheme({ commit }, theme) {
    commit('_setTheme', theme)
  },
  pushAlert({ commit }, newAlert) {
    commit('_pushAlert', newAlert)
  },
  deleteAlertById({ commit }, id) {
    commit('_deleteAlertById', id)
  }
}
// getters ==============================
export const getters = {
  getTheme: state => state.theme,
  getAlerts: state => state.alerts
}
