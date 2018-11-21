/**
 * Created by Administrator on 2017/12/13 0013.
 */
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


