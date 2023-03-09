<template>
	<view class="container" v-if="!loading">
		<view class="main" v-if="goods.length">
			<view class="nav">
				<view class="header">
					<view class="left" v-if="orderType == 'takein'">
						<view class="store-name">
							<text>{{store.name}}</text>
							<view class="iconfont iconarrow-right"></view>
						</view>
						<view class="store-location">
							<image src='/static/images/order/location.png' style="width: 30rpx; height: 30rpx;" class="mr-10"></image>
							<text>距离您 {{ store.distance_text }}</text>
						</view>
					</view>
					<view class="left overflow-hidden" v-else>
						<view class="d-flex align-items-center overflow-hidden">
							<image src='/static/images/order/location.png' style="width: 30rpx; height: 30rpx;" class="mr-10"></image>
							<view class="font-size-extra-lg text-color-base font-weight-bold text-truncate">
								{{ address.street }}
							</view>
						</view>
						<view class="font-size-sm text-color-assist overflow-hidden text-truncate">
							由<text class="text-color-base" style="margin: 0 10rpx">{{ store.name }}</text>配送
						</view>
					</view>
					<view class="right">
						<view class="dinein" :class="{active:orderType == 'takein'}">
							<text>自取</text>
						</view>
						<view class="takeout" :class="{active:orderType == 'takeout'}">
							<text>外卖</text>
						</view>
					</view>
				</view>
				<view class="coupon">
					<text class="title">"霸气mini卡"超级购券活动，赶紧去购买</text>
					<view class="iconfont iconarrow-right"></view>
				</view>
			</view>
		</view>
	</view>
	<view class="loading" v-else>
		<image src="/static/images/loading.gif"></image>
	</view>
</template>

<script>
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				loading:false,
				goods:[],
				cert:[],//购物车
			};
		},
		computed:{
			...mapState(['store','address','orderType']),
			...mapGetters(['isLogin'])
		},
		mounted() {
			this.init()
		},
		methods:{
			...mapActions(['getStore']),
			...mapMutations(['SET_ORDER_TYPE']),
			async init(){
				this.loading = true
				await this.getStore()
				this.goods = await this.$api('goods')
				this.loading = false
				this.cert = uni.getStorageInfoSync('cert') || []
			}
		}
	}
</script>

<style lang="scss">
@import '@/pages/menus/menu.scss';
</style>
