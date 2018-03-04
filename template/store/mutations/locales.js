export default {
	SET_LANG (state, locale) {
		if (state.locales.indexOf(locale) !== -1) {
			state.locale = locale
		}
	}
}
