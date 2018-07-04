# bolide-nuxt-template

> Bolide-nuxt-template wants to be an advanced and always up-to-date version of **nuxt-community/starter-template**, with general purpose utilities and packages from the community (mainly nuxt-community) already installed and configured.

-----------------------------------------

# ✸ Why this boilerplate?
I've created it because most of the times I was "yarn install"-ing the same packages and configuring the same things over and over again too often for each project. With Bolide, it's everything already packed and ready to go in a few seconds!

#### Features
* Question-based template options, basic SEO meta tags and package.json generator
* You can automatically choose and install one of the following CSS Frameworks: [**Vuetify, Buefy, Element-UI, Bootstrap-Vue, AT-UI, MUSE-UI**]
* Auto-install packages
* Shipped with **monomer-css**, my own CSS atomic framework
* A **/utils/config.js** file to configure locales and environment-based variable such as Backend APIs URLs
* Installed and already configured **vee-validate**, **nuxt-i18n**, **@nuxtjs/pwa**, **@nuxtjs/auth** and **@nuxtjs/sitemap**

Currently, I didn't find anything broken. If you find something wrong, please [create a new issue](https://github.com/bitkris-dev/bolide-nuxt-template/issues/new).

-----------------------------------------

# ✸ How to use

Get this template with:  
`vue init bitkris-dev/bolide-nuxt-template`  

#### Commands
☼ Install dependencies:  
`npm run setup`  

☼ Check packages distribution with webpack-bundle-analyzer:  
`npm run analyze`  

☼ Serve with hot reload:  
`npm run dev`  

☼ Generate icons:  
Insert .svg files in the **/static/img/svg** directory and run:  
`npm run svg`  

then you can import svg icons with:  
`import '~/components/icons/icon-name.js'`  
and use as components with:  
`<svgicon name="icon-name" />`  

-----------------------------------------

#### Build commands
`npm run build # API_ENV isn't set`  
`npm run build-staging # API_ENV = 'staging'`  
`npm run build-production # API_ENV = 'production'`  

#### Start commands
`npm run start # API_ENV isn't set`  
`npm run start-staging # API_ENV = 'staging'`  
`npm run start-production # API_ENV = 'production'`  

#### Generate static project commands  
`npm run generate # API_ENV isn't set`  
`npm run generate-staging # API_ENV = 'staging'`  
`npm run generate-production # API_ENV = 'production'`  

-----------------------------------------

# ✸ Docs
For general explanation on how things work, checkout both the [Nuxt.js docs](https://github.com/nuxt/nuxt.js) and the [Nuxt.js starter-template docs](https://github.com/nuxt-community/starter-template), from which this templated forked.  

Other docs:  
[Nuxt-i18n](https://github.com/nuxt-community/nuxt-i18n)  
[@nuxtjs/pwa](https://pwa.nuxtjs.org/)  
[@nuxtjs/auth](https://github.com/nuxt-community/auth-module)  
[@nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module)  
  
[Vue-svgicon](https://mmf-fe.github.io/vue-svgicon/)  
[Monomer-css](https://github.com/bitkris-dev/monomer-css)  