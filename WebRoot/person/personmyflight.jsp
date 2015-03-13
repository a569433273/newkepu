<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-我的航程</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/cont_disp.js"></script>
    <!--点出收起展开折叠-->
    <script type="text/javascript" src="../js/page3.js"></script>
    <!--我的航程分页效果-->
</head>
<body onload="gotoPage3(1,5,1)">
<!--头-->
<div class="header">
    <iframe src="header.jsp" width="985px" height="78px" frameborder="0" scrolling="no"></iframe>
</div>
<!--头over-->
<p>&nbsp;</p>
<!--中部-->
<form action="#" method="post" name="">
   <jsp:include page="../persondaohang.jsp"></jsp:include>
        <!--左部 over-->
        <div class="prs_right">
            <!--我的航程-->
            <div class="prs_rt" id="prsC_5">
                <!--我的航程头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;我的航程</span></div>
                    <div class="prs_rt1_2" id="pack1_5"><img src="../images/per_hid.jpg" style="margin-top:3px;"
                                                             id="pack_5" onclick="cont_disp(this.id);" alt=""/>&nbsp;
                    </div>
                </div>
                <!--我的航程 over-->
                <!--我的航程内容-->
                <div class="prs_fna" id="pack5">
                    <div class="prs_voyage">
                        <!--航程头部-->
                        <div class="prs_voyage1">
                            <s:iterator value="zongfei" id="zongfeixing" status="status">
                                <s:if test="#status.index == 0">
                            <p>总飞行公里数：<span style="color:#f00; font-size:14px; font-weight:bold"><s:property></s:property></span>公里
                                </s:if>
                                <s:if test="#status.index == 1">
                                    <span style="margin-left:40px;">总飞行时长<span
                                        style="color:#f00; font-size:14px; font-weight:bold"><s:property></s:property></span>小时
                                </s:if>
                                    <s:if test="#status.index == 2">
                                        <span style="color:#f00; font-size:14px; font-weight:bold"><s:property></s:property></span>分钟</span></p>
                                    </s:if>
                            </s:iterator>
                        </div>
                        <!--航程头部 over-->
                        <!--航程信息-->
                        <div class="prs_voyage2">
                            <div class="prs_voy2_1">&nbsp;航程信息</div>
                            <!--航程内容-->
                            <div class="prs_voy2_2">
                                <table class="prs_voy2_tab" id="prs_voy2_tab">
                                    <tr bgcolor="#dffbfb" style="border:1px solid #dcf7fb;" align="center" height="30">
                                        <td width="15%">航空公司</td>
                                        <td width="15%">航班号</td>
                                        <td width="15%">起飞地点</td>
                                        <td width="15%">降落地点</td>
                                        <td width="13%">起飞时间</td>
                                    </tr>
                                    <s:iterator value="myflights">
                                        <tr align="center" height="50">
                                            <td width="15%"><s:property value="myflight_company"></s:property></td>
                                            <td width="15%"><s:property value="myflight_no"></s:property></td>
                                            <td width="15%"><s:property value="myflight_from"></s:property></td>
                                            <td width="15%"><s:property value="myflight_arrivate"></s:property></td>
                                            <td width="13%"><s:property value="myflight_from_date"></s:property><br/><s:property value="myflight_from_time"></s:property></td>
                                        </tr>
                                    </s:iterator>
                                </table>
                            </div>
                            <!--航程内容 over-->
                            <!--分页效果-->
                            <div class="pg3_all" id="pg3_all"></div>
                            <!--分页效果 over-->
                        </div>
                        <!--航程信息over-->
                    </div>
                </div>
                <!--我的航程内容 over-->
            </div>
            <!--我的航程 over-->
        </div>
        <div style="clear:both;"></div>
    </div>
</form>
<!--footer-->
<div style="widdth:985px; height:45px; overflow:hidden;"></div>
<div class="footer">
    <iframe src="../footer.jsp" width="100%" height="125px" frameborder="0" scrolling="no"></iframe>
</div>
<!--footer over-->
</body>
</html>
