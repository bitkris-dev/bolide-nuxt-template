import Vuex from 'vuex'
import { default as mutations } from './mutations.js'
import { default as actions } from './actions.js'

const CONFIG = require('../utils/config.js').default.getConfig(process.env.WP_ENV)

const store = () => new Vuex.Store({
	// global variables
	state: {
		// shared-saved variables in view session
		isIE11: false,
		isOutdatedBrowser: false,
		locales: ['en'],
		locale: 'en',
		api: {
			base: CONFIG.API_BASE
		},
		account: {},
		token: ''
	},
	getters: {
		staticUrl: state => url => state.api.base + url
	},
	mutations,
	actions
})

export default store
