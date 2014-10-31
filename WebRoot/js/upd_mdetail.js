// 修改会议详细信息
function upd_mdetail() {
    var str = "";
    var str1 = "";
    var str2 = "";
    //读取内容

    var depart_M = document.getElementById("Mdet_depart1").innerHTML;

    var name_M = document.getElementById("Mdet_name1").innerHTML;

    var city_M = document.getElementById("Mdet_city1").innerHTML;

    var where_M = document.getElementById("Mdet_where1").innerHTML;
    var Pnum_M = document.getElementById("Mdet_pnum1").innerHTML;
    var report_M = document.getElementById("Mdet_report1").innerHTML;
    var partnum_M = document.getElementById("Mdet_partnum1").innerHTML;
    var money_M = document.getElementById("Mdet_money1").innerHTML;
    var money_M = parseInt(money_M);
    var partnum_M = parseInt(partnum_M);
    var Pnum_M = parseInt(Pnum_M);
    //读取内容 over
    $("#mDetail1_left").html("");
    str = "<table id='mdt_tble'></table>"
    $("#mDetail1_left").append(str);
    str1 += "<tr><td width='80'>组织单位：</td><td><input type='text' name='Mdet_depart' style='width:200px;' id='Mdet_depart'/></td></tr>";
    str1 += "<tr><td width='80'>会议名称：</td><td><input type='text' name='Mdet_name' style='width:200px;' id='Mdet_name'/></td></tr>";
    str1 += "<tr><td width='80'>举办城市：</td><td><input type='text' name='mdet_city' style='width:200px;' id='Mdet_city'/></td></tr>";
    str1 += "<tr><td width='80'>会议地点：</td><td><input type='text' name='mdet_where' style='width:200px;' id='Mdet_where'/></td></tr>";
    str1 += "<tr><td width='80'>计划人数：</td><td><input type='text' name='Mdet_Pnum' style='width:100px;' id='Mdet_pnum'/>&nbsp;人</td></tr>";
    str1 += "<tr><td width='80'>报到详情：</td><td><input type='text' name='Mdet_report' id='Mdet_report' style='width:100px; color:#545454;' class='doubledate' onfocus='clear_MDinput(this.id)' readonly='readonly'/></td></tr>";
    str1 += "<tr><td width='80'>参议天数：</td><td><input type='text' name='Mdet_partnum' style='width:100px;' id='Mdet_partnum'/>&nbsp;天</td></tr>";
    str1 += "<tr><td width='80'>会议费用：</td><td><input type='text' name='Mdet_money' style='width:100px;' id='Mdet_money' />&nbsp;元</td></tr>";
    $("#mdt_tble").append(str1);
    //将内容写入
    document.getElementById("Mdet_depart").value = depart_M;
    document.getElementById("Mdet_name").value = name_M;
    document.getElementById("Mdet_city").value = city_M;
    document.getElementById("Mdet_where").value = where_M;
    document.getElementById("Mdet_pnum").value = Pnum_M;
    document.getElementById("Mdet_report").value = report_M;
    document.getElementById("Mdet_partnum").value = partnum_M;
    document.getElementById("Mdet_money").value = money_M;
    //将内容写入 over
    $("#mDetail_2").html("");
    str2 = "<p style='text-align:left; margin-top:10px; margin-left:31px;'><input type='image' name='' src='../images/mdetail_save.jpg'/></p><p>&nbsp;</p>";
    $("#mDetail_2").append(str2);
}
//onfocus 内容消失
function clear_MDinput(Md_id) {
    document.getElementById(Md_id).value = "";
}