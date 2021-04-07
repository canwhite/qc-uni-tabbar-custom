<template>
	
	<view style="height: 100%;">

		<!--这些componets是通过css引入colorUI的样式，这里只是展示
			自己选择好样式之后css引入就可以了
		-->

<!-- 		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block> 
			<block slot="content">首页</block>
			<block slot="right">
				<view class="action">
					<view class="cu-load load-cuIcon" :class="!isLoad?'loading':'over'"></view>
				</view> 
			</block> 
		</cu-custom> -->
		
		<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg" >
			<block slot="content">首页</block>
		</cu-custom>
		
		<view> 
			<loading></loading> 
		</view>
		
		
	</view>
</template>

<script>
	import loading from "@/des/loading.vue"
	export default {

		components:{
			loading
		},
		data() {
			return {

			};
		},
		methods:{

		},
		created() {
			
		 
		}
	}
</script>

<style lang="scss">

</style>
