// JavaScript Document
//<!--删除乘客-->
function remov_pinfo(id_name) {
    var len_p = 0;
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "t_1") {
            len_p = len_p + 1;
        }
    }//添加的数量
    //删除
    if (len_p > 1) {
//价格
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
        var childstr8 = parseInt(str8 / 2);
        if (childstr8 == '15') {
            childstr8 = 10;
        }
        if (childstr8 == '5') {
            childstr8 = 0;
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

//价格 over

        var id_w = document.getElementById('no_add');
        id_w.innerHTML = "";
        var id_name1 = id_name.substr(0, 5);
        var id_name2 = id_name.substr(6);

        var id_name3 = id_name1 + '1' + id_name2;
        var id_name4 = document.getElementById(id_name3);
        //钱数合计 延误险

        var id_name5 = document.getElementById("del_sec" + id_name2);
        var nm_yw = id_name5.selectedIndex;
        var nm_yw_val = id_name5.options[nm_yw].text;
        var nm_yw_int = parseInt(nm_yw_val);
        pre_allM = pre_allM - 20 * nm_yw_int;
        del_M = del_M - 20 * nm_yw_int;
        //钱数合计 延误险 over
        //钱数合计 航意险

        var id_name6 = document.getElementById("secure" + id_name2);
        var nm_fx = id_name6.selectedIndex;
        var nm_hx_val = id_name6.options[nm_fx].text
        var nm_hx_int = parseInt(nm_hx_val);
        pre_allM = pre_allM - 30 * nm_hx_int;
        sec_M = sec_M - 30 * nm_hx_int;

        //钱数合计 航意险 over

        //儿童
        var age_d_v = document.getElementById('add_age' + id_name2);
        if (age_d_v.selectedIndex == 1) {
            pre_allM = pre_allM - add_y_money;//总的价钱

        }//当选中儿童价格的时候
        else {//没有选中儿童价格
            pre_allM = pre_allM - add_money;//总的价钱
        }
        document.getElementById("all_money_0").innerHTML = "¥" + pre_allM;//总的钱数
        document.getElementById("air_secure0").innerHTML = sec_M;//航意险钱数
        document.getElementById("delay_money0").innerHTML = del_M;//延误险钱数
        id_name4.parentNode.removeChild(id_name4);//删除
    }
    else {
        var id_w = document.getElementById('no_add');
        id_w.innerHTML = "<span>新增乘机人 一个订单至少保留1位乘机人</span>";
    }//<=1时不删除 并且附加文字说明
}