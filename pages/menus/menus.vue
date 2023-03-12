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
						<view class="dinein" :class="{active:orderType == 'takein'}" @>
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
			<view class="content">
				<scroll-view class="menus" :scroll-into-view="menuScrollIntoView" scroll-y scroll-with-animation >
					<view class="wrapper">
						<view class="menu" :id="`menu-${item.id}`" :class="{'current': item.id === currentCateId}" v-for="(item, index) in goods" 
						:key="index" @tap="handleMenuTap(item.id)">
							<text>{{ item.name }}</text>
							<view class="dot" v-show="menuCartNum(item.id)">{{ menuCartNum(item.id) }}</view>
						</view>
					</view>
				</scroll-view>
				
				<scroll-view class="goods" scroll-with-animation scroll-y :scroll-top="cateScrollTop" @scroll="handleGoodsScroll">
					<view class="wrapper">
						<swiper :indicator-dots="true" :autoplay="true" :interval="3000" class="ads" id="ads">
							<swiper-item v-for="(item,index) in ads" :key="index">
								<image :src="item.image"></image>
							</swiper-item>
						</swiper>
						<view class="list">
							<view class="category" v-for="(item,index) in goods" :key="index" :id="`cate-${item.id}`">
								<view class="title">
									<text>{{item.name}}</text>
									<image :src="item.icon" class="icon"></image>
								</view>
								<view class="items">
									<view class="good" v-for="(good,key) in item.goods_list" :key="key">
										<image :src="good.images" class="image"></image>
										<view class="right">
											<text class="name">{{ good.name }}</text>
											<text class="tips">{{ good.content }}</text>
											<view class="price_and_action">
												<text class="price">￥{{ good.price }}</text>
												<view class="btn-group" v-if="good.use_property">
													<button type="primary" class="btn property_btn" hover-class="none"
													 size="mini">
														选规格
													</button>
													<view class="dot"v-show="goodCartNum(good.id)">
														{{goodCartNum(good.id)}}
													</view>
												</view>
												<view class="btn-group" v-else>
													<button type="default" v-show="goodCartNum(good.id)" plain class="btn reduce_btn"
													 size="mini" hover-class="none">
														<view class="iconfont iconsami-select"></view>
													</button>
													<view class="number" v-show="goodCartNum(good.id)">{{ goodCartNum(good.id) }}</view>
													<button type="primary" class="btn add_btn" size="min" hover-class="none" 
														>
														<view class="iconfont iconadd-select"></view>
													</button>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 购物车栏 begin -->
			<view class="cart-box" v-if="cart.length > 0">
				<view class="mark">
					<image src="/static/images/menu/cart.png" class="cart-img"></image>
					<view class="tag">{{ getCartGoodsNumber }}</view>
				</view>
				<view class="price">￥{{ getCartGoodsPrice }}</view>
				<button type="primary" class="pay-btn" @tap="toPay" :disabled="disabledPay">
					{{ disabledPay ? `差${spread}元起送` : '去结算' }}
				</button>
			</view>
			<!-- 购物车栏 end -->
		</view>
		<modal :show="goodDetailModalVisible" class="good-detail-modal" color="#5A5B5C"
				width="90%" custom padding="0rpx" radius="12rpx">
				<view class="cover">
					<image v-if="good.images" :src="good.images" class="image"></image>
					<view class="btn-group">
						<image src="/static/images/menu/share-good.png"></image>
						<image src="/static/images/menu/close.png"></image>
					</view>
				</view>
				<scroll-view class="detail" scroll-y>
					<view class="wrapper">
						<view class="basic">
							<view class="name">{{ good.name }}</view>
							<view class="tips">{{ good.content }}</view>
						</view>
						<view class="properties" v-if="good.use_property">
							<view class="property" v-for="(item, index) in good.property" :key="index">
								<view class="title">
									<text class="name">{{ item.name }}</text>
									<view class="desc" v-if="item.desc">({{ item.desc }})</view>
								</view>
								<view class="values">
									<view class="value" v-for="(value, key) in item.values" :key="key" 
									:class="{'default': value.is_default}" 
									@tap="changePropertyDefault(index, key)">
										{{ value.value }}
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="action">
					<view class="left">
						<view class="price">￥{{ good.price }}</view>
						<view class="props" v-if="getGoodSelectedProps(good)">
							{{ getGoodSelectedProps(good) }}
						</view>
					</view>
					<view class="btn-group">
						<button type="default" plain class="btn" size="mini" hover-class="none" 
							@tap="handlePropertyReduce">
							<view class="iconfont iconsami-select"></view>
						</button>
						<view class="number">{{ good.number }}</view>
						<button type="primary" class="btn" size="min" hover-class="none" 
							@tap="handlePropertyAdd">
							<view class="iconfont iconadd-select"></view>
						</button>
					</view>
				</view>
				<view class="add-to-cart-btn" @tap="handleAddToCartInModal">
					<view>加入购物车</view>
				</view>
		</modal>
		<popup-layer direction="top" :show-pop="cartPopupVisible" class="cart-popup">
			<template slot="content">
				<view class="top">
					<text>清空</text>
				</view>
				<scroll-view class="cart-list" scroll-y>
					<view class="wrapper">
						<view class="item" v-for="(item, index) in cart" :key="index">
							<view class="left">
								<view class="name">{{ item.name }}</view>
								<view class="props">{{ item.props_text }}</view>
							</view>
							<view class="center">
								<text>￥{{ item.price }}</text>
							</view>
							<view class="right">
								<button type="default" plain size="mini" class="btn" hover-class="none"
									>
									<view class="iconfont iconsami-select"></view>
								</button>
								<view class="number">{{ item.number }}</view>
								<button type="primary" class="btn" size="min" hover-class="none"
									>
									<view class="iconfont iconadd-select"></view>
								</button>
							</view>
						</view>
						<view class="item" v-if="orderType == 'takeout' && store.packing_fee">
							<view class="left">
								<view class="name">包装费</view>
							</view>
							<view class="center">
								<text>￥{{ parseFloat(store.packing_fee) }}</text>
							</view>
							<view class="right invisible">
								<button type="default" plain size="mini" class="btn" hover-class="none">
									<view class="iconfont iconsami-select"></view>
								</button>
								<view class="number">1</view>
								<button type="primary" class="btn" size="min" hover-class="none">
									<view class="iconfont iconadd-select"></view>
								</button>
							</view>
						</view>
					</view>
				</scroll-view>
			</template>
		</popup-layer>
	</view>
	<view class="loading" v-else>
		<image src="/static/images/loading.gif"></image>
	</view>
</template>

<script>
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	import modal from '@/components/modal/index.vue'
	import popupLayer from '@/components/popup-layer/index.vue'
	export default {
		components:{modal,popupLayer},
		data() {
			return {
				loading:false,
				goods:[],
				cert:[],//购物车
				menuScrollIntoView:'',
				currentCateId:6905,//默认选中
				cateScrollTop:0,
				ads: [
					{image: 'https://img-shop.qmimg.cn/s23107/2020/04/27/4ebdb582a5185358c4.jpg?imageView2/2/w/600/h/600'},
					{image: 'https://images.qmai.cn/s23107/2020/05/08/c25de6ef72d2890630.png?imageView2/2/w/600/h/600'},
					{image: 'https://img-shop.qmimg.cn/s23107/2020/04/10/add546c1b1561f880d.jpg?imageView2/2/w/600/h/600'},
					{image: 'https://images.qmai.cn/s23107/2020/04/30/b3af19e0de8ed42f61.jpg?imageView2/2/w/600/h/600'},
					{image: 'https://img-shop.qmimg.cn/s23107/2020/04/17/8aeb78516d63864420.jpg?imageView2/2/w/600/h/600'}
				],
				disabledPay:false,
				cart:[],
				goodDetailModalVisible:false,//商品详情
				cartPopupVisible:true,//购物车详情
				good:{},//当前饮品
			};
		},
		computed:{
			...mapState(['store','address','orderType']),
			...mapGetters(['isLogin']),
			menuCartNum(){
				return id => {
					
				}
			},
			goodCartNum(){
				return id => {
					
				}
			}
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
			},
			handleMenuTap(id){
				this.currentCateId = id
			},
			handleGoodsScroll(){},
			changePropertyDefault(){},
			getGoodSelectedProps(){},
		}
	}
</script>

<style lang="scss">
@import '@/pages/menus/menu.scss';
</style>
