// import Vue from 'vue'
import extend from 'lodash/extend'

import utilities from './mutations/utilities.js'
import auth from './mutations/auth.js'
import locales from './mutations/locales.js'

var mutations = extend({}, utilities, auth, locales)

export default mutations
