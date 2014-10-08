// JavaScript Document
//点击护照 其他时 应显示的内容
function set_sex(id_name) {
    var id_n1 = id_name.substr(6);
    var obj = document.getElementById('p_card' + id_n1);
    var index = obj.selectedIndex;
    var obj1 = document.getElementById("disp_sex" + id_n1);//出生日期
    var obj2 = document.getElementById("card_disp" + id_n1);//带验证的身份框
    var obj3 = document.getElementById("card_hide" + id_n1);//不带验证的
    if (index == 1 || index == 2) {
        $("#disp_sex" + id_n1).html("");
        var sex_str = "";
        //插入性别出生日期数据
        sex_str = "<div style='float:left; font-size:12px; width:60px; text-align:right;'>性别<span style='color:#f00;'>*</span></div>";
        sex_str += "<div style='float:left;'>&nbsp;<select name='' class='sex_psg'><option>男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option><option>女&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option></select></div>";
        sex_str += "<div style='float:left; font-size:12px; width:70px; text-align:right;'>出生日期<span style='color:#f00;'>*</span></div>";
        sex_str += "<div style='float:left;'>&nbsp;<input type='text' name='date_add' class='input_val2' style='width:80px; color:#999;' value='yyyy-mm-dd'  id='dt_input" + id_n1 + "' onkeyup='ck_dtime(this.id)' onfocus='set_val(this.id)'  onblur='age_d(this.id)' /><span id='ck_tm" + id_n1 + "'></span></div>";
        sex_str += "<div style='float:left; overflow:hidden; font-size:12px; line-height:20px;'>&nbsp;<span style='color:#f00;'>如：2014-09-18</span></div>";
        //插入性别出生日期数据 over
        $("#disp_sex" + id_n1).append(sex_str);

        document.getElementById("disp_sex" + id_n1).style.display = "block";
        $("#card_disp" + id_n1).html("");
        var in_str = "";
        in_str = "&nbsp;<input type='text'  class='hz_val' style='width:130px;'/>";
        $("#card_disp" + id_n1).append(in_str);
    }
    else {
        document.getElementById("disp_sex" + id_n1).innerHTML = "&nbsp;";
        document.getElementById("disp_sex" + id_n1).style.display = "none";
        $("#card_disp" + id_n1).html("");
        var in_str = "";
        in_str = "&nbsp;<input type='text' name='p_name'  class='hz_val1' style='width:130px;' id='idCard_" + id_n1 + "' onkeyup='ck_idCard(this.id)' onfocus='ck_idCard1(this.id)' onblur='ck_ageCard(this.id)' /><span id='psg_card" + id_n1 + "'></span>";
        $("#card_disp" + id_n1).append(in_str);
    }

}
//儿童时显示的内容

function yong_litter(id_name) {
    var id_n1 = id_name.substr(7);
    var obj = document.getElementById('add_age' + id_n1);
    var index = obj.selectedIndex;

    var obj1 = document.getElementById("disp_age" + id_n1);//显示儿童价的位置
//读取url里面的数据
    var M1 = window.location.href.split("?")[1];
    var M2 = M1.split("=")[1];
    var M3 = M2.split(",")[4];//净价
    M3 = unescape(M3);
    M3 = utf8to16(base64decode(M3));
    var M4 = M2.split(",")[18];//油价
    M4 = decodeURI(decodeURI(M4));//解码
    M4 = decodeURI(decodeURI(M4));
    var M5 = M2.split(",")[13];//Y价格
    //机建燃油的价格

    var oil_2 = M4;
    for (var m = 1; m < oil_2.length; m++) {
        var str1 = oil_2.substr(m, 1);
        var str2 = parseInt(str1);
        if (isNaN(str2)) {
            var mm = m;
            break;
        }
    }// 找到机建的数字位置
    var str3 = oil_2.substr(1, mm - 1);
    var str4 = parseInt(str3);//机建价格
    var oil_len = oil_2.length;
    var str7 = oil_2.substr(mm + 2, oil_len - mm - 2);
    var str8 = parseInt(str7);//油价
    var add_money = parseInt(M3) + str4 + str8;//添加时要添加的钱数
    var childstr8 = parseInt(str8/2);
    if(childstr8 == '55'){
        childstr8 = 50;
    }
    //油价 逢5进1
    var str8_y = parseInt(M5 / 2);

    var str8_y_str = String(str8_y);//类型转换
    var str8_y_len = str8_y_str.length;//统计长度
    var str8_last = str8_y_str.substr(str8_y_len - 1, 1);
    if (str8_last >= '5' || str8_last >= '5' && str8_last != '0') {
        var str8_lt_int = parseInt(str8_y) +5 ;//儿童油价
    }
    else {
        var str8_lt_int = str8_y;//儿童油价
    }
    //油价 逢5进1 over

    //单个童价格
    var add_y_money = str8_lt_int + childstr8;
    //机建燃油的价格 over
//读取url里面的数据

//获取订单总额
    //统计之前共有几个乘客
    var psg_int = 0;
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "t_1") {
            psg_int = psg_int + 1;
        }
    }
    //统计之前共有几个乘客 over
    //统计共有几个儿童
    var yng_int = 0;
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "younger") {
            var aa = allElements[i].selectedIndex;//获取选中的索引值
            if (aa == 1) {
                yng_int = yng_int + 1;
            }
        }
    }
    //统计共有几个儿童 over
    //计算儿童与成人的价格
    if (yng_int != 0) {
        var psg_yng = psg_int - yng_int;
    }
    else {
        psg_yng = psg_int;
    }
    var psg_M = psg_yng * add_money;//成人总价
    var yng_M = yng_int * add_y_money;//儿童总价
    //统计航意险选中个数
    var sec_M = 0;
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "f_sec0") {
            var f_hx = allElements[i].selectedIndex;
            var f_hx_val = allElements[i].options[f_hx].text
            var f_hx_int = parseInt(f_hx_val);
            sec_M = sec_M + f_hx_int * 30;

        }
    }

    //统计航意险选中个数 over
    //统计延误险选中个数
    var del_M = 0;
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "f_del0") {
            var f_yw = allElements[i].selectedIndex;
            var f_yw_val = allElements[i].options[f_yw].text
            var f_yw_int = parseInt(f_yw_val);
            del_M = del_M + 20 * f_yw_int;

        }
    }

    //统计延误险选中个数 over
    var pre_allM = del_M + sec_M + yng_M + psg_M; //添加之前的总价
//获取订单总额 over

    if (index == 1) {
        obj1.innerHTML = "儿童票价：<span class='young_p' style='color:#f00'>" + add_y_money + "</span>(含税费)";
        //验证身份证或者出生日期是否符合儿童要求
        var crd_disp = document.getElementById("card_disp" + id_n1);
        if (crd_disp.style.display != "none") {//判断身份证是否符合儿童的格式
            var crd_disp_val = document.getElementById("idCard_" + id_n1).value;
            var patrn = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (crd_disp_val != "" && patrn.exec(crd_disp_val)) {
                //根据身份证号证判断年龄 over
                //身份证中的年月日
                var cdr_val = crd_disp_val;
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
                if (age_yr > 12) {
                    alert("您所输入的身份证不符合儿童的年龄,请重新输入");
                    document.getElementById("idCard_" + id_n1).value = "";
                    document.getElementById("idCard_" + id_n1).focus();
                    document.getElementById("psg_card" + id_n1).innerHTML = "";
                    document.getElementById("psg_card" + id_n1).innerHTML = "&nbsp;<img src='img/wrong_ck.jpg' id='ft_say'>";
                }//判断年龄是否大于12岁
                //根据身份证号证判断年龄 over
            }//符合身份证格式if

        }
        else {//判断出生日期是否符合儿童的格式
            var dt_disp = document.getElementById("dt_input" + id_n1).value;
            var partn = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
            if (dt_disp != "" && partn.exec(dt_disp)) {
                //判断年龄
                var date1 = new Date();// 取得当前日期
                var year1 = date1.getFullYear();// 取得当前年份
                var month1 = date1.getMonth() + 1;// 取得当前月份
                var day1 = date1.getDate();
                var date_val = dt_disp;
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
                    alert("您所输入的日期不符合儿童的年龄,请重新输入");
                    document.getElementById("dt_input" + id_n1).value = "";
                    document.getElementById("dt_input" + id_n1).focus();
                    document.getElementById("ck_tm" + id_n1).innerHTML = "";
                    document.getElementById("ck_tm" + id_n1).innerHTML = "&nbsp;<img src='img/wrong_ck.jpg' id='ft_say'>";
                }
                //判断年龄over
            }

        }//判断出生日期是否符合儿童的格式over else
        //验证身份证或者出生日期是否符合儿童要求 over
    }//选中儿童的时候
    else {//再次选中成人的时候
        document.getElementById("disp_age" + id_n1).innerHTML = "&nbsp;";
    }
    document.getElementById("all_money_0").innerHTML = "¥" + pre_allM;//将总的钱数写入
}
	
