// 点击我的资料中编辑按钮时
function upd_umsg(ins_nm) {
    var ins1_nm = document.getElementById(ins_nm);
    if (ins1_nm.className == "inst1") {
        document.getElementById("prs_updt").innerHTML = "";
        document.getElementById("prs_updt").innerHTML = "<input name='inst1' type='image' id='inst1'  src='../images/per_udp.png'/><p>&nbsp;</p>";
        //读取内容
        var pu_nm = document.getElementById("pu_name").innerHTML;//姓名
        var pu_typeC = document.getElementById("pu_crdtp").innerHTML;//证件类型
        var pu_birth = document.getElementById("pu_date").innerHTML;//出生日期
        var pu_Leader = document.getElementById("pu_per").innerHTML;//客户经理
        var pu_Sex = document.getElementById("pu_sex").innerHTML;//性别
        var pu_HTel = document.getElementById("pu_ztel").innerHTML;//座机
        var pu_Card = document.getElementById("pu_card").innerHTML; //证件号
        var pu_Depa = document.getElementById("pu_depa").innerHTML; //省
        var pu_Depa1 = document.getElementById("pu_depa1").innerHTML;//城市
        var pu_Job = document.getElementById("pu_job").innerHTML; //工作单位
        var pu_Resu = document.getElementById("pu_resu").innerHTML;//职称
        //读取内容over
        //插入内容
        var str1 = "";
        var str2 = "";
        var str3 = "";
        var str4 = "";
        $("#user_msg").html("");
        str1 = "<div class='prs_rt2_1' id='user_Lmsg1'></div>";//左部框
        $("#user_msg").append(str1); //左部框插入
        str2 = "<div class='prs_rt2_11'><div class='ct_1'><span style='color:#f00; line-heigth:30px;'>*</span>姓名：&nbsp;</div><div class='ct_2'><input type='text' autocomplete='off' name='pu_name' value=''  style='margin-top:5px; width:130px;' id='pu_name' onkeyup='ck_Nm();' />&nbsp;<span id='ck_wnm'></span></div></div>";
        str2 += "<div class='prs_rt2_11'><div class='ct_1'><span style='color:#f00; line-heigth:30px;'>*</span>手机号码：&nbsp;</div><div class='ct_2'><span style='line-height:30px; font-size:12px; color:#555; width:130px;' id='pu_tel'>15933258477</span></div></div>";
        str2 += "<div class='prs_rt2_11'><div class='ct_1'><span style='color:#f00; line-heigth:30px;'>*</span>证件类型：&nbsp;</div><div class='ct_2'><select name='pu_crdtp' style='margin-top:5px; width:130px;'  id='pu_crdtp'><option checked='checked'>身份证</option><option>护照</option><option>其他</option></select></div></div>";
        str2 += "<div class='prs_rt2_11'><div class='ct_1'><span style='color:#f00; line-heigth:30px;'>*</span>出生日期：&nbsp;</div><div class='ct_2'><input type='text' name='pu_date' value=''  style='margin-top:5px; width:70px;' id='pu_date' onkeyup='ck_Birth();' onblur='ck_wbcrd();'/>&nbsp;<span id='ck_wbir'></span>&nbsp;<span style='color:#f00; font-size:12px; line-height:30px;'>如:2014-02-10</span></div></div>";
        str2 += "<div class='prs_rt2_11'><div class='ct_1'>邀请码：&nbsp;</div><div class='ct_2'><span style='color:#f00; line-height:30px; font-size:14px; font-weight:bold;'>88888</span></div></div>";
        str2 += "<div class='prs_rt2_11'><div class='ct_1'>客户经理：&nbsp;</div><div class='ct_2'><input type='text' autocomplete='off' name='pu_per' value=''  style='margin-top:5px; width:130px;' id='pu_per'/></div></div>";
        $("#user_Lmsg1").append(str2); //左部内容插入
        str3 = "<div class='prs_rt2_2' id='user_Rmsg1'></div>";//右部框
        $("#user_msg").append(str3); //插入右部框
        str4 = "<div class='prs_rt2_11'><div class='ct_1'><span style='color:#f00; line-heigth:30px;'>*</span>性别：&nbsp;</div><div class='ct_2'><input name='sex' type='radio' value=''  id='pu_sex'/><span style='color:#555; font-size:12px; line-height:30px;'>&nbsp;&nbsp;男</span>&nbsp;&nbsp;&nbsp;<input name='sex' type='radio' value='' id='pu_sex1'/><span style='color:#555; font-size:12px; line-height:30px;'>&nbsp;&nbsp;女</span></div></div>";
        str4 += "<div class='prs_rt2_11'><div class='ct_1'>座机号：&nbsp;</div><div class='ct_2'><input type='text' autocomplete='off' name='pu_ztel' value=''  style='margin-top:5px; width:130px;' id='pu_ztel'/></div></div>";
        str4 += "<div class='prs_rt2_11'><div class='ct_1'><span style='color:#f00; line-heigth:30px;'>*</span>证件号：&nbsp;</div><div class='ct_2'><input type='text' autocomplete='off' name='pu_card' value=''  style='margin-top:5px; width:130px;'  id='pu_card' onkeyup='ck_wcrd();' onblur='ck_wbcrd();' />&nbsp;<span id='ck_wcrd'></span></div></div>";
        str4 += "<div class='prs_rt2_11'><div class='ct_1'><span style='color:#f00; line-heigth:30px;'>*</span>所在地：&nbsp;</div><div class='ct_2'><select id='province' onchange='initcity();' name='province'  style='margin-top:5px;'><SCRIPT>creatprovince();</SCRIPT></select>&nbsp;<select name='city' style='margin-top:5px;' id='city'> <option value=''>选择城市</option></select>&nbsp;<span id='ck_wdep'></span></div></div>";
        str4 += "<div class='prs_rt2_11'><div class='ct_1'>工作单位：&nbsp;</div><div class='ct_2'><input type='text' autocomplete='off' name='pu_job' value=''  style='margin-top:5px; width:130px;' id='pu_job'/></div></div>";
        str4 += "<div class='prs_rt2_11'><div class='ct_1'>职称：&nbsp;</div><div class='ct_2'><input type='text' autocomplete='off' name='pu_resu' value=''  style='margin-top:5px; width:130px;' id='pu_resu'/></div></div>";
        $("#user_Rmsg1").append(str4); //插入右部内容
        //插入内容over
        //将读取的内容插入到页面中
        document.getElementById("pu_name").value = pu_nm;//姓名
        //证件类型
        if (pu_typeC == '身份证') {
            document.getElementById("pu_crdtp").options[0].selected = "ture";
        }
        else if (pu_typeC == '护照') {
            document.getElementById("pu_crdtp").options[1].selected = "ture";
        }
        else {
            document.getElementById("pu_crdtp").options[2].selected = "ture";
        }
        //证件类型 over
        document.getElementById("pu_date").value = pu_birth;//出生日期
        if (pu_Leader != "未设置") {
            document.getElementById("pu_per").value = pu_Leader;
        }//客户经理
        //性别
        if (pu_Sex == '男') {
            document.getElementById("pu_sex").checked = "true";
        }
        else {
            document.getElementById("pu_sex1").checked = "true";
        }
        //性别over
        if (pu_HTel != "未设置") {
            document.getElementById("pu_ztel").value = pu_HTel;
        }//座机
        document.getElementById("pu_card").value = pu_Card; //证件号
        //设置地区
        //省份
        var P_len = document.getElementById("province").options.length;
        for (var I = 1; I <= P_len; I++) {
            var TT = document.getElementById("province").options[I].text;
            if (TT == pu_Depa) {
                document.getElementById("province").options[I].selected = "true";
                initcity();
                break;
            }
        }
        //城市
        var C_len = document.getElementById("city").options.length;

        for (var K = 1; K <= C_len; K++) {
            var EE = document.getElementById("city").options[K].text;
            if (EE == pu_Depa1) {
                document.getElementById("city").options[K].selected = "true";
                break;
            }
        }
        //设置地区 over
        if (pu_Job != "未设置") {
            document.getElementById("pu_job").value = pu_Job;
        }//工作单位
        if (pu_Resu != "未设置") {
            document.getElementById("pu_resu").value = pu_Resu;
        }//职称
        //将读取的内容插入到页面中 over
    }
}
function upd_umsg1() {
    var flag = 0;
    var flag1 = 0;
    var flag2 = 0;
    var flag3 = 0;
    //读取内容
    var pu_nm = document.getElementById("pu_name").value;//姓名
    //证件类型
    var pu_typeC1 = document.getElementById("pu_crdtp").selectedIndex;
    var pu_typeC = document.getElementById("pu_crdtp").options[pu_typeC1].text;
    //证件类型 over
    var pu_birth = document.getElementById("pu_date").value;//出生日期
    //性别over
    var pu_Card = document.getElementById("pu_card").value; //证件号
    //省
    var pu_Depa_1 = document.getElementById("province").selectedIndex; //省
    var pu_Depa = document.getElementById("province").options[pu_Depa_1].text;
    //省 over
    //城市
    var pu_Depa_2 = document.getElementById("city").selectedIndex;//城市
    var pu_Depa1 = document.getElementById("city").options[pu_Depa_2].text;
    //城市over
    //读取内容over
//姓名验证
    if (pu_nm != "") {
        var patrn = /^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5]*$/;//中文
        var patrn1 = /^([A-Za-z]+\s?)*[A-Za-z]$/;//英文
        var patrn2 = /^[\u4e00-\u9fa5]{1,}[A-Za-z]*$/;
        if (!patrn.exec(pu_nm)) {
            if (patrn1.exec(pu_nm) || patrn2.exec(pu_nm)) {
                if (Nm1_len < 26) {
                    document.getElementById("ck_wnm").innerHTML = "";
                }
                else {
                    document.getElementById("ck_wnm").innerHTML = "<img src='../images/wrong_ck.jpg' />";
                    flag = 1;
                }
            }
            else {
                document.getElementById("ck_wnm").innerHTML = "<img src='../images/wrong_ck.jpg' />";
                flag = 1;
            }
        }
        else {
            document.getElementById("ck_wnm").innerHTML = "";
        }
    }
    else {
        flag = 1;
    }
//姓名验证 over
//出生日期
    if (pu_birth != "") {
        var partn_D = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
        if (partn_D.exec(pu_birth)) {
            document.getElementById("ck_wbir").innerHTML = "";
        }
        else {
            document.getElementById("ck_wbir").innerHTML = "<img src='../images/wrong_ck.jpg' />";
            flag1 = 1;
        }
    }
    else {
        flag1 = 1;
    }
//出生日期 over
//证件号验证
    if (pu_Card != "") {
        if (pu_typeC == '身份证') {
            if (cidInfo(pu_Card) != '1') {
                document.getElementById("ck_wcrd").innerHTML = "";
            }
            else {
                document.getElementById("ck_wcrd").innerHTML = "<img src='../images/wrong_ck.jpg' />";
                flag2 = 1;
            }
        }
    }
    else {
        flag2 = 1;
    }
//证件号验证 over
//地区
    if (pu_Depa == '省份' || pu_Depa1 == '地区') {
        flag3 = 1;
        document.getElementById("ck_wdep").innerHTML = "<img src='../images/wrong_ck.jpg' />";
    } else {
        document.getElementById("ck_wdep").innerHTML = "";
    }
//地区over
    if (flag == 0 && flag1 == 0 && flag2 == 0 && flag3 == 0) {
        return true;
    } else {
        alert("信息输入有误,请重新输入");
        return false;
    }
}