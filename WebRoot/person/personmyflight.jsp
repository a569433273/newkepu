<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-我的航程</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/cont_disp.js"></script>
    <!--点出收起展开折叠-->
    <script type="text/javascript" src="../js/page3.js"></script>
    <!--我的航程分页效果-->
</head>
<body onload="gotoPage3(1,5,1)">
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
<!--中部-->
<form action="#" method="post" name="">
    <div class="prs_mid">
        <!--左部-->
        <div class="prs_left">
            <div class="prs_le1">
                <div class="prs_le_1">
                    <img src="../images/cat.jpg" alt=""/>
                </div>
                <div class="prs_le_2">
                    <div class="prs_le_21"><input name="" type="file" class="ipt_file"/></div>
                </div>
                <!--上传头像-->
                <!--菜单部分-->
                <div class="prs_le_3">
                    <ul>
                        <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="personmessage.action">我的资料</a>
                        </li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="persontravller.action">常用乘机人</a>
                        </li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="personcaiwu.action">财务中心</a>
                        </li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="personorder.action">订单管理</a>
                        </li>
                        <li class="prs_clk" id="prs_5" onclick="prs_show(this.id)"><a class="li_aClk" href="#">我的航程</a>
                        </li>
                        <li class="prs_1" id="prs_6" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_meeting.html">我的会议</a>
                        </li>
                    </ul>
                </div>
                <!--菜单部分 is over-->
            </div>
        </div>
        <!--左部 over-->
        <div class="prs_right">
            <!--我的航程-->
            <div class="prs_rt" id="prsC_5">
                <!--我的航程头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;我的航程</span></div>
                    <div class="prs_rt1_2" id="pack1_5"><img src="../images/per_hid.jpg" style="margin-top:3px;"
                                                             id="pack_5" onclick="cont_disp(this.id);" alt=""/>&nbsp;
                    </div>
                </div>
                <!--我的航程 over-->
                <!--我的航程内容-->
                <div class="prs_fna" id="pack5">
                    <div class="prs_voyage">
                        <!--航程头部-->
                        <div class="prs_voyage1">
                            <p>总飞行公里数：<span style="color:#f00; font-size:14px; font-weight:bold">1000</span>公里
                                <span style="margin-left:40px;">总飞行时长<span
                                        style="color:#f00; font-size:14px; font-weight:bold">20</span>小时<span
                                        style="color:#f00; font-size:14px; font-weight:bold">15</span>分钟</span></p>
                        </div>
                        <!--航程头部 over-->
                        <!--航程信息-->
                        <div class="prs_voyage2">
                            <div class="prs_voy2_1">&nbsp;航程信息</div>
                            <!--航程内容-->
                            <div class="prs_voy2_2">
                                <table class="prs_voy2_tab" id="prs_voy2_tab">
                                    <tr bgcolor="#dffbfb" style="border:1px solid #dcf7fb;" align="center" height="30">
                                        <td width="15%">航空公司</td>
                                        <td width="15%">航班号</td>
                                        <td width="15%">起飞地点</td>
                                        <td width="15%">降落地点</td>
                                        <td width="13%">起飞时间</td>
                                    </tr>
                                    <s:iterator value="myflights">
                                        <tr align="center" height="50">
                                            <td width="15%">中国国际航空公司</td>
                                            <td width="15%">CUA102</td>
                                            <td width="15%">北京首都机场T1</td>
                                            <td width="15%">大连机场T2</td>
                                            <td width="13%">2014-02-10<br/>06:10</td>
                                        </tr>
                                    </s:iterator>
                                </table>
                            </div>
                            <!--航程内容 over-->
                            <!--分页效果-->
                            <div class="pg3_all" id="pg3_all"></div>
                            <!--分页效果 over-->
                        </div>
                        <!--航程信息over-->
                    </div>
                </div>
                <!--我的航程内容 over-->
            </div>
            <!--我的航程 over-->
        </div>
        <div style="clear:both;"></div>
    </div>
</form>
<!--中部 over-->
<p>&nbsp;</p>
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
</body>
</html>
