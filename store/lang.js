// const url = '/data'
const url = 'https://raw.githubusercontent.com/hasansujon786/snipbucket/master/data'
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
    this.$axios.$get(`${url}/index.json`).then(data => {
      commit('_getAllLangList', data)
    })
  },
  getSelectedLang({ commit }, langId) {
    this.$axios.$get(`${url}/lang/${langId}.json`).then(data => {
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
