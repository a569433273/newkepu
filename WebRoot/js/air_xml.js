// JavaScript Document
var hangbanurl = "searchplane.action";
var Xsml;
$(document)
    .ready(function () {
        $.ajax({
            url: hangbanurl,
            type: 'POST',
            dataType: 'xml',
            data: {
                from: $("#from").val(),
                arrival: $("#arrival").val(),
                fromdata: $("#fromdata").val()
            },
            error: function () {
                s_msg();
                return false;
            },
            success: function (xml) {
                Xsml = xml;
                //判断航班是否存在
                var Wrong_c = $(xml).find('ErrorInfo_1_0').find('Content').text();//舱位字母
                var Wrong_In = Wrong_c.indexOf("Error Code");
                if (Wrong_In > 0) {
                    s_msg1();
                    return false;
                }
                //判断航班是否存在 over
                //xml start
                $air_port = '';
                $air_off = '';
                $air_portat = '';
                $air_offat = '';
                $code_y = '';
                $price_y = '';
                $price_y_r = 0;
                $count = 0;
                $count_i = 0;
                $air_str = '';
                $counti = 0;
                var id_str = "";
                $(xml).find('Item').each(function (i) {
                    var ID = $(this).children('ID').text();
                    var Carrier = $(this).children('Carrier').text();//航空公司名称
                    // 对应航空名称
                    var air_name = air_n(Carrier);//机场名称返回值
                    $counti = $counti + 1;
                    var YClassPrice = $(this).children('YClassPrice').text();//Y价格
                    var TPM = $(this).children('TPM').text();
                    var TPM_int = parseInt(TPM);
                    if (TPM_int >= 800) {
                        var tmp_ioil = 70;
                    } else {
                        var tmp_ioil = 40;
                    }//油价
                    var FlightNo = $(this).children('FlightNo').text();
                    var FlightNo = Carrier + FlightNo;//航班号
                    var Aircraft = $(this).children('Aircraft').text();//机型
                    $air_port = $(this).children('Boardairport').text();//起飞机场
                    $air_off = $(this).children('Offairport').text();//降落机场
                    $air_portat = $(this).children('BoardPointAT').text();//起飞机场ID
                    $air_offat = $(this).children('OffPointAT').text();// 降落机场ID
                    var DepartureDate = $(this).children('DepartureDate').text();//起飞Date
                    var DepartureDate = DepartureDate.substring(5);
                    var DepartureTime = $(this).children('DepartureTime').text();//起飞time
                    var depart_date = DepartureDate + '  ' + DepartureTime;//起飞data+time
                    var ArrivalDate = $(this).children('ArrivalDate').text();// 降落Date
                    var ArrivalDate = ArrivalDate.substring(5)
                    var ArrivalTime = $(this).children('ArrivalTime').text();//降落time
                    var arrive_data = ArrivalDate + '  ' + ArrivalTime;//降落data+time
                    var ViaPort = $(this).children('ViaPort').text();//经停 0 无 1 有
                    if (ViaPort == '0') {
                        ViaPort = '无';
                    } else {
                        ViaPort = '有';
                    }
                    var FlightType = $(this).children('FlightType').text();
                    var t = i - 1;
                    if (i > 0 && $count == 0) {
                        $('#atb' + t).remove();
                        $('#add_ip_air' + t).remove();
                    }
                    $count = 0;
                    $str4 = "";
                    $str4 += "<tbody id='atb" + i + "'>";
                    $str4 += "</tbody>";
                    $("#a_table1").append($str4);
                    $str1 = '';
                    $str1 += "<tr id='f_col" + i + "' align='center' height='30' class='a_tab_2'  bgcolor='#effafc'>";
                    $str1 += "<td style='border-bottom:1px dashed #cfd1d0;' aling='center' width='15%'><span id='air_name" + i + "'></span></td>";
                    $str1 += "<td style='border-bottom:1px dashed #cfd1d0;' width='13%'><span id='air_no" + i + "'></span></td>";
                    $str1 += "<td style='border-bottom:1px dashed #cfd1d0;' width='16%'><span id='air_type" + i + "'></span></td>";
                    $str1 += "<td style='border-bottom:1px dashed #cfd1d0;'  width='13%'><span id='d_where" + i + "'></span><span id='depa_no" + i + "'></span> <span class='a_co1'><div id='de" + i + "'></div></span></td>";
                    $str1 += "<td  style='border-bottom:1px dashed #cfd1d0;'  width='13%'><span id='off_where" + i + "'></span><span id='off_no" + i + "'></span> <span class='a_co1'><div id='ar" + i + "'></div></span></td>";
                    $str1 += "<td  style='border-bottom:1px dashed #cfd1d0;' width='5%'><span id='vapo" + i + "'></span></td>";
                    $str1 += "<td  style='border-bottom:1px dashed #cfd1d0;' width='8%'></td>";
                    $str1 += "<td  style='border-bottom:1px dashed #cfd1d0;' class='a_but2' id='fold_hide" + i + "' onclick='javascript:ShowFLT(this.id);'>&nbsp;&nbsp;&nbsp;</td>";
                    $str1 += "</tr>";
                    $('#atb' + i).append($str1);
                    $('#air_name' + i).text(air_name);
                    $('#air_no' + i).text(FlightNo);
                    $('#air_type' + i).text(Aircraft);
                    $('#d_where' + i).text($air_port);
                    $('#depa_no' + i).text($air_portat);
                    $('#de' + i).text(depart_date);
                    $('#off_where' + i).text($air_off);
                    $('#off_no' + i).text($air_offat);
                    $('#ar' + i).text(arrive_data);
                    $('#vapo' + i).text(ViaPort);
                    //加入各个航空公司
                    var span_name = $("#air_name" + i).text();
                    $air_str = '';
                    $air_str += "<span id='add_ip_air" + i + "'><input name='ra1' type='radio'  class='one' style='vertical-align:middle;' />&nbsp;<span class='air_sy' id='span_air" + i + "'>&nbsp;</span></span>"
                    $(".a_top12").append($air_str);
                    $("#span_air" + i).text(span_name);
                    //Code=='Y'
                    $price_y_r = parseInt(YClassPrice);
                    var lowprice = 999999999;
                    $num_low1 = 0;
                    $num_low2 = 0;
                    var low_price = 0;
                    $(this).find('Class').each(function (s) {
                        $count_i = i;
                        var Seat = $(this).attr('Seat');
                        if (Seat == 'A') {
                            Seat = '剩余票数' + '9' + '张以上';
                        }
                        else if (Seat == '1' || Seat == '2' || Seat == '3' || Seat == '4' || Seat == '5' || Seat == '6' || Seat == '7' || Seat == '8') {
                            Seat = '剩余票数' + Seat + '张';
                        }
                        else {
                            Seat = '';
                        }
                        var Code = $(this).attr('Code');//舱位字母
                        var Price = $(this).attr('Price');//票面价
                        var j_Price = parseInt(Price * (1 - 0.03));//净价
                        var Price_int = parseInt(Price);
                        var price_int_y = parseInt($price_y_r);
                        var sale = Price_int / price_int_y;
                        var sale = sale * 10;
                        var sale = sale.toFixed(0);//打折
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
                        // 退票 改签 over
                        if (Seat != '') {
                            $str = '';
                            $str += "<tr id='air_" + i + "_" + s + "' style='display:none;' class='fold_hide" + i + "'  class='wowo' align='center' height='30' class='fold_hide'>";
                            $str += "<td style='border-bottom:1px dashed #cfd1d0;' aling='center' width='15%' class='a_co3'><div id='seat" + i + "_" + s + "'></div></td>";
                            $str += "<td style='border-bottom:1px dashed #cfd1d0;' width='13%'><span id='code" + i + "_" + s + "'></span><span>&nbsp;<span id='sale" + i + "_" + s + "'></span>折</span></td>";
                            $str += "<td style='border-bottom:1px dashed #cfd1d0;' width='15%'>票面价： <span id='price" + i + "_" + s + "'></span>元</td>";
                            $str += "<td style='border-bottom:1px dashed #cfd1d0;' class='a_co2' width='13%'>返点 <span class='a_co3' id='sale_1'>3.0</span>%</td>";
                            $str += "<td style='border-bottom:1px dashed #cfd1d0;' class='a_co2'  width='13%'>净价: <span id='j_money" + i + "_" + s + "' class='a_co3'></span>元</td>";
                            $str += "<td style='border-bottom:1px dashed #cfd1d0;' width='5%'><span id='viaport" + i + "_" + s + "'></span></td>";
                            $str += "<td style='border-bottom:1px dashed #cfd1d0;'  width='8%' ><a href=''><img src='../images/a_but3.jpg' id='ww" + i + "_" + s + "' onmouseout='hiddencont(this.id);' onmouseover='showcont(event,this.id);'/></a></td>";
                            $str += "<td  style='border-bottom:1px dashed #cfd1d0;' onclick='res_tick(this.id);' id='res" + ID + "_" + s + "'><img src='../images/a_but2.jpg' style='cursor:pointer;'/></td>";
                            $str += "</tr>";
                            $str += "<tr  id='h_lay" + i + "_" + s + "'>"
                            $str += "<td align='left'  id='ticket_add" + i + "_" + s + "' width='800' style='background:#fbf9f9; border:1px solid #ccc; display:none; position:absolute; z-index:100; color:#000;'>&nbsp;<p style='font-size:12px; font-weight:normal; color:#000; padding:0px; margin-top:-5px;  margin-left:5px;' id='tp" + i + "_" + s + "'></p>&nbsp;<p style='font-size:12px; font-weight:normal; color:#000; padding:0px; margin-top:-5px;  margin-left:5px;' id='gq" + i + "_" + s + "'></p>&nbsp;<p style='font-size:12px; font-weight:normal; color:#000; padding:0px; margin-top:-5px; margin-bottom:5px; margin-left:5px;' id='qz" + i + "_" + s + "'></p></td>"
                            $str += "</tr>";		//退票改签标签
                            $('#atb' + i).append($str);
                            $('#seat' + i + '_' + s).append(Seat);
                            $('#code' + i + '_' + s).append(Code);
                            $('#sale' + i + '_' + s).append(sale);
                            $('#price' + i + '_' + s).append(Price);
                            $('#j_money' + i + '_' + s).append(j_Price);
                            $('#viaport' + i + '_' + s).append(ViaPort);
                            $("#tp" + i + "_" + s).text(check_add);
                            $("#gq" + i + "_" + s).text(gaiqi2);
                            $("#qz" + i + "_" + s).text(qianzhuan1);
                            $count = $count + 1;
                            low_price = parseInt($('#price' + i + '_' + s).text());
                            if (lowprice > low_price) {
                                $num_low1 = i;
                                $num_low2 = s;
                                lowprice = low_price;
                            }
                        }//if
                    })//read class

                    if (lowprice != 999999999) {
                        $('#air_' + $num_low1 + '_' + $num_low2).css('display', '');
                        $('#air_' + $num_low1 + '_' + $num_low2).attr('class', 'disp' + $num_low1);
                    }
                    $num_low1 = 0;
                    $num_low2 = 0;
                    lowprice = 999999999;
                    low_price = 0;

                })//read item
                if ($count == 0) {
                    $('#atb' + $count_i).remove();
                    $('#add_ip_air' + $count_i).remove();
                    $('#id_YCL' + $count_i).remove();
                }
                $("#loading").hide();//加载代码
                //插入航班并去掉重复的航班
                $str6 = "";
                $str6 += "<span id='last_span'><input  name='ra1' type='radio'  class='one1' style='vertical-align:middle;'/>&nbsp;<span class='air_sy'>全部航空公司&nbsp;</span></span>"
                $(".a_top12").append($str6);
                var t_table1 = document.getElementById("a_table1");
                var tbody1 = t_table1.getElementsByTagName("tbody");
                var num_t1 = tbody1.length;//得到tbody个数
                for (var i = 0; i < num_t1; i++) {
                    var input_air = $("#span_air" + i).text();
                    if (input_air != '') {
                        for (var j = i - 1; j >= 0; j--) {
                            var input_air1 = $("#span_air" + j).text();
                            if (input_air == input_air1) {
                                $("#add_ip_air" + j).remove();
                            }
                        }
                    }
                }
                //插入航班
                //筛选航空公司
                $(".one").click(function () {
                    if ($(this).attr("checked")) {
                        var air_text = $(this).next().text();//获取span里的航空值
                        $("#a_table1 tbody")
                            .hide()
                            .filter(":contains('" + air_text + "')")
                            .show();
                    }
                    else {
                        location.reload();
                    }
                })
                $(".one1").click(function () {
                    $("#a_table1 tbody")
                        .hide()
                        .filter("*")
                        .show();
                })
                //筛选航空公司
                sortTable2('a_table1', 4); //使所有价格降序
                // xml over
            }//sucess
        })//ajax
    })//document