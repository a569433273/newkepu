<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>会议管理--发起会议</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript">
        function Missue_back() {
            history.go(-1);
        }
    </script>
</head>
<body>
<!--header部分 start-->
<div class="total">
    <div class="header">
        <div class="logo"><a href="../index.html"><img src="../images/logo.jpg" alt=""/></a></div>
        <div class="hd_tel"><img src="../images/tel.jpg" alt=""/></div>
        <div class="hd_mark"><a href=""><img src="../images/mark1.jpg" alt=""></a>&nbsp;&nbsp;<a href=""><img
                src="../images/mark2.jpg" alt=""></a></div>
        <div style="clear:both;"></div>
    </div>
</div>
<!--header部分 over-->
<p>&nbsp;</p>
<!--nav-->
<div class="meeting_nav">
    <ul>
        <li><a href="../index.html">首页</a></li>
        <li><a href="../plane/search_air.html">航空订票</a></li>
        <li><a href="index.html">会议管理</a></li>
        <li><a href="">目的地服务</a></li>
        <li><a href="">商务礼品</a></li>
    </ul>
</div>
<!--nav over-->
<p>&nbsp;</p>
<!--中间内容部分-->
<div class="mInti_all">
    <!--详情标题-->
    <div class="mInti_1">
        <p style="font-size:14px;">商务资讯详情</p>
    </div>
    <!--详情标题 over-->
    <s:iterator value="zixundetails">
        <!--应添加内容部分-->
        <div class="Missu_dt1">
            <div class="Missu_dt1_1">
                <!--文字标题-->
                <div class="Missu_dt2">
                    <p><s:property value="zixun_biaoti"></s:property>[<s:property value="zixun_date"></s:property>]</p>
                </div>
                <!--文字标题over-->
                <!--正文-->
                <div class="Missu_dt3">
                    <s:property value="zixun_neirong" escape="false"></s:property>
                </div>
                <!--正文-->
                <!--返回上一页-->
                <div class="Missu_back">
                    <p style="text-align:left;"><img src="../images/issue_back.jpg" style="cursor:pointer;"
                                                     title="返回上一个页面" onclick="Missue_back();" alt=""/></p>
                </div>
                <!--返回上一页 over-->
            </div>
        </div>
        <!--应添加内容部分-->
    </s:iterator>
</div>
<!--中间内容部分over-->
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
