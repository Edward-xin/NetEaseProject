import { RECEIVE_OLDVALLIST, RESET_OLDVALLIST } from '../mutation-types'

// 引入接口
import {} from '../../api'

const state = {
  oldValList: localStorage.getItem('search_history') || [] // value值的历史记录数组
}

const mutations = {
  // 保存历史记录数据
  [RECEIVE_OLDVALLIST](state, value) {
    state.oldValList.push(value)
    localStorage.setItem('search_history', state.oldValList)
  },
  // 清空历史记录数据
  [RESET_OLDVALLIST](state) {
    state.oldValList = []
    localStorage.removeItem('search_history')
  }
}

const actions = {
  // 保存历史记录数据
  saveOldValList({ commit }, value) {
    commit(RECEIVE_OLDVALLIST, value)
  },
  // 清空历史记录数据
  resetOldValList({ commit }) {
    commit(RESET_OLDVALLIST)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
