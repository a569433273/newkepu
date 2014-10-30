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
                                                                                    href="meeting_detail.html">基本信息</a>
                        </li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meeting_comm.html">商务资讯</a>
                        </li>
                        <li class="prs_clk" id="prs_2" onclick="prs_show(this.id)"><a class="li_aClk" href="#">参会人员</a>
                        </li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meeting_issue.html">议题日程</a>
                        </li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meeting_photo.html">会议照片</a>
                        </li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meeting_notice.html">通知</a>
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
                            <iframe name="right2_tt" frameborder="0" width="710" scrolling="no" src="mpart_frame.html"
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
<!--foodter-->
</body>
</html>
