import * as Cookies from 'js-cookie'

export default {
	saveToken (state, token) {
		Cookies.set('token', token)
		state.token = token
	},
	deleteToken (state, token) {
		Cookies.remove('token')
		state.token = ''
	},
	deleteAccount (state, token) {
		state.account = {}
	},
	saveAccount (state, account) {
		state.account = account
	}
}
