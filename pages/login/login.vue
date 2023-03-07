<template>
	<view class="contanier">
		<view class="logo">
			<image src="@/static/images/logo1.png"></image> 
			<view class="tips">
				人死了，就像水消失在水中
				<br>
				今朝若是同淋雪，此生也算共白头
			</view>
		</view>
		<view class="bottom">
			 <!-- #ifdef H5 -->
			<button class="login-btn" @tap="login">
				登录
			</button>
			<!-- #endif -->
			 <!-- #ifdef MP-WEIXIN -->
			<button class="login-btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo">
				微信一键登录
			</button>
			<!-- #endif -->
			<view class="introl" style="height: 30vh;">
				<view class="text">
					新用户登录即加入会员，享会员权益
				</view>
				<view class="row">
					<view class="grid">
						<image src="/static/images/mine/rhyl.png"></image>
						<view>
							入会有礼
						</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/jfdh.png"></image>
						<view>
							积分兑换
						</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/sjtq.png"></image>
						<view>
							升级特权
						</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/srtq.png"></image>
						<view>
							生日特权
						</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/nxbz.png"></image>
						<view>
							森林宝藏
						</view>
					</view>
				</view>
				<view class="bottom_introl">
					会员权益说明
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Member from '@/api/member.js'
import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			...mapMutations(['SET_MEMBER']),
			getUserInfo(e){
				const {errMsg,userInfo } =e.detail
				console.log(errMsg,userInfo)
				if(errMsg !== 'getUserInfo:ok'){
					uni.showModal({
						title:'提示',
						content:'您取消了授权登录，请重新授权',
						showCancel:false
					})
					this.SET_MEMBER(Member)
					uni.navigateBack()
				}else{
					const {avatarUrl: avatar, city, country, gender, nickName: nickname, province} = userInfo
					const member = Object.assign(Member, {avatar, city, country, gender, nickname, province})
					this.SET_MEMBER(Member)
					uni.navigateBack()
				}
				
				
			},
			login(){
				this.SET_MEMBER(Member)
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.logo{
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	font-size: $font-size-base;
	color: $text-color-assist;
	image{
		height: 165rpx;
		width: 165rpx;
		border-radius: 50%;
	}
	.tips{
		line-height: 72rpx;
		text-align: center;
	}
}
.bottom{
	height: 40vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 40rpx;
	.login-btn{
		width: 100%;
		background-color: #d02c5a;
		border-radius: 50rpx;
		color: #fff;
	}
	.introl{
		font-size: $font-size-base;
		color: $text-color-assist;
		.text{
			text-align: center;
			margin-bottom: 60rpx;
		}
		.row{
			display: flex;
			justify-content: center;
			align-items: center;
			.grid{
				width: 20%;
				text-align: center;
				image{
					width:60rpx;
					height: 60rpx;
					margin-bottom: 10rpx;
				}
			}
		}
		.bottom_introl{
			font-size: $font-size-lg;
			color: $color-primary;
			text-align: center;
			margin-top: 60rpx;
		}
	}
	
}
</style>
