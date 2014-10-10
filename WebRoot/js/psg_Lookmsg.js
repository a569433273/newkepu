// 查看常用乘客信息
function prs_Look(prs_L) {
    document.getElementById("page_total").style.display = 'none';
    var str1 = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var str5 = "";
    var str6 = "";
    var prs2 = prs_L.indexOf("_");
    var prs1 = prs_L.substr(3, prs2 - 3);//得到第几个id的数字
    document.getElementById("prs_psg1").style.display = 'none';
    var prs_L1 = document.getElementById("psg" + prs1 + "_Nm").innerHTML;//姓名
    var prs_L2 = document.getElementById("psg" + prs1 + "_Tel").innerHTML;//电话
    var prs_L3 = document.getElementById("psg" + prs1 + "_Ctp").innerHTML;//证件类型
    var prs_L4 = document.getElementById("psg" + prs1 + "_Crd").innerHTML;//证件号
    var prs_L5 = document.getElementById("psg" + prs1 + "_Bir").innerHTML;//出生日期
    var prs_L6 = document.getElementById("psg" + prs1 + "_Adt").innerHTML;//旅客类型
    var prs_L7 = document.getElementById("psg" + prs1 + "_Sex").innerHTML;//性别
    $("#prs_ins1").html("");
    str1 = "<div class='prs_Tp' id='prs_Tp'>&nbsp;查看乘机人信息</div>";
    $("#prs_ins1").append(str1);
    str2 = "<div class='prs_rt2_1' id='prs_Tp1'></div>";
    $("#prs_ins1").append(str2);
    str3 = "<div class='prs_rt2_11'><div class='ct_1'>姓名：&nbsp;</div><div class='ct_2'><span style='line-height:30px; font-size:12px; color:#555;' id='Nm1'></span></div></div>";
    str3 += "<div class='prs_rt2_11'><div class='ct_1'>证件类型：&nbsp;</div><div class='ct_2'><span style='line-height:30px; font-size:12px; color:#555;' id='Ctype1'></span></div></div>";
    str3 += "<div class='prs_rt2_11'><div class='ct_1'>出生日期：&nbsp;</div><div class='ct_2'><span style='line-height:30px; font-size:12px; color:#555;' id='Bdate1' ></span></div></div>";
    str3 += "<div class='prs_rt2_11'><div class='ct_1'>性别：&nbsp;</div><div class='ct_2'><span style='line-height:30px; font-size:12px; color:#555;' id='Psex1' ></span></div></div>";
    $("#prs_Tp1").append(str3);
    str4 = "<div class='prs_rt2_2' id='prs_Tp2'></div>";
    $("#prs_ins1").append(str4);
    str5 = "<div class='prs_rt2_11'><div class='ct_1'>手机号：&nbsp;</div><div class='ct_2'><span style='line-height:30px; font-size:12px; color:#555;' id='Ptel1'></span></div></div>";
    str5 += "<div class='prs_rt2_11'><div class='ct_1'>证件号：&nbsp;</div><div class='ct_2'><span style='line-height:30px; font-size:12px; color:#555;' id='CrdNo1'></span></div></div>";
    str5 += "<div class='prs_rt2_11'><div class='ct_1'>旅客类型：&nbsp;</div><div class='ct_2'><span style='line-height:30px; font-size:12px; color:#555;' id='Ptype1'></span></div></div>";
    $("#prs_Tp2").append(str5);
    str6 = "<div class='prs_Bt'>&nbsp;<span style='border-bottom:1px solid #0066cc' onclick='prs_back()'>返回</span></div>";
    $("#prs_ins1").append(str6);

    document.getElementById("Nm1").innerHTML = prs_L1;
    document.getElementById("Ctype1").innerHTML = prs_L3;
    document.getElementById("Bdate1").innerHTML = prs_L5;
    document.getElementById("Psex1").innerHTML = prs_L7;
    document.getElementById("Ptel1").innerHTML = prs_L2;
    document.getElementById("CrdNo1").innerHTML = prs_L4;
    document.getElementById("Ptype1").innerHTML = prs_L6;

}
//返回
function prs_back() {
    document.getElementById("prs_ins1").innerHTML = "";
    document.getElementById("prs_psg1").style.display = 'block';
    document.getElementById("page_total").style.display = 'block';

}
