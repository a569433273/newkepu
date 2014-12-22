<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>会议管理--议题日程</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css" />
    <link href="../css/meeting.css" rel="stylesheet" type="text/css" />
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css" />
    <script src="../js/jquery-1.6.4.js"></script>
    <script src="../js/prs_show.js"></script><!--点击左部右部出现内容-->
    <script src="../js/mIssue_hover.js"></script><!--鼠标划过换颜色-->
    <script src="../js/missue_page.js"></script><!--分页效果以及省略号效果-->
</head>
<body onload="goPage(1,3,1)">
<!--header部分 start-->
<div class="total">
    <div class="header">
        <div class="logo"><a href="../index.html"><img src="../images/logo.jpg" /></a></div>
        <div class="hd_tel"><img src="../images/tel.jpg"/></div>
        <div class="hd_mark"><a href=""><img src="../images/mark1.jpg"></a>&nbsp;&nbsp;<a href=""><img src="../images/mark2.jpg"></a></div>
        <div style="clear:both;"></div>
    </div>
</div>
<!--header部分 over-->
<p>&nbsp;</p>
<!--商务资讯-->
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
<!--中间内容-->
<form action="#" method="post" name="">
    <div class="prs_mid">
        <!--左部-->
        <div class="prs_left">
            <div class="prs_le1">
                <!--菜单部分-->
                <div class="prs_le_3">
                    <ul>
                        <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk" href="meeting_detail.html">基本信息</a></li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk" href="meeting_comm.html">商务资讯</a></li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk" href="meeting_part.html">参会人员</a></li>
                        <li class="prs_clk"  id="prs_2" onclick="prs_show(this.id)"><a class="li_aClk" href="#">议题日程</a></li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk" href="meeting_photo.html">会议照片</a></li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk" href="meeting_notice.html">通知</a></li>
                    </ul>
                </div>
                <!--菜单部分 is over-->
            </div>
        </div>
        <!--左部 over-->
        <!--右部-->
        <div class="mComm_Cframe">
            <iframe  src="../ueditor/index.html" id="frame_content" width="810px;" height="500px"  scrolling="no" frameborder="0"></iframe>
        </div>
        <!--右部 over-->
        <div style="clear:both;"></div>
    </div>
</form>
<!--中间内容 over-->
<!--商务资讯 over-->
<!--foodter-->
<div class="total1">
    <div class="sear_footer" >
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
            <p>京ICP备11016456号    京ICP证110540号</p>
        </div>
    </div>
</div>
</body>
</html>
