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
<!--header部分 start-->
<div class="total">
    <div class="header">
        <div class="logo"><a href="../index.jsp"><img alt="" src="../images/logo.jpg"/></a></div>
        <div class="hd_tel"><img alt="" src="../images/tel.jpg"/></div>
        <div class="hd_mark"><a href=""><img alt="" src="../images/mark1.jpg"></a>&nbsp;&nbsp;<a href=""><img alt=""
                                                                                                              src="../images/mark2.jpg"></a>
        </div>
        <div style="clear:both;"></div>
    </div>
</div>
<!--header部分 over-->
<p>&nbsp;</p>

<form action="personmessage.action" name="messageform" id="messageform" method="post" onsubmit="return upd_umsg1();">
    <!--中部-->
    <div class="prs_mid">
        <!--左部-->
        <div class="prs_left">
            <div class="prs_le1">
                <div class="prs_le_1">
                    <img alt="" src="../images/cat.jpg"/>
                </div>
                <div class="prs_le_2">
                    <div class="prs_le_21"><input name="" type="file" class="ipt_file"/></div>
                </div>
                <!--上传头像-->
                <!--菜单部分-->
                <div class="prs_le_3">
                    <ul>
                        <li class="prs_clk" id="prs_1" onclick="prs_show(this.id)"><a class="li_aClk" href="#">我的资料</a>
                        </li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="persontravller.action">常用乘机人</a>
                        </li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="persontcaiwu.action">财务中心</a>
                        </li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_order.html">订单管理</a></li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="persontmyflight.action">我的航程</a>
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
                            <s:elseif test="member_papers_type==4">
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
                                                id="pu_ztel"><s:property value="member_zuoji"></s:property></span>
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
                                        id="pu_job">未设置</span></div>
            </div>
            <div class="prs_rt2_11">
                <div class="ct_1">职称：&nbsp;</div>
                <div class="ct_2"><span style="line-height:30px; font-size:12px; color:#555;"
                                        id="pu_resu">未设置</span></div>
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