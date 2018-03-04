// import Vue from 'vue'
import extend from 'lodash/extend'

import nuxtServerInit from './actions/nuxtServerInit.js'
import getAccount from './actions/getAccount.js'

var actions = extend({}, nuxtServerInit, getAccount)

export default actions
