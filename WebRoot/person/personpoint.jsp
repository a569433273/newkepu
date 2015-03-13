<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-积分中心</title>
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
<!--头-->
<div class="header">
    <iframe src="header.jsp" width="985px" height="78px" frameborder="0" scrolling="no"></iframe>
</div>
<!--头over-->
<p>&nbsp;</p>
<!--中部-->
<form action="#" method="post" name="">
  <jsp:include page="../persondaohang.jsp"></jsp:include>
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
                                        <p>您现在是<span id="star_points"><%= session.getAttribute("member_level")%>星会员</span>，共<span id="num_points">10</span>人</p>
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
                                            <s:iterator value="memberseconds" id="entry">
                                                <s:iterator value="#entry">
                                                    <s:if test="key == 0">
                                                <td width="15%"><s:property value="value"></s:property></td>
                                                    </s:if>
                                                    <s:elseif test="key == 1">
                                                <td width="20%"><s:property value="value"></s:property></td>
                                                    </s:elseif>
                                                    <s:elseif test="key == 2">
                                                <td width="20%"><s:property value="value"></s:property>星会员</td>
                                                    </s:elseif>
                                                    <s:else>
                                                <td width="30%"><s:property value="value"></s:property>人</td>
                                                    </s:else>
                                                </s:iterator>
                                            </tr>
                                            </s:iterator>
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
                                    <p>积分总额:<span style="color:#F00; font-size:16px;">&nbsp;
                                    <s:iterator value="xunizhanghus"><s:property value="vmoney_jifen"></s:property></s:iterator>
                                    </span></p>
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
<!--footer-->
<div style="widdth:985px; height:45px; overflow:hidden;"></div>
<div class="footer">
    <iframe src="../footer.jsp" width="100%" height="125px" frameborder="0" scrolling="no"></iframe>
</div>
<!--footer over-->
</body>
</html>
