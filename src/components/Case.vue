<template>
     <section class="section bg case service">
        <div class="container">
            <h2 class="title">帮<span>助</span>企业<span>站在</span>管理、营销的<span>定峰</span>！</h2>
            <div class="line-bg"></div>
            <div class="row">
                <div class="col-md-3 text-center">
                    <i class="fa fa-university"></i>
                    <h3>政府机构</h3>
                    <p>政府行业解决方案主要包括政府通用解决方案、审计行业、财政行业、统战行业、药监行业、质监行业、环保行业、气象行业、农业等解决方案。</p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-window-maximize"></i>
                    <h3>教育行业</h3>
                    <p>提供信息化管理平台，包括学生档案、收费、家庭作业、网络课堂、在线考试、安全进出等最优的数字化校园解决方案，为教育发展提供强大武器。</p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-home"></i>
                    <h3>公共事业</h3>
                    <p>轨道交通业务管理、城市通卡业务管理、电子账单支付及呈现、第三方支付、社保卡业务管理、医疗卫生业务管理、城市交通智能分析类定制服务。</p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-cloud"></i>
                    <h3>云计算与虚拟化</h3>
                    <p>云计算与虚拟化解决方案包括 ： 数据中心虚拟化、桌面虚拟化。虚拟计算是指通过网络以按需、易扩展的方式获得所需的硬件、软件、平台及服务等资源势。</p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-object-group"></i>
                    <h3>批发零售</h3>
                    <p>把进销存管理与移动体验互联解决方案，高密度大用户接入解决方案，在万物互联时代助力零售企业开启崭新的商机。</p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-birthday-cake"></i>
                    <h3>企业核心应用</h3>
                    <p>企业资源计划、客户关系管理、供应商关系管理、产品生命周期管理、人力资源管理、企业资产管理、企业级项目管理、企业门户、企业商务智能…</p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-wrench"></i>
                    <h3>制造加工</h3>
                    <p>制造企业生产执行系统（MES）、物流运作管理系统（LES）、产品生命周期管理系统（PLM）、企业设备管理系统、数据中心及决策支持解决方案。</p>
                </div>
                <div class="col-md-3 text-center">
                    <i class="fa fa-building-o"></i>
                    <h3>移动应用</h3>
                    <p>企业微博、企业IM系统、Mobile Connector系统、SNS社区系统、手机客户端平台开发及适配服务、移动互联网业务平台开发服务…</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"Case"
}
</script>

<style >
.case{
    background-image: url('../assets/img/banner09.jpg');
}
@media screen and (max-width: 992px){
    .case.service .row > div:nth-of-type(2) i{
        margin-right: 15px;
    }
    .case.service .row > div:nth-of-type(5) i{
        margin-right: 15px;
    }
    .case.service .row > div:nth-of-type(4) i{
        margin-right: 15px;
        margin-left: 10%;
    }
    .case.service .row > div:nth-of-type(6) i{
        margin-left: 5%;
    }

}

</style>
