$(function () {
    $(".case .case_class>.directory > li ").click(function () {
        var idx=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.case_class .case_details > div').eq(idx).addClass('now_display').siblings().removeClass('now_display');
    });
    $(".case_details .details .case_icon>li").click(function () {
        var ind=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.case_class .now_display .case_img > div').eq(ind).addClass('now').siblings().removeClass('now');
    });
})