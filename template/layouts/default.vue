<template>
	<div class="app">
		<nuxt :class="'page ' + $route.name"/>
	</div>
</template>

<style lang="css">
{{#switch css_framework}}
	{{#case "• Buefy" break=true}}
@import "bulma/css/bulma.css";
@import "buefy/lib/buefy.min.css";
	{{/case}}
	{{#case "• Bootstrap-Vue" break=true}}
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
	{{/case}}
	{{#case "• MUSE-UI" break=true}}
@import 'muse-ui/dist/muse-ui.css';
	{{/case}}
{{/switch}}
</style>

<style lang="scss">
@import "../assets/scss/custom_vars.scss";
@import "~monomer-css/scss/monomer.scss";
@import "../assets/scss/style.scss";
</style>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

// eslint-disable-next-line
import en from 'vee-validate/dist/locale/en.js'
// eslint-disable-next-line
import VeeValidate, { Validator } from 'vee-validate'

import * as svgicon from 'vue-svgicon'
import 'vue-svgicon/dist/polyfill'

{{#switch css_framework}}
	{{#case "• Vuetify"}}
import Vuetify from 'vuetify'
Vue.use(Vuetify)
	{{/case}}
	{{#case "• Buefy" break=true}}
import Buefy from 'buefy'
Vue.use(Buefy)
	{{/case}}
	{{#case "• Element-UI" break=true}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
	{{/case}}
	{{#case "• Bootstrap-Vue" break=true}}
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
	{{/case}}
	{{#case "• AT-UI" break=true}}
import AtComponents from 'at-ui'
import 'at-ui-style'
	{{/case}}
	{{#case "• MUSE-UI" break=true}}
import MuseUI from 'muse-ui'
Vue.use(MuseUI)
	{{/case}}
{{/switch}}
Vue.use(Vuex)

const vvConfig = { enableAutoClasses: true, locale: 'en', events: 'blur', errorBagName: 'vErrors' }
Vue.use(VeeValidate, vvConfig)

Vue.use(svgicon, { tagName: 'svgicon' })

Vue.config.productionTip = false

export default {
	head () {
		return {
			title: this.$t('home.SEO.title'),
			meta: [
				{ hid: 'description', name: 'description', content: this.$t('home.SEO.desc') },
				{ hid: 'keywords', name: 'keywords', content: this.$t('home.SEO.keywords') },
				{ hid: 'og:url', property: 'og:url', content: this.$store.state.baseUrl },
				{ hid: 'og:image', property: 'og:image', content: this.$store.state.baseUrl + this.$t('home.SEO.img') },
				{ hid: 'og:title', property: 'og:title', content: this.$t('home.SEO.title') },
				{ hid: 'og:description', property: 'og:description', content: this.$t('home.SEO.desc') },

				{ hid: 'twitter:title', property: 'twitter:title', content: this.$t('home.SEO.title') },
				{ hid: 'twitter:description', property: 'twitter:description', content: this.$t('home.SEO.desc') },
				{ hid: 'twitter:image', property: 'twitter:image', content: this.$store.state.baseUrl + this.$t('home.SEO.img') }
			],
			link: [
				{ rel: 'canonical', href: this.$store.state.baseUrl }
			]
		}
	},
	mounted () {
		this.setVeeValidateLocale(this.$i18n.loadedLanguages[0] || 'en')
		this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => { this.setVeeValidateLocale(newLocale) }
	},
	methods: {
		setVeeValidateLocale (locale) {
			const lang = require('vee-validate/dist/locale/' + locale + '.js')
			this.$validator.localize(locale, lang)
		}
	}
}
</script>
