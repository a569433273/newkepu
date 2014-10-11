// 保存时验证乘客信息
function ck_psgMsg(Num_s) {
    var flag = 0;
    var flag1 = 0;
    var flag2 = 0;
    var flag3 = 0;
    //姓名验证
    var nm1 = document.getElementById("Nm1").value;
    var nm1_len = nm1.length;
    var patrn = /^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5]*$/;//中文
    var patrn1 = /^([A-Za-z]+\s?)*[A-Za-z]$/;//英文
    var patrn2 = /^[\u4e00-\u9fa5]{1,}[A-Za-z]*$/;
    if (!patrn.exec(nm1)) {
        if (patrn1.exec(nm1) || patrn2.exec(nm1)) {
            if (nm1_len < 26) {
                document.getElementById("chk_Nm1").innerHTML = "";
            }
            else {
                document.getElementById("chk_Nm1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
                flag = 1;
            }
        }
        else {
            document.getElementById("chk_Nm1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
            flag = 1;
        }
    }
    else {
        document.getElementById("chk_Nm1").innerHTML = "";
    }
    //姓名验证over
//电话验证
//    var ptel1 = document.getElementById("Ptel1").value;
//    var patrn_T = /^0?(13[0-9]|15[012356789]|18[0236789]|17[0123456789]|14[57])[0-9]{8}$/;
//    if (patrn_T.exec(ptel1)) {
//        document.getElementById("chk_Ptel1").innerHTML = "";
//    }
//    else {
//        document.getElementById("chk_Ptel1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
//        flag1 = 1;
//    }
//电话验证over
//证件号验证
    var crd1 = document.getElementById("CrdNo1").value;
    var c_type = document.getElementById("Ctype1").selectedIndex;
    var c_tp_v = document.getElementById("Ctype1").options[c_type].text;
    if (crd1 != "") {
        if (c_tp_v == '身份证') {
            if (cidInfo(crd1) != '1') {
                document.getElementById("chk_CrdNo1").innerHTML = "";
            }
            else {
                document.getElementById("chk_CrdNo1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
                flag2 = 1;
            }
        }//身份证
        else {
            document.getElementById("chk_CrdNo1").innerHTML = "";
        }
    }
    else {
        document.getElementById("chk_CrdNo1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        flag2 = 1;
    }
//证件号验证over
//验证出生日期
    var dt1 = document.getElementById("Bdate1").value;
    var partn = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
    if (partn.exec(dt1)) {
        var d_val_date = new Date(Date.parse(dt1.replace(/-/g, "/")));
        var curDate = new Date();
        if (d_val_date > curDate) {
            alert("请输入小于当前日期的格式");
            document.getElementById("Bdate1").value = "";
            document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
            flag3 = 1;
        }
        else {
            document.getElementById("chk_Bdate").innerHTML = "";
        }
    }

    else {
        document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        flag3 = 1;
    }

//验证出生日期over
    if (flag == 0 && flag1 == 0 && flag2 == 0 && flag3 == 0) {
        if (Num_s == 1) {
            goPage(1, 5, 1);
        }
        document.travllersavefrom.submit();
        return true;
    }
    else {
        alert("您的输入有误，请重新输入");
        return false;
    }
}