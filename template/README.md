# {{ name }}

> Bolide is an advanced templated/boilerplate forked from nuxt.js starter-template

# Build Setup

### Install dependencies
`npm run setup`

### Serve with hot reload
`npm run dev`

### Build commands
`npm run build # API_ENV isn't set`
`npm run build-staging # API_ENV = 'staging'`
`npm run build-production # API_ENV = 'production'`

### Start commands
`npm run start # API_ENV isn't set`
`npm run start-staging # API_ENV = 'staging'`
`npm run start-production # API_ENV = 'production'`

### Generate static project commands
`npm run generate # API_ENV isn't set`
`npm run generate-staging # API_ENV = 'staging'`
`npm run generate-production # API_ENV = 'production'`

### Generate icons
Insert .svg files in the **/static/img/svg** directory and run:
`npm run svg`

Then you can import svg icons as components with:
`import '~/components/icons/icon-name.js'`
and:
`<svgicon name="icon-name" />`

-----------------------------------------

For detailed explanation on how things work, checkout both the [Nuxt.js docs](https://github.com/nuxt/nuxt.js) and the [Nuxt.js starter-template docs](https://github.com/nuxt-community/starter-template), from which this templated forked.

Other docs:
[Nuxt PWA](https://pwa.nuxtjs.org/)
[Vue-i18n](https://kazupon.github.io/vue-i18n/en/)
[Vue-svgicon](https://mmf-fe.github.io/vue-svgicon/)