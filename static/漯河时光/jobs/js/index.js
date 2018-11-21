/**
 * Created by Administrator on 2017/12/27.
 */
var footer=document.getElementsByClassName('footer')[0];
var p1=footer.getElementsByTagName('p')[1];
var p2=footer.getElementsByTagName('p')[2];

window.onscroll=function(){
    if(document.documentElement.scrollTop>2000){
        //给内容1添加动画
        p1.className='pull-left wow bounceInLeft animated';
        p2.className='pull-right wow bounceInRight animated';

    }else{
        p1.className='pull-left';
        p2.className='pull-right';
    }
};

