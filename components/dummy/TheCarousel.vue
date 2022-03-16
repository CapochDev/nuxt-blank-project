<template lang="pug">
	div
		VueSlickCarousel(v-bind="settings")
			div Slide one
			div Slide two
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: 'TheCarousel',
		data() {
			return {
				// https://github.com/gs-shop/vue-slick-carousel/blob/master/docs/API.md
				// https://gs-shop.github.io/vue-slick-carousel/#/example/responsive
				settings: {
					arrows: true,
					dots: true,
					slidesToShow: 1,
					infinite: true,
					autoplay: false,
					autoplaySpeed: 3000,
					draggable: true,
					pauseOnHover: false,
					swipe: true,
					swipeToSlide: true,
					touchMove: true,
					responsive: [
						{
							breakpoint: 1024, // max-width: 1024px
							settings: {
								slidesToShow: 2
							}
						}
					]
				}
			}
		}
	})
</script>