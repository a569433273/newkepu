<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>会议管理</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/Meet_Sear.js"></script>
    <!--搜索会议弹出框-->
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
<!--会议管理-->
<!--nav-->
<div class="meeting_nav">
    <ul>
        <li><a href="">首页</a></li>
        <li><a href="">航空订票</a></li>
        <li><a href="#">会议管理</a></li>
        <li><a href="">目的地服务</a></li>
        <li><a href="">商务礼品</a></li>
    </ul>
</div>
<!--nav over-->
<!--banner-->
<div class="meeting_ban">
    <img src="../images/meeting_banner.jpg" alt=""/>
</div>
<!--banner-->
<!--会议链接-->
<div class="meeting_1">
    <!--会议左部-->
    <div class="meeting_left">
        <div class="meeting1" onclick="window.location.href='meeting_inti.html'">
            <!--发起会议图片-->
            <div class="meetingL1">
                <div class="m_L_1">
                    <img src="../images/meeting_talk.jpg" alt=""/>
                </div>
            </div>
            <!--发起会议图片 over-->
            <!--会议文字部分-->
            <div class="meetingL2">
                <p class="p1">发起会议</p>

                <p class="p2">您可以发起会议，进行计论，与您的好友可以进行谈话</p>
            </div>
            <!--会议文字部分 over-->
        </div>
    </div>
    <!--会议左部 over-->
    <!--会议右部-->
    <div class="meeting_right">
        <div class="meetingR1" onclick="Meet_Sear()">
            <!--图片-->
            <div class="meetingR_1">
                <div class="m_R_1">
                    <img src="../images/meeting_search.jpg" alt=""/>
                </div>
            </div>
            <!--图片 over-->
            <!--文字-->
            <div class="meetingR_2">
                <div class="m_R_2">
                    <p class="p1">搜索会议</p>

                    <p class="p2">您可以通过输入会议编号进行会议搜索，参加会议</p>
                </div>
            </div>
            <!--文字 over-->
        </div>
    </div>
    <!--会议右部 over-->
    <div style="clear:both;"></div>
</div>
<!--会议链接 over-->
<!--会议管理 over-->
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
<!--搜索弹出框-->
<div class="M_div1">
    <form action="searchmeeting.action" method="post" name="meetfrom" id="meetfrom">
        <div class="M_div2">
            <!--头部圆角框-->
            <div class="M_d_1">
            </div>
            <!--头部圆角框 over-->
            <!--中间内容-->
            <div class="M_d_2">
                <div class="M_d_21">
                    <p>会议搜索</p>
                </div>
                <div class="M_d_22">
                    <div class="M_d_22_1"><p><input type="text" name="Mt_nm"
                                                    style="width:200px; height:25px; border:0; color:#666; line-height:25px;"
                                                    value="请输入要搜索的会议编号" onfocus="meeting_num()" onblur="meeting_dhid()"
                                                    id="Mt_nm"/></p></div>
                </div>
                <div class="M_d_23">
                    <div class="M_d_23_1"><p style="text-align:right;"><img src="../images/M_div_cnl.jpg"
                                                                            style="cursor:pointer;"
                                                                            onclick="M_Div_hid()" alt=""/></p></div>
                    <div class="M_d_23_2"><p style="text-align:left;"><input type="image" name=""
                                                                             src="../images/M_div_sub.jpg"
                                                                             onclick="return M_Div_href()"/></p></div>
                </div>
            </div>
            <!--中间内容 over-->
            <!--底部圆角-->
            <div class="M_d_3">
            </div>
            <!--底部圆角 over-->
        </div>
    </form>
</div>

<div id="z_h"></div>
<!--搜索弹出框-->
</body>
</html>