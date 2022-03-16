<template lang="pug">
	div
		.container.mx-auto.px-4
			.grid.grid-cols-12.gap-4
				.col-span-8
					p a
				.col-span-4
					p b
</template>

<script lang="ts">
	import Vue from 'vue'
	import TheCarousel from '../components/dummy/TheCarousel.vue'

	export default Vue.extend({
		name: 'IndexPage',
		components: {
			TheCarousel
		}
	})
</script>

<style lang="scss" scoped>

</style>