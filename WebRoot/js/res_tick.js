// 预定效果
function res_tick(id) {
    //取值
    var id1 = id;
    var id_num = id1.substr(3);
    var id_num1 = id_num.indexOf('_');
    var id_numi = id_num.substr(0, id_num1);//ID对应值
    var id_nums = parseInt(id_num.substr(id_num1 + 1));//对应S
    var Yclass_p_val = "";//Y价格(传)
    var TP_Oil_val = "";//油价(传)
    var air_name_v = "";//航空公司名称+航班号(传
    var viaport_v = "";//经停
    var tkoff_w1 = "";//起飞地点+起飞编号
    var tkoff_time = ""//起飞时间
    var land_w1 = "";//降落地点+降落编号
    var land_time = "";//降落时间
    var flight_time = "";//飞行时间
    var price_v = "";//加密票面价(传)
    var j_money_v = "";//加密净价(传)
    var code_v = "";//经济舱以及折(传
    var str14 = "";//对应票数
    var Tpm_1 = "";//里程
    var ac_tp = "";//机型
    var BP_1 = "";//起飞机场对应英文
    var OP_1 = ""; //降落机场对应英文
    var BAT_1 = ""; //起飞编号
    var OAT_1 = "";//降落机场
    //退改签
    var tp_hour1 = "";
    var tp_price = "";
    var tp_price2 = "";
    var qg_price1 = "";
    var qg_price2 = "";
    var qz_2 = "";
    var F_No = "";
    $(Xsml).find('Item').each(function (k) {
        var ID = $(this).children('ID').text();
        if (ID == id_numi) {
            //起飞机场对应英文
            BP_1 = $(this).children('BoardPoint').text();
            //降落机场对应英文
            OP_1 = $(this).children('OffPoint').text();
            //机型
            ac_tp = $(this).children('Aircraft').text();//机型
            //Y价格
            Yclass_p_val = $(this).children('YClassPrice').text();//Y价格(传)
            //Y价格over
            //石油
            var TPM = $(this).children('TPM').text();
            Tpm_1 = TPM;
            var TPM_int = parseInt(TPM);
            if (TPM_int >= 800) {
                TP_Oil_val = "¥50/¥" + 30;
            } else {
                TP_Oil_val = "¥50/¥" + 10;
            }//油价(传)
            TP_Oil_val = encodeURI(TP_Oil_val);//转码
            TP_Oil_val = encodeURI(TP_Oil_val);
            //石油 over
            //航空公司
            var Carrier = $(this).children('Carrier').text();//航空公司名称
            var air_name = air_n(Carrier);//机场名称返回值
            var FlightNo = $(this).children('FlightNo').text();
            var FlightNo = Carrier + FlightNo;//航班号
            F_No = FlightNo;
            air_name_v = air_name + FlightNo;//航空公司名称+航班号(传)
            air_name_v = encodeURI(air_name_v);//转码
            air_name_v = encodeURI(air_name_v);
            //航空公司 over
            //经停
            var ViaPort = $(this).children('ViaPort').text();//经停 0 无 1 有
            if (ViaPort == '0') {
                ViaPort = '无';
            } else {
                ViaPort = '有';
            }
            viaport_v = ViaPort;//经停
            viaport_v = encodeURI(viaport_v);//转码
            viaport_v = encodeURI(viaport_v);
            //经停 over
            //起飞地点时间
            var air_port = $(this).children('Boardairport').text();//起飞机场
            var air_portat = $(this).children('BoardPointAT').text();//起飞机场ID
            BAT_1 = air_portat;
            tkoff_w1 = air_port + air_portat;//起飞地点+起飞编号
            tkoff_w1 = encodeURI(tkoff_w1);//转码
            tkoff_w1 = encodeURI(tkoff_w1);
            var DepartureDate = $(this).children('DepartureDate').text();//起飞Date
            var DepartureTime = $(this).children('DepartureTime').text();//起飞time
            tkoff_time = DepartureDate + " " + DepartureTime;//起飞时间
            tkoff_time = encodeURI(tkoff_time);//转码
            tkoff_time = encodeURI(tkoff_time);
            //起飞地点时间 over
            //降落地点时间
            var air_off = $(this).children('Offairport').text();//降落机场
            var air_offat = $(this).children('OffPointAT').text();// 降落机场ID
            OAT_1 = air_offat;
            land_w1 = air_off + air_offat;//降落地点+降落编号
            land_w1 = encodeURI(land_w1);//转码
            land_w1 = encodeURI(land_w1);
            var ArrivalDate = $(this).children('ArrivalDate').text();// 降落Date
            var ArrivalTime = $(this).children('ArrivalTime').text();//降落time
            land_time = ArrivalDate + " " + ArrivalTime;//降落时间
            land_time = encodeURI(land_time);//转码
            land_time = encodeURI(land_time);
            //降落地点时间 over
            //飞行时长
            var fltime = $(this).children('FlightTime').text();
            flight_time = encodeURI(fltime);
            flight_time = encodeURI(fltime);
            $(this).find('Class').each(function (t) {//readClass
                if (t == id_nums) {
                    //折扣 票面价 净价
                    var Code = $(this).attr('Code');//舱位字母
                    var Price = $(this).attr('Price');//票面价
                    price_v = base64encode(utf16to8(Price));//加密票面价(传)
                    price_v = escape(price_v);//转码
                    var j_Price = parseInt(Price * (1 - 0.03));//净价
                    var j_Price = String(j_Price);
                    j_money_v = base64encode(utf16to8(j_Price));//加密净价(传)
                    j_money_v = escape(j_money_v);//转码
                    var Price_int = parseInt(Price);
                    var price_int_y = parseInt($price_y_r);
                    var sale = Price_int / price_int_y;
                    var sale = sale * 10;
                    var sale = sale.toFixed(0);//打折数字
                    code_v = Code + " " + sale + "折";//经济舱以及折(传)
                    code_v = encodeURI(code_v);//转码
                    code_v = encodeURI(code_v);
                    //折扣 票面价 净价over
                    //对应的座位数
                    var Seat = $(this).attr('Seat');
                    if (Seat == 'A') {
                        Seat = '9';
                    }
                    else if (Seat == '1' || Seat == '2' || Seat == '3' || Seat == '4' || Seat == '5' || Seat == '6' || Seat == '7' || Seat == '8') {
                        Seat = Seat;
                    }
                    else {
                        Seat = '';
                    }
                    str14 = Seat;//剩余票数
                    //对应的座位数 over
                    // 退票 改签
                    var tuipiao = $(this).attr('tuipiao');
                    var gaiqi = $(this).attr('gaiqi');
                    var qianzhuan = $(this).attr('qianzhuan');
                    var tuipiao1 = tuipiao.split('-');
                    if (tuipiao1[1] != "" || tuipiao1[0] != "" || tuipiao1[2] != "") {
                        var tuipiao2 = ' 退票规定：航班计划离站时间' + tuipiao1[1] + '小时(含),' + '收取票面价格的' + tuipiao1[0] + '%为退票手续费。' + '航班计划离站时间' + tuipiao1[1] + '小时内及航班离站后,收取票面价格的' + tuipiao1[2] + '%退票手续费';
                    } else {
                        var tuipiao2 = '';
                    }
                    var gaiqi1 = gaiqi.split('-');
                    if (gaiqi1[1] != "" || gaiqi1[0] != "" || gaiqi1[2] != "") {
                        if (gaiqi1[0] != '0') {
                            var gaiqi2 = ' 改期规定：航班计划离站时间' + gaiqi1[1] + '小时(含),' + '收取票面价格的' + gaiqi1[0] + '%为退票手续费。' + '航班计划离站时间' + gaiqi1[1] + '小时内及航班离站后,收取票面价格的' + gaiqi1[2] + '%退票手续费';
                        } else {
                            var gaiqi2 = ' 改期规定：航班计划离站时间' + gaiqi1[1] + '小时(含),' + '免费改期。' + '航班计划离站时间' + gaiqi1[1] + '小时内及航班离站后,收取票面价格的' + gaiqi1[2] + '%退票手续费';
                        }
                    } else {
                        var gaiqi2 = "";
                    }
                    if (qianzhuan == '0') {
                        var qianzhuan1 = " 签转规定：不允许";
                    }
                    if (qianzhuan == '1') {
                        var qianzhuan1 = " 签转规定：允许";
                    }
                    if (qianzhuan == '') {
                        var tuipiao2 = '按航空公司规定执行';
                        gaiqi2 = '';
                        qianzhuan1 = '';
                    }
                    var check_add = tuipiao2;
                    //退票改期签转

                    var tp_val = tuipiao2;//退票时

                    if (tp_val != "按航空公司规定执行") {//按航空公司规定执行
                        for (var u = 14; u < tp_val.length; u++) {
                            var str4 = tp_val.substr(u, 1);
                            if (isNaN(str4)) {
                                var z = u;
                                break;
                            }
                        }//找到规定退票时间数字的位置
                        tp_hour1 = tp_val.substr(14, z - 14);//规定退票的时间（含）
                        var tp_1 = tp_val.indexOf("%");//退票时对应的第一个%号的位置
                        for (var t = tp_1 - 1; t > 0; t--) {
                            var str3 = tp_val.substr(t, 1);
                            if (isNaN(str3)) {
                                var w = t;
                                break;
                            }
                        }//退票时第一个%后面数字的位置
                        tp_price = tp_val.substr(w + 1, tp_1 - w - 1);//规定时间内应该对应的退票费
                        for (var i = tp_val.length - 1; i > 0; i--) {
                            var str1 = tp_val.substr(i, 1);
                            if (str1 == "%") {
                                var k = i;
                                break;
                            }
                        }//最后一个百分号的位置
                        for (var j = k - 1; j > 0; j--) {
                            var str1 = tp_val.substr(j, 1);
                            var str2 = parseInt(str1);
                            if (isNaN(str2)) {
                                var g = j;//规定时间内及离站后所对应的退票费位置
                                break;
                            }
                        }//找到最后一个百分号前面所对应的数字
                        tp_price2 = tp_val.substr(g + 1, k - g - 1);//规定时间内及离站后所对应的退票费


                        var qg_val = gaiqi2;//改期时
                        var qg_1 = qg_val.indexOf("%");
                        ;//改期时第一个%对应的位置
                        for (var b = qg_1 - 1; b > 0; b--) {
                            var str4 = qg_val.substr(b, 1);
                            var str5 = parseInt(str4);
                            if (isNaN(str5)) {
                                var c = b;
                                break;
                            }
                        }//找到前面%出现的数字
                        qg_price1 = qg_val.substr(c + 1, qg_1 - c - 1);//在规定时间内改期（含）对应的数字
                        for (var d = qg_val.length - 1; d > 0; d--) {
                            var str6 = qg_val.substr(d, 1);
                            if (str6 == '%') {
                                var e = d;
                                break;
                            }
                        }//最后一个%对应的位置
                        if (qg_1 == e) {
                            qg_price2 = qg_price1;
                            qg_price1 = "免费改期";
                        }//判断在规定时间内是否（含）免费改期
                        else {
                            for (var f = e - 1; f > 0; f--) {
                                var str7 = qg_val.substr(f, 1);
                                var str8 = parseInt(str7);
                                if (isNaN(str8)) {
                                    var h = f;
                                    break;
                                }
                            }//找出对应最后一个%的数字
                            qg_price2 = qg_val.substr(h + 1, e - h - 1);//离站后对应的改期手续费
                        }//ifend

                        var qz_val = qianzhuan1;//签转时
                        var qz_1 = qz_val.indexOf("：");
                        qz_2 = qz_val.substr(qz_1 + 1);//签转时的规定
                    }
                    else {
                        tp_hour1 = "规定";//规定退票的时间（含）
                        tp_price = "按航空规定执行";//规定时间内应该对应的退票费
                        tp_price2 = "按航空规定执行";//规定时间内及离站后所对应的退票费


                        qg_price1 = "按航空规定执行";//在规定时间内改期（含）对应的数字

                        qg_price2 = "按航空规定执行";//离站后对应的改期手续费
                        qz_2 = "按航空规定执行";//签转时的规定
                    }

                    tp_hour1 = encodeURI(tp_hour1);//转码
                    tp_hour1 = encodeURI(tp_hour1);
                    tp_price = encodeURI(tp_price);//转码
                    tp_price = encodeURI(tp_price);
                    tp_price2 = encodeURI(tp_price2);//转码
                    tp_price2 = encodeURI(tp_price2);
                    qg_price1 = encodeURI(qg_price1);//转码
                    qg_price1 = encodeURI(qg_price1);
                    qg_price2 = encodeURI(qg_price2);//转码
                    qg_price2 = encodeURI(qg_price2);
                    qz_2 = encodeURI(qz_2);//转码
                    qz_2 = encodeURI(qz_2);
                    //退票改期签转 over
                    // 退票 改签 over
                }//if (t==idnumi)
            })//class

        }//if(ID)
    })//读取ITEM的内容
    var sale1_v = '3.0%'; //返点
    window.location.href = "planeorder.jsp?id=" + air_name_v + "," + code_v + "," + price_v + "," + sale1_v + "," + j_money_v + "," + viaport_v + "," + tp_hour1 + "," + tp_price + "," + tp_price2 + "," + qg_price1 + "," + qg_price2 + "," + qz_2 + "," + str14 + "," + Yclass_p_val + "," + tkoff_w1 + "," + tkoff_time + "," + land_w1 + "," + land_time + "," + TP_Oil_val + "," + F_No + "," + Tpm_1 + "," + ac_tp + "," + BP_1 + "," + OP_1 + "," + BAT_1 + "," + OAT_1 + "," + flight_time + "";

}
	
	
	
	
	
	
	