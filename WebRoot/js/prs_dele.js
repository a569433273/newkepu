//选中复选框时弹出确认删除框
function prs_Dele(prs_d) {
    var str1 = "";
    var str2 = "";
    var str = "";
    var prs_d2 = prs_d.indexOf("_");
    var prs_d1 = prs_d.substr(3, prs_d2 - 3);
    $("#s_div").html("");
    str = "<h2>窠浦提醒您</h2>";
    $("#s_div").append(str);
    str1 = " <div class='s_t' id='s_t" + prs_d1 + "'></div>";
    $("#s_div").append(str1);
    str2 = "<div class='s_1'>确认删除吗？</div>";
    str2 += "<div class='s_2'><img src='../images/show_sure.jpg' id='dlt_psg" + prs_d1 + "' onclick='lc_href(this.id)'/>&nbsp;&nbsp;<img src='../images/show_disure.jpg' id='hdn_psg" + prs_d1 + "' onclick='lc_href1(this.id)'></div>";
    $("#s_t" + prs_d1).append(str2);
    document.getElementById("deleteid").value=document.getElementById("psg" + prs1 + "_Id").innerHTML;
    s_msg1(prs_d);
}