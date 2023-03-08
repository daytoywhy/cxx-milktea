<template>
	<view class="container" v-if="!loading">
		
	</view>
	<view class="loading" v-else>
		<image src="/static/images/loading.gif"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading:true,
			};
		}
	}
</script>

<style lang="scss">
@import '@/pages/menus/menu.scss';
</style>
