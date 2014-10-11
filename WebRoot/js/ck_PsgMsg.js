//验证表单常乘客信息
//姓名
function chk_Nm1() {
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
            }
        }
        else {
            document.getElementById("chk_Nm1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        }
    }
    else {
        document.getElementById("chk_Nm1").innerHTML = "";
    }

}
//手机号码
function chk_Ptel() {
    var ptel1 = document.getElementById("Ptel1").value;
    var patrn = /^0?(13[0-9]|15[012356789]|18[0236789]|17[0123456789]|14[57])[0-9]{8}$/;
    if (patrn.exec(ptel1)) {
        document.getElementById("chk_Ptel1").innerHTML = "";
    }
    else {
        document.getElementById("chk_Ptel1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
    }
}
//身份证号
function chk_Crd() {
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
            }
        }//身份证
        else {
            document.getElementById("chk_CrdNo1").innerHTML = "";
        }
    }
    else {
        document.getElementById("chk_CrdNo1").innerHTML = "<img src='../images/wrong_ck.jpg' />";

    }
}
function chk_bCrd() {//onblur

    var flag = 0;
    var flag1 = 1;
    var flag2 = 0;
    var crd1 = document.getElementById("CrdNo1").value;
    var c_type = document.getElementById("Ctype1").selectedIndex;
    var c_tp_v = document.getElementById("Ctype1").options[c_type].text;
    //出生日期
    var dt1 = document.getElementById("Bdate1").value;
    var partn = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
    if (partn.exec(dt1)) {
        var d_val_date = new Date(Date.parse(dt1.replace(/-/g, "/")));
        var curDate = new Date();
        if (d_val_date > curDate) {
            alert("请输入小于当前日期的格式");
            document.getElementById("Bdate1").value = "";
            document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
            flag = 1;
        }
        else {
            document.getElementById("chk_Bdate").innerHTML = "";
        }
    }
    else {
        document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        flag = 1;
    }
    //出生日期 over
    //身份证判断
    if (crd1 != "") {
        if (c_tp_v == '身份证') {
            if (cidInfo(crd1) != '1') {
                document.getElementById("chk_CrdNo1").innerHTML = "";
                flag1 = 0;
                var Bir_Year = crd1.substr(6, 4);
                var Bir_Mon = crd1.substr(10, 2);
                var Bir_Day = crd1.substr(12, 2);
                var Bir_dy = Bir_Year + '-' + Bir_Mon + '-' + Bir_Day;
                document.getElementById("Bdate1").value = Bir_dy;
                dt1 = document.getElementById("Bdate1").value;
            }
            else {
                document.getElementById("chk_CrdNo1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
            }
        }//身份证
        else {
            document.getElementById("chk_CrdNo1").innerHTML = "";
            flag1 = 2;
        }
    }
    else {
        document.getElementById("chk_CrdNo1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
    }
    //身份证判断 over
    //身份证中的日期是否与出生日期一致
    if (flag1 == 0 && flag == 0) {
        //取出身份证中的年月日
        var C_Year = crd1.substr(6, 4);
        var C_Mon = crd1.substr(10, 2);
        var C_Day = crd1.substr(12, 2);
        var C_Date = C_Year + C_Mon + C_Day; //身份证中的出生日期
        //取出身份证中的年月日 over

        //将输入的出生日期格式化
        var B_str = new Array();
        B_str = dt1.split('-');
        var D_Y = B_str[0];
        var D_M = B_str[1];
        var D_D = B_str[2];
        if (D_M.length < 2) {
            D_M = '0' + D_M;
        }
        if (D_D.length < 2) {
            D_D = '0' + D_D;
        }
        var D_Dt = D_Y + D_M + D_D;

        //将输入的出生日期格式化
        if (C_Date != D_Dt) {
            alert("身份证号与出生日期不符，请重新输入！");
            document.getElementById("CrdNo1").value = "";
            document.getElementById("Bdate1").value = "";
            document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
            document.getElementById("chk_CrdNo1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
            flag2 = 1;
        }
    }
//出生日期与身份证判断over
//判断年龄	

    var py_1 = document.getElementById("Ptype1").selectedIndex;
    if (py_1 != 0) {
        var date1 = new Date();// 取得当前日期
        var year1 = date1.getFullYear();// 取得当前年份
        var month1 = date1.getMonth() + 1;// 取得当前月份
        var day1 = date1.getDate();//取出当前日
        if (flag == 0 && flag1 == 0) {
            //取出出生日期中年月日
            var B_str = new Array();
            B_str = dt1.split('-');
            var D_Y = B_str[0];
            var D_M = B_str[1];
            var D_D = B_str[2];
            if (D_M.length < 2) {
                D_M = '0' + D_M;
            }
            if (D_D.length < 2) {
                D_D = '0' + D_D;
            }
            //取出出生日期中年月日 over
        }//flag==0
        else if (flag1 == 0 && flag != 0) {
            var D_Y = crd1.substr(6, 4);
            var D_M = crd1.substr(10, 2);
            var D_D = crd1.substr(12, 2);
        }
        else if (flag == 0 && flag1 != 0) {
            //取出出生日期中年月日
            var B_str = new Array();
            B_str = dt1.split('-');
            var D_Y = B_str[0];
            var D_M = B_str[1];
            var D_D = B_str[2];
            if (D_M.length < 2) {
                D_M = '0' + D_M;
            }
            if (D_D.length < 2) {
                D_D = '0' + D_D;
            }
            //取出出生日期中年月日 over
        }
        var D_Y_int = parseInt(D_Y);
        var year2 = year1 - D_Y_int;
        var month2 = parseInt(D_M);
        var day2 = parseInt(D_D);

        if (month1 - month2 > 0) {
            var age_yr = year2;
        }
        else {
            if (month1 - month2 == 0) {
                if (day1 - day2 >= 0) {
                    var age_yr = year2;
                }
                else {
                    var age_yr = year2 - 1;
                }
            }

            else {
                var age_yr = year2;
            }
        }
    }

//计算年龄over	

    if (age_yr >= 12 && flag == 0 & flag1 == 0 && flag2 == 0) {
        alert("身份证与出生日期不符合儿童年龄,请重新输入");
        document.getElementById("CrdNo1").value = "";
        document.getElementById("Bdate1").value = "";
        document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        document.getElementById("chk_CrdNo1").innerHTML = "<img src='../images/wrong_ck.jpg' />";
    }


    if (flag1 != 0 && flag == 0 && age_yr >= 12) {
        alert("出生日期不符合儿童年龄,请重新输入");
        document.getElementById("Bdate1").value = "";
        document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
    }
}

//出生日期
function chk_Date() {
    var dt1 = document.getElementById("Bdate1").value;
    var partn = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
    if (partn.exec(dt1)) {
        var d_val_date = new Date(Date.parse(dt1.replace(/-/g, "/")));
        var curDate = new Date();
        if (d_val_date > curDate) {
            alert("请输入小于当前日期的格式");
            document.getElementById("Bdate1").value = "";
            document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        }
        else {
            document.getElementById("chk_Bdate").innerHTML = "";
        }
    }

    else {
        document.getElementById("chk_Bdate").innerHTML = "<img src='../images/wrong_ck.jpg' />";
    }

}
