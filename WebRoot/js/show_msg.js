// JavaScript Document
//错误提示
function s_msg() {
    var box = 150;
    var th = $(window).scrollTop() + $(window).height() / 1.6 - box;
    var h = document.body.clientHeight;
    var rw = $(window).width() / 2 - box;
    $(".s_div").animate({top: th, opacity: 'show', width: 250, height: 150, right: rw}, 500);
    $("#z_h").css({
        display: "block", height: $(document).height()
    });
}
//航班无提示
function s_msg1() {
    var box = 150;
    var th = $(window).scrollTop() + $(window).height() / 1.6 - box;
    var h = document.body.clientHeight;
    var rw = $(window).width() / 2 - box;
    $(".s_div1").animate({top: th, opacity: 'show', width: 250, height: 150, right: rw}, 500);
    $("#z_h").css({
        display: "block", height: $(document).height()
    });
}
//确定跳转
function lc_href() {
    window.location.href = "planesearch.jsp";
}
