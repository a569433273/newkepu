<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-财务中心</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <link href="../css/doubleDate.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <!--日历样式-->
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/page1.js"></script>
    <!--财物中心分页效果-->
    <script type="text/javascript" src="../js/doubleDate2.0.js"></script>
    <!--双日期日历-->
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/cont_disp.js"></script>
    <!--点出收起展开折叠-->
    <script type="text/javascript" src="../js/click_hidval.js"></script>
    <!--点击文本框将年-月-日清空--->
    <script type="text/javascript" src="../js/getdate.js"></script>
    <!---获得当前日期以及当前日期+7-->
</head>
<body onload="gotoPage(1,5,1)">
<jsp:include page="../head.jsp"></jsp:include>
<p>&nbsp;</p>
<!--商务资讯-->
<p>&nbsp;</p>
<!--中部-->
<form action="#" method="post" name="">
    <jsp:include page="../persondaohang.jsp"></jsp:include>
        <div class="prs_right">
            <!--财务中心-->
            <div class="prs_rt" id="prsC_3">
                <!--财务头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;财务中心</span></div>
                    <div class="prs_rt1_2" id="pack1_3"><img src="../images/per_hid.jpg" style="margin-top:3px;"
                                                             id="pack_3" onclick="cont_disp(this.id);" alt=""/>&nbsp;
                    </div>
                </div>
                <!--财务头部头部 over-->
                <!--财务内容-->
                <div class="prs_fna" id="pack3">
                    <!--总的金额-->
                    <div class="prs_fna1">
                        <s:iterator value="xunizhanghus">
                        <p><span>账户余额:</span><span class="p_spn"><s:property value="vmoney_number"></s:property></span><span
                                style="margin-left:80px;">消费金额:</span><span class="p_spn"><s:property value="vmoney_totalspend"></s:property></span><span
                                style="margin-left:80px;">受信额度:</span><span class="p_spn"><s:property value="vmoney_cardnum"></s:property></span></p>
                        </s:iterator>
                    </div>
                    <!--总的金额over-->
                    <!--账单明细-->
                    <div class="prs_fna2">
                        <!--账单明细头部-->
                        <div class="prs_fna_1">
                            <div class="p_f_1">&nbsp;账单明细</div>
                            <%--<div class="p_f_2">--%>
                                <%--<div class="pf_21">订单号:</div>--%>
                                <%--<div class="pf_22"><input type="text" name="" style="width:120px; height:15px;"/>&nbsp;--%>
                                <%--</div>--%>
                                <%--<div class="pf_21">订单日期:</div>--%>
                                <%--<div class="pf_22"><input type="text" name="ord_date" id="ord_date"--%>
                                                          <%--style="width:70px; height:15px; color:#545454;"--%>
                                                          <%--class="doubledate" onfocus="click_hidval(this.id)"--%>
                                                          <%--onblur="click1_hidval(this.id)"/>&nbsp;</div>--%>
                                <%--<div class="pf_21">到:</div>--%>
                                <%--<div class="pf_22"><input type="text" name="ord_date1" id="ord_date1"--%>
                                                          <%--style="width:70px; height:15px; color:#545454;"--%>
                                                          <%--class="doubledate" onfocus="clk_hidval(this.id)"--%>
                                                          <%--onblur="clk1_hidval(this.id)"/>&nbsp;</div>--%>
                                <%--<div class="pf_22">&nbsp;<input name="" type="image" src="../images/fina_search.jpg"/>--%>
                                <%--</div>--%>
                            <%--</div>--%>
                        </div>
                        <!--账单明细头部-->
                        <!--账单明细内容-->
                        <div class="prs_fna_2">
                            <table class="prs_fna_tab" id="prs_fna_tab">
                                <tr bgcolor="#eef8fa" style="border:1px solid #dcf7fb;" align="center" height="30">
                                    <td width="15%">订单号</td>
                                    <td width="8%">支付金额</td>
                                    <td width="10%">交易时间</td>
                                    <td width="8%">交付状态</td>
                                    <td width="8%">账户余额</td>
                                    <td width="15%">备注</td>
                                </tr>
                                <s:iterator value="caiwus">
                                    <tr align="center" height="30">
                                        <td width="15%"><s:property value="vmrecord_orderid"></s:property></td>
                                        <td width="8%"><s:property value="vmrecord_number"></s:property></td>
                                        <td width="10%"><s:property value="vmrecord_time"></s:property></td>
                                        <%--<s:if test="vmrecord_type == 0">--%>
                                        <%--<td width="8%">充值</td>--%>
                                        <%--</s:if> <s:elseif test="vmrecord_type == 1">--%>
                                        <%--<td width="8%">支付</td>--%>
                                        <%--</s:elseif><s:else>--%>
                                        <%--<td width="8%">退款</td>--%>
                                        <%--</s:else>--%>
                                        <td width="8%"><s:property value="vmrecord_remark"></s:property></td>
                                        <td width="8%"><s:property value="vmrecord_money"></s:property></td>
                                        <td width="15%"><s:property value="vmrecord_beizhu"></s:property></td>
                                    </tr>
                                </s:iterator>
                            </table>
                        </div>
                        <!--账单明细内容-->
                        <!--分页-->
                        <div class="pg1_all" id="pg1_all"></div>
                        <!--分页 over-->
                    </div>
                </div>
                <!--账单明细 over-->
                <!--财务内容 over-->
            </div>
            <!--财务中心 over-->
        </div>
        <div style="clear:both;"></div>
    </div>
</form>
<!--中部 over-->
<p>&nbsp;</p>
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>
