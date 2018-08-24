$(function () {
    var t;
    var index = 0;
    /////自动播放
    t = setInterval(play, 4000)

    function play() {
        index++;
        if (index > 2) {
            index = 0
        }

        $(".jj_banner .jj_ban_point> li").eq(index).css({
            "background": "#38b7d8",

        }).siblings().css({
            "background": "#ddd"
        })
        $(".jj_banner .banner-content>div").eq(index).fadeIn().siblings("div").fadeOut();


    };
    $(".jj_banner .jj_ban_prev").click(function () {
        index--;
        if (index < 0) {
            index = 2
        }

        $(".jj_banner .jj_ban_point> li").eq(index).css({
            "background": "#38b7d8",

        }).siblings().css({
            "background": "#ddd"
        })

        $(".jj_banner .banner-content>div").eq(index).fadeIn().siblings("div").fadeOut();

    });

    $(".jj_banner .jj_ban_next").click(function () {
        index++;
        if (index > 2) {
            index = 0
        }


        $(".jj_banner .jj_ban_point> li").eq(index).css({
            "background": "#38b7d8",

        }).siblings().css({
            "background": "#ddd"
        })
        $(".jj_banner .banner-content>div").eq(index).fadeIn().siblings("div").fadeOut();

    });


    $(".jj_banner").hover(
        function () {
            clearInterval(t);
        },

        function () {

            t = setInterval(play, 4000)

            function play() {
                index++;
                if (index > 2) {
                    index = 0
                }
                $(".jj_banner .jj_ban_point> li").eq(index).css({
                    "background": "#38b7d8",

                }).siblings().css({
                    "background": "#ddd"
                })

                $(".jj_banner .banner-content>div").eq(index).fadeIn().siblings("div").fadeOut();


            }
        }
    )
})