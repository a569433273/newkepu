<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-订单管理</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <link href="../css/doubleDate.css" rel="stylesheet" type="text/css"/>
    <!--日历样式-->
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/page2.js"></script>
    <!--订单管理分页-->
    <script type="text/javascript" src="../js/doubleDate2.0.js"></script>
    <!--双日期日历-->
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/click_hidval.js"></script>
    <!--点击文本框将年-月-日清空--->
    <script type="text/javascript" src="../js/getdate.js"></script>
    <!---获得当前日期以及当前日期+7-->
</head>
<body onload="gotoPage2(1,5,1)">
<jsp:include page="../head.jsp"></jsp:include>
<p>&nbsp;</p>
<!--中部-->
<form action="#" method="post" name="">
    <jsp:include page="../persondaohang.jsp"></jsp:include>
        <!--左部 over-->
        <div class="prs_right">
            <!--订单管理-->
            <div class="prs_rt" id="prsC_4">
                <!--订单头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;机票订单</span></div>
                </div>
                <!--订单头部 over-->
                <!--订单管理内容-->
                <div class="prs_fna" id="pack4">
                    <!--订单部分-->
                    <div class="prs_ordmg" id="prs_Hordmg">
                        <!--搜索部分-->
                        <%--<div class="ord1">--%>
                            <%--<div class="ord_1">--%>
                                <%--<div class="ord1_1">订单号：</div>--%>
                                <%--<div class="ord1_2"><input type="text" name="aaaa" style="width:120px;"/>&nbsp;</div>--%>
                                <%--<div class="ord1_1">预定日期：</div>--%>
                                <%--<div class="ord1_2"><input type="text" name="res_date" id="res_date"--%>
                                                           <%--style="width:80px; color:#545454" class="doubledate"--%>
                                                           <%--onfocus="click_hidval(this.id)"--%>
                                                           <%--onblur="click1_hidval(this.id)"/>&nbsp;</div>--%>
                                <%--<div class="ord1_1">到&nbsp;</div>--%>
                                <%--<div class="ord1_2"><input type="text" name="res_date1" id="res_date1"--%>
                                                           <%--style="width:80px; color:#545454" class="doubledate"--%>
                                                           <%--onfocus="clk_hidval(this.id)" onblur="clk1_hidval(this.id)"/>&nbsp;--%>
                                <%--</div>--%>
                                <%--<div class="ord1_1">类型：</div>--%>
                                <%--<div class="ord1_2"><select name="">--%>
                                    <%--<option>单程</option>--%>
                                    <%--<option>往返</option>--%>
                                <%--</select>&nbsp;</div>--%>
                                <%--<div class="ord1_1">状态：</div>--%>
                                <%--<div class="ord1_2">--%>
                                    <%--<select name="">--%>
                                        <%--<option value="">全部</option>--%>
                                        <%--<option value="1">未确认</option>--%>
                                        <%--<option value="3">已废弃</option>--%>
                                        <%--<option value="7">已收款/待出票</option>--%>
                                        <%--<option value="9">申请退票</option>--%>
                                        <%--<option value="11">已退票/待退款</option>--%>
                                        <%--<option value="13">已退款</option>--%>
                                        <%--<option value="17">已出票</option>--%>
                                    <%--</select>&nbsp;--%>
                                <%--</div>--%>
                                <%--<div class="ord1_2"><input name="" type="image" src="../images/ord_search.jpg"/>&nbsp;--%>
                                <%--</div>--%>
                            <%--</div>--%>
                        <%--</div>--%>
                        <!--搜索部分 over-->
                        <!--内容部分-->
                        <div class="ord2">
                            <!--内容头部-->
                            <div class="ord2_1">
                                <div class="left">&nbsp;订单明细</div>
                                <div class="right"><a href="">退票</a>&nbsp;<a href="">订单废弃</a>&nbsp;<a href="">订单取消</a>&nbsp;
                                </div>
                            </div>
                            <!--内容头部over-->
                            <!--内容机票部分-->
                            <div class="ord2_2">
                                <table class="prs_ordm_tab" id="ordm_tab">
                                    <tr bgcolor="#dffbfb" style="border:1px solid #dcf7fb;" align="center" height="30">
                                        <td width="5%">选择</td>
                                        <td width="15%">订单号</td>
                                        <td width="5%">类型</td>
                                        <td width="8%">航空公司</td>
                                        <td width="13%">航线</td>
                                        <td width="10%">航班时间</td>
                                        <td width="8%">航班号</td>
                                        <td width="8%">订单金额</td>
                                        <td width="8%">状态</td>
                                        <td width="10%">预定时间</td>
                                    </tr>
                                    <s:iterator value="orders">
                                        <tr align="center" height="60">
                                            <td width="5%"><input name="ord_sl" type="radio" value=""/></td>
                                            <td width="15%" style="cursor:pointer;" id="ord_mg1" onclick="ord_dmsg()">
                                                <span class="s_pcb"><a
                                                        href="personorderdetail.action?theorder=<s:property value='order_id'></s:property>"><s:property
                                                        value="order_id"></s:property></a></span></td>
                                            <td width="5%" id="ord_mg1_ty">单程</td>
                                            <td width="8%" id="ord_mg1_anm"><s:property
                                                    value="flight_tpm"></s:property></td>
                                            <td width="13%" id="ord_mg1_arl"><s:property
                                                    value="flight_from"></s:property><br/> 到 <br/><s:property
                                                    value="flight_arrival"></s:property></td>
                                            <td width="10%" id="ord_mg1_art"><s:property
                                                    value="flight_from_date"></s:property><s:property
                                                    value="flight_from_time"></s:property></td>
                                            <td width="8%" id="ord_mg1_arno"><s:property
                                                    value="flight_company"></s:property><s:property
                                                    value="flight_id"></s:property></td>
                                            <td width="8%" id="ord_mg1_artl"><s:property
                                                    value="order_price"></s:property></td>
                                            <td width="8%" id="ord_mg1_arst"><s:property
                                                    value="back_tpm"></s:property></td>
                                            <td width="10%" id="ord_mg1_artk"><s:property
                                                    value="order_time"></s:property></td>
                                        </tr>
                                    </s:iterator>
                                </table>
                            </div>
                            <!--内容机票部分 over-->
                        </div>
                        <!--分页-->
                        <div class="pg2_all" id="pg2_all"></div>
                        <!--分页 over-->
                        <!--内容部分 over-->
                    </div>
                    <!--订单部分 over-->
                </div>
                <!--订单管理内容 over-->
            </div>
            <!--订单管理 over-->
        </div>
        <div style="clear:both;"></div>
    </div>
</form>
<!--中部 over-->
<p>&nbsp;</p>
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>