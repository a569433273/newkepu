//点击订单号时出现详细信息
function ord_dmsg() {
    document.getElementById("prs_Hordmg").style.display = 'none';
    document.getElementById("prs_ordmg1").innerHTML = "";
    //将订单详细信息写入
    var str = "";
    var str1 = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var str5 = "";
    var str6 = "";
    var str7 = "";
    var str8 = "";
    var str9 = "";
    var str10 = "";
    var str11 = "";
    var str13 = "";
    var str14 = "";
    var str15 = "";
    var str16 = "";
    str = "<div class='prs_ordmg1_1'><span>订单信息</span></div>";//订单头部
    $("#prs_ordmg1").append(str);
    str1 = "<div class='prs_ordmg1_2' id='prs_ordmg1_2'><p><span>订单金额:</span><span style='font-size:14px; color:#f00;'>1000</span><span style='margin-left:60px;'>订单状态：</span><span style='font-size:14px; color:#f00;'>已出票</span><span style='margin-left:60px;'>PNR:</span><span  style='font-size:14px; color:#f00;'>JTVXTD</span></p></div>";
    $("#prs_ordmg1").append(str1);//将头部2插入
    str2 = "<div class='prs_ordmg1_3' id='prs_ordmg1_3'></div>";//机票信息加入处
    $("#prs_ordmg1").append(str2);
    str3 = "<div class='prs_ordmg1_31'>&nbsp;机票信息</div>";
    $("#prs_ordmg1_3").append(str3);
    str4 = "<div class='prs_ordmg1_32' id='prs_ordmg1_32'></div>";//机票信息插入table
    $("#prs_ordmg1_3").append(str4);
    str5 = "<table class='prs_ordm_tab1' id='prs_ordm_tab1'></table>";
    $("#prs_ordmg1_32").append(str5);
    str6 = "<tr bgcolor='#eef8fa' style='border:1px solid #dcf7fb;' align='center'  height='30'><td width='12%'>航空公司</td><td width='8%' >航班号</td><td width='5%'>舱位</td><td width='13%' >出发城市</td><td width='13%' >抵达城市</td><td width='10%'>出发时间</td><td width='10%'>抵达时间</td><td width='5%' >机型</td><td width='8%'>返点</td><td width='8%' >机票款</td><td width='10%'>退改签</td></tr>";
    str6 += "<tr  align='center'  height='50'><td width='12%'>中国国际航空</td><td width='8%' >CA601</td><td width='5%'>Y</td><td width='13%' >北京首都机场</td> <td width='13%' >沈阳机场机场</td><td width='10%'>2014-01-02<br/>06:20</td><td width='10%'>2014-01-02<br/>09:20</td><td width='5%' >32A</td><td width='8%'>3.0%</td><td width='8%' >1000</td><td width='10%' style='cursor:pointer; color:#0065ce;'  id='ord_detail1' onmouseover='disp_ordmg()' onmouseout='hid_ordmg()'>查看详情</td></tr>";
    //退票改签写入处
    str6 += "<tr><td colspan='11' class='ord_detail2' id='ord_detail2'><p style='text-align:left; color:#545454; font-size:12px; margin:5px;'>允许签转;免费改签;收取10%退票手续费</p></td></tr>";
    //退票改签写入处 oveer
    $("#prs_ordm_tab1").append(str6);
    str7 = "<div class='prs_ordmg1_3' id='prs_ordmg1_3_1'></div>";//乘机人信息加入处
    $("#prs_ordmg1").append(str7);
    str8 = "<div class='prs_ordmg1_31'>&nbsp;乘机人信息</div>";
    $("#prs_ordmg1_3_1").append(str8);
    str9 = "<div class='prs_ordmg1_32' id='prs_ordmg1_32_1'></div>";//乘机人信息插入table
    $("#prs_ordmg1_3_1").append(str9);
    str10 = "<table class='prs_ordm_tab1' id='prs_ordm_tab1_1'></table>";
    $("#prs_ordmg1_32_1").append(str10);
    str11 = "<tr bgcolor='#eef8fa' style='border:1px solid #dcf7fb;' align='center'  height='30'><td width='10%'>姓名</td><td width='8%' >类型</td><td width='8%'>证件类型</td><td width='15%' >证件号码</td><td width='8%' >航意险</td><td width='15%'>航意险保单号</td><td width='8%'>意外险</td><td width='15%' >意外险保单号</td><td width='15%'>票号</td></tr>";
    str11 += "<tr height='50'><td width='10%'>李一一</td><td width='8%' >成人</td><td width='8%'>身份证</td><td width='15%' >2130929199021452581</td><td width='8%' >1份</td><td width='15%'>AS2014061145179</td><td width='8%'>1份</td><td width='15%' >AS2014061145179</td><td width='15%'>AS2014061145179</td></tr>";
    $("#prs_ordm_tab1_1").append(str11);
    //联系人
    str12 = "<div class='prs_ordmg1_3' id='prs_ordmg1_3_2'></div>";//乘机人信息加入处
    $("#prs_ordmg1").append(str12);
    str13 = "<div class='prs_ordmg1_31'>&nbsp;联系人信息</div>";
    $("#prs_ordmg1_3_2").append(str13);
    str14 = "<div class='prs_ordmg1_32' id='prs_ordmg1_32_2'></div>";//乘机人信息插入table
    $("#prs_ordmg1_3_2").append(str14);
    str15 = "<table class='prs_ordm_tab1' id='prs_ordm_tab1_2'></table>";
    $("#prs_ordmg1_32_2").append(str15);
    str16 = "<tr bgcolor='#eef8fa' style='border:1px solid #dcf7fb;' align='center'  height='30'><td width='10%'>姓名</td><td width='13%' >电话</td><td width='13%'>邮箱</td><td width='50%' ></td></tr>";
    str16 += "<tr align='center'  height='50'><td width='10%'>李一一</td><td width='13%' >18712668855</td><td width='13%'>15875588@qq.com</td><td width='50%' ></td></tr>";
    $("#prs_ordm_tab1_2").append(str16);
    str17 = "<div class='prs_ordmg1_3'><p style='font-size:14px;'>&nbsp;&nbsp;<span style='border-bottom:1px solid #0066cb; padding-bottom:1px;' onclick='ord_dismsg()'>返回</span></p></div>";
    $("#prs_ordmg1").append(str17);
}
//返回
function ord_dismsg() {
    document.getElementById("prs_Hordmg").style.display = 'block';
    document.getElementById("prs_ordmg1").innerHTML = "";
    gotoPage2(1, 5, 1);
}
//退改签详情onmouseover
function disp_ordmg() {
    var x = $("#ord_detail1").offset().top;
    var y = $("#ord_detail1").offset().left; //得到位置
    document.getElementById("ord_detail2").style.left = y - 150 + 'px';
    document.getElementById("ord_detail2").style.top = x + 35 + 'px';
    document.getElementById("ord_detail2").style.display = "block"; 	//设置位置并将其显示
}
//退改签详情onmouseout	
function hid_ordmg() {
    document.getElementById("ord_detail2").style.display = "none";
}