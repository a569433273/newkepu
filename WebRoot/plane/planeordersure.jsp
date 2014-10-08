<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>预定支付</title>
    <link href="../css/pay_air.css" rel="stylesheet" type="text/css"/>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
</head>

<body>
<!--header部分 start-->
<div class="total">
    <div class="header">
        <div class="logo"><a href="../index.jsp"><img src="../images/logo.jpg"/></a></div>
        <div class="hd_tel"><img src="../images/tel.jpg"/></div>
        <div class="hd_mark"><a href=""><img src="../images/mark1.jpg"></a>&nbsp;&nbsp;<a href=""><img
                src="../images/mark2.jpg"></a></div>
        <div style="clear:both;"></div>
    </div>
</div>
<!--header部分 over-->
<p>&nbsp;</p>
<!--订单头部-->
<div class="py_top">
    <div class="py_t1"><span>确认并支付</span></div>
    <div class="py_t2"><img src="../images/py_tp2.jpg"/></div>
    <div style="clear:both;"></div>
</div>
<!--订单头部over-->
<!--订单信息头部-->
<div class="py_gds">
    <div class="py_gds1"></div>
    <div class="py_gds2"><span>订单信息</span></div>
    <div style="clear:both;"></div>
</div>
<!--订单信息头部over-->
<!--订单总额-->
<div class="py_my">
    <div class="py_my1">
        <div class="py_my_1">
            <span style="margin-left:30px;">订单号:</span><span class="py_sp1"><%=request.getAttribute("order_id")%></span><span
                style="margin-left:60px;">订单状态：</span><span class="py_sp3">请支付</span><span style="margin-left:60px;">待支付金额：</span><span
                class="py_sp2">¥<%=request.getAttribute("order_price")%></span>
        </div>
        <div class="py_my_2">
            <div class="py_my_21"><img src="../images/warn.jpg"/></div>
            <div class="py_my_22"><span>航班价格变动频繁，请您仔细核对订单信息后及时付款以免座位被取消或价格发生变化。</span></div>
        </div>
        <div style="clear:both;"></div>
    </div>
</div>
<!--订单总额 over-->
<!--航班信息-->
<div class="py_amsg">
    <div class="py_amsg1">
        <div class="py_amsg_1"><span>&nbsp;航班信息</span></div>
        <div class="py_amsg_2">
            <table class="py_table">
                <tr bgcolor="#e5fafb" align="center" height="30">
                    <td width="13%">航空公司</td>
                    <td width="13%">起飞时间</td>
                    <td width="13%">起飞地点</td>
                    <td width="13%">降落时间</td>
                    <td width="13%">降落地点</td>
                    <td width="5%">经停</td>
                </tr>
                <tr height="50" align="center">
                    <td width="13%"><%=request.getAttribute("flight_company_cn")%></td>
                    <td width="13%"><%=request.getAttribute("Tkoff_Time")%></td>
                    <td width="13%"><%=request.getAttribute("flight_from")%></td>
                    <td width="5%"><%=request.getAttribute("Land_Time")%></td>
                    <td width="13%"><%=request.getAttribute("flight_arrival")%></td>
                    <td width="10%"><%=request.getAttribute("viaport")%></td>
                </tr>
            </table>
        </div>
    </div>
</div>
<!--航班信息 over-->
<!--乘机人信息-->
<div class="py_amsg">
    <div class="py_amsg1">
        <div class="py_amsg_1"><span>&nbsp;乘机人信息</span></div>
        <div class="py_amsg_2">
            <table class="py_table">
                <tr bgcolor="#e5fafb" align="center" height="30">
                    <td width="8%">姓名</td>
                    <td width="8%">类型</td>
                    <td width="13%">证件号</td>
                    <td width="8%">舱位</td>
                    <td width="12%">净价</td>
                    <td width="12%">机建/燃油</td>
                    <td width="12%">航意险</td>
                    <td width="12%"> 延误险</td>
                    <td width="10%">订单金额</td>
                </tr>
                <s:iterator value="passengers">
                <tr height="50" align="center">
                    <td width="8%"><s:property value="passenger_name" /> </td>
                    <s:if test="passenger_type == 0">
                    <td width="8%">成人</td>
                    </s:if>
                    <s:else><td width="8%">儿童</td></s:else>
                    <td width="13%"><s:property value="passenger_papernum" /> <br/><s:property value="passenger_sex" />&nbsp;<s:property value="passenger_birth" /></td>
                    <td width="8%"><s:property value="passenger_gocw" /> </td>
                    <td width="12%"><s:property value="passenger_price" /> </td>
                    <td width="12%"><s:property value="passenger_jijian" />/<s:property value="passenger_ranyou" /> </td>
                    <td width="12%">30/份 X <span style="font-size:12px; font-weight:normal;"><s:property value="passenger_hangyixian" /> </span>份</td>
                    <td width="12%">20/份 X <span style="font-size:12px; font-weight:normal;"><s:property value="passenger_yanwuxian" /> </span>份</td>
                    <td width="10%"><span style="font-weigth:bold; color:#e20909; font-size:14px;"><s:property value="passenger_goxiaofei" /> </span></td>
                </tr>
                </s:iterator>
            </table>
        </div>
    </div>
</div>
<!--乘机人信息 over-->
<!--联系人信息-->
<div class="py_amsg">
    <div class="py_amsg1">
        <div class="py_amsg_1"><span>&nbsp;联系人信息</span></div>
        <div class="py_amsg_2">
            <table class="py_table">
                <tr bgcolor="#e5fafb" align="center" height="30">
                    <td width="8%">姓名</td>
                    <td width="10%">联系电话</td>
                    <td width="10%">邮箱</td>
                    <td width="45%"></td>
                </tr>
                <s:iterator value="orders" >
                <tr height="50" align="center">
                    <td width="8%"><s:property value="flight_lxr" /></td>
                    <td width="10%"><s:property value="flight_lxrdh" /></td>
                    <td width="10%"><s:property value="flight_lxryx" /></td>
                    <td width="45%"></td>
                </tr>
                </s:iterator>
            </table>
        </div>
    </div>
</div>
<!--联系人信息 over-->
<!--确认支付-->
<div class="py_pmsg">
    <div class="py_pmsg1">
        <div class="py_pmsg11"><a href=""><img src="../images/pay_submit.jpg" style="margin-top:20px;"/></a></div>
    </div>
</div>
<!--确认支付 over-->
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
