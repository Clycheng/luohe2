<template>
        <header class="header navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
        <div class="navbar-header">
            <!--logo-->
            <a href="" class="navbar-brand">
                <img src="../../assets/img/shiguang_logo-250x50.png" alt=""
                     title="漯河时光科技有限公司" data-toggle="tooltip" data-placement="bottom" />
            </a>
            <!--折叠控制按钮-->
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" >
                <i class="icon-bar"></i>
                <i class="icon-bar"></i>
                <i class="icon-bar"></i>
            </button>
        </div>
        <nav class="collapse navbar-collapse">
            <!--nav/-->
            <ul class="nav navbar-nav" id="menu">
                <li data-menuanchor="page1" class="active"><a href="">首页</a></li>
                <li data-menuanchor="page2"><a href="">关于</a></li>
                <li data-menuanchor="page3"><a href="/Service" router-link="/Service"><router-link to="/Service">服务</router-link></a></li>
                <li data-menuanchor="page4"><a href="">方案</a></li>
                <li data-menuanchor="page5"><a href="">客户</a></li>
                <li data-menuanchor="page6"><a href="">联系</a></li>
            </ul>
            <!--phone-->
            <a href="//tel:400-6650-351" class="navbar-right phone" title="全国统一客服热线400-6650-351" data-toggle="tooltip" data-placement="bottom">
                <i class="glyphicon glyphicon-earphone"></i>
                400-6650-351
            </a>
        </nav>
    </div>

        </header>
</template>
<script>
export default {
    name:"Header",
    data(){
        return{
            message:"123"
        }
    }
}
</script>
<style scoped>
.header.navbar-default{
    background-color: transparent;
    border-color:transparent;
    height: 80px;
    transition: all .5s;
    -webkit-transition: all .5s;
}
.header .navbar-toggle{
    margin: 24px 15px 0 0;
}
.header.navbar-default .navbar-toggle{
    border: 0;
}
.header.navbar-default .navbar-toggle:focus,
.header.navbar-default .navbar-toggle:hover{
    background-color: rgba(255,255,255,.2);
}
.header.navbar-default .navbar-toggle .icon-bar{
    background-color: #fff;
}
.header .navbar-header{
    height: 70px;
}
.header img{
    height: 50px;
    transition: all .5s;
    -webkit-transition: all .5s;
}
/*导航*/
#menu{
    position: absolute;
    top: 0;
    left: 51%;
    font-size: 20px;
    transform: translate(-50%,32px);
}
#menu a{
    color: #fff;
    padding: 8px 15px;
    transition: all .5s;
    -webkit-transition: all .5s;
    background: transparent;
    /*margin: 0 2px;*/
}
#menu .active a,#menu a:hover{
    color: #00c2ff;
}
#menu a:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(255,255,255,.2);
    transform: scale(0);
    -webkit-transform: scale(0);
    transition: all .5s;
    -webkit-transition: all .5s;
}
#menu .active a:after,#menu a:hover:after{
    transform: scale(1);
    -webkit-transform: scale(1);
}
/*电话*/
.header .phone{
    padding: 8px 15px;
    margin-top: 32px;
    font-size: 20px;
    color: #00c2ff;
    font-weight: bold;
    transition: all .5s;
    -webkit-transition: all .5s;
}
.header .phone:hover{
    text-decoration: none;
}
.header .phone i{
    margin-right: 10px;
}
.header .phone + .tooltip .tooltip-inner{
    max-width: 400px;
    background: #f00;
}
.header .phone + .tooltip.bottom .tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #f00
}

.navbar-right{
    font-size: 14px;
    margin-top: 23px;
}
@media screen and (max-width: 1020px){
    .nav#menu{
        position: static;
        transform: translate(0,32px);
        -webkit-transform: translate(0,32px);
    }
}
@media screen and (max-width:790px){
    .header img{
        height: 40px;
    }
    .nav#menu{
        transform: translate(0,24px);
        -webkit-transform: translate(0,24px);
    }
    #menu a{
        font-size: 14px;
    }
    .header .phone{
        font-size: 14px;
        margin-top: 24px;
    }
}
@media screen and (max-width:768px) {
    .navbar-collapse.in {
        overflow: inherit;
    }

    .header .navbar-collapse {
        max-height: 500px;
    }

    #menu {
        margin-top: 0;
    }

    #menu a {
        margin-left: 0;
    }

    .header .phone {
        display: block;
        padding-left: 0;
        transform: translateY(24px);
    }
}
</style>

