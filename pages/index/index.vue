<template>
	<view class="contanier">
		<view class="banner">
			<image src="https://img.zcool.cn/community/01b06760051fb211013e3991f50046.png" mode="center" class="bg"></image>
			<view class="introl">
				<view class="greet">
					您好，{{ isLogin ? member.nickname : '旅行者'}}
				</view>
				<view class="note">
					一杯奶茶，一支冰淇淋，在蜜雪遇见两种美好
				</view>
			</view>
		</view>
		<view class="content">
			<view class="entrance">
				<view class="item">
					<image src="/static/images/index/zq.png" mode="" class="icon"></image>
					<view class="title">
						自取
					</view>
				</view>
				<view class="item">
					<image src="/static/images/index/wm.png" mode="" class="icon"></image>
					<view class="title">
						外卖
					</view>
				</view>
			</view>
			<view class="info">
				<view class="left">
					<view class="top">
						<text class="title">我的积分</text>
						<text class="value">666</text>
					</view>
					<view class="bottom">
						进入积分商城兑换奈雪券及周边好礼
						<view class="iconfont iconarrow-right"></view>
					</view>
				</view>
				<view class="right">
					<image src="/static/images/index/qrcode.png" mode="" class="qrcode"></image>
					<text>会员码</text>
				</view>
			</view>
			<view class="nav">
				<view class="left">
					<view class="introl-top">
						<view class="top-box">
							<image src="/static/images/index/csc.png" mode="" class="mark-img"></image>
							<view class="lip">
								蜜雪的商城
							</view>
						</view>
						<view style="margin-left: 40rpx; font-size: 20rpx; color:#919293">
							优质茶礼盒，网红零食
						</view>
					</view>
					<view class="introl-top" style="align-items: flex-end;justify-content: flex-end">
						<image src="/static/images/index/yzclh.png" mode="heightFix" class="yzclh-img"></image>
					</view>
				</view>
				<view class="right">
					<view class="tea-active">
						<image src="/static/images/index/mcsb.png" class="mark-img"></image>
						<view>买茶送包</view>
						<view class="right-img">
							<image src="/static/images/index/mcsb_bg.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="member-gifts">
						<image src="/static/images/index/hyjb.png" class="mark-img"></image>
						<view>会员有礼</view>
						<view class="right-img">
							<image src="/static/images/index/hyjb_bg.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="member-news">
				<view class="header">
					<view class="title">
						会员新鲜事
					</view>
					<view class="iconfont iconRightbutton"></view>
				</view>
				<view class="list">
					<view class="item">
						<image src="https://img-shop.qmimg.cn/s23107/2020/04/27/0039bf41c9ebd50a2c.jpg"></image>
						<view class="title">"梅"你不行 | 霸气杨梅清爽回归</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters,mapState } from 'vuex'
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		computed:{
			...mapGetters(['isLogin']),
			...mapState(['member'])
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	/* #ifdef H5 */
	page {
		height: auto;
		min-height: 100%;
	}
	/* #endif */
.contanier{
	.banner{
		position: relative;
		width: 100%;
		height: 600rpx;
		.bg{
			width: 100%;
			height: 600rpx;
		}
		.introl{
			position: absolute;
			top: calc(50rpx + var(--status-bar-height));
			left: 40rpx;
			color: #fff;
			display: flex;
			flex-direction: column;
			.greet{
				font-size: $font-size-lg;
			}
			.note{
				font-size: $font-size-sm;
			}
		}
	}
	.content{
		padding:0 30rpx;
		.entrance{
			position: relative;
			margin-top: -80rpx;
			margin-bottom: 30rpx;
			border-radius: 10rpx;
			background-color: #fff;
			box-shadow: $box-shadow;
			padding:30rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.item{
				flex:1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position:relative;
				&:nth-child(1)::after{
					content: '';
					width: 1rpx;
					height: 100%;
					position: absolute;
					background-color: #ddd;
					right: 0;
					transform: scaleX(0.5) scaleY(0.8);
				}
				.icon{
					width: 84rpx;
					height: 84rpx;
					margin:20rpx;
				}
			}
		}
		.info{
			position: relative;
			background-color: #fff;
			border-radius: 10rpx;
			margin-bottom:30rpx;
			box-shadow: $box-shadow;
			padding:30rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.left{
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.top{
					display: flex;
					align-items: center;
					.title{
						color: $text-color-base;
						font-size: $font-size-base;
						margin-right: 10rpx;
					}
					.value{
						font-size: 44rpx;
						font-weight: bold;
					}
				}
				.bottom{
					font-size: $font-size-sm;
					color: $text-color-assist;
					display: flex;
					align-items: center;
				}
			}
			.right{
				font-size: $font-size-sm;
				color: $color-primary;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.qrcode{
					width: 40rpx;
					height: 40rpx;
					margin-bottom: 10rpx;
				}
			}
			
		}
		.nav{
			width: 100%;
			padding:20rpx;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			display: flex;
			align-items: stretch;
			background-color: #ffffff;
			box-shadow: $box-shadow;
			.left{
				width: 340rpx;
				background-color: #F2F2E6;
				margin-right: 20rpx;
				display: flex;
				flex-direction: column;
				padding: 0 20rpx;
				font-size: $font-size-sm;
				color: $text-color-base;
				.introl-top{
					display: flex;
					flex-direction: column;
					justify-content: center;
					height: 50%;
					.top-box{
						display: flex;
						align-items: center;
					}
				}
			}
			.right{
				width: 290rpx;
				display: flex;
				flex-direction: column;
				.tea-active,.member-gifts{
					width: 100%;
					display: flex;
					padding: 20rpx;
					font-size: $font-size-sm;
					color: $text-color-base;
					align-items: center;
					position: relative;
				}
				.tea-active{
					background-color: #FDF3F2;
					margin-bottom: 20rpx;
				}
				.member-gifts{
					background-color: #FCF6D4;
				}
			}
		}
		.member-news{
			width: 100%;
			margin-bottom: 30rpx;
			.header{
				padding: 20rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: $font-size-lg;
					font-weight: bold;
				}
				.iconfont {
					font-size: 52rpx;
					color: $text-color-assist;
				}
			}
			.list{
				width: 100%;
				display: flex;
				flex-direction: column;
				.item{
					height: 240rpx;
					position: relative;
					width: 100%;
					image{
						height: 100%;
						width: 100%;
						border-radius: 8rpx;
					}
					.title{
						position: relative;
						font-weight: 500;
						font-size: 32rpx;
						color: #fff;
						top: -70rpx;
						left: 16rpx;
						width: 100%;
					}
				}
			}
		}
	}
}
.mark-img {
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
.yzclh-img {
		height: 122.96rpx;
		width: 214.86rpx;
	}
.right-img {
			flex: 1;
			position: relative;
			margin-left: 20rpx;
			margin-right: -20rpx;
			margin-bottom: -20rpx;
			display: flex;
			align-items: flex-end;
			
			image {
				width: 100%;
			}
		}
</style>
