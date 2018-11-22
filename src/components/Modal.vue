<template>
    <div class="modal fade" id="onLineSubmit" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4>告诉我们您的需求</h4>
                <span class="close" data-dismiss="modal">&times;</span>
            </div>
            <div class="modal-body">
               <div class="form-horizontal">
                   <div class="input-group">
                       <label for="user">姓名</label>
                       <input type="text" id="user" class="form-control" placeholder="姓名"/>
                   </div>
                   <div class="input-group">
                       <label for="email">电子邮件</label>
                       <input type="email" id="email" class="form-control" placeholder="电子邮件"/>
                   </div>
                   <div class="input-group">
                       <label for="texarea">想说的</label>
                       <textarea class="form-control" name="" id="texarea" rows="5" placeholder="告诉我们您的需求..."></textarea>
                   </div>
                   <div class="input-group">
                       <button type="submit" class="btn btn-lg btn-info"><i class="fa fa-location-arrow"></i>提交需求</button>
                   </div>
               </div>
            </div>
            <!--<div class="modal-footer"></div>-->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"Modal",
    mounted:function(){
        $(function(){
    if(window.name==''){
        $('.loading-middle').addClass('lm');
        $('.loading-top').addClass('lt');
        $('.loading-bottom').addClass('lb');
        $('.loading').delay(2000).animate({
            zIndex:-10
        });
        window.name=1;
    }else{
        //window.name++;
        //alert('刷新页面'+window.name+'几次');
        $('.loading').remove();
    }

});
    }
}
</script>

<style>
.modal-header {
    background-color: #00c2ff;
    color: #fff;
    text-align: center;
    padding: 15px 15px;
    position: relative;
}
.modal-header span{
    position: absolute;
    top: 23px;
    right: 18px;
    color: #fff;
}
 .modal-header:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -20px;
    width: 0;
    height: 0;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: #00c2ff transparent;
}
.modal-body .input-group{
    width: 100%;
    margin-bottom: 15px;
}
</style>
