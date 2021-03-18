const SET = (state, payload) => {
  Object.entries(payload).forEach(
    ([key, value]) => (state[key] = value)
  )
}

const RESET = (state, initialState) => SET(state, initialState)
const PUSH = (state, { array, item }) => (state[array].push(item))
const UNSHIFT = (state, { array, item }) => (state[array].unshift(item))

const DELETE = (state, { array, match = 'id', key }) => {
  state[array] = state[array].filter(el => el[match] !== key)
}

const UPDATE = (state, { array, match = 'id', data }) => {
  state[array] = state[array].map(el => {
    return el[match] === data[match] ? data : el
  })
}

export const mutations = {
  SET, RESET, PUSH, UNSHIFT, DELETE, UPDATE
}