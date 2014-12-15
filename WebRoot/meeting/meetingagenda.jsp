<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>会议管理--议题日程</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/mIssue_hover.js"></script>
    <!--鼠标划过换颜色-->
    <script type="text/javascript" src="../js/missue_page.js"></script>
    <!--分页效果以及省略号效果-->
</head>
<body onload="goPage(1,3,1)">
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
<!--商务资讯-->
<!--nav-->
<div class="meeting_nav">
    <ul>
        <li><a href="">首页</a></li>
        <li><a href="">航空订票</a></li>
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
                        <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="searchmeeting.action">基本信息</a>
                        </li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="searchmeetingbus.action">商务资讯</a>
                        </li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meetingattend.action">参会人员</a>
                        </li>
                        <li class="prs_clk" id="prs_2" onclick="prs_show(this.id)"><a class="li_aClk" href="#">议题日程</a>
                        </li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meetingtupian.action">会议照片</a>
                        </li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meetingtongzhi.action">通知</a>
                        </li>
                    </ul>
                </div>
                <!--菜单部分 is over-->
            </div>
        </div>
        <!--左部 over-->
        <!--右部-->
        <div class="mComm_right">

            <div class="prs_rt" id="prsC_6">
                <!--议题和日程头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;议题和日程</span></div>
                    <div class="prs_comm_adinf"><div class="comm_add1"><a href="meetingaddagenda.jsp"><img src="../images/mComm_addimg.jpg" alt=""/></a></div><div class="comm_add2"><p>(添加议题日程信息)</p></div></div>
                </div>
                <!--议题和日程头部 over-->
                <!--议题内容-->
                <div class="prs_fna" id="pack6">
                    <div class="mIssue_1">
                        <div class="MIssue1_1">
                            <table id="tb_tab">
                                <tr></tr>
                                <!--第一个议程-->
                                <s:iterator value="huiyitongzhis">
                                    <tr>
                                        <td>
                                            <div class="M_Iss_1" id="M_Iss_1" onmouseover="Missue_over(this.id)"
                                                 onmouseout="Missue_out(this.id)">
                                                <div style="width:720px; height:20px; float:left;"></div>
                                                <!--控制距上20px; 无内容-->
                                                <div class="M_Iss1_1">
                                                    <!--左部-->
                                                    <div class="M_Iss1_left">
                                                        <img src="../images/Missue_img1.jpg" class="missue_img" alt=""/>
                                                    </div>
                                                    <!--左部 over-->
                                                    <!--右部-->
                                                    <div class="M_Iss1_right">
                                                        <div class="m_sue_1">
                                                            <p><s:property value="hytz_bt"></s:property><span
                                                                    class="M_I_sp1">[<s:property
                                                                    value="hytz_date"></s:property>]</span>&nbsp;&nbsp;<span><a
                                                                    href="meetingrichengdetail?tzid=<s:property
                                                                    value="hytz_id"></s:property>">查看详情</a></span></p>
                                                        </div>
                                                        <div class="m_sue_2">
                                                            <s:property value="hytz_nr"
                                                                           escape="false"></s:property>
                                                        </div>
                                                    </div>
                                                    <!--右部 over-->
                                                </div>
                                                <div style="width:720px; height:20px; float:left;"></div>
                                                <!--控制距下20px; 无内容-->
                                            </div>
                                        </td>
                                    </tr>
                                    <!--第一个议程 over-->
                                </s:iterator>
                            </table>
                        </div>
                        <!--分页效果-->
                        <div class="missue_pge" id="page_total">
                            <div class="missue_pge_1" id="Pg_1">
                            </div>
                        </div>
                        <!--分页效果over-->
                    </div>
                </div>
                <!--议题内容-->
            </div>
        </div>
        <!--右部 over-->
        <div style="clear:both;"></div>
    </div>
</form>
<!--中间内容 over-->
<!--商务资讯 over-->
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
</body>
</html>
