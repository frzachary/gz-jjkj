$(function () {
    $(".jobs .jobs_class li ").click(function () {
        var idx=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.jobs .jobs_describe> div').eq(idx).addClass('disp').siblings().removeClass('disp');
    })
})