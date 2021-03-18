import api from '../../api'
import { snakeToCamel } from '../../helpers'
import { mutations } from '../helpers'

const initialState = () => ({
  pagination: {
    currentPage: 1,
    totalPage: 1,
    perPage: 15,
  },
  users: []
})

const state = initialState()

const getters = {
  $pagination: s => s.pagination,
  $users: s => s.users.sort((a, b) => b.createdAt - a.createdAt)
}

const actions = {
  fetchUsers: async ({ commit }) => {
    let res = await api.users.getAll()
    if (res.error) return res
    commit('SET', {
      pagination: {
        totalPage: res.users.total,
        perPage: res.users.perPage,
        currentPage: res.users.currentPage,
      },
      users: snakeToCamel(res.users.data)
    })
    return res
  },
  deleteUser: async ({ commit, dispatch }, id) => {
    let res = await api.users.delete(id)
    if (res.error) return res
    commit('DELETE', { key: id, array: 'users' })
    dispatch('fetchUsers')
    return res
  }
}

const module = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}

export default module