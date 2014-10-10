//添加常用乘机人信息
function prs_addpsg() {
    document.getElementById("page_total").style.display = 'none';
    var str1 = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var str5 = "";
    var str6 = "";
    var str7 = "";
    var str8 = "";
    document.getElementById("prs_psg1").style.display = 'none';
    $("#prs_ins1").html("");
    str1 = "<div class='prs_Tp' id='prs_Tp'>&nbsp;添加乘机人信息</div>";
    $("#prs_ins1").append(str1);
    str2 = "<div style='float:left; width:810px; height:auto; overflow:hidden;' id='prs_Tp1'></div>";
    $("#prs_ins1").append(str2);
    str3 += "<div class='prs_rt2_1' id='prs_Tp2'></div>";
    $("#prs_Tp1").append(str3);
    str4 = "<div class='prs_rt2_11'><div class='ct_1'>姓名：&nbsp;</div><div class='ct_2'><input type='text' name='' value=''  style='margin-top:5px;' id='Nm1' onkeyup='chk_Nm1()'/>&nbsp;<span id='chk_Nm1'></span></div></div>";
    str4 += "<div class='prs_rt2_11'><div class='ct_1'>证件类型：&nbsp;</div><div class='ct_2'><select name='' style='margin-top:5px; width:120px;' id='Ctype1'><option checked='checked'>身份证</option><option>护照</option><option>其他</option></select></div></div>";
    str4 += "<div class='prs_rt2_11'><div class='ct_1'>出生日期：&nbsp;</div><div class='ct_2'><input type='text' name='' value=''  style='margin-top:5px; width:70px;' id='Bdate1' onkeyup='chk_Date()' onblur='chk_bCrd()'/>&nbsp;<span id='chk_Bdate'></span>&nbsp;<span style='font-size:12px; color:#f00; line-height:25px;'>如:2014-01-02</span></div></div>";
    str4 += "<div class='prs_rt2_11'><div class='ct_1'>性别：&nbsp;</div><div class='ct_2'><input name='sex' type='radio' value='' checked='checked' id='Psex1' /><span style='color:#555; font-size:12px; line-height:30px;'>&nbsp;&nbsp;男</span>&nbsp;&nbsp;&nbsp;<input name='sex' type='radio' value='' id='Psex2' /><span style='color:#555; font-size:12px; line-height:30px;'>&nbsp;&nbsp;女</span></div></div>";
    $("#prs_Tp2").append(str4);
    str5 = "<div class='prs_rt2_2' id='prs_Tp3'></div>";
    $("#prs_Tp1").append(str5);
    str6 = "<div class='prs_rt2_11'><div class='ct_1'>手机号码：&nbsp;</div><div class='ct_2'><input type='text' name='' value=''  style='margin-top:5px;' id='Ptel1' onkeyup='chk_Ptel()'/>&nbsp;<span id='chk_Ptel1'></span></div></div>";
    str6 += "<div class='prs_rt2_11'><div class='ct_1'>证件号：&nbsp;</div><div class='ct_2'><input type='text' name='' value=''  style='margin-top:5px;' id='CrdNo1' onkeyup='chk_Crd()' onblur='chk_bCrd()'/>&nbsp;<span id='chk_CrdNo1'></span></div></div>";
    str6 += "<div class='prs_rt2_11'><div class='ct_1'>旅客类型：&nbsp;</div><div class='ct_2'><select name='' style='margin-top:5px; width:120px;' id='Ptype1' onchange='chk_bCrd()'><option checked='checked'>成人(>12)</option><option>儿童(<12)</option></select></div></div>";
    $("#prs_Tp3").append(str6);
    str7 = "<div class='prs_Bt'>&nbsp;<span style='border-bottom:1px solid #0066cc' onclick='prs_back()'>返回</span></div>";
    $("#prs_ins1").append(str7);
    str8 = "<div style='float:left; width:810px; height:auto; overflow:hidden;'><input type='image' src='../images/prs_save.jpg' onclick='return ck_psgMsg(1)'/></div>"
    $("#prs_ins1").append(str8);
}