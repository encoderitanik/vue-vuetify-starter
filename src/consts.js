export const _isDev = process.env.NODE_ENV === 'development'
export const _isProd = !_isDev

export const _baseURL = process.env.BASE_URL

export const _time = (() => {
  let ms = 1000
  let sec = ms * 1000
  let min = sec * 60
  let hour = min * 60
  let day = hour * 24
  let week = day * 7
  let month = day * 30
  let year = day * 365
  return { ms, sec, min, hour, day, week, month, year }
})()

export const _localServer = 'http://localhost:3500'
export const _remoteServer = 'https://myawesomedomain.com'
export const _serverBaseURL = _isDev ? _localServer : _remoteServer