//弹出框
function s_msg1d(p_d_id) {
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
function lc_href(ts_id) {
    var ts_id1 = ts_id.substr(7);
    $("#prsge" + ts_id1).remove();
    goPage(1, 5, 1);
    $(".s_div1").animate({top: 0, opacity: 'hide', width: 0, height: 0, right: 0}, 500);
    $("#z_h").css("display", "none");
    document.travllerdeletefrom.submit();
}
//取消时引藏弹出框
function lc_href1(ts_id) {
    var ts_id1 = ts_id.substr(7);
    $(".s_div1").animate({top: 0, opacity: 'hide', width: 0, height: 0, right: 0}, 500);
    $("#z_h").css("display", "none");
}