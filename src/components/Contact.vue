<template>
      <section class="section bg contact">
        <div class="container">
            <h2 class="title">与我们<span>保持联系</span></h2>
            <div class="line-bg"></div>
            <div class="row">
                <div class="col-sm-4 col-xs-12 contact-left">
                    <div>
                        <h3 class="hidden-xs"><i>@</i>&nbsp;漯河时光网络科技有限公司</h3>
                        <address><i class="fa fa-thermometer"></i>&nbsp;漯河市源汇区柳江路69号44幢1单元101</address>
                        <p>
                            <i class="fa fa-phone"></i>
                            <a href="tel://0395-5565361">0395-5565361</a>
                            <a href="tel://400-6650-361">400-6650-361</a>
                        </p>
                        <p>
                            <i class="fa fa-comment-o"></i> QQ：<a href="">9348526</a>；Email：support@shiguang.net
                        </p>

                    </div>
                    <a class="btn btn-block btn1" data-toggle="modal" data-target="#onLineSubmit"><i class="fa fa-location-arrow"></i>在线提交需求</a>
                    <a href="jobs/index.html" class="btn btn-block btn2"><i class="fa fa-pencil-square-o"></i>查找工作机会</a>
                </div>
                <div class="col-sm-4 col-xs-6 contact-middle text-center">
                    <img src="../assets/img/qrcode_for_weibo.png" alt="" class="img-responsive" style="display: inline-block"/>
                    <p class="text-center">官方微博<a href="mailto://625287416qq.com">@时光网络科技</a></p>
                    <!--<p>官方微博<a href="tel://17310140612">@时光网络科技</a></p>-->
                    <!--//移动端的 a标签mailto可以跳转到邮箱 tel可以直接拨打电话-->
                </div>
                <div class="col-sm-4 col-xs-6 contact-right text-center">
                    <img src="../assets/img/qrcode_for_weixin.jpg" alt="" class="img-responsive" style="display: inline-block"/>
                    <p class="text-center">官方微信</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name:"Contact"
}
</script>

<style >
.contact{
    background-image: url('../assets/../assets/img/banner01.jpg');
    color: #fff;
}
.contact .contact-left h3{
    font-size: 14px;
}
.contact .line-bg{
    margin: 10px 0 15px;
}
.contact a{
    color: #fff;
    cursor: pointer;
}
.contact .contact-middle img,.contact .contact-right img{
    margin-bottom: 15px;
}
.contact .btn{
    padding: 10px 16px;
    margin-bottom: 15px;
    font-size: 18px;
    border-radius: 0;
    border-style: dotted;
    /* transition: all .5s; */
    -webkit-transition: all .5s;
}
.contact .btn i{
    margin-right: 10px;
}
.contact .btn1{
    border-color: #00c2ff;
    background-color: rgba(0,194,255,.75);
    color: #fff;
}
.contact .btn1:hover{
    color: #fff;
    background-color: #00c2ff;
    border-color: #00c2ff;
}

.contact .btn2{
    border-color: #ff4900;
    background-color: rgba(255,73,0,.75);
    color: #fff;
}
.contact .btn2:hover{
    color: #fff;
    background-color: #ff4900;
    border-color: #ff4900;
}

</style>
