<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-订单详情</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/order_msg.js"></script>
    <!--订单号详细信息-->
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
</head>
<body>
<!--header部分 start-->
<div class="total">
    <div class="header">
        <div class="logo"><a href="../index.jsp"><img src="../images/logo.jpg" alt=""/></a></div>
        <div class="hd_tel"><img src="../images/tel.jpg" alt=""/></div>
        <div class="hd_mark"><a href=""><img src="../images/mark1.jpg" alt=""></a>&nbsp;&nbsp;<a href=""><img
                src="../images/mark2.jpg" alt=""></a></div>
        <div style="clear:both;"></div>
    </div>
</div>
<!--header部分 over-->
<p>&nbsp;</p>
<!--中部-->
<form action="#" method="post" name="">
    <div class="prs_mid">
        <!--左部-->
        <div class="prs_left">
            <div class="prs_le1">
                <div class="prs_le_1">
                    <img src="../images/cat.jpg" alt=""/>
                </div>
                <div class="prs_le_2">
                    <div class="prs_le_21"><input name="" type="file" class="ipt_file"/></div>
                </div>
                <!--上传头像-->
                <!--菜单部分-->
                <div class="prs_le_3">
                    <ul>
                        <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="personmessage.action">我的资料</a>
                        </li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="persontravller.action">常用乘机人</a>
                        </li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="persontcaiwu.action">财务中心</a>
                        </li>
                        <li class="prs_clk" id="prs_4" onclick="prs_show(this.id)"><a class="li_aClk"
                                                                                      href="personorder.actoonl">订单管理</a>
                        </li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="persontmyflight.action">我的航程</a>
                        </li>
                        <li class="prs_1" id="prs_6" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_meeting.html">我的会议</a>
                        </li>
                    </ul>
                </div>
                <!--菜单部分 is over-->
            </div>
        </div>
        <!--左部 over-->
        <div class="prs_right">
            <!--订单管理-->
            <div class="prs_rt" id="prsC_4">
                <!--订单头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;机票订单详情</span></div>
                </div>
                <!--订单头部 over-->
                <s:iterator value="ordersdetail">
                <!--订单管理内容-->
                <div class="prs_fna" id="pack4">
                    <!--查看详细内容部分-->
                    <div class="prs_ordmg1" id="prs_ordmg1">
                        <!--订单头部-->
                        <div class="prs_ordmg1_1"><span>订单信息</span></div>
                        <!--订单头部 over-->
                        <!--订单金额-->
                        <div class="prs_ordmg1_2" id="prs_ordmg1_2">
                            <p><span>订单金额:</span><span style="font-size:14px; color:#f00;"><s:property
                                    value="order_price"></s:property></span><span
                                    style="margin-left:60px;">订单状态：</span><span
                                    style="font-size:14px; color:#f00;"><s:property
                                    value="back_tpm"></s:property></span><span
                                    style="margin-left:60px;">PNR:</span><span
                                    style="font-size:14px; color:#f00;"><s:property
                                    value="peoplePNR"></s:property></span>
                            </p>
                        </div>
                        <!--订单金额 over-->
                        <!--机票信息-->
                        <div class="prs_ordmg1_3" id="prs_ordmg1_3">
                            <div class="prs_ordmg1_31">&nbsp;机票信息</div>
                            <div class="prs_ordmg1_32" id="prs_ordmg1_32">
                                <table class="prs_ordm_tab1" id="prs_ordm_tab1">
                                    <tr bgcolor="#eef8fa" style="border:1px solid #dcf7fb;" align="center" height="30">
                                        <td width="12%">航空公司</td>
                                        <td width="8%">航班号</td>
                                        <td width="5%">舱位</td>
                                        <td width="13%">出发城市</td>
                                        <td width="13%">抵达城市</td>
                                        <td width="10%">出发时间</td>
                                        <td width="10%">抵达时间</td>
                                        <td width="5%">机型</td>
                                        <td width="8%">返点</td>
                                        <td width="8%">机票款</td>
                                        <td width="10%">退改签</td>
                                    </tr>
                                    <tr align="center" height="50">
                                        <td width="12%"><s:property value="flight_tpm"></s:property></td>
                                        <td width="8%"><s:property value="flight_company"></s:property><s:property
                                                value="flight_id"></s:property></td>
                                        <td width="5%"><s:property value="flight_position"></s:property></td>
                                        <td width="13%"><s:property value="flight_from"></s:property></td>
                                        <td width="13%"><s:property value="flight_arrival"></s:property></td>
                                        <td width="10%"><s:property
                                                value="flight_from_date"></s:property><br/><s:property
                                                value="flight_from_time"></s:property></td>
                                        <td width="10%"><s:property
                                                value="flight_arrival_date"></s:property><br/><s:property
                                                value="flight_arrival_time"></s:property></td>
                                        <td width="5%"><s:property value="flight_type"></s:property></td>
                                        <td width="8%">3.0%</td>
                                        <td width="8%"><s:property value="order_price"></s:property></td>
                                        <td width="10%" style="cursor:pointer; color:#0065ce;" id="ord_detail1"
                                            onmouseover="disp_ordmg()" onmouseout="hid_ordmg()">查看详情
                                        </td>
                                    </tr>
                                    <!--退票改签插入处-->
                                    <tr>
                                        <td colspan="11" class="ord_detail2" id="ord_detail2">
                                            <p style="text-align:left; color:#545454; font-size:12px; margin:5px;">
                                                允许签转;免费改签;收取10%退票手续费
                                            </p>
                                        </td>
                                    </tr>
                                    <!--退票改签插入处 over-->
                                </table>
                            </div>
                        </div>
                        <!--机票信息 over-->
                        <!--乘机人信息-->
                        <div class="prs_ordmg1_3" id="prs_ordmg1_3">
                            <div class="prs_ordmg1_31">&nbsp;机票信息</div>
                            <div class="prs_ordmg1_32" id="prs_ordmg1_32">
                                <table class="prs_ordm_tab1" id="prs_ordm_tab1">
                                    <tr bgcolor="#eef8fa" style="border:1px solid #dcf7fb;" align="center" height="30">
                                        <td width="10%">姓名</td>
                                        <td width="8%">类型</td>
                                        <td width="8%">证件类型</td>
                                        <td width="15%">证件号码</td>
                                        <td width="8%">航意险</td>
                                        <td width="15%">航意险保单号</td>
                                        <td width="8%">意外险</td>
                                        <td width="15%">意外险保单号</td>
                                        <td width="15%">票号</td>
                                    </tr>
                                    <s:iterator value="passengers">
                                        <tr align="center" height="50">
                                            <td width="10%"><s:property value="passenger_name"></s:property></td>
                                            <s:if test="passenger_type == 0">
                                                <td width="8%">成人</td>
                                            </s:if>
                                            <s:else>
                                                <td width="8%">儿童</td>
                                            </s:else>
                                            <s:if test="passenger_paperstype == 0">
                                                <td width="8%">身份证</td>
                                            </s:if>
                                            <s:elseif test="passenger_paperstype == 1">
                                                <td width="8%">护照</td>
                                            </s:elseif>
                                            <s:elseif test="passenger_paperstype == 4">
                                                <td width="8%">其他</td>
                                            </s:elseif>
                                            <td width="15%"><s:property value="passenger_papernum"></s:property></td>
                                            <td width="8%"><s:property value="passenger_hangyixian"></s:property>份</td>
                                            <td width="15%"><s:property
                                                    value="passenger_hangyixianhao"></s:property></td>
                                            <td width="8%"><s:property value="passenger_yanwuxian"></s:property>份</td>
                                            <td width="15%"><s:property
                                                    value="passenger_yanwuxianhao"></s:property></td>
                                            <td width="15%"><s:property value="passenger_ticketnum"></s:property></td>
                                        </tr>
                                    </s:iterator>
                                </table>
                            </div>
                        </div>
                        <!--乘机人信息 over-->
                        <!--联系人信息-->
                        <div class="prs_ordmg1_3" id="prs_ordmg1_3">
                            <div class="prs_ordmg1_31">&nbsp;机票信息</div>
                            <div class="prs_ordmg1_32" id="prs_ordmg1_32">
                                <table class="prs_ordm_tab1" id="prs_ordm_tab1">
                                    <tr bgcolor="#eef8fa" style="border:1px solid #dcf7fb;" align="center" height="30">
                                        <td width="10%">姓名</td>
                                        <td width="13%">电话</td>
                                        <td width="13%">邮箱</td>
                                        <td width="50%"></td>
                                    </tr>
                                    <tr align="center" height="50">
                                        <td width="10%"><s:property value="flight_lxr"></s:property></td>
                                        <td width="13%"><s:property value="flight_lxrdh"></s:property></td>
                                        <td width="13%"><s:property value="flight_lxryx"></s:property></td>
                                        <td width="50%"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <!--联系人信息 over-->
                    </div>
                    <!--查看详细内容部分over-->
                </div>
                <!--订单管理内容 over-->
            </div>
            <!--订单管理 over-->
            </s:iterator>
        </div>
        <div style="clear:both;"></div>
    </div>
</form>
<!--中部 over-->
<p>&nbsp;</p>
<!--foodter-->
<div class="total1">
    <div class="sear_footer">
        <div class="sear_footer1" style="margin-left:50px;">
            <p><a href="">关于窠浦</a></p>

            <p><a href="">法律声明</a></p>

            <p><a href="">意见反馈</a></p>
        </div>
        <div class="sear_footer1" style="margin-left:60px;">
            <p><a href="">联系我们</a></p>

            <p><a href="">隐私条款</a></p>

            <p><a href="">企业QQ:4006205588</a></p>
        </div>
        <div class="sear_footer1" style="margin-left:15px;">
            <p><a href="">加入窠浦</a></p>

            <p><a href="">广告服务</a></p>
        </div>
        <div class="sear_footer1" style="margin-left:150px;">
            <p>窠浦（北京）商务服务有限公司 Nestpu(Beijing) Business Service Co.Ltd.版权所有</p>

            <p>地址:北京市东城区朝阳门银河SOHO中心A座10511室 邮政编码：100010</p>

            <p>京ICP备11016456号 京ICP证110540号</p>
        </div>
    </div>
</div>
<!--footer-->
</body>
</html>
