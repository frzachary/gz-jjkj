
$(function () {
    var t;
    var index = 0;
    /////自动播放
    t = setInterval(play, 3000)

    function play() {
        index++;
        if (index > 4) {
            index = 0
        }

        $(".jj_case .case-ban .ban_point li").eq(index).css({
            "background": "#38b7d8",

        }).siblings().css({
            "background": "#ddd"
        })
        $(".jj_case .case-ban .case-ban-con>div").eq(index).fadeIn().siblings("div").fadeOut();


    };
    $(".jj_case .case-ban .ban_prev").click(function () {
        index--;
        if (index < 0) {
            index = 4
        }

        $(".jj_case .case-ban .ban_point li").eq(index).css({
            "background": "#38b7d8",

        }).siblings().css({
            "background": "#ddd"
        })

        $(".jj_case .case-ban .case-ban-con>div").eq(index).fadeIn().siblings("div").fadeOut();

    });

    $(".jj_case .case-ban .ban_next").click(function () {
        index++;
        if (index > 4) {
            index = 0
        }


        $(".jj_case .case-ban .ban_point li").eq(index).css({
            "background": "#38b7d8",

        }).siblings().css({
            "background": "#ddd"
        })
        $(".jj_case .case-ban .case-ban-con>div").eq(index).fadeIn().siblings("div").fadeOut();

    });


    $(".case-ban").hover(
        function () {
            clearInterval(t);
        },

        function () {

            t = setInterval(play, 3000)

            function play() {
                index++;
                if (index > 4) {
                    index = 0
                }
                $(".jj_case .case-ban .ban_point li").eq(index).css({
                    "background": "#38b7d8",

                }).siblings().css({
                    "background": "#ddd"
                })

                $(".jj_case .case-ban .case-ban-con>div").eq(index).fadeIn().siblings("div").fadeOut();


            }
        }
    )
})
