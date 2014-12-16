<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-财务中心</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/points_show.js"></script>
    <!--积分菜单切换-->
    <script type="text/javascript" src="../js/page_points.js"></script>
    <!--积分分页效果-->
</head>
<body onload="gotoPage3(1,6,1,'pnts_tb1')">
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
                                                                                    href="prs_info.html">我的资料</a></li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk" href="prs_psg.html">常用乘机人</a>
                        </li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_finc.html">财务中心</a></li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_order.html">订单管理</a></li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_voyage.html">我的航程</a></li>
                        <li class="prs_clk" id="prs_3" onclick="prs_show(this.id)"><a class="li_aClk" href="#">我的积分</a>
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
        <!--右部-->
        <div class="prs_right">
            <!--财务中心-->
            <div class="prs_rt" id="prsC_3">
                <!--财务头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;我的积分</span></div>
                </div>
                <!--财务头部头部 over-->
                <!--财务内容-->
                <div class="prs_fna" id="pack3">
                    <div class="prs_points">
                        <!--头部积分总额-->
                        <div class="prs_pnts_2">
                            <!--菜单头部-->
                            <div class="prs_pnts2_1">
                                <div class="prs_pnts21_1">
                                    <ul>
                                        <li class="prs_pntsli_hover" id="li_points1" onclick="points_show(this.id)">
                                            浦小屋
                                        </li>
                                        <li class="prs_pntsli_bg" id="li_points2" onclick="points_show(this.id)">积分纪录
                                        </li>
                                        <li class="prs_pntsli_bg" id="li_points3" onclick="points_show(this.id)">积分规则
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--菜单头部over-->
                            <!--菜单内容-->
                            <div class="prs_pnts2_2" id="li_points_2" style="display:none;">
                                <div class="prs_pnts22_1">
                                    <div class="prs_pnts22_2">
                                        <table style="margin-top:5px;" id="pnts_tb2">
                                            <s:iterator value="jifenjilus">
                                                <tr class="tr_frst">
                                                    <td width="20%">系统</td>
                                                    <s:if test="jifen_zjflag==0">
                                                        <td width="20%">+<s:property
                                                                value="jifen_num"></s:property></td>
                                                    </s:if>
                                                    <s:else>
                                                        <td width="20%">-<s:property
                                                                value="jifen_num"></s:property></td>
                                                    </s:else>
                                                    <td width="30%"><s:property value="jifen_beizhu"></s:property></td>
                                                    <td width="30%"></td>
                                                </tr>
                                            </s:iterator>
                                        </table>
                                    </div>
                                    <!--分页效果-->
                                    <div class="prs_pnts22_5" id="prs_pnts_page2">
                                    </div>
                                    <!--分页效果-->
                                </div>
                            </div>
                            <!---菜单内容over-->
                            <!--菜单内容1-->
                            <div class="prs_pnts2_2" id="li_points_1">
                                <div class="prs_pnts22_1">
                                    <div class="prs_pnts22_3">
                                        <s:iterator value="membersbenren">
                                        <p>您现在是<span id="star_points"><s:property value="member_level"></s:property>星会员</span>，共<span id="num_points">10</span>人</p>
                                        </s:iterator>
                                    </div>
                                    <div class="prs_pnts22_2">
                                        <table id="pnts_tb1">
                                            <tr class="tr_frst">
                                                <td width="15%">姓名</td>
                                                <td width="20%">电话</td>
                                                <td width="20%">等级</td>
                                                <td width="30%">浦小屋人数</td>
                                            </tr>
                                            <tr>
                                                <td width="15%">李小一</td>
                                                <td width="20%">1871785255</td>
                                                <td width="20%">1星会员</td>
                                                <td width="30%">5人</td>
                                            </tr>
                                            <tr>
                                                <td width="15%">李小一</td>
                                                <td width="20%">1871785255</td>
                                                <td width="20%">1星会员</td>
                                                <td width="30%">5人</td>
                                            </tr>
                                            <tr>
                                                <td width="15%">李小一</td>
                                                <td width="20%">1871785255</td>
                                                <td width="20%">1星会员</td>
                                                <td width="30%">5人</td>
                                            </tr>
                                            <tr>
                                                <td width="15%">李小一</td>
                                                <td width="20%">1871785255</td>
                                                <td width="20%">1星会员</td>
                                                <td width="30%">5人</td>
                                            </tr>
                                            <tr>
                                                <td width="15%">李小一</td>
                                                <td width="20%">1871785255</td>
                                                <td width="20%">1星会员</td>
                                                <td width="30%">5人</td>
                                            </tr>
                                            <tr>
                                                <td width="15%">李小一</td>
                                                <td width="20%">1871785255</td>
                                                <td width="20%">1星会员</td>
                                                <td width="30%">5人</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <!--分页效果-->
                                    <div class="prs_pnts22_5" id="prs_pnts_page1">
                                        <div class="prs_pnts22_6" id="pg3_all"></div>
                                    </div>
                                    <!--分页效果-->
                                </div>
                            </div>
                            <!---菜单内容over1-->
                            <!--菜单内容2-->
                            <s:iterator value="guizes">
                                <div class="prs_pnts2_2" id="li_points_3" style="display:none;">
                                    <div class="prs_pnts22_4">
                                        <s:property value="gz_neirong" escape="false"></s:property>
                                    </div>
                                </div>
                            </s:iterator>
                            <!--菜单内容2 over-->
                        </div>
                        <!--头部积分总额 over-->
                        <!--积分内容-->
                        <div class="prs_pnts_1">
                            <div class="prs_pnts1_1">
                                <!--总额数字-->
                                <div class="prs_pnts11_1">
                                    <p>积分总额:<span style="color:#F00; font-size:16px;">&nbsp;1500</span></p>
                                </div>
                                <!--总额数字 over-->
                                <!--星级-->
                                <div class="prs_pnts11_2">
                                    <div class="prs_p2_1" id="prs_p2_1">
                                        <p>积分等级：</p>
                                    </div>
                                    <div class="prs_p2_2">
                                        <p style="text-align:left; margin-top:4px;" id="star_show"><img
                                                src="../images/star0.jpg" alt=""/></p>
                                    </div>
                                </div>
                                <!--星级-->
                            </div>
                        </div>
                        <!--积分内容over-->
                    </div>
                </div>
                <!--财务内容 over-->
            </div>
            <!--财务中心 over-->
        </div>
        <!--右部 over-->
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
