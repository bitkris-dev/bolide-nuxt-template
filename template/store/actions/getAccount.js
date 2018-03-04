export default {
	async getAccount ({ commit, state }) {
		// console.log('dentro action')

		const axios = require('axios')
		const configGet = { headers: {'Authorization': 'Bearer ' + state.token, 'Accept': 'application/json'} }

		try {
			const { data } = await axios.get(state.api.me, configGet)
			let account = data.data
			commit('saveAccount', account)
		} catch (e) {
			// if (e) console.log('Error: ', e)
		}
	}
}
