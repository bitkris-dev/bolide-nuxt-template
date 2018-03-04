var spa = {{ spa }} // enable SPA mode

module.exports = {
	env: {
		API_ENV: process.env.API_ENV || 'development'
	},
	generate: {
		routes: [
			// insert here a list of routes with dynamic params
		]
	},
	router: {
		middleware: 'i18n'
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
		vendor: ['vue-i18n'],
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
			{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
			{ test: /\.svg$/, loader: 'raw-loader', exclude: /node_modules/ }
		]
	},

	plugins: ['~/plugins/i18n.js'],
	modules: [
		'@nuxtjs/sitemap',
		// '@nuxtjs/onesignal',
		['@nuxtjs/pwa', { manifest: false }]
	]
}
