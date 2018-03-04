// import Vue from 'vue'
import extend from 'lodash/extend'

import utilities from './mutations/utilities.js'
import auth from './mutations/auth.js'

var mutations = extend({}, utilities, auth)

export default mutations
