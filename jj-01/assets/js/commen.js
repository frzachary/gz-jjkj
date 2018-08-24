$(function () {
    $(window).scroll(function () {


        //判断卷去的高度超过300
        //1、让导航有固定定位

        if($(window).scrollTop()>=300)    {
            $(".jj_nav").addClass('nav_fixed');
        }else{
            $(".jj_nav").removeClass('nav_fixed');

        }

    });





})