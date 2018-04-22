// import Vue from 'vue'
import extend from 'lodash/extend'

import utilities from './mutations/utilities.js'
import locales from './mutations/locales.js'

var mutations = extend({}, utilities, locales)

export default mutations
