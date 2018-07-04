const CONFIG = require('./utils/config.js').default.getConfig(process.env.WP_ENV)

const spa = {{ spa }} // enable SPA mode

module.exports = {
	generate: {
		routes: [
			// insert here a list of routes with dynamic params
		]
	},
	router: {
	},
	// Head, favicon, manifest and SEO
	head: {
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },

			{ hid: 'fb:app_id', property: 'fb:app_id', content: '{{ fb_app_id }}' },
			{ hid: 'og:locale', property: 'og:locale', content: 'it' },
			{ hid: 'og:type', property: 'og:type', content: 'business.business' },

			{ hid: 'twitter:card', property: 'twitter:card', content: 'summary' },

			{ name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
			{ name: 'theme-color', content: '#ffffff' }
		],
		link: [
			{ rel: 'manifest', href: '/manifest.json' },
			{ rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
			{ rel: 'icon', type: 'image/png', href: '/icon.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
			{ rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#000000' },
			{ rel: 'shortcut icon', href: '/favicons/favicon.ico' }
		]
	},

	// SPA or Universal mode; the latter has server-side rendering
	mode: spa ? 'spa' : 'universal',

	build: {
		extractCSS: true,
		extend (config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: [/(node_modules)/, /(assets)/, /(plugins)/]
				})
			}
		}
	},

	module: {
		rules: [
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
			{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
			{ test: /\.svg$/, loader: 'raw-loader', exclude: /node_modules/ },
			{ test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)?(\?[a-z0-9#=&.]+)?$/, loader: 'url-loader' }
		]
	},

	modules: [
		['nuxt-i18n', {
			locales: CONFIG.locales,
			defaultLocale: 'en',
			vueI18n: {
				fallbackLocale: 'en'
			},
			lazy: true,
			langDir: 'locales/'
		}],
		['@nuxtjs/pwa', {
			manifest: false,
			icon: { iconSrc: 'static/icon.png' },
			meta: {
				ogHost: 'https://crea-test.com'
			}
		}],
		'@nuxtjs/sitemap',
		'@nuxtjs/axios',
		'@nuxtjs/auth'
	],

	icon: {
		iconSrc: '[srcDir]/static/icon.png'
	},

	axios: { baseURL: CONFIG.API_BASE },
	auth: {
		token: { name: 'token_{{ name }}' },
		cookie: { name: 'token_{{ name }}', options: { path: '/' } },
		redirect: {
			login: false,
			logout: '/',
			user: false
		},
		strategies: {
			local: {
				endpoints: {
					login: { url: '/api/v1/auth', method: 'post', propertyName: 'access_token' },
					logout: false,
					user: { url: '/api/v1/users/me', method: 'get', propertyName: 'data' }
				},
				tokenRequired: true,
				tokenType: 'Bearer'
			}
		}
	}
}
