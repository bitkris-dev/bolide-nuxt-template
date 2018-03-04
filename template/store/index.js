import Vuex from 'vuex'
import { default as mutations } from './mutations.js'
import { default as actions } from './actions.js'

var baseUrl
var baseApi

// Auto-generate a link variable useful for absolute paths, such as the ones needed my Open Graph
// Be sure that these auto-generated URLs correspond to your needs
switch (process.env.API_ENV) {
case 'production':
	baseUrl = 'https://{{ name }}.it'
	baseApi = 'https://api.{{ name }}.it'
	break

case 'staging':
	baseUrl = 'https://staging.{{ name }}.it'
	baseApi = 'https://api.staging.{{ name }}.it'
	break

case 'remote':
	baseUrl = 'http://127.0.0.1:{{ port }}'
	baseApi = 'https://api.staging.{{ name }}.it'
	break

default:
	baseUrl = 'http://127.0.0.1:{{ port }}'
	baseApi = 'http://127.0.0.1:3000'
	break
}

const store = () => new Vuex.Store({
	// global variables
	state: {
		// shared-saved variables in view session
		isIE11: false,
		isOutdatedBrowser: false,
		locales: ['en'],
		locale: 'en',
		baseUrl: baseUrl,
		api: {
			base: baseApi
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
