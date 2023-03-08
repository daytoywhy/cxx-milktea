<template>
	<view class="container">
		<view class="without-order" v-if="!Object.keys(order).length">
			<image src="/static/images/loading.gif" class="drinks-img"></image>
			<view class="text font-size-base text-color-assist">
				<view>您还没有点单</view>
				<view>快去犒劳一下自己吧~</view>
			</view>
			<button type="primary" class="drink-btn" size="default">去点餐</button>
			<view class="font-size-sm text-color-primary">查看历史订单</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {

			};
		},
		computed: {
			...mapState(['order'])
		}
	}
</script>

<style lang="scss">
	page {
		min-height: 100%;
	}

	.without-order {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.text {
			margin: 60rpx 0 80rpx;
			line-height: 48rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.drinks-img {
		height: 260rpx;
		width: 260rpx;
	}

	.drink-btn {
		width: 320rpx;
		border-radius: 50rem !important;
		margin-bottom: 40rpx;
		font-size: $font-size-base;
		line-height: 3.0;
		background-color:$color-primary ;
	}
</style>
