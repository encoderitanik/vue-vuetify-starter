import { _time } from '../consts'

const stringify = ({ key, value, day = 3, time }) => {
  let expires = time ? time : Date.now() + (day * _time.day)
  return `${key}=${value};expires=${new Date(expires).toISOString()};path=/`
}

const parse = value => {
  const exp = { 'true': true, 'false': false, 'null': null }
  return value in exp ? exp[value] : value
}

/**
 * @param {String | [ String ]} cookie - Single or multiple cookies
 */
export const set = cookie => {
  const cookies = typeof cookie === 'string' ? [cookie] : cookie
  cookies.forEach(cookie => {
    document.cookie = stringify(cookie);
  })
  //console.log('COOKIE SET: ', document.cookie);
}

/**
 * @param {String | [ String ]} cookieName
 */
const remove = cookieName => {
  let cookies = typeof cookieName === 'string' ? [cookieName] : cookieName
  set(cookies.map(c => ({ key: c, value: undefined, day: -1 })))
}

/**
 * 
 * @param {String | String[] } cookieName - Cookie name
 */
export const get = cookieName => {
  // Generating cookies object
  let cookies = document.cookie.split(';').reduce((acc, cookie) => {
    let [key, value] = cookie.split('=')
    return { ...acc, [key.trim()]: parse(value) }
  }, {})

  // Returning cookie
  return Array.isArray(cookieName)
    ? cookieName.reduce((acc, key) => cookies[key]
      ? { ...acc, [key]: cookies[key] }
      : acc, {})
    : cookies[cookieName]
}
/**
 * 
 * @param {String} cookieName
 */
const has = cookieName => get(cookieName) ? true : false


export default {
  set, get, has, remove
}