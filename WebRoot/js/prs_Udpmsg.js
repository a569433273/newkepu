//修改常用乘客信息
function prs_Upt(prs_U) {
    document.getElementById("page_total").style.display = 'none';
    var str1 = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var str5 = "";
    var str6 = "";
    var str7 = "";
    var str8 = "";
    var prs2 = prs_U.indexOf("_");
    var prs1 = prs_U.substr(3, prs2 - 3);//得到第几个id的数字
    document.getElementById("prs_psg1").style.display = 'none';
    var prs_L1 = document.getElementById("psg" + prs1 + "_Nm").innerHTML;//姓名
    var prs_L2 = document.getElementById("psg" + prs1 + "_Tel").innerHTML;//电话
    var prs_L3 = document.getElementById("psg" + prs1 + "_Ctp").innerHTML;//证件类型
    var prs_L4 = document.getElementById("psg" + prs1 + "_Crd").innerHTML;//证件号
    var prs_L5 = document.getElementById("psg" + prs1 + "_Bir").innerHTML;//出生日期
    var prs_L6 = document.getElementById("psg" + prs1 + "_Adt").innerHTML;//旅客类型
    var prs_L7 = document.getElementById("psg" + prs1 + "_Sex").innerHTML;//性别
    var prs_L8 = document.getElementById("psg" + prs1 + "_Id").innerHTML;//常旅客ID号
    $("#prs_ins1").html("");
    str1 = "<div class='prs_Tp' id='prs_Tp'>&nbsp;修改乘机人信息</div>";
    $("#prs_ins1").append(str1);
    str2 = "<div style='float:left; width:810px; height:auto; overflow:hidden;' id='prs_Tp1'></div>";
    $("#prs_ins1").append(str2);
    str3 += "<div class='prs_rt2_1' id='prs_Tp2'></div>";
    $("#prs_Tp1").append(str3);
    str4 = "<div class='prs_rt2_11'><div class='ct_1'>姓名：&nbsp;</div><div class='ct_2'><input type='text' name='Nm1' value=''  style='margin-top:5px;' id='Nm1' onkeyup='chk_Nm1()'/>&nbsp;<span id='chk_Nm1'></span></div></div>";
    str4 += "<div class='prs_rt2_11'><div class='ct_1'>证件类型：&nbsp;</div><div class='ct_2'><select name='Ctype1' style='margin-top:5px; width:120px;' id='Ctype1'><option value='0'>身份证</option><option value='1'>护照</option><option value='2'>军官</option><option value='3'>警官</option><option value='4'>港澳通行证</option><option value='5'>其他</option></select></div></div>";
    str4 += "<div class='prs_rt2_11'><div class='ct_1'>出生日期：&nbsp;</div><div class='ct_2'><input type='text' name='Bdate1' value=''  style='margin-top:5px; width:70px;' id='Bdate1' onkeyup='chk_Date()' onblur='chk_bCrd()'/>&nbsp;<span id='chk_Bdate'></span>&nbsp;<span style='font-size:12px; color:#f00; line-height:25px;'>如:2014-01-02</span></div></div>";
    str4 += "<div class='prs_rt2_11'><div class='ct_1'>性别：&nbsp;</div><div class='ct_2'><input name='Psex1' type='radio' value='男' id='Psex1' onclick='checksex(this.value)'/><span style='color:#555; font-size:12px; line-height:30px;'>&nbsp;&nbsp;男</span>&nbsp;&nbsp;&nbsp;<input name='Psex2' type='radio' value='女' id='Psex2' onclick='checksex(this.value)'/><span style='color:#555; font-size:12px; line-height:30px;'>&nbsp;&nbsp;女</span></div></div>";
    $("#prs_Tp2").append(str4);
    str5 = "<div class='prs_rt2_2' id='prs_Tp3'></div>";
    $("#prs_Tp1").append(str5);
    str6 = "<div class='prs_rt2_11'><div class='ct_1'>手机号码：&nbsp;</div><div class='ct_2'><input type='text' name='Ptel1' value=''  style='margin-top:5px;' id='Ptel1' onkeyup='chk_Ptel()'/>&nbsp;<span id='chk_Ptel1'></span></div></div>";
    str6 += "<div class='prs_rt2_11'><div class='ct_1'>证件号：&nbsp;</div><div class='ct_2'><input type='text' name='CrdNo1' value=''  style='margin-top:5px;' id='CrdNo1' onkeyup='chk_Crd()' onblur='chk_bCrd()'/>&nbsp;<span id='chk_CrdNo1'></span></div></div>";
    str6 += "<div class='prs_rt2_11'><div class='ct_1'>旅客类型：&nbsp;</div><div class='ct_2'><select name='Ptype1' style='margin-top:5px; width:120px;' id='Ptype1' onchange='chk_bCrd()'><option value='1'>成人(>12)</option><option value='0'>儿童(<12)</option></select></div></div>";
    str6 += "<input type='hidden' name='Id1' id='Id1' value=''>";
    str6 += "<input type='hidden' name='Sex1' id='Sex1' value=''>";
    $("#prs_Tp3").append(str6);
    str7 = "<div class='prs_Bt'>&nbsp;<span style='border-bottom:1px solid #0066cc' onclick='prs_back()'>返回</span></div>";
    $("#prs_ins1").append(str7);
    str8 = "<div style='float:left; width:810px; height:auto; overflow:hidden;'><input type='image' src='../images/prs_save.jpg' onclick='return ck_psgMsg(2)'/></div>"
    $("#prs_ins1").append(str8);
    //将信息写入
    document.getElementById("Nm1").value = prs_L1;
    document.getElementById("Bdate1").value = prs_L5;
    document.getElementById("Ptel1").value = prs_L2;
    document.getElementById("CrdNo1").value = prs_L4;
    document.getElementById("Id1").value = prs_L8;
    document.getElementById("Sex1").value = prs_L7;
    if (prs_L7 == '男') {
        document.getElementById("Psex1").checked = 'true';
    } else {
        document.getElementById("Psex2").checked = 'true';
    }
    if (prs_L3 == '身份证') {
        document.getElementById("Ctype1").options[0].selected = 'true';
    }
    else if (prs_L3 == '护照') {
        document.getElementById("Ctype1").options[1].selected = 'true';
    }
    else if (prs_L3 == '军官') {
        document.getElementById("Ctype1").options[2].selected = 'true';
    }
    else if (prs_L3 == '警官') {
        document.getElementById("Ctype1").options[3].selected = 'true';
    }
    else if (prs_L3 == '港澳通行证') {
        document.getElementById("Ctype1").options[4].selected = 'true';
    }
    else {
        document.getElementById("Ctype1").options[5].selected = 'true';
    }
    if (prs_L6 == '成人') {
        document.getElementById("Ptype1").options[0].selected = 'true';
    } else {
        document.getElementById("Ptype1").options[1].selected = 'true';
    }
    //将信息写入over
}
function checksex(browser) {
    document.getElementById("Sex1").value = browser
}
