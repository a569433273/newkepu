// 验证表单
//v姓名验证
function check_name() {
    var c_name = document.getElementById("ck_name");
    var c_text = c_name.value.replace(/(^\s*)|(\s*$)/g, "");
    var c_sp = document.getElementById("ck_nm");
    var c_text_len = c_text.length;
    var patrn = /(?:[\u4E00-\u9FFF]{1,8}·\u4E00-\u9FFF]{1,8})|(?:[\u4E00-\u9FFF]{1,5})/;
    var patrn1 = /^([A-Za-z]+\s?)*[A-Za-z]$/;//英文
    if (!patrn.exec(c_text)) {
        if (patrn1.exec(c_text)) {
            if (c_text_len > 3 && c_text_len < 26) {
                c_sp.innerHTML = "<img src='../images/right_ck.jpg'>";
            }
            else {
                c_sp.innerHTML = "<img src='../images/wrong_ck.jpg'>";
            }
        }
        else {
            c_sp.innerHTML = "<img src='../images/wrong_ck.jpg'>";
        }
    }
    else {
        c_sp.innerHTML = "<img src='../images/right_ck.jpg'>";
        $("#crh").remove();
    }

}
function check_name1() {
    var c_name = document.getElementById("ck_name");
    var c_text = c_name.value;
    var c_sp = document.getElementById("ck_nm");
    if (c_text == "") {
        c_sp.innerHTML = "<img src='../images/wrong_ck.jpg'>";
    }
}
//电话验证
function ck_tel() {
    var c_name = document.getElementById("check_tel");
    var c_text = c_name.value;
    var c_sp = document.getElementById("ck_tl");
    var patrn = /^0?(13[0-9]|15[012356789]|18[0236789]|17[0123456789]|14[57])[0-9]{8}$/;
    if (!patrn.exec(c_text)) {
        c_sp.innerHTML = "<img src='../images/wrong_ck.jpg'>";
    }
    else {

        c_sp.innerHTML = "<img src='../images/right_ck.jpg'>";
    }
}
function check_tel1() {

    var c_name = document.getElementById("check_tel");
    var c_text = c_name.value;
    var c_sp = document.getElementById("ck_tl");
    if (c_text == "") {
        c_sp.innerHTML = "<img src='../images/wrong_ck.jpg'>";
    }
}
//判断姓名
function ck_unm(id_name) {//onkeyup
    var id1_name = id_name.substr(8);
    var id_name1 = document.getElementById(id_name);
    var id1_name1 = document.getElementById("name_" + id1_name);
    var id_val = id_name1.value.replace(/(^\s*)|(\s*$)/g, "");
    var patrn = /(?:[\u4E00-\u9FFF]{1,8}·\u4E00-\u9FFF]{1,8})|(?:[\u4E00-\u9FFF]{1,5})/;//中文
    var patrn1 = /^([A-Za-z]+\s?)*[A-Za-z]$/;//英文
    var id_val_len = id_val.length;
    if (!patrn.exec(id_val)) {
        if (patrn1.exec(id_val)) {
            if (id_val_len > 3 && id_val_len < 26) {
                id1_name1.innerHTML = "&nbsp;<img src='../images/right_ck.jpg'>";
            }
            else {
                id1_name1.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
            }
        }
        else {
            id1_name1.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
        }
    }
    else if (patrn.exec(id_val)) {
        id1_name1.innerHTML = "&nbsp;<img src='../images/right_ck.jpg'>";
    }
}
function ck_name1(id_name) {//onfocus
    var id1_name = id_name.substr(8);
    var id_name1 = document.getElementById(id_name);
    var id1_name1 = document.getElementById("name_" + id1_name);
    var id_val = id_name1.value;
    if (id_val == "") {
        id1_name1.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
    }
}
//身份证验证
function ck_idCard(id_card) {//onkeyup
    var id1_card = id_card.substr(7);
    var id_card1 = document.getElementById(id_card);
    var id_card2 = id_card1.value;
    var id1_card1 = document.getElementById("psg_card" + id1_card)
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var patrn = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!patrn.exec(id_card2)) {
        id1_card1.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
    }
    else {
        id1_card1.innerHTML = "&nbsp;<img src='../images/right_ck.jpg'>";
    }
}
function ck_idCard1(id_card) {//onfocus
    var id1_card = id_card.substr(7);
    var id_card1 = document.getElementById(id_card);
    var id_card2 = id_card1.value;
    var id1_card1 = document.getElementById("psg_card" + id1_card)
    if (id_card2 == "") {
        id1_card1.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
    }
}
function ck_ageCard(ee) {//onblur
    var id1_card = ee.substr(7);
    var id_card1 = document.getElementById(ee);
    var id_card2 = id_card1.value;
    var id1_card1 = document.getElementById("psg_card" + id1_card);
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var patrn = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    if (!patrn.exec(id_card2)) {
        id1_card1.innerHTML = "";
        id1_card1.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
    }
    else {
        id1_card1.innerHTML = "";
        id1_card1.innerHTML = "&nbsp;<img src='../images/right_ck.jpg'>";
        //根据身份证号证判断年龄
        var sey_index = document.getElementById("add_age" + id1_card).selectedIndex;
        if (sey_index == 1) {
            //身份证中的年月日
            var cdr_val = document.getElementById(ee).value;
            var cdr_year1 = parseInt(cdr_val.substr(6, 4));//年
            var cdr_month1 = parseInt(cdr_val.substr(10, 2));//月
            var cdr_day1 = parseInt(cdr_val.substr(12, 2));//日
            //身份证中的年月日 is over
            var date1 = new Date();// 取得当前日期
            var year1 = date1.getFullYear();// 取得当前年份
            var month1 = date1.getMonth() + 1;// 取得当前月份
            var day1 = date1.getDate();
            var year1_2 = year1 - cdr_year1;
            if (month1 - cdr_month1 > 0) {
                var age_yr = year1_2;
            }
            else {
                if (month1 - cdr_month1 == 0) {
                    if (day1 - cdr_day1 >= 0) {
                        var age_yr = year1_2;
                    }
                    else {
                        var age_yr = year1_2 - 1;
                    }
                }
                else {
                    var age_yr = year1_2;
                }
            }
            if (age_yr >= 12) {
                document.getElementById(ee).value = "";
                document.getElementById(ee).focus();
                document.getElementById("psg_card" + id1_card).innerHTML = "";
                document.getElementById("psg_card" + id1_card).innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
                alert("您所输入的身份证不符合儿童的年龄,请重新输入");

            }//判断年龄是否大于12岁
            //根据身份证号证判断年龄 over
        }
    }

}
//电子邮箱
function ck_email(id_mail) {//onkeyup

    var id_mail1 = document.getElementById(id_mail);
    var id_mail2 = id_mail1.value;

    var id_mail3 = document.getElementById('p_email1');

    var patrn = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (!patrn.exec(id_mail2)) {
        id_mail3.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
    }
    else {
        id_mail3.innerHTML = "&nbsp;<img src='../images/right_ck.jpg'>";
    }
}
//出生日期
function ck_dtime(aa) {//onkeyup
    var id_name2 = aa.substr(8);
    var id_name3 = document.getElementById('ck_tm' + id_name2);
    var id_name1 = document.getElementById(aa);
    var id_val = id_name1.value;
    var partn = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
    if (!partn.exec(id_val)) {
        id_name3.innerHTML = "";
        id_name3.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
    }
    else {
        var d_val_date = new Date(Date.parse(id_val.replace(/-/g, "/")));
        var curDate = new Date();
        if (d_val_date > curDate) {
            alert("请输入小于当前日期的格式");
            document.getElementById(aa).value = "";
        }
        else {
            id_name3.innerHTML = "";
            id_name3.innerHTML = "&nbsp;<img src='../images/right_ck.jpg'>";
        }
    }
}
function age_d(dd) {
    var id_name2 = dd.substr(8);
    var id_name3 = document.getElementById('ck_tm' + id_name2);
    var id_name1 = document.getElementById(dd);
    var id_name4 = document.getElementById('add_age' + id_name2);//成人儿童select
    var id_val = id_name1.value;
    var partn = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
    if (!partn.exec(id_val)) {
        id_name3.innerHTML = "";
        id_name3.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
    }
    else {
        var d_val_date = new Date(Date.parse(id_val.replace(/-/g, "/")));
        var curDate = new Date();
        if (d_val_date > curDate) {
            alert("请输入小于当前日期的格式");
            document.getElementById(dd).value = "";
        }
        else {
            id_name3.innerHTML = "";
            id_name3.innerHTML = "&nbsp;<img src='../images/right_ck.jpg'>";
        }
    }
    var id4_in = id_name4.selectedIndex;
    if (id4_in == 1) {
        //判断年龄
        var date1 = new Date();// 取得当前日期
        var year1 = date1.getFullYear();// 取得当前年份
        var month1 = date1.getMonth() + 1;// 取得当前月份
        var day1 = date1.getDate();
        var date_val = document.getElementById(dd).value;
        var str_d = new Array();
        var str_d = date_val.split("-");
        var year2 = parseInt(str_d[0]);
        var month2 = parseInt(str_d[1]);
        var day2 = parseInt(str_d[2]);
        var year1_2 = year1 - year2;
        if (month1 - month2 > 0) {
            var age_yr = year1_2;
        }
        else {
            if (month1 - month2 == 0) {
                if (day1 - day2 >= 0) {
                    var age_yr = year1_2;
                }
                else {
                    var age_yr = year1_2 - 1;
                }
            }
            else {
                var age_yr = year1_2;
            }
        }
        if (age_yr > 12) {
            document.getElementById(dd).value = "";
            document.getElementById(dd).focus();
            id_name3.innerHTML = "";
            id_name3.innerHTML = "&nbsp;<img src='../images/wrong_ck.jpg' id='ft_say'>";
            alert("您所输入的日期不符合儿童的年龄,请重新输入");
        }
    }
    //判断年龄 over
}