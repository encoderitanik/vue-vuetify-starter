import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { _isDev } from '../consts'

import modules from './modules'

let plugins = []
if (_isDev) plugins.push(createLogger())

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins
})