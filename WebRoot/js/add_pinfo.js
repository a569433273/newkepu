// JavaScript Document
//<!--添加乘客-->
var len_p = 0;
function add_pinfo() {
    var len_p1 = 0;
    var seat = document.getElementById("seat_hide");
    var seat_val = seat.innerHTML;
    var seat_int = parseInt(seat_val);
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "t_1") {
            len_p1 = len_p1 + 1;
        }
    }

    if (len_p1 < seat_int && len_p1 < 9) {
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
        if (childstr8 == '55') {
            childstr8 = 50;
        }
        //油价 逢5进1
        var str8_y = parseInt(M5 / 2);

        var str8_y_str = String(str8_y);//类型转换
        var str8_y_len = str8_y_str.length;//统计长度
        var str8_last = str8_y_str.substr(str8_y_len - 1, 1);
        if (str8_last >= '5' || str8_last >= '5' && str8_last != '0') {
            var str8_lt_int = parseInt(str8_y) + 5;//儿童油价
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

        var id_w = document.getElementById('no_add');
        id_w.innerHTML = "";
        len_p = len_p + 1;
        //添加内容
        var str = "<div class='t_1' id='add_p1" + len_p + "'></div>";
        $("#top2_info").append(str);
        var str1 = "<div class='t_1_top' id='add_p2" + len_p + "'></div>";
        $("#add_p1" + len_p).append(str1);
        var str2 = "<div style='float:left; width:710px;' id='add_p3" + len_p + "'></div>";
        $("#add_p2" + len_p).append(str2);
        var str3 = "<div style='float:left; width:250px;' id='add_p4" + len_p + "'></div>";
        $("#add_p3" + len_p).append(str3);
        var str4 = "<div style='float:left; width:50px; font-size:12px; line-height:20px;'>姓名<span style='color:#f00;'>*</span></div><div style='float:left;'><input type='text' class='input_val' style='width:60px;' name='p_name' id='psg_name" + len_p + "' onkeyup='ck_unm(this.id)' onfocus='ck_name1(this.id)'/></div>";
        str4 += " <div style='float:left;'><span id='name_" + len_p + "'></span>&nbsp;<select name='add_age" + len_p + "' class='younger' onchange='yong_litter(this.id)' id='add_age" + len_p + "'><option>成人(>12岁)</option><option>儿童(< 12岁)</option></select></div>";
        $("#add_p4" + len_p).append(str4);
        var str5 = "<div style='width:450px; float:left;' id='add_p5" + len_p + "'></div>";
        $("#add_p3" + len_p).append(str5);
        var str6 = "<div style='float:left; width:60px; font-size:12px; line-height:20px; text-align:right;'>证件号码<span style='color:#f00;'>*</span>&nbsp;</div>";
        str6 += "<div style='float:left; overflow:hidden;'>&nbsp;<select name='p_card' class='which_1' id='p_card" + len_p + "' onchange='set_sex(this.id)'><option>身份证</option><option>护照</option><option>其他</option></select></div>";
        str6 += "<div style='float:left;' id='card_disp" + len_p + "'>&nbsp;<input type='text' name='p_name' class='hz_val1' style='width:130px;' id='idCard_" + len_p + "' onkeyup='ck_idCard(this.id)' onfocus='ck_idCard1(this.id)' onblur='ck_ageCard(this.id)'><span id='psg_card" + len_p + "'></span></div>";
        str6 += "<div style='float:left; margin-top:2px; overflow:hidden; display:inline;'>&nbsp;<input name='' class='usual_psg' type='checkbox' value='' checked='checked'/></div>";
        str6 += " <div style='float:left; overflow:hidden; font-size:12px; line-height:23px;'>&nbsp;是否保存为常用登机人</div>";
        $("#add_p5" + len_p).append(str6);
        var str7 = "<div style='float:left; oveflow:hidden;'>&nbsp;<input name='' type='checkbox' checked='checked' value='' id='secur" + len_p + "' class='secur0' onclick='box_ch(this.id)'/><span style='font-size:12px; color:#0068c9;' id='accid_s" + len_p + "'  onmousemove='mouse_disp(this.id);' onmouseout='mouse_hid()'>&nbsp;航意险</span><span style='font-size:12px;'><span style='color:#F00'>30</span>/份</span></div>";
        str7 += "<div style='float:left;'><select name='secure' id='secure" + len_p + "'  class='f_sec0' onchange='secur(this.id)'><option value='1' checked='checked'>1份</option><option value='0'>0份</option><option value='2'>2份</option></select>&nbsp;</div>";
        str7 += "<div style='float:left; overflow:hidden; font-size:12px; line-height:20px;'>保额最高100万/份</div>";
        str7 += "<div style='float:left; line-height:20px; margin-left:5px; overflow:hidden; cursor:pointer;' id='add_pf" + len_p + "' onclick='remov_pinfo(this.id)'><img src='../images/wrong.jpg' style='margin-top:5px;'></div>";
        $("#add_p2" + len_p).append(str7);
        var str8 = "<div class='t_1_top1' id='add_p6" + len_p + "'></div>";
        $("#add_p1" + len_p).append(str8);
        var str9 = "<div style='float:left; width:710px;' id='add_p7" + len_p + "'></div>";
        $("#add_p6" + len_p).append(str9);
        var str10 = "<div style='float:left; width:250px; text-align:right; font-size:12px;' id='disp_age" + len_p + "'>&nbsp;</div>";
        $("#add_p7" + len_p).append(str10);
        var str11 = "<div style='float:left; width:450px; display:none;' id='disp_sex" + len_p + "' ></div>";
        $("#add_p7" + len_p).append(str11);
        var str13 = "<div style='float:left;'>&nbsp;<input name='' type='checkbox' value='' id='delay_cl" + len_p + "' class='delay_cl' onclick='desc_sec(this.id)'/></div>"
        str13 += "<div style='float:left; overflow:hidden; line-height:20px; '><span style='font-size:12px; font-weight:bold; color:#0068c9;' id='delay_s" + len_p + "'  onmousemove='mouse_disp(this.id);' onmouseout='mouse_hid()'>&nbsp;延误险</span><span style='color:#F00; font-size:12px;'>20</span><span style='font-size:12px;'>/份</span></div>";
        str13 += "<div style='float:left; oveflow:hidden;'><select  name='del_sec' id='del_sec" + len_p + "'  class='f_del0' onchange='del_upd(this.id)'><option checked='checked' value='0'>0份</option><option value='1' >1份</option></select>&nbsp;</div>";
        str13 += "<div style='float:left; overflow:hidden; font-size:12px; line-height:20px;'>保额最高100万/份</div>"
        $("#add_p6" + len_p).append(str13);


        //钱数合计
        var money_1 = document.getElementById("all_money_0");//总的钱数
        var all_M = add_money + pre_allM + 30;
        money_1.innerHTML = "¥" + all_M;
        //航意险钱数
        sec_M = sec_M + 30;
        document.getElementById("air_secure0").innerHTML = sec_M;

    }//添加
    else {
        var id_w = document.getElementById('no_add');
        id_w.innerHTML = "<span>同一订单仅支持" + seat_int + "位乘客</span>";
    }//若不合格 添加文字
}