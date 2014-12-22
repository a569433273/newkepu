// JavaScript Document
//提交订单验证
function ck_submit() {
    var flag = 0;
    var flag1 = 0;
    var flag2 = 0;
    var flag3 = 0;
    //电话姓名
    var ck_nm = document.getElementById("ck_name");//姓名
    var ck_nm_val = ck_nm.value.replace(/(^\s*)|(\s*$)/g, "");//去掉头尾空格
    var patrn_nm = /(?:[\u4E00-\u9FFF]{1,8}·\u4E00-\u9FFF]{1,8})|(?:[\u4E00-\u9FFF]{1,5})/; //姓名正则表达式
    var patrn1_nm = /^([A-Za-z]+\s?)*[A-Za-z]$/;//姓名英文
    var ck_tp = document.getElementById("check_tel");//电话
    var ck_tp_val = ck_tp.value;
    var patrn_tp = /^0?(13[0-9]|15[012356789]|18[0236789]|17[012356789]|14[57])[0-9]{8}$/; //电话正则表达式
    if (ck_tp_val != "" && ck_nm_val != "") {
        if (patrn_nm.exec(ck_nm_val) && patrn_tp.exec(ck_tp_val)) {
            //提交
        }
        else {
            if (patrn1_nm.exec(ck_nm_val) && patrn_tp.exec(ck_tp_val)) {
            }
            else {
                flag = 1;
            }
        }
    }//判断姓名与话是否正确
    else {
        flag = 1;
    }//判断姓名电话
    //乘机人姓名证件号码出生日期验证
    //姓名
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "input_val") {
            var tt = allElements[i].value;
            if (tt != "") {
                if (patrn_nm.exec(tt)) {
                    //正确
                }
                else {
                    if (patrn1_nm.exec(tt)) {
                    }
                    else {
                        flag1 = 1;
                        break;
                    }
                }
            }//if
            else {
                flag1 = 1;
                break;
            }//else
        } //if
    }//for
    //证件号码
    var patrn_card = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "hz_val1") {

            var tt1 = allElements[i].value;
            if (tt1 != "") {
                if (patrn_card.exec(tt1)) {

                }
                else {
                    flag2 = 1;
                    break;
                }
            }//if
            else {
                flag2 = 1;
                break;
            }//else
        } //if
    }//for
    //护照 其他
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "hz_val") {
            if (allElements[i].value == "") {
                flag2 = 1;
                break;
            }
        }
    }
    //出生日期
    var partn_birth = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig

    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "input_val2") {

            var tt2 = allElements[i].value;
            if (tt2 != "") {
                if (tt2 != "yyyy-mm-dd") {//日期的value有默认值yyyy-mm-dd
                    if (partn_birth.exec(tt2)) {
                        //正确
                    }
                    else {
                        flag3 = 1;
                        break;
                    }
                }
            }//if
            else {
                flag3 = 1;
                break;
            }//else
        } //if
    }//for
    //乘机人姓名证件号码出生日期验证over
    if (flag == 0 && flag1 == 0 && flag2 == 0 && flag3 == 0) {
//统计乘机人个数
        var psg_cnt = 0;
        var pasg_str = "";
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "t_1") {
                psg_cnt = psg_cnt + 1;	//共添加的乘机人个数
            }
        }

//统计乘机人个数
//读乘机人数据
        var psg_pers = "0";//是否本人
        var psg_nme = ""; //乘机人姓名
        var psg_adult = ""; //是否成人或儿童
        var crd_type = ""; //证件类型
        var crd_nbr = ""; //证件号护照其他其号
        var psg_usual = ""; //常用登机人
        var airS_fs = ""; //航意险份数
        var airD_fs = ""; //延误险份数
        var psg_sex = ""; //性别
        var psg_Date = ""; //出生日期
        //读取本人
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "Pbenren") {
                if (i == 0) {
                    psg_pers = allElements[i].value;
                }
                else {
                    psg_pers = psg_pers + ',' + allElements[i].value;
                }
                if (allElements[i].value == psg_pers) {

                } else {
                    psg_pers = "1";
                    break;
                }
            }
        }
        //读取本人 over
        //读取所有姓名
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "input_val") {
                if (i == 0) {
                    psg_nme = allElements[i].value;
                }
                else {
                    psg_nme = psg_nme + ',' + allElements[i].value;
                }
            }
        }

        //读取所有姓名 over
        //读取是否成人儿童
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "younger") {
                var idex = allElements[i].selectedIndex;
                if (idex == 0) {
                    if (i == 0) {
                        psg_adult = '0';
                    }
                    else {
                        psg_adult = psg_adult + ',' + '0';
                    }
                }
                else {
                    if (i == 0) {
                        psg_adult = '1';
                    }
                    else {
                        psg_adult = psg_adult + ',' + '1';
                    }
                }
            }
        }
        //读取是否成人儿童 over
        //读取身份类型
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "which_1") {
                var w_idx = allElements[i].selectedIndex;
                if (w_idx == 0) {
                    if (i == 0) {
                        crd_type = "0";
                    } else {
                        crd_type = crd_type + "," + "0";
                    }
                }
                else if (w_idx == 1) {
                    if (i == 0) {
                        crd_type = "1";
                    } else {
                        crd_type = crd_type + "," + "1";
                    }
                }
                else if (w_idx == 2) {
                    if (i == 0) {
                        crd_type = "2";
                    } else {
                        crd_type = crd_type + "," + "2";
                    }
                }
            }
        }
        //读取身份类型 over
        //读取身份证号护照其他号
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "hz_val1" || allElements[i].className == "hz_val") {
                if (i == 0) {
                    crd_nbr = allElements[i].value;
                } else {
                    crd_nbr = crd_nbr + "," + allElements[i].value;
                }
            }
        }

        //读取身份证号护照其他号over
        //读取性别
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "sex_psg") {
                var Sx_idx = allElements[i].selectedIndex;
                if (Sx_idx == 0) {
                    if (i == 0) {
                        psg_sex = "0";
                    } else {
                        psg_sex = psg_sex + "," + "0";
                    }
                }
                else {
                    if (i == 0) {
                        psg_sex = "1";
                    } else {
                        psg_sex = psg_sex + "," + "1";
                    }
                }

            }
        }
        //读取性别 over
        //读取出生日期
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "input_val2") {
                if (i == 0) {
                    psg_Date = allElements[i].value;
                } else {
                    psg_Date = psg_Date + "," + allElements[i].value;
                }
            }
        }
        //读取出生日期 over
        //是否常用登机人
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "usual_psg") {
                if (allElements[i].checked) {
                    if (i == 0) {
                        psg_usual = "1";
                    } else {
                        psg_usual = psg_usual + "," + "1";
                    }
                }
                else {
                    if (i == 0) {
                        psg_usual = "0";
                    } else {
                        psg_usual = psg_usual + "," + "0";
                    }
                }
            }
        }
        //是否常用登机人 over
        //航意险份数
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "f_sec0") {
                var air_idx = allElements[i].selectedIndex;
                if (air_idx == 0) {
                    if (i == 0) {
                        airS_fs = '11';
                    } else {
                        airS_fs = airS_fs + ',' + '11';
                    }
                }
                else if (air_idx == 1) {
                    if (i == 0) {
                        airS_fs = '00';
                    } else {
                        airS_fs = airS_fs + ',' + '00';
                    }
                }
                else {
                    if (i == 0) {
                        airS_fs = '12';
                    } else {
                        airS_fs = airS_fs + ',' + '12';
                    }
                }
            }
        }
        //航意险份数 over
        //延误险份数
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "f_del0") {
                var airD_idx = allElements[i].selectedIndex;
                if (airD_idx == 0) {
                    if (i == 0) {
                        airD_fs = '00';
                    } else {
                        airD_fs = airD_fs + ',' + '00';
                    }
                }
                else if (airD_idx == 1) {
                    if (i == 0) {
                        airD_fs = '11';
                    } else {
                        airD_fs = airD_fs + ',' + '11';
                    }
                }
            }
        }
        //延误险份数 over

//读乘机人数据 over
//将乘机人数据写入到隐藏框中
        var psge_total = "";
        var psg1_nme = new Array(); //定义一数组
        psg1_nme = psg_nme.split(","); //乘机人姓名
        var psg1_adult = new Array();
        psg1_adult = psg_adult.split(","); //乘机人属性
        var crd1_type = new Array();
        crd1_type = crd_type.split(","); //证件类型
        var crd1_nbr = new Array();
        crd1_nbr = crd_nbr.split(",");//身份证其他护照号
        var psg1_sex = new Array();
        psg1_sex = psg_sex.split(",");//性别
        var psg1_Date = new Array();
        psg1_Date = psg_Date.split(",");//日期
        var psg1_usual = new Array();
        psg1_usual = psg_usual.split(",");//常用登机人
        var airS1_fs = new Array();
        airS1_fs = airS_fs.split(",");//航意险
        var airD1_fs = new Array();
        airD1_fs = airD_fs.split(",");
        var H = 1;
        for (var k = 1; k <= psg_cnt; k++) {
            if (crd1_type[k] != '0') {
                if (k == 1) {
                    psge_total = psge_total + psg1_nme[k] + psg1_adult[k] + crd1_type[k] + "?" + crd1_nbr[k] + "?" + psg1_sex[H] + psg1_Date[H] + psg1_usual[k] + airS1_fs[k] + airD1_fs[k];
                    H = H + 1;
                } else {
                    psge_total = psge_total + ',' + psg1_nme[k] + psg1_adult[k] + crd1_type[k] + "?" + crd1_nbr[k] + "?" + psg1_sex[H] + psg1_Date[H] + psg1_usual[k] + airS1_fs[k] + airD1_fs[k];
                    H = H + 1;
                }
            }
            else {
                if (k == 1) {
                    psge_total = psge_total + psg1_nme[k] + psg1_adult[k] + crd1_type[k] + "?" + crd1_nbr[k] + "?" + psg1_usual[k] + airS1_fs[k] + airD1_fs[k];
                } else {
                    psge_total = psge_total + ',' + psg1_nme[k] + psg1_adult[k] + crd1_type[k] + "?" + crd1_nbr[k] + "?" + psg1_usual[k] + airS1_fs[k] + airD1_fs[k];
                }
            }
        }
        document.getElementById("pasge_info").value = psge_total;//将乘机人信息写入到隐藏框
        document.getElementById("benren").value = psg_pers;

//将乘机人数据写入到隐藏框中 over
//将航班信息重新写入到页面中
        var C1 = window.location.href.split("?")[1];
        var C2 = C1.split("=")[1];
        var C3 = C2.split(",")[0];//航空公司
        C3 = decodeURI(decodeURI(C3));
        C3 = decodeURI(decodeURI(C3));

        var C4 = C2.split(",")[1];//折
        C4 = decodeURI(decodeURI(C4));
        C4 = decodeURI(decodeURI(C4));

        var C5 = C2.split(",")[2];//票面价
        C5 = unescape(C5);
        C5 = utf8to16(base64decode(C5));
        var C6 = C2.split(",")[3];//返点
        var C7 = C2.split(",")[4];//净价
        C7 = unescape(C7);
        C7 = utf8to16(base64decode(C7));

        var C8 = C2.split(",")[5];//经停
        C8 = decodeURI(decodeURI(C8));//解码
        C8 = decodeURI(decodeURI(C8));
        var C17 = C2.split(",")[14];//起飞地点
        C17 = decodeURI(decodeURI(C17));//解码
        C17 = decodeURI(decodeURI(C17));

        var C18 = C2.split(",")[15];//起飞时间
        C18 = decodeURI(decodeURI(C18));//解码
        C18 = decodeURI(decodeURI(C18));

        var C19 = C2.split(",")[16];//降落地点
        C19 = decodeURI(decodeURI(C19));//解码
        C19 = decodeURI(decodeURI(C19));

        var C20 = C2.split(",")[17];//降落时间
        C20 = decodeURI(decodeURI(C20));//解码
        C20 = decodeURI(decodeURI(C20));
        var C21 = C2.split(",")[18];//油价
        C21 = decodeURI(decodeURI(C21));//解码
        C21 = decodeURI(decodeURI(C21));
        document.getElementById('air_name').innerHTML = C3;
        document.getElementById('viaport').innerHTML = C8;
        document.getElementById('sale').innerHTML = C4;
        document.getElementById('price').innerHTML = C5;
        document.getElementById('sale1').innerHTML = C6;
        document.getElementById('j_money').innerHTML = C7;
        document.getElementById('tk_off1').innerHTML = C17;
        document.getElementById('tk_off2').innerHTML = C18;
        document.getElementById('land_1').innerHTML = C19;
        document.getElementById('land_2').innerHTML = C20;
        document.getElementById('fir_oil').innerHTML = C21;
        //将航班信息重新写入到页面中 over
//将总的价格重新写入

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
        var M6 = M2.split(",")[20];//里程数
        var M7 = M2.split(",")[21];//机型
        var M8 = M2.split(",")[22];//起飞机场对应应英文
        var M9 = M2.split(",")[23];//降落机场对应应英文
        var M10 = M2.split(",")[24];//起飞机场编号
        var M11 = M2.split(",")[25];//降落机场编号
        var M12 = M2.split(",")[26];//飞行时长
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
        var childstr8 = parseInt(str8 / 2);
        if (childstr8 == '55') {
            childstr8 = 50;
        }
        //油价 逢5进1
        var str8_y = parseInt(M5 / 2);

        var str8_y_str = String(str8_y);//类型转换
        var str8_y_len = str8_y_str.length;//统计长度
        var str8_last = str8_y_str.substr(str8_y_len - 1, 1);
        if (str8_last >= '5' || str8_last >= '5' && str8_last != '0') {
            var str8_lt_int = parseInt(str8_y) - 5;//儿童油价
        }
        else {
            var str8_lt_int = str8_y;//儿童油价
        }
        //油价 逢5进1 over

        //单个童价格
        var add_y_money = str8_lt_int;
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
//将航班内容写入到hidden中
        var C4_4 = C4.substr(0, 1); //扣
        var C22 = C2.split(",")[19];//航班号

        document.getElementById("air_Name_1").value = C3; //航空编号
        document.getElementById("tkoff_Name").value = C17 + M8; //起飞机场名
        document.getElementById("tkoff_Time").value = C18; //起飞时间
        document.getElementById("land_Name").value = C19 + M9; //降落机场名
        document.getElementById("land_Time").value = C20; //降落时间
        document.getElementById("Viaport_1").value = C8; //经停
        document.getElementById("Saled_1").value = C4_4; //折扣前面的数字
        document.getElementById("Price_1").value = C5; //票面价
        document.getElementById("Return_1").value = C6; //返点
        document.getElementById("net_Price_1").value = C7; //净价
        document.getElementById("Tmp_nm").value = M6; //里程
        document.getElementById("type_aircft").value = M7; //机型
        document.getElementById("tkoff_Id").value = M10; //起飞编号
        document.getElementById("Kid_price").value = add_y_money;//儿童价格
        document.getElementById("feixingtime").value = M12;//飞行时长
        if (M11 == null || M11 == "") {
        } else {
            document.getElementById("land_Id").value = M11; //降落编号
        }
        var C21_1 = C21.indexOf("¥");
        var C21_2 = C21.indexOf("/");
        var C21_mac = C21.substr(C21_1 + 1, C21_2 - 1)
        var C21_ol = C21.substr(C21_2 + 2);
        var C21_mac_ol = C21_mac + "/" + C21_ol;
        document.getElementById("mach_oil").value = C21_mac_ol; //机建燃油
//将航班内容写入到hidden中over
//将总的价格重新写入
        document.getElementById("all_money_0").innerHTML = "¥" + pre_allM;
        document.getElementById("air_secure0").innerHTML = sec_M;
        document.getElementById("delay_money0").innerHTML = del_M;
//将总的价格重新写入 over
        document.booking.submit();
    }//输入正确
    else {
        alert("您的信息输入有误！请重新输入");
        return false;
    }
}
