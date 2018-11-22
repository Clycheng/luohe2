<template>
     <section class="section bg customer">
        <div class="container">
            <h2 class="title">因为有你而<span>精彩</span>！</h2>
            <div class="line-bg"></div>
            <div class="row">
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo01.jpg" alt=""/>
                    <p>力帆汽车4s店</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo02.jpg" alt=""/>
                    <p>西平凯达燃气有限公司</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo03.jpg" alt=""/>
                    <p>郾城环保局</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo04.jpg" alt=""/>
                    <p>中共漯河市委党校</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo05.jpg" alt=""/>
                    <p>漯河市委统战部</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo06.jpg" alt=""/>
                    <p>永城市委统战部</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo07.jpg" alt=""/>
                    <p>河南万顺科技有限公司</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo08.jpg" alt=""/>
                    <p>漯河市公安局</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo09.jpg" alt=""/>
                    <p>河南简好节能技术有限公司</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo10.jpg" alt=""/>
                    <p>恒涛拍卖</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo11.jpg" alt=""/>
                    <p>香港夏博装饰</p>
                </div>
                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo12.jpg" alt=""/>
                    <p>勐海县银海石斛开发有限公司</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"Customer"
}
</script>

<style >
.customer{
    background-image: url('../assets/img/banner04.jpg');
}
.customer .container{
    padding-top: 100px;
}
.customer .line-bg{
    margin: 30px 0 50px 0;
}
.customer h2.title{
    margin-top: 5px;
}
.customer .container img{
    margin-bottom: 10px;
    transform: scale(1);
    transition: .5s;
}
.customer .container p {
    color: #00c2ff;
}
.customer .container .row > div:hover img{
    transform: scale(1.2);
}
@media screen and (max-width: 992px) {
    .customer .container img{
        display: none;
    }
    .customer .container{
        padding-top: 100px;
    }
    .customer .line-bg{
        margin: 10px 0 15px;
    }
    .customer .title{
        font-size: 24px;
    }
}
@media screen and (max-width: 768px) {
    .customer .container img{
        display: none;
    }
    .customer .container{
        padding-top: 70px;
    }
    .customer .line-bg{
        margin: 10px 0 15px;
    }
    .customer .title{
        font-size: 18px;
    }
}

</style>
