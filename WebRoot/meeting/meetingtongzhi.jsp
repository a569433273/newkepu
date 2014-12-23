<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>会议管理--通知</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/page.js"></script>
    <script type="text/javascript" src="../js/notice_popup.js"></script>
    <!--分页效果-->
</head>
<body onload="goPage(1,10,1)">
<!--header部分 start-->
<jsp:include page="../head.jsp"></jsp:include>
<!--header部分 over-->
<p>&nbsp;</p>
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
                        <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="searchmeeting.action">基本信息</a>
                        </li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="searchmeetingbus.action">商务资讯</a>
                        </li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meetingattend.action">参会人员</a>
                        </li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meetingricheng.action">议题日程</a>
                        </li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meetingtupian.action">会议照片</a>
                        </li>
                        <li class="prs_clk" id="prs_2" onclick="prs_show(this.id)"><a class="li_aClk" href="#">通知</a>
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
                <!--通知头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;通知</span></div>
                </div>
                <!--通知头部 over-->
                <!--通知内容-->
                <div class="prs_fna" id="pack6">
                    <div class="mNotice_1">
                        <div class="mNotice1_1">
                            <table id="tb_tab">
                                <tr style="width:0px; height:0px;">
                                    <td style="width:0px; height:0px;"></td>
                                </tr>
                                <s:iterator value="huiyijinjitongzhis" status="status">
                                    <tr>
                                        <td>
                                            <div class="m_Notice1_1">
                                                <!--小图标-->
                                                <div class="m_Ntc1_1"><img src="../images/Mnotice_img1.jpg" alt=""/>
                                                </div>
                                                <!--小图标 over-->
                                                <!--文字-->
                                                <div class="m_Ntc1_2"><p>&nbsp;<a href=""
                                                                                  id="Mnot_detail_<s:property value='#status.count'/>"
                                                                                  onclick="return notice_popup(this.id)"><s:property
                                                        value="hyjjtz_nr"></s:property></a></p></div>
                                                <!--文字 over-->
                                                <!--时间日期-->
                                                <div class="m_Ntc1_3"><p>[<s:property
                                                        value="hyjjtz_time"></s:property>]</p></div>
                                                <!--时间日期-->
                                            </div>
                                        </td>
                                    </tr>
                                </s:iterator>
                            </table>
                        </div>
                        <!--分页效果-->
                        <div class="mNoticepge_4" id="page_total">
                            <div class="mNoticepge_1" id="Pg_1">
                            </div>
                        </div>
                        <!--分页效果over-->
                    </div>
                </div>
                <!--通知内容-->
            </div>
        </div>
        <!--右部 over-->
        <div style="clear:both;"></div>
    </div>
</form>
<!--中间内容 over-->
<!--商务资讯 over-->
<!--foodter-->
<!--搜索弹出框-->
<div class="mNotice_div">
    <!--头部-->
    <div class="mNt_1" id="mNt_1">
        <div class="mNt1_1"><span>&nbsp;通知详情</span></div>
        <div class="mNt1_2"><img src="../images/closebox.png" style="cursor:pointer;" onclick="noticed_close()" alt=""/>
        </div>
    </div>
    <!--头部over-->
    <!--内容-->
    <div class="mNt_2" id="mNt_2">
        <div class="mNt2_1">
            <p id="mNt2_1"></p>
        </div>
    </div>
    <!--内容over-->
</div>
<div id="z_h"></div>
<!--搜索弹出框-->
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>
