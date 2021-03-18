import { h, GET, POST, DELETE } from './handler.v2'

const api = {

  get: (endpoint, queries = {}) => h(GET, endpoint, queries),
  post: (endpoint, data) => h(POST, endpoint, data),

  // AUTHENTICATION
  auth: {
    login       : data        => h(POST,    '/login', data),
    register    : (data)      => h(POST,    '/register', data)
  },

  // USERS
  users: {
    getAll      : (queries)   => h(GET,     '/users/index', queries),
    get         : (id)        => h(GET,     '/users/show/' + id),
    save        : (data)      => h(POST,    '/users/create', data),
    update      : (data)      => h(POST,    '/users/update', data),
    delete      : (id)        => h(DELETE,  '/users/delete/' + id),
    search      : (data)      => h(POST,    '/users/search-employee', data)
  }
}

export default api