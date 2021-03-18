import axios from 'axios'
import Cookies from 'js-cookie';

// Creating a axios instance
let api = axios.create({ baseURL: 'http://192.168.31.42:8000/api' })

// Request handler
export const h = async (callback, ...data) => {
  //Setting up access token to the header
  let accessToken = Cookies.get('accessToken')
  if (accessToken) api.defaults.headers = {
    Authorization: `Bearer ${accessToken}`
  }
  // handling request
  try { return toSuccess((await callback(...data)).data) }
  catch (error) { return toError(error) }
};

export const GET = (endpoint, query = {}) => api.get(`${endpoint}?${qs.stringify(query)}`)
export const POST = (endpoint, data) => api.post(endpoint, toFormData(data))
export const DELETE = (endpoint, id) => api.delete(endpoint, id)

const toSuccess = res => {
  // console.log('|-toSuccess-|', res);
  if (res.status === 'error') return toError(res)
  let mRes = { ...res }
  delete mRes.code
  delete mRes.status
  let data = {
    ...mRes,
    error: false,
    success: true,
    statusCode: res.code,
    statusText: res.status,
    message: res.message || 'Request succeeded'
  }
  return data
}

const toError = error => {
  let data = { error: true, success: false }
  if (error.response) {
    const res = error.response
    // console.log(res);
    data = {
      ...data,
      statusCode: res.status,
      statusText: res.statusText,
    }
    if (res.data.errors) data.errors = res.data.errors
    if (res.message) data.message = res.message
  }
  data.message = data.message || error.message
  return data
}

const qs = {
  stringify(data) {
    let str = [];
    for (let p in data)
      if (data.hasOwnProperty(p)) {
        str.push(
          encodeURIComponent(p) + "=" +
          encodeURIComponent(data[p])
        );
      }
    return str.join("&");
  },
}

const toFormData = obj => {
  let formData = new FormData()
  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value)
  })
  return formData
}
