<template>
	<view class="container">
		<view class="position-relative">
			<image src="https://download-cdn.pmcaff.com/coffee-dd1a5d7525b243d4123646b5dd7c7d7c" class="bg"></image>
			<button type="default" size="mini" class="hy-btn">
				<image src="/static/images/mine/hym.png" mode=""></image>
				<text>会员码</text>
			</button>
		</view>
		<view style="padding:0 30rpx">
			<view class="d-flex flex-column bg-white user-box">
				<view class="d-flex align-items-center">
					<view class="avatar">
						<image :src="isLogin ? member.avatar : '/static/images/mine/avatar.png'"></image>
						<view class="badge" v-if="isLogin">
							<image src="/static/images/mine/level.png"></image>
							<view>{{ member.memberLevel }}</view>
						</view>
					</view>
					<view class="d-flex flex-column flex-fill overflow-hidden" style="margin-top: 20px;">
						<view v-if="isLogin" class="font-size-lg font-weight-bold d-flex justify-content-start align-items-center">
							<view class="text-truncate">{{ member.nickname }}</view>
							<view class="iconfont iconarrow-right line-height-100"></view>
						</view>
						<view v-else class="font-size-lg font-weight-bold">
							请点击授权登录
						</view>
						<view class="font-size-sm text-color-assist">
							当前成长值{{ isLogin ? member.currentValue : 0}}/{{ isLogin ? member.currentValue + member.needValue : 0}}
						</view>
						<view class="w-100">
							<progress percent="0" activeColor="#ADB838" height="8rpx" :percent="growthValue" border-radius="8rpx"/>
						</view>
					</view>
					<view class="level-benefit d-flex flex-shrink-0 align-items-center justify-content-end text-color-white bg-warning font-size-sm">
						<view>会员权益</view>
						<view class="iconfont iconarrow-right line-height-100"></view>
					</view>
				</view>
				<view class="w-100 d-flex align-items-center just-content-center">
					<view class="user-grid">
						<view class="num font-size-extra-lg font-weight-bold text-color-base">
							{{ isLogin ? member.couponNum : '***'}}
						</view>
						<view class="font-size-sm text-color-assist">
							森林券
						</view>
					</view>
					<view class="user-grid">
						<view class="num font-size-extra-lg font-weight-bold text-color-base">
							{{ isLogin ? member.pointNum : '***'}}
						</view>
						<view class="font-size-sm text-color-assist">
							积分商城
						</view>
					</view>
					<view class="user-grid">
						<view class="num font-size-extra-lg font-weight-bold text-color-base">
							{{ isLogin ? member.balance : '***'}}
						</view>
						<view class="font-size-sm text-color-assist">
							余额
						</view>
					</view>
					<view class="user-grid">
						<view class="num font-size-extra-lg font-weight-bold text-color-base">
							{{ isLogin ? member.giftBalance : '***'}}
						</view>
						<view class="font-size-sm text-color-assist">
							礼品卡
						</view>
					</view>
				</view>
			</view>
			<view class="level-benefit-box" v-if="!isLogin">
				<view class="d-flex align-items-center justify-content-between font-size-base">
					<view class="text-color-base">
						新用户加入会员，享会员权益
					</view>
					<view class="text-color-primary">立即加入</view>
				</view>
				<view class="row">
					<view class="grid">
						<view class="image">
							<image src="/static/images/mine/rhyl.png"></image>
						</view>
						<view>入会有礼</view>
					</view>
					<view class="grid">
						<view class="image">
							<image src="/static/images/mine/jfdh.png"></image>
						</view>
						<view>积分兑换</view>
					</view>
					<view class="grid">
						<view class="image">
							<image src="/static/images/mine/sjtq.png"></image>
						</view>
						<view>升级特权</view>
					</view>
					<view class="grid">
						<view class="image">
							<image src="/static/images/mine/srtq.png"></image>
						</view>
						<view>生日特权</view>
					</view>
					<view class="grid">
						<view class="image">
							<image src="/static/images/mine/nxbz.png"></image>
						</view>
						<view>森林宝藏</view>
					</view>
				</view>
			</view>
			
			<image src="/static/images/mine/banner.png" mode="widthFix" class="banner"></image>
			
		</view>
		
		<view class="service-box">
			<view class="font-size-lg text-color-base font-weight-bold" style="margin-bottom:20rpx;">
				我的服务
			</view>
			<view class="row">
				<view class="grid">
					<view class="image">
						<image src="/static/images/mine/jfqd.png"></image>
					</view>
					<view>积分签到</view>
				</view>
				<view class="grid">
					<view class="image">
						<image src="/static/images/mine/stxy.png"></image>
					</view>
					<view>送她心愿</view>
					<image :src="newIcon" class="new-badage"></image>
				</view>
				<view class="grid">
					<view class="image">
						<image src="/static/images/mine/nxsc.png"></image>
					</view>
					<view>森林商城</view>
				</view>
				<view class="grid">
					<view class="image">
						<image src="/static/images/mine/lxkf.png"></image>
					</view>
					<view>联系客服</view>
				</view>
				<view class="grid">
					<view class="image">
						<image src="/static/images/mine/wddd.png"></image>
					</view>
					<view>我的订单</view>
				</view>
				<view class="grid">
					<view class="image">
						<image src="/static/images/mine/wdzl.png"></image>
					</view>
					<view>我的资料</view>
				</view>
				<view class="grid">
					<view class="image">
						<image src="/static/images/mine/shdz.png"></image>
					</view>
					<view>收货地址</view>
				</view>
				<view class="grid">
					<view class="image">
						<image src="/static/images/mine/gdfw.png"></image>
					</view>
					<view>更多服务</view>
				</view>
			</view>
		</view>
		
		<view class="d-flex justify-content-center align-items-center text-color-assist" style="padding:30rpx;font-size: 22rpx;">
			会员卡适用于森林物语和森林酒屋指定范围
		</view>
	</view>
</template>

<script>
	import {mapGetters,mapState} from 'vuex'
import member from '../../api/member';
	export default {
		data() {
			return {
				newIcon:'https://img-shop.qmimg.cn/s16/images/2020/05/12/ffb0613dded704b6.png'
			};
		},
		computed:{
			...mapState(['member']),
			...mapGetters(['isLogin']),
			growthValue(){
				if(!this.isLogin) return 0
				const {currentValue,needValue} = this.member
				return currentValue / (currentValue+needValue) * 100
			}
		}
	}
</script>

<style lang="scss">
page{
	min-height: 100%;
	height: auto;
}
.bg{
	width: 100%;
	height: calc(410 / 594 * 750rpx);
}
.hy-btn{
	position: absolute;
	top: 40rpx;
	right: 40rpx;
	color: $color-primary;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: $font-size-sm;
	box-shadow: 0 0 20rpx rgba(66,66,66,0.1);
	image{
		width: 30rpx;
		height: 30rpx;
		color: $color-primary;
		margin-right: 10rpx;
	}
	
}
.user-box{
	position:relative;
	margin-top: -115rpx;
	margin-bottom: 30rpx;
	border-radius: 8rpx;
	box-shadow: $box-shadow;
}
.avatar{
	position: relative;
	margin-top: -35rpx;
	margin-left: 35rpx;
	margin-right: 35rpx;
	width: 160rpx;
	height: 160rpx;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #FFFFFF;
	box-shadow: 0 0 20rpx rgba($color: #000000, $alpha: 0.2);
	image{
		width: 140rpx;
		height: 140rpx;
		border-radius: 100%;
	}
}
.level-benefit{
	margin-left: 35rpx;
	padding: 10rpx 0 10rpx 30rpx;
	border-radius: 50rem 0 0 50rem;
}
.user-grid{
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding:30rpx;
	.num{
		margin-bottom:30rpx;
	}
}
.level-benefit-box{
	padding:30rpx;
	margin-bottom:30rpx;
	border-radius: 8rpx;
	background-color: #fff;
	width: 100%;
	box-shadow: 0 10rpx 8rpx rgba($color: #878889, $alpha: 0.1);
	display: flex;
	flex-direction: column;
	.row{
		display: flex;
		padding:30rpx 0 20rpx;
		justify-content: space-around;
		align-items: center;
		.grid{
			display: flex;
			flex-direction: column;
			font-size: $font-size-sm;
			color: $text-color-assist;
			align-items: center;
			flex:1;
			
			.image{
				image{
					width: 80rpx;
					height: 80rpx;
					margin-bottom: 10rpx;
				}
			}
		}
	}
}
.banner{
	width: 100%;
	border-radius: 8rpx;
	margin-bottom: 30rpx;
}
.service-box{
	background-color: #fff;
	padding: 32rpx 30rpx 10rpx;
	width: 100%;
	box-shadow: $box-shadow;
	.row{
		display: flex;
		flex-wrap: wrap;
		color: $text-color-assist;
		font-size: $font-size-sm;
		padding-bottom: -40rpx;
		.grid{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 40rpx;
			position: relative;
			width: 25%;
			.image{
				image{
					width: 80rpx;
					height: 80rpx;
					margin-bottom: 20rpx;
				}
			}
			.new-badage{
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				top: 0;
				right: 30rpx;
			}
		}
	}
}
</style>
