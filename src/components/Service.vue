<template>
     <section class="section bg service">
        <div class="container">
            <h2 class="title">我们<span>提供</span>以下<span>服务</span>为您选择</h2>
            <div class="line-bg"></div>
            <div class="row">
                <div class="col-md-3 text-center">
                    <i class="fa fa-retweet"></i>
                    <h3>软件定制开发</h3>
                    <p><a href="" class="undecoration" target="_blank">我们推出的软件定制、定制软件服务，以最快的速度，简单的流程为客户定制高质量、易操作的管理软件，协助客户解决管理难题，为客户提供更优质的服务。</a></p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-building"></i>
                    <h3>行业软件</h3>
                    <p><a href="" class="undecoration" target="_blank">公司代理的有财务软件、商超管理软件、酒店客房餐饮管理软件、进销存管理软件、网络办公(OA)管理软件等，满足不同行业对企业管理及发展的软件需求。</a></p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-weixin"></i>
                    <h3>微信公众平台</h3>
                    <p><a href="" class="undecoration" target="_blank">15大服务项目，开通简单快捷；10分钟熟悉操作界面和功能位置，30分钟即可完成上线。国内领先的微信营销服务平台,为企业打造全方位的微营销服务。</a></p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-phone"></i>
                    <h3>400企业电话</h3>
                    <p><a href="" class="undecoration" target="_blank">对外只需公布唯一的400号码，统一宣传，简单易记。适用于教育咨询、旅游、医药、网络IT、贸易、金融、商务服务、保险、餐饮等多种类型行业。</a></p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-microchip"></i>
                    <h3>网站建设</h3>
                    <p><a href="" class="undecoration" target="_blank">专业团队，提供一对一的专属定位；好的营销网站，带来更多的咨询量和成交量；结合网络推广，访问量、成交量翻一番；并为您提供以下运营指导服务！</a></p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-map-signs"></i>
                    <h3>域名注册</h3>
                    <p><a href="" class="undecoration" target="_blank">电子商务、网上销售、网络广告已成为商界关注的热点。要想在网上建立服务器发布信息，则必须首先申请域名，只有有了自己的域名才能让别人访问到自己。</a></p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-hourglass"></i>
                    <h3>虚拟主机</h3>
                    <p><a href="" class="undecoration" target="_blank">主机是以：空间大小、流量大小、支持网站语言、数据库类型、操作系统及功能区分，我们提供经济型、全能型、ASP.Net专业型、PHP专业型等多种类型。</a></p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-times-circle-o"></i>
                    <h3>企业邮局</h3>
                    <p><a href="" class="undecoration" target="_blank">微信直接收发邮件，管理功能丰富多样，应对特殊办公情景，全面支持移动办公，与QQ、微信完美整合。为企业打造全方位的信息化服务。</a></p>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script>
export default {
    name:"Service"
}
</script>

<style>
.service{
    background-image: url('../assets/img/banner11.jpg');
}
.service i{
   font-size: 48px;
   color: #00c2ff;
    line-height: 48px;
}
.service h3{
    font-size: 24px;
    color: #fff;
}
.service .row > div{
    position: relative;
    padding: 15px;
    margin-bottom: 40px;
}
.service p{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,194,255,.85);
    color: #fff;
    padding: 15px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    transform: scale(0);
    transition: .5s;
}
.service p a{
    color: #fff;
}
.service .row > div:hover p{
    transform: scale(1);
}
@media screen and (max-width:992px){
    .service .row > div{
        overflow: hidden;
    }
    .service .container{
        padding-top: 90px;
    }
    .service .row > div:hover{
        background: #00c2ff;
    }
    .service .row > div:hover i{
        color: #fff;
    }
    .service p{
        display: none;
    }
    .service i{
        vertical-align: middle;
        margin-right: 15px;
    }
    .service .row > div:nth-of-type(2) i{
        margin-right: 62px;
    }
    .service .row > div:nth-of-type(5) i{
        margin-right: 47px;
    }
    .service h3{
        display: inline-block;
    }
}
@media screen and (max-width: 768px){
    .service h2,.service h3{
        font-size: 18px;
    }
}
</style>
