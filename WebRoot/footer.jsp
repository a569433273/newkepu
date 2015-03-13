<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="css/index.css" rel="stylesheet" type="text/css" />
    <link href="css/doubleDate.css" rel="stylesheet" type="text/css" /><!--日历样式-->
    <script src="js/jquery-1.4.3.min.js" type="text/javascript"></script>
    <script src="js/chage_arrive.js" type="text/javascript"></script><!--切换往返效果 点击出日历-->
    <script src="js/doubleDate2.0.js" type="text/javascript"></script><!--双日期日历-->
    <script src="js/test.js" type="text/javascript"></script><!--机场-->
    <title>nestpu首页</title>
</head>
<body onload="patch_cntlen()">
<form action="" name="" method="post">
    <div class="idx_footer">
        <div class="idx_footer1">
            <div class="idx_footer1_1">
                <div class="footer11_1">
                    <ul>
                        <li><a href="aboutkepu/aboutus.jsp">关于窠浦</a></li>
                        <li class="fter_li1">|</li>
                        <li><a href="aboutkepu/contactus.jsp">联系我们</a></li>
                        <li class="fter_li1">|</li>
                        <li><a href="aboutkepu/falvshengming.jsp">法律声明</a></li>
                        <li class="fter_li1">|</li>
                        <li><a href="aboutkepu/yinsitiaokuan.jsp">隐私条款</a></li>
                        <li class="fter_li1">|</li>
                        <li><a href="aboutkepu/joinus.jsp">加入窠浦</a></li>
                        <li class="fter_li1">|</li>
                        <li><a href="aboutkepu/guanggaozhaoshang.jsp">广告服务</a></li>
                    </ul>
                </div>
                <div class="footer11_1">
                    <h1 class="ftr_h1">地址：北京市东城区朝阳门银河SOHO中心A座10511室  电话：010-64175566  邮政编码：100010</h1>
                    <h1 class="ftr_h1"><span>京ICP备11013456号</span><span style="margin-left:25px;">京ICP证110540号</span></h1>
                </div>
            </div>
            <div class="idx_footer1_2">
                <img src="images/nestpu_code.jpg" alt=""/>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    <!--footer over-->
</form>
<div id="test" class="s_3"></div> <!--机场数据-->
</body>
</html>