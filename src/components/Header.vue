<template>
    <div>
        <header class="header navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
        <div class="navbar-header">
            <!--logo-->
            <a href="" class="navbar-brand">
                <img src="img/shiguang_logo-250x50.png" alt=""
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
                <li data-menuanchor="page1" class="active"><a href="#page1">首页</a></li>
                <li data-menuanchor="page2"><a href="#page2">关于</a></li>
                <li data-menuanchor="page3"><a href="#page3">服务</a></li>
                <li data-menuanchor="page4"><a href="#page4">方案</a></li>
                <li data-menuanchor="page5"><a href="#page5">客户</a></li>
                <li data-menuanchor="page6"><a href="#page6">联系</a></li>
            </ul>
            <!--phone-->
            <a href="//tel:400-6650-351" class="navbar-right phone" title="全国统一客服热线400-6650-351" data-toggle="tooltip" data-placement="bottom">
                <i class="glyphicon glyphicon-earphone"></i>
                400-6650-351
            </a>
        </nav>
    </div>

        </header>
    </div>
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

</style>

