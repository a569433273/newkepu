<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>窠浦（北京）商务服务有限公司</title>
    <meta name="description" content="窠浦"/>
    <meta name="keywords" content="窠浦航空，窠浦官网，窠浦退票，航空，退票，关于窠浦，wF8PRUDGBcLZ0fWloGaGwDUpUXU"/>
    <link href="css/index.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/ver_code.js"></script>
</head>

<body onload="createCode()">
<div class="total">
<p>&nbsp;</p>
<!--header部分 start-->
<div class="header">
    <div class="logo"><a href="index.jsp"><img src="images/logo.jpg" alt=""/></a></div>
    <div class="hd_tel"><img src="images/tel.jpg" alt=""/></div>
    <div class="hd_mark"><a href=""><img src="images/mark1.jpg" alt=""></a>&nbsp;&nbsp;<a href=""><img
            src="images/mark2.jpg" alt=""></a></div>
    <div style="clear:both;"></div>
</div>
<!--header部分 over-->
<!--登录部分 start-->
<s:if test="#session.member_id == null">
    <form action="denglu.action" method="post" name="loginfrom" id="loginfrom">
        <div class="login_part">
            <div class="login_left">
                <div style="float:left;">用户名：</div>
                <div style="float:left; margin-top:-1px; display:inline;"><input type="text" name="username"
                                                                                 id="username"
                                                                                 class="input_w_h"/></div>
                <div style="float:left; margin-left:5px; display:inline;">密码：</div>
                <div style="float:left; margin-top:-1px; display:inline;"><input type="password" name="password"
                                                                                 id="password"
                                                                                 class="input_w_h"/></div>
                <div style="float:left; margin-left:5px; display:inline;">验证码：</div>
                <div style="float:left; margin-top:-1px; display:inline;"><input type="text" name="id_code" id="id_code"
                                                                                 class="input_w_h"/></div>
            </div>
            <div class="lg_mid">
                <input onclick="createCode()" id="checkCode" class="unchanged"
                       style="width: 45px; height:15px;  display:inline-block; "/>
            </div>
            <div class="login_right">
                <input type="image" name="login" onclick="validate();return false" src="images/login.jpg"/>&nbsp;&nbsp;&nbsp;<input
                    name="reg"
                    type="image"
                    src="images/reg.jpg" onclick="window.location.href='person/personzhuce.jsp';return false"/>
            </div>
            <div style="clear:both;"></div>
        </div>
    </form>
</s:if>
<s:else>
    <div class="login_part">
        <div class="login_left">
            <div style="float:right;"><%=request.getSession().getAttribute("member_realname")%>
                <a href="personmessage.action">个人中心</a>
            <a href="denglu.action?tuichu=1">退出</a></div>
        </div>
    </div>
</s:else>
<!--登录部分 over-->
<!--中间内容部分-->
<div class="in_mid">
<!--左边部分-->
<div style="width:795px; heigth:auto; overflow:hidden; float:left;">
    <div class="in_left">
        <!--商业信息-->
        <div class="in_left1" style="margin-left:20px;">
            <div class="comm_h">
                <img src="images/comm_info.jpg" alt=""/>
            </div>
            <div class="comm_first">
                <div class="comm_img"><img src="images/comm_info_img.jpg" alt=""></div>
                <div class="comm_f_cont">
                    <p style="margin-bottom:5px;">总公司与北京农商银行海淀支行签</p>

                    <p><a href="">11月6日上午，总公司与北京农商银行海淀支行银企战略合作协议.....</a></p>
                </div>
            </div>
            <div class="comm_cont">
                <ul>
                    <s:iterator value="shangyenewses">
                    <li>
                        <div class="litter_m"><a href=""><s:property value="new_biaoti"></s:property></a></div>
                        <div class="new_mark">&nbsp;</div>
                        <div class="li_right"><s:property value="new_date"></s:property></div>
                        <div style="clear:both;"></div>
                    </li>
                    </s:iterator>
                </ul>
            </div>
        </div>
        <!--商业信息-->
        <!--nestpu信息-->
        <div class="in_left1" style="margin-left:45px;">
            <div class="comm_h">
                <img src="images/nestpu_info.jpg" alt=""/>
            </div>

            <div class="comm_first">
                <div class="comm_img"><img src="images/nestpu_info_img.jpg" alt=""/></div>
                <div class="comm_f_cont">
                    <p style="margin-bottom:5px;">总公司与北京农商银行海淀支行签</p>

                    <p><a href="">11月6日上午，总公司与北京农商银行海淀支行银企战略合作协议.....</a></p>
                </div>

            </div>

            <div class="comm_cont">
                <ul>
                    <s:iterator value="kepunewses">
                    <li>
                        <div class="litter_m"><a href=""><s:property value="new_biaoti"></s:property></a></div>
                        <div class="new_mark">&nbsp;</div>
                        <div class="li_right"><s:property value="new_date"></s:property></div>
                        <div style="clear:both;"></div>
                    </li>
                    </s:iterator>
                </ul>
            </div>
        </div>
        <!--nestpu信息-->

    </div>

    <!--footer-->
    <div class="footer">
        <div class="footer1">
            <p><a href="">关于窠浦</a></p>

            <p><a href="">法律声明</a></p>

            <p><a href="">意见反馈</a></p>
        </div>
        <div class="footer1" style="margin-left:50px;">
            <p><a href="">联系我们</a></p>

            <p><a href="">隐私条款</a></p>

            <p><a href="">企业QQ:4006205588</a></p>
        </div>
        <div class="footer1" style="margin-left:15px;">
            <p><a href="">加入窠浦</a></p>

            <p><a href="">广告服务</a></p>
        </div>
        <div class="footer2">
            <p>窠浦（北京）商务服务有限公司 Nestpu(Beijing) Business Service Co.Ltd.版权所有</p>

            <p>地址:北京市东城区朝阳门银河SOHO中心A座10511室 邮政编码：100010</p>

            <p>京ICP备11016456号 京ICP证110540号</p>
        </div>
    </div>
    <!--footer-->
    <div style="clear:both;"></div>
</div>

<!--左边部分-->
<!--右边部分-->
<div class="in_rigth">
    <div class="nav">
        <div class="img"><a href="plane/planesearch.jsp"><img src="images/nav_ticket.jpg" alt="航空订票"/></a></div>
        <div class="img"><a href="meeting/meetingindex.jsp"><img src="images/nav_meeting.jpg" alt="会议管理"/></a></div>
        <div class="img"><a href=""><img src="images/nav_adress.jpg" alt="目的地服务"/></a></div>
        <div class="img"><a href=""><img src="images/nav_comm.jpg" alt="商务礼品"/></a></div>
        <div style="clear:both;"></div>
    </div>
    <div class="org">
        <div style="background:url(images/org_img.jpg) no-repeat; width:180px; height:30px; float:left;">
            <div class="fore">
                <div class="fore1" id="show1" onclick="setTab('show',1);">国内</div>
                <div class="spera">&nbsp;</div>
                <div class="fore2" id="show2" onclick="setTab('show',2);">国际</div>
            </div>
        </div>
        <div class="fr_cont1" id="show_1">
            <p><a href="">海口商务服务有限公司</a></p>

            <p><a href="">石家庄商务服务有限公司</a></p>

            <p><a href="">二连浩特营业部</a></p>
        </div>
        <div class="fr_cont2" style="display:none;" id="show_2">
            <p><a href="">海口商务服务有限公司</a></p>

            <p><a href="">石家庄商务服务有限公司</a></p>

            <p><a href="">二连浩特营业部</a></p>
        </div>
    </div>
</div>
<!--右边部分-->

</div>

<!--中间内容部分-->

</div>
</body>
</html>
