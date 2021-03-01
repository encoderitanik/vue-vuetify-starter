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