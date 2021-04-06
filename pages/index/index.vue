<template>
	<view class="content">
		<!--显示的正文 -->
		<scroll-view scroll-y="true" class="app-container" :style="'height:'+containerHeight+'px'">
			<view v-if="page=='index'" :class="page=='index'?'animation-fade':''">
				<cu-page-index></cu-page-index>
			</view>
			<view v-if="page=='goods'" :class="page=='goods'?'animation-fade':''">
				<cu-page-goods></cu-page-goods>
			</view>
			<view v-if="page=='mine'" :class="page=='mine'?'animation-fade':''">
				<cu-page-mine></cu-page-mine>
			</view>
			
		</scroll-view>
		
		<view id="tabbar" class="cu-bar tabbar bg-white foot shadow">
			<view class="action tabbar-icon" 
				:class="item.size=='big'?'big-icon':''" 
				v-for="(item,index) in tabbar" 
				:key="index" @tap="changeTab(item)">
				<view >
					<image 
						:class="page==item.page?'animation-scale-up':''" 
						v-if="page==item.page" 
						:src="item.selectedIconPath" 
						mode="">
					</image>
					<image   v-else :src="item.iconPath" mode=""></image>
				</view>
				<text :style="'color: '+(page==item.page?tabbarTextActiveColor:tabbarTextColor)+';'">
					{{item.title}}
				</text>
			</view>
		</view>
		<!-- 预加载所有tabbar 图标，以防点击的时候 闪一下 此处隐藏显示 -->
		<view v-for="(item,index) in tabbar" :key="index" style="display: none;">
			<image :src="item.iconPath" mode=""></image>
			<image :src="item.selectedIconPath" mode=""></image>
		</view>
		
		
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				title: 'Hello',
				page: 'index',
				showPage: false,
				containerHeight: 0,
			}
		},
		computed: {
			...mapState({
				themeColor: 'themeColor',
				tabbarTextColor: "tabbarTextColor",
				tabbarTextActiveColor: "tabbarTextActiveColor",
				tabbar:"tabbar"
			})
		},
		
		methods:{
			changeTab(item) {
				uni.setNavigationBarTitle({
					title:item.title
				})
				this.page = item.page;
				uni.showToast({
					title:this.page+'显示',
					icon:'none'
				})
			},
			syncBoundingClientRect(nodeobj) {
				return new Promise((resolve, reject) => {
					nodeobj.boundingClientRect(data => {
						console.log(data)
						resolve(data)
					}).exec();
				})
			},
			async init_page_size() {
				console.log("init_page_size")
				this.$nextTick(async () => {
					let sysInfo = uni.getSystemInfoSync();
					//uni-app获取element
					/*
					const query = uni.createSelectorQuery().in(this);
					const tabbarObj = query.select('#tabbar')
					let tabbarNodeRes = await this.syncBoundingClientRect(tabbarObj);
					
					*/
					let pageHeight = sysInfo.windowHeight - 50;
					this.containerHeight = pageHeight;
					this.showPage = true;
				})
			},	
					

					
			
		},
		

		onReady() {
			this.init_page_size();
			
			//跨域问题，简单解决办法就是用HBuilder内置浏览器运行
			(async ()=>{
				
				let res = await this.$request.get({
						url:"/weather",
	                    data:{
	                        city:"北京"
	                    },
				})
				console.log('------',res);
				
			})()
			

		},


	}
</script>

<style lang="scss">
	.app-container {
		min-height: 600upx;
		background-color: #FFFFFF;
	}
	.tabbar-icon{
		image{
			width: 60upx;
			height: 60upx;
			
		}
	}
	.tabbar-icon.big-icon{
		position: relative;
		bottom: 20upx;
		image{
			width: 100upx;
			height: 100upx;
		}
	}


</style>
