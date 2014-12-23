<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>会议管理--参会人员</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
</head>
<body>
<!--header部分 start-->
<jsp:include page="../head.jsp"></jsp:include>
<!--header部分 over-->
<p>&nbsp;</p>
<!--nav-->
<jsp:include page="../daohang.jsp"></jsp:include>
<!--nav over-->
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
                        <li class="prs_clk" id="prs_2" onclick="prs_show(this.id)"><a class="li_aClk" href="#">参会人员</a>
                        </li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meetingricheng.action">议题日程</a>
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
                <!--参议人员头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;参会人员</span></div>
                </div>
                <!--参议人员头部 over-->
                <!--参议人员内容-->
                <div class="prs_fna" id="pack6">
                    <div class="partM_1">
                        <!--发起人-->
                        <div class="partM1_1">
                            <!--发起人头部-->
                            <p>&nbsp;</p>

                            <div class="partM11_1">
                                <div class="p_M_1">
                                    <img src="../images/partM_icon1.jpg" alt=""/>
                                </div>
                                <div class="p_M_2"><p>会议发起人</p></div>
                            </div>
                            <!--发起人头部over-->
                            <!--发起人内容-->
                            <div class="partM1_2">
                                <table>
                                    <tr class="tble_tr">
                                        <td width="10%">姓名</td>
                                        <td width="15%">电话</td>
                                        <td width="20%">工作单位</td>
                                        <td width="10%">职称</td>
                                        <td width="30%"></td>
                                    </tr>
                                    <s:iterator value="membersfaqi">
                                        <tr>
                                            <td width="10%"><s:property value="member_realname"></s:property></td>
                                            <td width="15%"><s:property value="member_zuoji"></s:property></td>
                                            <td width="20%"><s:property value="member_workaddress"></s:property></td>
                                            <td width="10%"><s:property value="member_workname"></s:property></td>
                                            <td width="30%"></td>
                                        </tr>
                                    </s:iterator>
                                </table>
                            </div>
                            <!--发起人内容 over-->
                        </div>
                        <!--发起人 over-->
                        <!--管理员-->
                        <div class="partM1_1">
                            <!--管理员头部-->
                            <div class="partM11_1">
                                <div class="p_M_1">
                                    <img src="../images/partM_icon2.jpg" alt=""/>
                                </div>
                                <div class="p_M_2"><p>管理员</p></div>
                            </div>
                            <!--管理员头部over-->
                            <!--管理员内容-->
                            <div class="partM1_2">
                                <table>
                                    <tr class="tble_tr">
                                        <td width="10%">姓名</td>
                                        <td width="15%">电话</td>
                                        <td width="20%">工作单位</td>
                                        <td width="10%">职称</td>
                                        <td width="30%"></td>
                                    </tr>
                                    <s:iterator value="membersguanli">
                                        <tr>
                                            <td width="10%"><s:property value="member_realname"></s:property></td>
                                            <td width="15%"><s:property value="member_zuoji"></s:property></td>
                                            <td width="20%"><s:property value="member_workaddress"></s:property></td>
                                            <td width="10%"><s:property value="member_workname"></s:property></td>
                                            <td width="30%"></td>
                                        </tr>
                                    </s:iterator>
                                </table>
                            </div>
                            <!--管理员内容 over-->
                        </div>
                        <!--管理员 over-->
                        <!--会议协办员-->
                        <div class="partM1_1">
                            <!--会议协办员头部-->
                            <div class="partM11_1">
                                <div class="p_M_1">
                                    <img src="../images/partM_icon3.jpg" alt=""/>
                                </div>
                                <div class="p_M_2"><p>会议协办员</p></div>
                            </div>
                            <!--管理员头部over-->
                            <!--管理员内容-->
                            <div class="partM1_2">
                                <table>
                                    <tr class="tble_tr">
                                        <td width="10%">姓名</td>
                                        <td width="15%">电话</td>
                                        <td width="20%">工作单位</td>
                                        <td width="10%">职称</td>
                                        <td width="30%"></td>
                                    </tr>
                                    <s:iterator value="membersxieban">
                                        <tr>
                                            <td width="10%"><s:property value="member_realname"></s:property></td>
                                            <td width="15%"><s:property value="member_zuoji"></s:property></td>
                                            <td width="20%"><s:property value="member_workaddress"></s:property></td>
                                            <td width="10%"><s:property value="member_workname"></s:property></td>
                                            <td width="30%"></td>
                                        </tr>
                                    </s:iterator>
                                </table>
                            </div>
                            <!--会议协办员内容 over-->
                        </div>
                        <!--会议协办员 over-->
                        <!--参会人员-->
                        <div class="partM1_1">
                            <iframe name="right2_tt" frameborder="0" width="710" scrolling="no"
                                    src="meetingattendlist.jsp"
                                    id="frame_content"></iframe>
                            <!--引数参会人员数据-->
                        </div>
                        <!--参会人员 over-->
                    </div>
                </div>
                <!--参议人员内容 over-->
            </div>
            <!--参议人员 over-->
        </div>
        <!--右部 over-->
        <div style="clear:both;"></div>
    </div>
</form>
<!--中间内容 over-->
<!--商务资讯 over-->
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>
