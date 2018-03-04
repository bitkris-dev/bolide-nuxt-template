export default {
	async nuxtServerInit ({ commit, state }, { req, res }) {
		const Cookies = require('cookies')
		const cookies = new Cookies(req, res)
		let token = cookies.get('token')
		const axios = require('axios')
		// console.log(this)

		if (!token) {
			// Send a request to backend to get a token.
			try {
				const { data } = await axios.get('https://example.com/api/gettoken', { headers: { cookie: '' } })
				token = data.token
				commit('saveToken', token) // Pass our token to the client; We'll later deal with it on the real client side.
				// commit('getAccount')
				// console.log('got new token from server ', token)
			} catch (e) {
				// if (e) console.log('Error: ', e)
			}
		} else {
			// if token, get Account
			try {
				var configGet = { headers: {'Authorization': 'Bearer ' + token, 'Accept': 'application/json'} }

				const { data } = await axios.get(state.api.me, configGet)
				commit('saveAccount', data.data)
			} catch (e) {
				// if (e) console.log('Error: ', e)
			}
		}

		commit('saveToken', token)

		// No matter we have it in cookies or not on the client side, by making it in Vuex store, we can always use the one in store.
		axios.defaults.headers.common['cookie'] = `token=${token || ''}`
		// We don't have a cookie store on server; We'll need to pass it manually in headers.
	}
}
