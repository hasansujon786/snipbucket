export const state = () => ({
  allLangList: [],
  selectedLang: {}
})
// mutations ==============================
export const mutations = {
  _getAllLangList(state, allLangList) {
    state.allLangList = allLangList
  },
  _getSelectedLang(state, selectedLang) {
    state.selectedLang = selectedLang
  }
}
// actions ==============================
export const actions = {
  getAllLangList({ commit }) {
    this.$axios.$get('/data/index.json').then(data => {
      commit('_getAllLangList', data)
    })
  },
  getSelectedLang({ commit }, langId) {
    this.$axios.$get(`/data/lang/${langId}.json`).then(data => {
      commit('_getSelectedLang', data)
    })
  }
}
// getters ==============================
export const getters = {
  allLangList: state => {
    return state.allLangList
  },
  selectedLang: state => {
    return state.selectedLang
  }
}
