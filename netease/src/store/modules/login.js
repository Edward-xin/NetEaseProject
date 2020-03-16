import { RECEIVE_USER, REMOVE_USER } from '../mutation-types'

const state = {
  phoneOremail: JSON.parse(localStorage.getItem('user')) || ''
}

const mutations = {
  // 保存用户信息
  [RECEIVE_USER](state, phoneOremail) {
    state.phoneOremail = phoneOremail
  },
  // 删除用户信息
  [REMOVE_USER](state) {
    state.phoneOremail = ''
  }
}

const actions = {
  // 保存用户信息
  saveUser({ commit }, user) {
    let phoneOremail
    if (user.phone) {
      phoneOremail = user.phone
    } else if (user.email) {
      phoneOremail = user.email
    }
    commit(RECEIVE_USER, phoneOremail)
    localStorage.setItem('user', JSON.stringify(phoneOremail))
  },
  // 删除用户信息
  removeUser({ commit }) {
    commit(REMOVE_USER)
    localStorage.removeItem('user')
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
