/**
 * Created by Administrator on 2017/12/19 0019.
 */
$(function () {
    $('#dowebok').fullpage({
        //循环滚屏
        continuousVertical: true,
        //字体不随着窗口改变而改变
        resize: false,
        ///*---------------------scrollBar 设置为 true ------------------------*/
        //scrollBar: true,
        ///*---------------------scrollBar 设置为 true ------------------------*/
        //callback: wow.min.实例,
        //入场动画
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('.header').css('background-color', 'rgba(0,0,0,0)')
            } else {
                $('.header').css('background-color', 'rgba(0,0,0,.4)')
            }
            if (index == 2) {
                //$('.about').find('.col-lg-6').delay(500).animate({
                //    left: '0'
                //}, 1500, 'easeInOutElastic');
                $('.about .col-md-6').removeClass('animated bounceOutRight').addClass('about-text');

            }
            if (index == 3) {
                //$('.section3').find('p').delay(500).animate({
                //    bottom: '0'
                //}, 1500, 'easeOutExpo');
                $('.service .title').removeClass('bounceOutRight').addClass('animated rubberBand');
                $('.service .col-md-3').removeClass('bounceOutRight').addClass('animated bounceIn');
            }
            if (index == 4) {
                //$('.section4').find('p').fadeIn(2000);
                $('.case .title').removeClass('bounceOutRight').addClass('animated rubberBand');
                $('.case .col-md-3').removeClass('bounceOutRight').addClass('animated bounceInDown');
            }
            if (index == 5) {
                $('.customer .title').removeClass('bounceOutRight').addClass('animated rubberBand');
                $('.customer .col-md-3').removeClass('bounceOutRight').addClass('animated flipInY');
            }
            if (index == 6) {
                $('.contact .title').removeClass('bounceOutRight').addClass('animated rubberBand');
                $('.contact .col-sm-4').removeClass('bounceOutRight').addClass('animated flipInX');
            }
        },
        //离开动画
        onLeave: function (index, direction) {
            if (index == '2') {
                //$('.about').find('p').delay(500).animate({
                //    left: '-120%'
                //}, 1500, 'easeOutExpo');
                $('.about .col-md-6').removeClass('about-text').addClass('animated bounceOutRight');

            }
            if (index == '3') {
                //$('.section3').find('p').delay(500).animate({
                //    bottom: '-120%'
                //}, 1500, 'easeOutExpo');
                $('.service .title').removeClass('rubberBand').addClass('bounceOutRight');
                $('.service .col-md-3').removeClass('bounceIn').addClass('bounceOutRight');
            }
            if (index == '4') {
                //$('.section4').find('p').fadeOut(2000);
                $('.case .title').removeClass('rubberBand').addClass('bounceOutRight');
                $('.case .col-md-3').removeClass('bounceInDown').addClass('bounceOutRight');
            }
            if (index == '5') {
                //$('.section4').find('p').fadeOut(2000);
                $('.customer .title').removeClass('rubberBand').addClass('bounceOutRight');
                $('.customer .col-md-3').removeClass('flipInY').addClass('bounceOutRight');
            }
            if (index == '6') {
                //$('.section4').find('p').fadeOut(2000);
                $('.contact .title').removeClass('rubberBand').addClass('bounceOutRight');
                $('.contact .col-sm-4').removeClass('flipInX').addClass('bounceOutRight');
            }
        },
        //绑定菜单
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu'
        //项目导航
        //'navigation': true
        ///*---------------------WOW.JS在fullpage之后执行 ------------------------*/
        //afterRender: function(){
        //    wow = new WOW({
        //        animateClass: 'animated'
        //    });
        //    wow.init();
        //    /*---------------------WOW.JS在fullpage之后执行------------------------*/
        //    }
    });

//        setInterval(function(){
//            $.fn.fullpage.moveSectionDown();
//        }, 3000);
    //改变屏幕宽度
    //$(window).resize(function(){
    //    autoScrolling();
    //});
//滚屏响应式   小于1024时出现滚动条
    function autoScrolling() {
        var $ww = $(window).width();
        if ($ww < 1024) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();
    //提示工具的初始化
    $('[data-toggle="tooltip"]').tooltip();


    /*var x1, x2, y1, y2;
    window.onmousedown = function (e) {
        x1 = e.clientX;
        y1 = e.clientY;
    };
    window.onmouseup = function (e) {
        x2 = e.clientX;
        y2 = e.clientY;
        var str;
        //获取毛链接
        if (location.hash == '') {
            str = '#page1';
        } else {
            str = location.hash;
        }
        //截取字符串
        var num = str.substr(-1);
        //获取当前项的data-slide-to属性的值
        var slideTo = $('.carousel-indicators .active').attr('data-slide-to');
        if (x2 - x1 > 100) {
            slideTo--;
            if (slideTo < 0) {
                slideTo = 4;
            }
            $('#slide').carousel(slideTo);
        }
        if (x2 - x1 < -100) {
            slideTo++;
            if (slideTo > 4) {
                slideTo = 0;
            }
            $('#slide').carousel(slideTo);
        }
        if (y2 - y1 > 100) {
            num++;
            if (num > 6) {
                num = 1;
            }
            location.hash = '#page' + num;
        }
        if (y2 - y1 < -100) {
            num--;
            if (num < 1) {
                num = 6;
            }
            location.hash = '#page' + num;
        }
    };*/

    function Direction(a, b, sen) {
        this.dir = 0;
        if (a - b > sen) {
            this.dir = 1;
        }
        if (b - a > sen) {
            this.dir = 2;
        }
    }

    function Index(a, b, sen, selected, select) {
        var dir = new Direction(a, b, sen);
        this.index = $(selected).index();
        this.len = $(select).length - 1;
        if (dir.dir === 1) {
            this.index++;
            if (this.index > this.len) {
                this.index = 0;
            }
            $('#slide').carousel(this.index);
        }

        if (dir.dir === 2) {
            this.index--;
            if (this.index < 0) {
                this.index = this.len;
            }
            $('#slide').carousel(this.index);
        }
    }

    function Indey(a, b, sen) {
        var dir = new Direction(a, b, sen);
        var str;
        //获取毛链接
        if (location.hash === '') {
            str = '#page1';
        } else {
            str = location.hash;
        }
        //截取字符串
        var num = str.substr(-1);
        if (dir.dir === 2) {
            num++;
            if (num > 6) {
                num = 1;
            }
            location.hash = '#page' + num;
        }
        if (dir.dir === 1) {
            num--;
            if (num < 1) {
                num = 6;
            }
            location.hash = '#page' + num;
        }
    }

    var x1, x2, y1, y2;
    window.onmousedown = function (e) {
        x1 = e.clientX;
        y1 = e.clientY;
    };
    window.onmouseup = function (e) {
        x2 = e.clientX;
        y2 = e.clientY;

        //获取当前项的data-slide-to属性的值
        // var slideTo = $('.carousel-indicators .active').attr('data-slide-to');
        var sindex = new Index(x1, x2, 100, '#slide .item.active', '#slide .item');
        var sindey = new Indey(y1, y2, 100);

    }
});