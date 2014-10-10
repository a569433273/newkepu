//删除选中的常用乘用乘机人
function rmv_psg() {
    var str1 = "";
    var str2 = "";
    var str = "";
    $("#s_div").html("");
    str = "<h2>窠浦提醒您</h2>";
    $("#s_div").append(str);
    str1 = " <div class='s_t' id='s_t1'></div>";
    $("#s_div").append(str1);
    str2 = "<div class='s_1'>确认将选中删除吗？</div>";
    str2 += "<div class='s_2'><img src='../images/show_sure.jpg' onclick='lc_dte()'/>&nbsp;&nbsp;<img src='../images/show_disure.jpg'  onclick='lc_disdte()'></div>";
    $("#s_t1").append(str2);
    var flag = 0;
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "only_slt") {
            if (allElements[i].checked) {
                flag = 1;
            }
        }
    }
    if (flag == 1) {
        s_msg1('111');
    }
}//选中时删除弹出框
function lc_dte() {
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = allElements.length - 1; i > 0; i--) {
        if (allElements[i].className == "only_slt") {
            if (allElements[i].checked) {
                var ckbx_id = $(allElements[i]).attr("id");
                var ckbox_2 = ckbx_id.indexOf('_');
                var ckbx_1 = ckbx_id.substr(3, ckbox_2 - 3);
                var id1 = "prsge" + ckbx_1;
                var afa1 = document.getElementById("tb_tab");
                var afa = document.getElementById(id1);
                afa1.removeChild(afa);//?????????????????
                $(".s_div1").animate({top: 0, opacity: 'hide', width: 0, height: 0, right: 0}, 500);
                $("#z_h").css("display", "none");
                goPage(1, 5, 1);
            }
        }
    }

}//选中确定时删除
function lc_disdte() {
    $(".s_div1").animate({top: 0, opacity: 'hide', width: 0, height: 0, right: 0}, 500);
    $("#z_h").css("display", "none");
}//选中取消时引藏
function oly_selt(oy_id) {
    var oy_id1 = document.getElementById(oy_id);
    if (!oy_id1.checked) {
        document.getElementById("slt1_all").checked = false;
        document.getElementById("slt_all").checked = false;
    }
}
