<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-我的资料</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script src="../js/jquery-1.6.4.js" type="text/javascript"></script>
    <script src="../js/prs_show.js" type="text/javascript"></script>
    <!--点击左部菜单时改变样式-->
    <script src="../js/cont_disp.js" type="text/javascript"></script>
    <!--点出收起展开折叠-->
    <script src="../js/provice_city.js" type="text/javascript"></script>
    <!--省城市-->
    <script src="../js/update_umsg.js" type="text/javascript"></script>
    <!--点击我的资料中编辑按钮时-->
    <script src="../js/ck_userFrom.js" type="text/javascript"></script>
    <!--验证我的资料表单-->
    <script src="../js/cidInfo.js" type="text/javascript"></script>
    <!--身份证号判断-->
    <script src="../js/check_PsgMsg.js" type="text/javascript"></script>
    <!--保存时验证乘客信息-->
    <script src="../js/provice_city.js" type="text/javascript"></script>
    <!--选择省份城市-->
</head>
<body>
<jsp:include page="../head.jsp"></jsp:include>
<p>&nbsp;</p>

<form action="personmessage.action" name="messageform" id="messageform" method="post" onsubmit="return upd_umsg1();">
   <jsp:include page="../persondaohang.jsp"></jsp:include>
        <!--左部 over-->
        <div class="prs_right">
            <!--我的资料-->
            <div class="prs_rt" id="prsC_1">
                <!--我的资料头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;我的资料</span></div>
                    <div class="prs_rt1_2" id="pack1_1"><img src="../images/per_hid.jpg" style="margin-top:3px;"
                                                             id="pack_1" onclick="cont_disp(this.id);" alt=""/>&nbsp;
                    </div>
                </div>
                <!--我的资料头部 over-->
                <!--我的资料内容及按钮-->
                <div class="prs_rt2" id="pack1">
                    <!--我的资料内容-->
                    <div style="float:left; width:810px; height:auto; overflow:hidden;" id="user_msg">
                        <!--内容左部-->
                        <s:iterator value="members">
                        <div class="prs_rt2_1">
                            <div class="prs_rt2_11">
                                <div class="ct_1">姓名：&nbsp;</div>
                                <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                                        id="pu_name"><s:property
                                        value="member_realname"></s:property></span></div>
                            </div>
                            <div class="prs_rt2_11">
                                <div class="ct_1">手机号码：&nbsp;</div>
                                <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                                        id="pu_tel"><s:property
                                        value="member_phone"></s:property></span></div>
                            </div>
                            <div class="prs_rt2_11">
                                <div class="ct_1">证件类型：&nbsp;</div>
                                <div class="ct_2">
                                    <s:if test="member_papers_type==0">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_crdtp">身份证</span></div>
                                    </s:if>
                                    <s:elseif test="member_papers_type==1">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_crdtp">护照</span></div>
                                    </s:elseif>
                                    <s:elseif test="member_papers_type==2">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_crdtp">军官</span></div>
                                    </s:elseif>
                                    <s:elseif test="member_papers_type==3">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_crdtp">警官</span></div>
                                    </s:elseif>
                                    <s:elseif test="member_papers_type==4">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_crdtp">港澳通行证</span></div>
                                    </s:elseif>
                                    <s:elseif test="member_papers_type==5">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_crdtp">其他</span></div>
                                    </s:elseif>
                    </div>
                    <div class="prs_rt2_11">
                        <div class="ct_1">出生日期：&nbsp;</div>
                        <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                                id="pu_date"><s:property value="member_birth"></s:property></span></div>
                    </div>
                    <div class="prs_rt2_11">
                        <div class="ct_1">邀请码：&nbsp;</div>
                        <div class="ct_2"><span
                                style="color:#f00; line-height:30px; font-size:14px; font-weight:bold;"
                                id="pu_wel"><s:property value="member_yqm"></s:property></span></div>
                    </div>
                    <div class="prs_rt2_11">
                        <div class="ct_1">客户经理：&nbsp;</div>
                        <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                                id="pu_per">未设置</span></div>
                    </div>
                </div>
                <!--内容左部 over-->
                <!--内容右部-->
                <div class="prs_rt2_2">
                    <div class="prs_rt2_11">
                        <div class="ct_1">性别：&nbsp;</div>
                        <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;" name="pu_sex"
                                                id="pu_sex"><s:property value="member_sex"></s:property></span></div>
                    </div>
                    <div class="prs_rt2_11">
                        <div class="ct_1">座机号：&nbsp;</div>
                        <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                                id="pu_ztel"><s:property value="member_tel"></s:property></span>
                        </div>
                    </div>
                    <div class="prs_rt2_11">
                        <div class="ct_1">证件号：&nbsp;</div>
                        <div class="ct_2">
                            <s:if test="member_papers_type==0">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_card"><s:property value="member_papers_num"></s:property></span>
                        </div>
                        </s:if>
                        <s:elseif test="member_papers_type==1">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_card"><s:property value="member_hz_num"></s:property></span></div>
                    </s:elseif>
                    <s:elseif test="member_papers_type==4">
                                        <span style="line-height:30px; font-size:12px; color:#555;"
                                              id="pu_card"><s:property value="member_qt_num"></s:property></span></div>
                </s:elseif>
            </div>
            <div class="prs_rt2_11">
                <div class="ct_1">所在地：&nbsp;</div>
                <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                        id="pu_depa"><s:property value="member_sheng"></s:property></span><span
                        style="line-height:30px; font-size:12px; color:#555;" id="pu_depa1"><s:property
                        value="member_shi"></s:property></span>
                </div>
            </div>
            <div class="prs_rt2_11">
                <div class="ct_1">工作单位：&nbsp;</div>
                <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                        id="pu_job"><s:property value="member_workaddress"></s:property></span></div>
            </div>
            <div class="prs_rt2_11">
                <div class="ct_1">职称：&nbsp;</div>
                <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                        id="pu_resu"><s:property value="member_workname"></s:property></span></div>
            </div>
        </div>
        <!--内容右部 over-->
    </div>
    </s:iterator>
    <!--我的资料内容 over-->
    <!--按钮-->
    <div class="prs_updt" id="prs_updt"><img alt="" class="inst1" id="inst1" src="../images/per_udp1.png"
                                             onclick="upd_umsg(this.id)"/>

        <p>&nbsp;</p></div>
    <!--按钮 over-->
    <div style="clear:both;"></div>
    <!--中部 over-->
</form>
<p>&nbsp;</p>
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>