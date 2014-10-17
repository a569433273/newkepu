// JavaScript Document
//取值航空 及退改签值
var txml;
var lxml;
function capture_air() {
    //将常用乘客信息写入到页面中
    $("#sh_l_m1").html("");//将头部插入
    var plmg_str = "";
    var plmg_str1 = "";
    var plmg_str2 = "";
    var plmg_str3 = "";
//头部
    plmg_str = "<div class='sh_l_m_1'><div style='float:left; overflow:hidden; font-size:12px; color:#000; line-height:30px;'>&nbsp;&nbsp;添加乘机人</div><div style='float:right; overflow:hidden; font-size:12px; color:#f00; line-height:30px; cursor:pointer;' onclick='close_msg();'>关闭&nbsp;</div></div>";
    $("#sh_l_m1").append(plmg_str);//将头部插入
    plmg_str1 = "<div class='sh_l_m_2' id='sh_l_m_2'></div>";
    $("#sh_l_m1").append(plmg_str1);
    plmg_str2 = "<div class='sh_l_m_3' id='sh_l_m_3'></div>"; //姓名插入处
    $("#sh_l_m_2").append(plmg_str2);

//信息部分
//将常用乘客信息写入到页面中 over
//读取常用乘客姓名
    var travllerurl = "orderajax.action";
    $.ajax({
        url: travllerurl,
        type: 'POST',
        dataType: 'xml',
        data: {
            changyong: 1
        },
        error: function () {
            return false;
        },
        success: function (xml) {
            txml = xml;
            $(xml).find('Travller').each(function (i) {
                var plmg_str3 = "";
                var P_name = $(this).children('name').text();//姓名
                plmg_str3 = "<div class='m_2_1'><div class='m21'><input type='checkbox' name='' id='add_lgmg" + i + "' class='add_lgmg' onclick='add_lgmsg(this.id)'/></div><div class='m22' id='PL_msg_nm_" + i + "'>姓名</div><input name='' type='hidden' id='len_pAR" + i + "'/></div>";
                $("#sh_l_m_3").append(plmg_str3);
                $("#PL_msg_nm_" + i).text(P_name);
            });
        }});
//读取常用乘客姓名 over
//联系人
//联系人信息
    $("#sh_l_mC").html("");//将头部插入
    var Clmg_str = "";
    var Clmg_str1 = "";
    var Clmg_str2 = "";
    var Clmg_str3 = "";
//头部
    Clmg_str = "<div class='sh_l_m_1'><div style='float:left; overflow:hidden; font-size:12px; color:#000; line-height:30px;'>&nbsp;&nbsp;添加联系人</div><div style='float:right; overflow:hidden; font-size:12px; color:#f00; line-height:30px; cursor:pointer;' onclick='cls_Cmsg();'>关闭&nbsp;</div></div>";
    $("#sh_l_mC").append(Clmg_str);//将头部插入
    Clmg_str1 = "<div class='sh_l_m_2' id='sh_l_m_C2'></div>";
    $("#sh_l_mC").append(Clmg_str1);
    Clmg_str2 = "<div class='sh_l_m_3' id='sh_l_m_C3'></div>"; //姓名插入处
    $("#sh_l_m_C2").append(Clmg_str2);
//联系人信息 over
//读取信息并插入
    $.ajax({
        url: travllerurl,
        type: 'POST',
        dataType: 'xml',
        data: {
            changyong: 0
        },
        error: function () {
            return false;
        },
        success: function (xml) {
            $(xml).find('Travller').each(function (i) {
                lxml = xml;
                var Clmg_str3 = "";
                var C_name = $(this).children('name').text();//姓名
                Clmg_str3 = "<div class='m_2_1'><div class='m21'><input type='radio' name='Conts' id='add_lgmgC" + i + "' onclick='add_lgmsgC(this.id)'/></div><div class='m22' id='CL_msg_nm_" + i + "'>姓名</div</div>";
                $("#sh_l_m_C3").append(Clmg_str3);
                $("#CL_msg_nm_" + i).text(C_name);
            });
        }});
//读取信息并插入over
//联系人 over
    //取值
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

    var C9 = C2.split(",")[6];//退改期时间
    C9 = decodeURI(decodeURI(C9));//解码
    C9 = decodeURI(decodeURI(C9));

    var C10 = C2.split(",")[7];//退票价格1
    C10 = decodeURI(decodeURI(C10));//解码
    C10 = decodeURI(decodeURI(C10));
    var C_10 = parseInt(C10);
    if (!isNaN(C_10)) {
        C10 = C10 + "%";
    }

    var C11 = C2.split(",")[8];//退票价格2
    C11 = decodeURI(decodeURI(C11));//解码
    C11 = decodeURI(decodeURI(C11));
    var C_11 = parseInt(C11);
    if (!isNaN(C_11)) {
        C11 = C11 + "%";
    }

    var C12 = C2.split(",")[9];//改期价格1
    C12 = decodeURI(decodeURI(C12));//解码
    C12 = decodeURI(decodeURI(C12));
    var C_12 = parseInt(C12);
    if (!isNaN(C_12)) {
        C12 = C12 + "%";
    }

    var C13 = C2.split(",")[10];//改期价格2
    C13 = decodeURI(decodeURI(C13));//解码
    C13 = decodeURI(decodeURI(C13));
    var C_13 = parseInt(C13);
    if (!isNaN(C_13)) {
        C13 = C13 + "%";
    }

    var C14 = C2.split(",")[11];//签转规定
    C14 = decodeURI(decodeURI(C14));//解码
    C14 = decodeURI(decodeURI(C14));

    var C15 = C2.split(",")[12];//座位数
    var C16 = C2.split(",")[13];//Y价格
    //起飞降落
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
    var C21_1 = C21.indexOf("¥");
    var C21_2 = C21.indexOf("/");
    var C21_mac = C21.substr(C21_1 + 1, C21_2 - 1)
    var C21_ol = C21.substr(C21_2 + 2);
    var C21_mac_ol = C21_mac + "/" + C21_ol;

    //起飞降落 over
    //将值写入到页面
    //航空详细信息
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
    //退改期
    if (C9 == '规定') {
        var tab_str1 = "<tr  align='center' height='30'><td width='13%' style='border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; border-left:1px solid #dcf7fb'></td> <td width='13%'  style='border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb;'>成人票</td> <td width='13%' colspan='4'  style='border-top:1px solid #dcf7fb; border-right:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; text-align:left;'>退改签规则以航空公司最新规定为准，可咨询客服电话（010-64175566）</td></tr>";
        tab_str1 += "<tr  align='center' height='30'><td width='13%' style='border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; border-left:1px solid #dcf7fb'></td> <td width='13%'  style='border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb;'>儿童票</td> <td width='13%' colspan='4'  style='border-top:1px solid #dcf7fb; border-right:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; text-align:left;'>退改签规则以航空公司最新规定为准，可咨询客服电话（010-64175566）</td></tr>";
        $('#covert1').html("");
        $('#covert1').append(tab_str1);//插入标签


    }//按航空公司规定执行退改签
    else {

        var tab_str = "<tr  align='center' height='30'><td width='13%' style='border-top:1px solid #dcf7fb; border-left:1px solid #dcf7fb'></td> <td width='13%' rowspan='2' style='border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb;'>成人票</td> <td width='13%'  style='border-top:1px solid #dcf7fb;'>离站<span id='take_time1'></span>小时(含)</td><td width='13%'  style='border-top:1px solid #dcf7fb; ' id='tp_price1'>1</td><td width='13%'  style='border-top:1px solid #dcf7fb; ' id='qg_price1'>2</td><td width='13%' rowspan='2' id='Endor' style='border-top:1px solid #dcf7fb; border-right:1px solid #dcf7fb;' >3</td></tr>";
        tab_str += "<tr  align='center' height='30'> <td width='13%' style=' border-bottom:1px solid #dcf7fb; border-left:1px solid #dcf7fb'></td><td width='13%'  style='border-bottom:1px solid #dcf7fb;'>离站<span id='take_time2'></span>小时内及离站后</td><td width='13%'  style='border-bottom:1px solid #dcf7fb;' id='tp_price2'>4</td> <td width='13%'  style='border-bottom:1px solid #dcf7fb;' id='qg_price2'>5</td></tr>";
        tab_str += "<tr  align='center'  height='30'> <td width='13%' style='border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; border-left:1px solid #dcf7fb'></td><td width='10%' style='border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb;'>儿童票</td> <td colspan='4' style='border-top:1px solid #dcf7fb;  border-right:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; ' align='left'>退改签规则以航空公司最新规定为准，可咨询客服电话（010-64175566）</td></tr>";
        $('#covert1').html("");
        $('#covert1').append(tab_str);//插入标签
        //写入数据
        document.getElementById('take_time1').innerHTML = C9;
        document.getElementById('take_time2').innerHTML = C9;
        document.getElementById('tp_price1').innerHTML = C10;
        document.getElementById('tp_price2').innerHTML = C11;
        document.getElementById('qg_price1').innerHTML = C12;
        document.getElementById('qg_price2').innerHTML = C13;
        document.getElementById('Endor').innerHTML = C14;

    }//退改签规则
    //退改期over
    var C7 = parseInt(C7);
    C7 = C7 + 30;//航空净价+意外险
    //机建燃油
    document.getElementById('fir_oil').innerHTML = C21_mac_ol;

    var oil_2 = C21;
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
    C7 = C7 + str4 + str8;
    //机建/燃油 over
    var C_7 = "¥" + C7;
    document.getElementById('all_money_0').innerHTML = C_7;
    document.getElementById('seat_hide').innerHTML = C15;
    //得到油的价格 逢5进1
    var C_16 = parseInt(C16);
    var C_Y_16 = parseInt(C16 / 2);
    //油价 逢5进1
    var oil_p_16 = parseInt(str8 / 2);
    var oil_p_str = String(oil_p_16);//类型转换
    var oil_p_len = oil_p_str.length;//统计长度
    var oil_last = oil_p_str.substr(oil_p_len - 1, 1);
    if (oil_last >= '5' || oil_last >= '5' && oil_last != '0') {
        var oil_last = oil_p_str.substr(0, 1);
        var oil_last_int = parseInt(oil_last);
        var oil_lt_1 = oil_last_int + '0';
        var oil_lt_int = parseInt(oil_lt_1);//油价
    }
    else {
        var oil_lt_int = oil_p_16;//油价
    }
    //油价 逢5进1 over
    var C_16_Y = C_Y_16 + oil_lt_int;
    //得到油的价格 逢5进1 over

}