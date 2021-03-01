/**
 * 
 * This will return a callback function to import specified Vue component inside views folder
 * @param {String} name - ViewName or child-folder/ChildView
 * @returns {Function} () => import('@/views/ViewName.vue')
 */
export const view = name => () => import(`@/views/${name}.vue`)

/**
 * 
 * This will return a callback function to import specified Vue component inside layouts folder
 * @param {String} name - LayoutName
 * @returns {Function} () => import('@/layouts/LayoutName.vue')
 */
export const layout = name => () => import(`@/layouts/${name}.vue`)

/**
 * 
 * @param {String} message 
 */
export const error = message => {
  return {
    error: true,
    message
  }
}

/**
 * 
 * @param {any} data 
 * @param {?String} message 
 */
export const success = (data, message) => {
  return {
    error: false,
    data, message
  }
}

/**
 * 
 * @param {any} value - 'true' -> true | '18' -> 18 | 'null' -> null
 */
export const fixType = value => {
  const types = {
    'true': true,
    'false': false,
    'null': null,
    'undefined': undefined
  }
  return +value
    ? +value
    : value in types
      ? types[value]
      : value
}

export const qs = {
  /**
   * 
   * @param {{key:String}} data 
   */
  stringify(data) {
    var str = [];
    for (var p in data)
      if (data.hasOwnProperty(p)) {
        str.push(
          encodeURIComponent(p) + "=" +
          encodeURIComponent(data[p])
        );
      }
    return str.join("&");
  },
  /**
   * 
   * @param {String} queryString 
   */
  parse(queryString) {
    return queryString
      .split('&')
      .reduce((acc, q) => {
        let [key, value] = q.split('=')
        return { ...acc, [key]: fixType(value) }
      }, {})
  }
}

// let foo

// let data = {
//   name: 'Anik',
//   age: 30,
//   email: true,
//   foo
// }
// console.log(qs.stringify(data));
// console.log(qs.parse(qs.stringify(data)));