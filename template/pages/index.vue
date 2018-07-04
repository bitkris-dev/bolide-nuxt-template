<template>
	<div>
		<div id="page-wrapper">
			<div class="container">
				<div>
					<logo/>

					<h1 class="title">{{ title }}</h1>
					<h2 class="subtitle">{{ description }}</h2>

					<div class="links">
						<a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
						<a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

var title = '{{ title }}'
var desc = '{{ description }}'

export default {
	name: 'index',
	auth: false,
	scrollToTop: true,
	components: { Logo },
	data () {
		return {
			title: title,
			description: desc
		}
	},
	head () {
		return {
			title: this.title,
			meta: [
				{ name: 'robots', content: 'index,follow' },
				{ hid: 'description', name: 'description', content: this.description },

				{ hid: 'og:url', property: 'og:url', content: this.$store.state.baseUrl + this.$route.fullPath },
				{ hid: 'og:title', property: 'og:title', content: title },
				{ hid: 'og:description', property: 'og:description', content: this.description },

				{ hid: 'twitter:title', property: 'twitter:title', content: title },
				{ hid: 'twitter:description', property: 'twitter:description', content: this.description }
			]
		}
	}
}
</script>

<style lang="scss">
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title, .subtitle, .links {
	font-family: "Roboto", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.title {
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}
.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}
.links a {
	padding: 15px;
}
</style>