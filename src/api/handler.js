import axios from 'axios'
import { qs } from '../helpers';
import { _serverBaseURL } from '../consts';

// Creating a axios instance
let api = axios.create({ baseURL: _serverBaseURL })

// Request handler
const h = async (callback, ...data) => {

  // Setting up access token to the header
  // let accessToken = store.getters['Auth/$accessToken'] || cookies.get('access-token')
  // if (accessToken) api.defaults.headers['access-token'] = accessToken

  // handling request
  try { return await callback(...data); }
  catch (error) {
    return error.message.includes(NETWORK_ERROR)
      ? { err: error.message, msg: 'Network error or server is down. Please try again!' }
      : { err: error.response.data, msg: error.message };
  }
};

// Make a GET to the API
const get = async (endpoint, query = {}) => {
  const res = (await api.get(`${endpoint}?${qs.stringify(query)}`)).data;
  return { err: false, res };
};

// Make a POST to the API
const post = async (endpoint, data) => {
  const res = (await api.post(endpoint, data)).data;
  return { err: false, res };
};

const createAPI = (baseURL, endpoints) => {
  const api = axios.create({ baseURL })
  const handle = () => {

  }

  const getHandlers = (key) => {
    key = key.replace(/^\w/, fl => fl.toUpperCase())
    let sKey = key.slice(0, key.length - 1)
    return {
      ['get' + key]: () => { return [] },
      ['get' + sKey]: () => { return {} },
      ['create' + sKey]: () => { },
      ['update' + sKey]: () => { },
      ['delete' + sKey]: () => { }
    }
  }

  if (typeof endpoints === 'string')
    return getHandlers(endpoints.replace('/', ''))

  return Object.keys(endpoints).reduce((acc, key) => {
    return { ...acc, [key]: getHandlers(key) }
  }, {})
}

let users = createAPI(_serverBaseURL, '/users')
console.log(users);
console.log(users.getUsers());
console.log(users.getUser());

// Authentication
const ensureAuth = () => h(get, `/ensure-auth`)

// User
const signin = data => h(post, '/users/signin', data)
const fetchUser = ({ _id, query }) => h(get, `/users/${_id}`, query)