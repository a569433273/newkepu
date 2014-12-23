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
<jsp:include page="../head.jsp"></jsp:include>
<!--header部分 over-->
<p>&nbsp;</p>
<!--nav-->
<jsp:include page="../daohang.jsp"></jsp:include>
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
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>
