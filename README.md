# qc-uni-tabbar-custom
uni-app tabbar自定义、数据请求、colorui，基础框架

# intro

### 1. libs目录里边放了request请求工具    
>使用方法：
```
let res = await this.$request.get({
        url:"/weather",
        data:{
            city:"北京"
        },
})
```
>post请求只需要置换get关键词为post即可 

### 2. des目录里边放了colorui的使用方法介绍
>colorui类似于bootstrap  
>使用的时候主要靠class选择器  
>以loading为例:  
```
<view class="cu-load load-modal">
    <image src="/static/logo.png" mode="aspectFit"></image>
    <view class="gray-text">加载中...</view>
</view>

```
>class="cu-load load-modal"  
>class="gray-text"  
>des目录里有类似上边的使用方法


# run
> 直接用的HBuilderX,官方ide    
> 菜单栏=>运行=>运行到浏览器或者其它设备