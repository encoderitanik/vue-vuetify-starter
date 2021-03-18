import api from '../../api'
import { snakeToCamel } from '../../helpers'
import { mutations } from '../helpers'

const initialState = () => ({
  loading: false,
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
  $users: s => s.users.sort((a, b) => b.created_at - a.created_at)
}

const actions = {
  fetchUsers: async ({ commit, state: { loading } }) => {
    !loading && commit('SET', { loading: true })
    let res = await api.users.getAll()
    if (res.error) return res
    commit('SET', {
      pagination: {
        totalPage: res.users.total,
        perPage: res.users.per_page,
        currentPage: res.users.current_page,
      },
      users: res.users.data.map(
        user => snakeToCamel(user)
      )
    })
    commit('SET', { loading: false })
    return res
  },
  deleteUser: async ({ commit, dispatch }, id) => {
    commit('SET', { loading: true })
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