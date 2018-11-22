
<template>
    <section class="section bg home">
        <div class="carousel slide" id="slide">
            <div class="carousel-inner">
                <div class="item bg active">
                    <div class="carousel-caption">
                        <h1 class="wow animated bounceIn" data-wow-delay="0.5s">LEATNING</h1>
                        <h3 class="wow animated bounceInUp" data-wow-delay="0.8s">为您的项目提供 <span>专业</span>技术支持</h3>
                        <p class="wow fadeIn animated" data-wow-delay="1s">Provide professional technical support for your pa</p>
                    </div>
                </div>
                <div class="item bg">
                    <div class="carousel-caption">
                        <h1 class="wow animated bounceIn" data-wow-delay="0.3s">LEATNING</h1>
                        <h3 class="wow animated bounceInUp" data-wow-delay="0.6s">为您的项目提供 <span>专业</span>技术支持</h3>
                        <p class="wow fadeIn animated" data-wow-delay="0.8s">Provide professional technical support for your pa</p>
                    </div>
                </div>
                <div class="item bg">
                    <div class="carousel-caption">
                        <h1 class="wow animated bounceIn" data-wow-delay="0.3s">LEATNING</h1>
                        <h3 class="wow animated bounceInUp" data-wow-delay="0.6s">为您的项目提供 <span>专业</span>技术支持</h3>
                        <p class="wow fadeIn animated" data-wow-delay="0.8s">Provide professional technical support for your pa</p>
                    </div>
                </div>
                <div class="item bg">
                    <div class="carousel-caption">
                        <h1 class="wow animated bounceIn" data-wow-delay="0.3s">LEATNING</h1>
                        <h3 class="wow animated bounceInUp" data-wow-delay="0.6s">为您的项目提供 <span>专业</span>技术支持</h3>
                        <p class="wow fadeIn animated" data-wow-delay="0.8s">Provide professional technical support for your pa</p>
                    </div>
                </div>
                <div class="item bg">
                    <div class="carousel-caption">
                        <h1 class="wow animated bounceIn" data-wow-delay="0.3s">LEATNING</h1>
                        <h3 class="wow animated bounceInUp" data-wow-delay="0.6s">为您的项目提供 <span>专业</span>技术支持</h3>
                        <p class="wow fadeIn animated" data-wow-delay="0.8s">Provide professional technical support for your pa</p>
                    </div>
                </div>
            </div>
            <ol class="carousel-indicators">
                <li data-target="#slide" data-slide-to="0" class="active"></li>
                <li data-target="#slide" data-slide-to="1"></li>
                <li data-target="#slide" data-slide-to="2"></li>
                <li data-target="#slide" data-slide-to="3"></li>
                <li data-target="#slide" data-slide-to="4"></li>
            </ol>
            <a href="#slide" class="carousel-control left" data-slide="prev">
                <i class="fa fa-chevron-left"></i>
            </a>
            <a href="#slide" class="carousel-control right" data-slide="next">
                <i class="fa fa-chevron-right"></i>
            </a>
        </div>
        <a class="moveDown" href="#page2"></a>
    </section>
</template>

<script>

export default {
    name:"Banner"
}
</script>

<style scoped>
.home .item{
    width: 100vw;
    height: 100vh;
    transition-property: opacity;
    left: 0;
    opacity: .4;
    background-attachment: fixed;
}
.home .carousel-inner .item h1{
    font-size: 60px;
    color: #00c2ff;
    font-family: lingxin,'Microsoft Yahei','YaHei WebFont',Verdana,Geneva,Tahoma,sans-serif,'宋体';
    font-weight: bold;
    font-style: italic;
}
.home .carousel-inner .item h3{
    font-size: 36px;
    font-family: lingxin,'Microsoft Yahei','YaHei WebFont',Verdana,Geneva,Tahoma,sans-serif,'宋体';
    font-weight: bold;
    font-style: italic;
}
.home .carousel-inner .item h3 span{
    color: #00c2ff;
    font-size: 1.2em;
    margin: 0 4px;
}
.home .item.active,.home .left,.home .right{
    opacity: 1;
}
.home .item:first-of-type{
    background: url("../assets/img/banner13.jpg");
    background-size: cover;
}
.home .item:nth-of-type(2){
    background: url("../assets/img/banner07.jpg");
    background-size: cover;
}
.home .item:nth-of-type(3){
    background: url("../assets/img/banner05.jpg");
    background-size: cover;
}
.home .item:nth-of-type(4){
    background: url("../assets/img/banner10.jpg");
    background-size: cover;
}
.home .item:last-of-type{
    background: url("../assets/img/banner02.jpg");
    background-size: cover;
}
.home .carousel-caption{
    top: 33%;
}
.home .carousel-indicators{
    top: 80%;
}
.home .moveDown{
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 18px;
    height: 18px;
    /*background: forestgreen;*/
    margin: -50px 0 0 -10px;
    z-index: 100;
}
.home .moveDown:before,.home .moveDown:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 2px solid #00c2ff;
    border-right: 2px solid #00c2ff;
}
.home .moveDown:before{
    animation: before-bottom 1.5s ease infinite;
}
.home .moveDown:after{
    animation: after-bottom 1.5s ease infinite;
}
.home .left i,.home .right i{
    position: absolute;
    top: 50%;
}
@keyframes before-bottom {
    0%{transform:translateY(-20px) rotate(45deg);opacity:0;}
    50%{transform:translateY(0px) rotate(45deg);opacity:1;}
    100%{transform:translateY(20px) rotate(45deg);opacity:0;}
}
@keyframes after-bottom {
    0%{transform:translateY(-30px) rotate(45deg);opacity:0;}
    50%{transform:translateY(-10px) rotate(45deg);opacity:1;}
    100%{transform:translateY(10px) rotate(45deg);opacity:0;}
}


</style>
