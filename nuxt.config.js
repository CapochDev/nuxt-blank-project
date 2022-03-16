export default {
	target: 'static',

	head: {
		title: 'Titolo website',
		htmlAttrs: {
			lang: 'it'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [
		'~/assets/scss/style.scss',
		'~/assets/scss/fontawesome-free-6.1.0/fontawesome.scss',
		'~/assets/scss/fontawesome-free-6.1.0/regular.scss',
		'~/assets/scss/fontawesome-free-6.1.0/brands.scss',
		'~/assets/scss/fontawesome-free-6.1.0/solid.scss',
		'~/assets/scss/fontawesome-free-6.1.0/v4-shims.scss',
	],

	plugins: [
		'~/plugins/vue-slick-carousel.js'
	],

	components: true,

	buildModules: [
		'@nuxt/typescript-build',
		// https://v2.tailwindcss.com/docs/grid-column
		'@nuxtjs/tailwindcss'
	],

	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/gtm'
	],

	axios: {
		baseURL: '/'
	},

	// https://github.com/nuxt-community/gtm-module
	gtm: {
		enabled: false,
		id: 'GTM-XXXXXXX',
		pageTracking: false,
    	pageViewEventName: 'nuxtRoute'
	},

	build: {
	}
}
