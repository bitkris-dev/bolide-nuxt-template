# bolide-nuxt-template

> Bolide is an advanced templated/boilerplate forked from nuxt.js starter-template

Get this template with the command:
`vue init bitkris-dev/bolide-nuxt-template`

The template is still in an alpha release and the question-based generator could lead to some errors.
Currently, I didn't find anything broken. If you find something wrong, please [create a new issue](https://github.com/bitkris-dev/bolide-nuxt-template/issues/new).

# Features
* Question-based options template, basic SEO and package.json generator
* You can automatically choose and install one of the following CSS Frameworks: [**Vuetify, Buefy, Element-UI, Bootstrap-Vue, AT-UI, MUSE-UI**]
* Auto-install packages
* Structure ready for multiple locales with **vue-i18n**
* Installed and configured **vee-validate**
* Some mutations and actions for SSR authentication token management
* Shipped with **monomer-css**, my own CSS atomic framework
* Shipped with **@nuxtjs/pwa** and **@nuxtjs/sitemap**

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
[Monomer-css](https://github.com/bitkris-dev/monomer-css)