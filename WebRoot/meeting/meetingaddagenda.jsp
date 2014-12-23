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
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/prs_show.js"></script><!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/mIssue_hover.js"></script><!--鼠标划过换颜色-->
    <script type="text/javascript" src="../js/missue_page.js"></script><!--分页效果以及省略号效果-->
</head>
<body onload="goPage(1,3,1)">
<jsp:include page="../head.jsp"></jsp:include>
<p>&nbsp;</p>
<!--商务资讯-->
<!--nav-->
<jsp:include page="../daohang.jsp"></jsp:include>
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
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>
