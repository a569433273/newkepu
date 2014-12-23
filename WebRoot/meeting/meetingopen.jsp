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
    <link href="../css/doubleDate.css" rel="stylesheet" type="text/css"/>
    <!--日历样式-->
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/Missue_cksubmit.js"></script>
    <!--表单验证-->
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
<jsp:include page="../head.jsp"></jsp:include>
<!--header部分 over-->
<p>&nbsp;</p>
<!--nav-->
<jsp:include page="../daohang.jsp"></jsp:include>
<!--nav over-->
<!--中间内容-->
<div class="mInti_all">
    <!--发起会议标题-->
    <div class="mInti_1">
        <p>发起会议</p>
    </div>
    <!--发起会议标题 over-->
    <!--内容部分-->
    <div class="mInti_2">
        <!--左部-->
        <div class="mInti2_left">
            <form action="meetingopen.action" method="post" name="">
                <div class="mInti2_1">
                    <table>
                        <tr>
                            <td width="80">组织单位：</td>
                            <td id="Mdet_depart1"><input type="text" name="Minti_depart" style="width:200px;"
                                                         id="Minti_depart"/></td>
                        </tr>
                        <tr>
                            <td width="80">会议名称：</td>
                            <td id="Mdet_name1"><input type="text" name="Minti_name" style="width:200px;"
                                                       id="Minti_name"/></td>
                        </tr>
                        <tr>
                            <td width="80">举办城市：</td>
                            <td id="Mdet_city1"><input type="text" name="Minti_city" style="width:200px;"
                                                       id="Minti_city"/></td>
                        </tr>
                        <tr>
                            <td width="80">会议地点：</td>
                            <td id="Mdet_where1"><input type="text" name="Minti_where" style="width:200px;"
                                                        id="Minti_where"/></td>
                        </tr>
                        <tr>
                            <td width="80">计划人数:</td>
                            <td id="Mdet_pnum1"><input type="text" name="Minti_pnum" style="width:100px;"
                                                       id="Minti_pnum"/>&nbsp;人
                            </td>
                        </tr>
                        <tr>
                            <td width="80">报到日期：</td>
                            <td id="Mdet_report1"><input type="text" name="Minti_date" style="width:100px;"
                                                         class='doubledate' readonly="readonly" id="Minti_date"/></td>
                        </tr>
                        <tr>
                            <td width="80">参议天数：</td>
                            <td id="Mdet_partnum1"><input type="text" name="Minti_dnum" style="width:100px;"
                                                          id="Minti_dnum"/>&nbsp;天
                            </td>
                        </tr>
                        <tr>
                            <td width="80">会议费用：</td>
                            <td id="Mdet_money1"><input type="text" name="Minti_money" style="width:100px;"
                                                        id="Minti_money"/>&nbsp;元
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
            <div class="mInti2_2">
                <input type="image" src="../images/mInti_sub.jpg" onclick="return Minti_cksub()"/>
            </div>
        </div>
        <!--左部over-->
        <!--右部-->
        <div class="mInti2_right">
            <div class="mIniti2r_1">
                <!--右文字部分-->
                <div class="mIniti2r_2">
                    <ul>
                        <li class="ul_li">发起会议后，您可以：</li>
                        <li>与参加此会议的成员进行交流</li>
                        <li>接受到最新的商务资讯与议题日程</li>
                        <li>上传会议中的照片以及浏览会议中的照片</li>
                        <li>接收到会议的最新通知</li>
                    </ul>
                </div>
                <!--右文字部分over-->
                <!--右图片部分-->
                <div class="mIniti2r_3">
                    <p style="text-align:left;"><img src="../images/mIniti_img1.jpg" alt=""/></p>
                </div>
                <!--右图片部分over-->
            </div>
        </div>
        <!--右部over-->
    </div>
    <!--内容部分over-->
</div>
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>