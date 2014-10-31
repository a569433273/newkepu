<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>会议管理--会议详情</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <link href="../css/doubleDate.css" rel="stylesheet" type="text/css"/>
    <!--日历样式-->
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/upd_mdetail.js"></script>
    <!--修改信息-->
    <script type="text/javascript" src="../js/doubleDate2.0.js"></script>
    <!--双日期日历-->
    <script type="text/javascript">
        $(function () {
            $('.doubledate').kuiDate({
                className: 'doubledate',
                isDisabled: "1"  // isDisabled为可选参数，"0"表示今日之前不可选，"1"标志今日之前可选
            });
        });//加载日历
    </script>
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
<form action="meetingchuli.action" method="post" name="">
    <div class="prs_mid">
        <!--左部-->
        <div class="prs_left">
            <div class="prs_le1">
                <!--菜单部分-->
                <div class="prs_le_3">
                    <ul>
                        <li class="prs_clk" id="prs_2" onclick="prs_show(this.id)"><a class="li_aClk" href="#">基本信息</a>
                        </li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="searchmeetingbus.action">商务资讯</a>
                        </li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="meetingattend.action">参会人员</a>
                        </li>
                        <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk"
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
                <!--基本信息头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;基本信息</span></div>
                </div>
                <!--基本信息头部 over-->
                <!--基本信息内容-->
                <s:iterator value="meetings">
                    <div class="prs_fna" id="pack6">
                        <div class="mDetail_1">
                            <!--左部内容-->
                            <div class="mDetail1_left" id="mDetail1_left">
                                <table>
                                    <tr>
                                        <td width="80">组织单位：</td>
                                        <td id="Mdet_depart1"><s:property value="meeting_zzdw"></s:property></td>
                                    </tr>
                                    <tr>
                                        <td width="80">会议名称：</td>
                                        <td id="Mdet_name1"><s:property value="meeting_name"></s:property></td>
                                    </tr>
                                    <tr>
                                        <td width="80">举办城市：</td>
                                        <td id="Mdet_city1"><s:property value="meeting_city"></s:property></td>
                                    </tr>
                                    <tr>
                                        <td width="80">会议地点：</td>
                                        <td id="Mdet_where1"><s:property value="meeting_hoteladdress"></s:property></td>
                                    </tr>
                                    <tr>
                                        <td width="80">计划人数:</td>
                                        <td id="Mdet_pnum1"><s:property value="meeting_count"></s:property>人</td>
                                    </tr>
                                    <tr>
                                        <td width="80">报到详请：</td>
                                        <td id="Mdet_report1"><s:property value="meeting_bddate"></s:property></td>
                                    </tr>
                                    <tr>
                                        <td width="80">参议天数：</td>
                                        <td id="Mdet_partnum1"><s:property value="meeting_daycount"></s:property>天</td>
                                    </tr>
                                    <tr>
                                        <td width="80">会议费用：</td>
                                        <td id="Mdet_money1"><s:property value="meeting_price"></s:property>元</td>
                                    </tr>
                                </table>
                            </div>
                            <!--左部内容 over-->
                            <!--右部图片-->
                            <div class="mDetail1_right">
                                <img src="../images/meeting_dimg1.gif" alt=""/>
                                <input type="hidden" id="chuliid" name="chuliid" value="0"/>
                            </div>
                            <!--右部图片over-->
                        </div>
                        <div class="mDetail_2" id="mDetail_2">
                            <p style="text-align:left; margin-top:10px; margin-left:31px;"><img
                                    src="../images/Mdetail_udp.gif" style="cursor:pointer;" onclick="upd_mdetail()"
                                    alt=""/></p>

                            <p>&nbsp;</p>
                        </div>
                    </div>
                </s:iterator>
                <!--基本信息内容-->
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
<!--foodter-->
</body>
</html>